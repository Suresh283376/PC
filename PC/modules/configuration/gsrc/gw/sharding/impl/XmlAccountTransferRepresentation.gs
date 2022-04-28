package gw.sharding.impl

uses gw.api.sharding.AccountTransferRepresentation

uses java.io.ByteArrayInputStream
uses java.io.InputStream
uses java.nio.charset.StandardCharsets

/**
 * A representation of an Account entity for transfer in XML form.
 */
@Export
class XmlAccountTransferRepresentation implements AccountTransferRepresentation {
  static final var ENCODING = StandardCharsets.UTF_8

  var _accountTransferContent : String

  /**
   * Construct the transfer representation from a String of XML.
   * @param xmlContent the XML representation of the Account.
   */
  construct(xmlContent : String) {
    _accountTransferContent = xmlContent
  }

  override property get AccountTransferInputStream() : InputStream {
    return  new ByteArrayInputStream(_accountTransferContent.getBytes(ENCODING))
  }

  override property get AdditionalInfoInputStream(): InputStream {
    return null
  }
}