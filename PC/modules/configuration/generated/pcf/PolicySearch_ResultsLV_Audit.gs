package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/PolicySearch_ResultsLV.Audit.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PolicySearch_ResultsLV_Audit extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($searchResults :  gw.api.database.IQueryBeanResult<PolicyPeriodSummary>) : void {
    __widgetOf(this, pcf.PolicySearch_ResultsLV_Audit, SECTION_WIDGET_CLASS).setVariables(false, {$searchResults})
  }
  
  function refreshVariables ($searchResults :  gw.api.database.IQueryBeanResult<PolicyPeriodSummary>) : void {
    __widgetOf(this, pcf.PolicySearch_ResultsLV_Audit, SECTION_WIDGET_CLASS).setVariables(true, {$searchResults})
  }
  
  
}