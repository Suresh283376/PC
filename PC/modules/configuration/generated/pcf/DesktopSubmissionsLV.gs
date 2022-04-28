package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DesktopSubmissionsLV extends com.guidewire.pl.web.codegen.SectionBase {
  function onEnter ($submissions :  gw.api.database.IQueryBeanResult<Job>) : void {
    __widgetOf(this, pcf.DesktopSubmissionsLV, SECTION_WIDGET_CLASS).setVariables(false, {$submissions})
  }
  
  function refreshVariables ($submissions :  gw.api.database.IQueryBeanResult<Job>) : void {
    __widgetOf(this, pcf.DesktopSubmissionsLV, SECTION_WIDGET_CLASS).setVariables(true, {$submissions})
  }
  
  
}