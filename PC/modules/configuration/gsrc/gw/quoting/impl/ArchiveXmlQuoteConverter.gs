package gw.quoting.impl

uses com.sun.org.apache.xerces.internal.parsers.DOMParser
uses gw.account.AccountSearchCriteria
uses gw.api.archiving.upgrade.Issue
uses gw.api.beantransfer.BeanTransferContent
uses gw.api.domain.archiving.ArchiveDocumentUpgraderWrapper
uses gw.api.importing.ImportingUtil
uses gw.api.importing.XmlExporterXmlWriter
uses gw.api.importing.graph.Graph
uses gw.api.importing.graph.MapBackedGraph
uses gw.api.system.PCLoggerCategory
uses gw.beantransfer.BeanExportHandler
uses gw.beantransfer.BeanImportHandler
uses gw.beantransfer.BeanTransferXmlExporter
uses gw.beantransfer.impl.BeanImportGraph
uses gw.beantransfer.impl.BeanImportGraphSupport
uses gw.beantransfer.impl.EffDatedContainerPropertyHandler
uses gw.beantransfer.impl.PolicyEffDatedRegistryHandler
uses gw.pl.util.ArgCheck
uses gw.api.quoting.QuoteRepresentation
uses gw.quoting.QuoteConverter
uses gw.quoting.QuotingUtil
uses gw.util.Pair
uses org.apache.commons.io.output.ByteArrayOutputStream
uses org.w3c.dom.Document
uses org.xml.sax.InputSource

uses javax.xml.namespace.NamespaceContext
uses javax.xml.parsers.DocumentBuilderFactory
uses javax.xml.transform.TransformerFactory
uses javax.xml.transform.dom.DOMSource
uses javax.xml.transform.stream.StreamResult

uses java.io.ByteArrayInputStream
uses java.nio.charset.StandardCharsets

/**
 * QuoteConverter that converts PolicyPeriod (with quote information) to the archive XML format.
 * It is also responsible for creating a sidecar XML containing additional information for the entities defined in the
 * archive XML quote.
 */
@Export
class ArchiveXmlQuoteConverter implements QuoteConverter {

  public static final var GW_QUOTE_SIDECAR_NS : String = "http://guidewire.com/quoting/sidecar"
  public static final var GW_QUOTE_SIDECAR_NS_PREFIX : String = "gw"
  static final var LOGGER = PCLoggerCategory.QUOTING

  internal construct() {}

  /**
   * Setup the XML Document for the sidecar.
   *
   * Add the high-level XML Element for the sidecar.
   */
  private function createSidecarForExport() : Document {
    //initiate the additional info sidecar doc and give it a root element
    var docBuilderFactory = DocumentBuilderFactory.newInstance()
    docBuilderFactory.setNamespaceAware(true)
    var documentBuilder = docBuilderFactory.newDocumentBuilder()
    var additionalInfoDoc = documentBuilder.DOMImplementation.createDocument(GW_QUOTE_SIDECAR_NS, "AdditionalEntity", null)
    additionalInfoDoc.DocumentElement.setAttribute("xmlns:${GW_QUOTE_SIDECAR_NS_PREFIX}", GW_QUOTE_SIDECAR_NS)
    return additionalInfoDoc
  }

  private function createSidecarForImport(quoteRepresentation : QuoteRepresentation) : Document {
    var parser = new DOMParser()
    using (var inputStream = quoteRepresentation.AdditionalInfoInputStream) {
      parser.parse(new InputSource(inputStream))
    }
    return parser.getDocument()
  }

  static function createGWNamespaceContext() : NamespaceContext {
    return new NamespaceContext() {
      override function getNamespaceURI(prefix : String) : String {
        if (prefix == GW_QUOTE_SIDECAR_NS_PREFIX) {
          return ArchiveXmlQuoteConverter.GW_QUOTE_SIDECAR_NS
        }
        return null
      }

      override function getPrefixes(val : String) : Iterator {
        return null
      }

      override function getPrefix(uri : String) : String {
        return null
      }
    }
  }

  /**
   * Convert the Account entity defined in the Graph to a reference entity. The reference entity will refer to the
   * specified Account in the SoR.
   */
  internal function updateQuoteGraphWithExistingAccount(graph : BeanImportGraph, account : Account) {
    ArgCheck.nonNull(account, "Account")

    var accountElement = graph.getAssignableElementsForType(Account).single()
    accountElement.updateElementToReferenceType(account)

    // Remove the AccountHolder, PrimaryAcctLoc, and Acctholderedge elements. The existing Account should have these elements already.
    var accountHolderElement = graph.getAssignableElementsForType(AccountHolder).single()
    graph.removeElement(accountHolderElement.DocID)
    // Note that the Contact of the removed AccountHolder still exists. It's now just a NamedInsured.
    var primaryAcctLocElement = graph.getAssignableElementsForType(PrimaryAcctLoc).single()
    graph.removeElement(primaryAcctLocElement.DocID)
    var acctholderedgeElement = graph.getAssignableElementsForType(Acctholderedge).single()
    graph.removeElement(acctholderedgeElement.DocID)
    var acctProducerCodeElement = graph.getAssignableElementsForType(AccountProducerCode).single()
    graph.removeElement(acctProducerCodeElement.DocID)
  }

  internal function createBeanExportHandlers(additionalInfoDoc: Document) : List<BeanExportHandler> {
    return {
        new AccountHandler(additionalInfoDoc),
        new PolicyEffDatedRegistryHandler(),
        new CreateUpdateTimeHandler(),
        new BeanVersionHandler(),
        new PolicyContactRoleHandler(),
        new AccountInternalHandler(),
        new TransactionHandler(),
        new ProducerCodeHandler(additionalInfoDoc),
        new IndustryCodeHandler(additionalInfoDoc),
        new UserHandler(additionalInfoDoc),
        new GroupHandler(additionalInfoDoc),
        new UWCompanyHandler(additionalInfoDoc),
        new UWIssueTypeHandler(additionalInfoDoc),
        new FilteredBeanHandler()
    }
  }

  internal function createBeanImportHandlers(additionalInfoDoc: Document, graph: BeanImportGraph)
      : List<BeanImportHandler> {
    return {
        new EffDatedContainerPropertyHandler(graph),
        new BeanIdHandler(),
        new AccountInternalHandler(),
        new JobDataHandler(),
        new TransactionHandler(),
        new ProducerCodeHandler(additionalInfoDoc),
        new IndustryCodeHandler(additionalInfoDoc),
        new UserHandler(additionalInfoDoc),
        new GroupHandler(additionalInfoDoc),
        new UWCompanyHandler(additionalInfoDoc),
        new UWIssueTypeHandler(additionalInfoDoc)
    }
  }

  override function convertQuotePeriod(policyPeriod : PolicyPeriod) : QuoteRepresentation {
    ArgCheck.nonNull(policyPeriod, "PolicyPeriod")
    var validRated = policyPeriod.ValidRate and policyPeriod.Status == PolicyPeriodStatus.TC_RATED
    var validQuoted = policyPeriod.ValidQuote and policyPeriod.Status == PolicyPeriodStatus.TC_QUOTED
    ArgCheck.satisfiesCriteria((validRated || validQuoted), "PolicyPeriod should be rated or quoted")
    var additionalInfoDoc = createSidecarForExport()
    var beanExportHandlers = createBeanExportHandlers(additionalInfoDoc)

    var quoteRepresentation : QuoteRepresentation
    var xmlWriter = new XmlExporterXmlWriter()
    try {
      var insertedBeans = policyPeriod.Bundle.InsertedBeans
      var beanTransferContent = new BeanTransferContent(insertedBeans)
      var exporter = new BeanTransferXmlExporter(xmlWriter, beanExportHandlers, beanTransferContent)
      exporter.exportAllBeans()
      xmlWriter.finishExport(policyPeriod.Bundle)

      //get archive xml stream
      var graph : BeanImportGraph
      // We don't really need to use a using-block below because we call {@link XmlExporter#releaseResources()} later.
      using (var archiveXMLStream = xmlWriter.InputStream) {
        graph = new BeanImportGraph(archiveXMLStream, entity.PolicyPeriod)
      }
      beanExportHandlers.each(\h -> h.handlePostExport(graph))
      //get additional xml stream
      var transformer = TransformerFactory.newInstance().newTransformer()
      using (var stream = new ByteArrayOutputStream()) {
        transformer.transform(new DOMSource(additionalInfoDoc), new StreamResult(stream))
        // Create new stream since the existing stream has already be read.
        using (var archiveXMLStream = xmlWriter.InputStream,
               var additionalInfoStream = new ByteArrayInputStream(stream.toString().getBytes(StandardCharsets.UTF_8))) {
          quoteRepresentation = ArchiveXmlQuoteRepresentation.createQuoteRepresentation(archiveXMLStream,
              additionalInfoStream)
        }
      }
    } finally {
      xmlWriter.releaseResources()
    }
    return quoteRepresentation
  }

  override function createAccountSearchCriteria(quoteRepresentation : QuoteRepresentation) : AccountSearchCriteria {
    ArgCheck.nonNull(quoteRepresentation, "Quote XML Representation")

    var additionalInfoDoc = createSidecarForImport(quoteRepresentation)
    return new AccountHandler(additionalInfoDoc).createAccountSearchCriteria()
  }

  protected function upgradeQuotePeriod(quoteRepresentation : QuoteRepresentation, graph : Graph) : Graph {
    var upgrader = new ArchiveDocumentUpgraderWrapper()
    var metaData = new QuotingMetaDataVersion(graph)

    if (!upgrader.isUpgradeRequired(metaData)) {
      LOGGER.info("Already on the most recent version. Do not need to upgrade the xml before importing")
    } else {
      var upgradeContext : Pair<Graph, List<Issue>>
      //get new stream since the existing stream has already be read
      using (var primaryInputStream = quoteRepresentation.QuoteInputStream) {
        upgradeContext = upgrader.upgrade(metaData, primaryInputStream)
      }
      graph = upgradeContext.First
      //Got the issues during upgrade
      var issues = upgradeContext.Second
      issues.each(\issue -> LOGGER.info("Issue during importing : " + issue.toString()))
    }

    return graph
  }

  override function restoreQuotePeriod(quoteRepresentation : QuoteRepresentation, account : Account = null) : PolicyPeriod {
    var graph : MapBackedGraph
    using (var primaryInputStream = quoteRepresentation.QuoteInputStream) {
      ArgCheck.nonNull(primaryInputStream, "Primary Quote XML")
      graph = new MapBackedGraph("quoteVersion", primaryInputStream)
    }

    //Upgrade before Import
    var graphAfterUpgrade = upgradeQuotePeriod(quoteRepresentation, graph)

    var importGraph = new BeanImportGraph(graphAfterUpgrade, entity.PolicyPeriod)
    importGraph.rekeyFixedIds()

    var additionalInfoDoc = createSidecarForImport(quoteRepresentation)
    var beanImportHandlers = createBeanImportHandlers(additionalInfoDoc, importGraph)
    if (account != null) {
      updateQuoteGraphWithExistingAccount(importGraph, account)
    }

    var helper = new BeanImportGraphSupport(importGraph, beanImportHandlers)
    var bundle = QuotingUtil.createQuoteImportBundle()
    var map = ImportingUtil.processImport(importGraph, helper, true, bundle)
    var period = map[importGraph.RootBeanID] as PolicyPeriod
    helper.applicationPostRestore(period, null, null)
    period = period.getSlice(period.EditEffectiveDate)

    return period
  }
}