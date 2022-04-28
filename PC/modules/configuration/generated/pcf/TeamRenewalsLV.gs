package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TeamRenewalsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($renewals :  gw.api.database.IQueryBeanResult<Renewal>) : void {
    __widgetOf(this, pcf.TeamRenewalsLV, SECTION_WIDGET_CLASS).setVariables(false, {$renewals})
  }
  
  function refreshVariables ($renewals :  gw.api.database.IQueryBeanResult<Renewal>) : void {
    __widgetOf(this, pcf.TeamRenewalsLV, SECTION_WIDGET_CLASS).setVariables(true, {$renewals})
  }
  
  
}