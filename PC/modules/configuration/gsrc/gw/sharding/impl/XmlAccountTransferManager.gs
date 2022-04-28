package gw.sharding.impl

uses gw.api.importing.ImportingUtil
uses gw.api.importing.XmlExporter
uses gw.api.importing.XmlExporterXmlWriter
uses gw.api.importing.graph.Graph
uses gw.api.importing.graph.MapBackedGraph
uses gw.api.sharding.AccountTransferRepresentation
uses gw.beantransfer.BeanTransferXmlExporter
uses gw.beantransfer.impl.BeanImportGraph
uses gw.beantransfer.BeanExportHandler
uses gw.beantransfer.BeanImportHandler
uses gw.beantransfer.BeanTransferUtil
uses gw.beantransfer.impl.AutoNumberSequenceHandler
uses gw.beantransfer.impl.BeanImportGraphSupport
uses gw.beantransfer.impl.EffDatedContainerPropertyHandler
uses gw.pl.persistence.core.Bundle
uses gw.pl.util.ArgCheck
uses gw.beantransfer.impl.PolicyEffDatedRegistryHandler
uses gw.sharding.AccountTransferManager
uses gw.sharding.FlatAccountTransferContent

/**
 * This is an implementation of the AccountTransferManager that creates representations of the Account entity
 * in XML form for transfer from one system to another.
 */
@Export
class XmlAccountTransferManager implements AccountTransferManager {

  override function createAccountTransferRepresentation(account: Account) : AccountTransferRepresentation {
    /*
     * Convert the account to a flat representation
     */
    var flatAccountTransferContent = new FlatAccountTransferContent(account)
    /*
     * Convert the flat representation into XML in String form
     */
    var xml = convertBeansToXml(account.Bundle, flatAccountTransferContent)
    /*
     * Build the transfer representation
     */
    return new XmlAccountTransferRepresentation(xml)
  }

  override function importAccountTransferRepresentation(accountTransferRepresentation: AccountTransferRepresentation) : Account {
    var graph : MapBackedGraph
    using (var primaryInputStream = accountTransferRepresentation.AccountTransferInputStream) {
      ArgCheck.nonNull(primaryInputStream, "Primary AccountTransfer XML")
      graph = new MapBackedGraph("AccountTransfer", primaryInputStream)
    }
    var importGraph = createImportGraph(graph)
    prepareImportGraph(importGraph)
    var helper = new BeanImportGraphSupport(importGraph, createImportBeanTransferHandlers(importGraph))

    return BeanTransferUtil.runWithRestoreBeanTransferBundle(\bundle -> {
      var map = ImportingUtil.processImport(importGraph, helper, true, bundle)
      var account = map[importGraph.RootBeanID] as Account
      helper.applicationPostRestore(account, null, null)
      return account
    })
  }

  /**
   * Create a BeanImportGraph out of a Graph so it can be modified before importing the Graph.
   *
   * @param graph the Graph representation of the import XML.
   * @return BeanImportGraph
   */
  protected function createImportGraph(graph : Graph) : BeanImportGraph {
    return new BeanImportGraph(graph, entity.Account)
  }

  /**
   * Prepare a BeanImportGraph for import. It makes the necessary modifications to the Graph before importing it.
   *
   * @param importGraph the import Graph
   */
  protected function prepareImportGraph(importGraph : BeanImportGraph) {
    importGraph.rekeyFixedIds()
  }

  /**
   * Create a List of BeanImportHandlers that is to be used during Graph import.
   *
   * @param importGraph the Graph to be imported
   * @return List of BeanImportHandlers
   */
  protected function createImportBeanTransferHandlers(importGraph : BeanImportGraph) : List<BeanImportHandler> {
    return {
        new EffDatedContainerPropertyHandler(importGraph)
    }
  }

  /**
   * Convert a list of KeyableBeans into XML form.
   * @param bundle the bundle to which the beans belong
   * @param beans the beans to be converted
   * @return a String containing the XML.
   */
  protected function convertBeansToXml(bundle : Bundle, accountContent: FlatAccountTransferContent) : String {
    var xmlWriter = new XmlExporterXmlWriter()
    try {
      var beanHandlers = createExportBeanTransferHandlers(xmlWriter)
      var exporter = new BeanTransferXmlExporter(xmlWriter, beanHandlers, accountContent)
      exporter.exportAllBeans()
      xmlWriter.finishExport(bundle)
      return xmlWriter.InputStream.TextContent
    } finally {
      xmlWriter.releaseResources()
    }
  }

  /**
   * Create a List of BeanExportHandlers that is to be used during Graph export.
   *
   * @param exporter the XmlExporter used during export
   * @return List of BeanExportHandlers
   */
  protected function createExportBeanTransferHandlers(exporter : XmlExporter) : List<BeanExportHandler> {
    return {
        createAutoNumberSequenceHandler(exporter),
        new PolicyEffDatedRegistryHandler()
    }
  }

  /**
   * Create an AutoNumberSequenceHandler.
   *
   * Mainly used to provide a different AutoNumberSequenceHandler implementation for testing purposes.
   *
   * @param exporter
   * @return AutoNumberSequenceHandler
   */
  internal function createAutoNumberSequenceHandler(exporter : XmlExporter) : AutoNumberSequenceHandler {
    return new AutoNumberSequenceHandler(exporter)
  }
}