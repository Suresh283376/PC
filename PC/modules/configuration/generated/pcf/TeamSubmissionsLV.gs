package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class TeamSubmissionsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($submissions :  gw.api.database.IQueryBeanResult<Submission>) : void {
    __widgetOf(this, pcf.TeamSubmissionsLV, SECTION_WIDGET_CLASS).setVariables(false, {$submissions})
  }
  
  function refreshVariables ($submissions :  gw.api.database.IQueryBeanResult<Submission>) : void {
    __widgetOf(this, pcf.TeamSubmissionsLV, SECTION_WIDGET_CLASS).setVariables(true, {$submissions})
  }
  
  
}