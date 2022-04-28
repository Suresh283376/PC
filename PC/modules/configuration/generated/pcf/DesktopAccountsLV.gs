package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DesktopAccountsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($accounts :  gw.api.database.IQueryBeanResult<AccountSummary>) : void {
    __widgetOf(this, pcf.DesktopAccountsLV, SECTION_WIDGET_CLASS).setVariables(false, {$accounts})
  }
  
  function refreshVariables ($accounts :  gw.api.database.IQueryBeanResult<AccountSummary>) : void {
    __widgetOf(this, pcf.DesktopAccountsLV, SECTION_WIDGET_CLASS).setVariables(true, {$accounts})
  }
  
  
}