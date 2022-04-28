package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TeamOtherWorkOrdersLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($otherWorkOrders :  gw.api.database.IQueryBeanResult<Job>) : void {
    __widgetOf(this, pcf.TeamOtherWorkOrdersLV, SECTION_WIDGET_CLASS).setVariables(false, {$otherWorkOrders})
  }
  
  function refreshVariables ($otherWorkOrders :  gw.api.database.IQueryBeanResult<Job>) : void {
    __widgetOf(this, pcf.TeamOtherWorkOrdersLV, SECTION_WIDGET_CLASS).setVariables(true, {$otherWorkOrders})
  }
  
  
}