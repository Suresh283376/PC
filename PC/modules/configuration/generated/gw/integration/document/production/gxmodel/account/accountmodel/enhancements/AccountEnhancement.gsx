package gw.integration.document.production.gxmodel.account.accountmodel.enhancements

@javax.annotation.Generated("gw.xml.codegen.XmlCodeGenerator")
enhancement AccountEnhancement : gw.integration.document.production.gxmodel.account.accountmodel.Account {
  public static function create(object : entity.Account, labels : java.util.Collection<gw.xml.gx.PropertyLabel>) : gw.integration.document.production.gxmodel.account.accountmodel.Account {
    return new gw.integration.document.production.gxmodel.account.accountmodel.Account(object, labels)
  }

  public static function create(object : entity.Account, options : gw.api.gx.GXOptions, labels : java.util.Collection<gw.xml.gx.PropertyLabel>) : gw.integration.document.production.gxmodel.account.accountmodel.Account {
    return new gw.integration.document.production.gxmodel.account.accountmodel.Account(object, options, labels)
  }

  public static function create(object : entity.Account, labels : java.util.Collection<gw.xml.gx.PropertyLabel>, throughLabels : java.util.Collection<java.lang.String>) : gw.integration.document.production.gxmodel.account.accountmodel.Account {
    return new gw.integration.document.production.gxmodel.account.accountmodel.Account(object, labels, throughLabels)
  }

  public static function create(object : entity.Account, options : gw.api.gx.GXOptions, labels : java.util.Collection<gw.xml.gx.PropertyLabel>, throughLabels : java.util.Collection<java.lang.String>) : gw.integration.document.production.gxmodel.account.accountmodel.Account {
    return new gw.integration.document.production.gxmodel.account.accountmodel.Account(object, options, labels, throughLabels)
  }

}