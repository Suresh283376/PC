package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DesktopOtherWorkOrdersLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($workOrders :  gw.api.database.IQueryBeanResult<Job>) : void {
    __widgetOf(this, pcf.DesktopOtherWorkOrdersLV, SECTION_WIDGET_CLASS).setVariables(false, {$workOrders})
  }
  
  function refreshVariables ($workOrders :  gw.api.database.IQueryBeanResult<Job>) : void {
    __widgetOf(this, pcf.DesktopOtherWorkOrdersLV, SECTION_WIDGET_CLASS).setVariables(true, {$workOrders})
  }
  
  
}