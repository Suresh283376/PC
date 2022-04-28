package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopActivitiesExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopActivitiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivities.pcf: line 25, column 92
    function action_1 () : void {
      gw.api.web.activity.CanceledActivitiesAlertUtil.goToCanceledActivities()
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_AssignButton) at DesktopActivities.pcf: line 35, column 27
    function allCheckedRowsAction_4 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_SkipButton) at DesktopActivities.pcf: line 42, column 27
    function allCheckedRowsAction_5 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.skipActivities(CheckedValues)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=DesktopActivities_CompleteButton) at DesktopActivities.pcf: line 49, column 27
    function allCheckedRowsAction_6 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.activity.ActivityUtil.completeActivities(CheckedValues)
    }
    
    // 'canVisit' attribute on Page (id=DesktopActivities) at DesktopActivities.pcf: line 9, column 63
    static function canVisit_9 () : java.lang.Boolean {
      return perm.System.viewmyactivities
    }
    
    // 'def' attribute on PanelRef at DesktopActivities.pcf: line 27, column 47
    function def_onEnter_7 (def :  pcf.DesktopActivitiesLV) : void {
      def.onEnter(activities)
    }
    
    // 'def' attribute on PanelRef at DesktopActivities.pcf: line 27, column 47
    function def_refreshVariables_8 (def :  pcf.DesktopActivitiesLV) : void {
      def.refreshVariables(activities)
    }
    
    // 'dismissed' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivities.pcf: line 25, column 92
    function dismissed_2 () : java.lang.Boolean {
      return dismissed
    }
    
    // 'initialValue' attribute on Variable at DesktopActivities.pcf: line 16, column 71
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return Activity.finder.getAssignedToCurrentUser()
    }
    
    // Page (id=DesktopActivities) at DesktopActivities.pcf: line 9, column 63
    static function parent_10 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'dismissed' attribute on AlertBar (id=DesktopActivities_CanceledActivitiesAlertBar) at DesktopActivities.pcf: line 25, column 92
    function setDismissed_3 (__VALUE :  java.lang.Boolean) : void {
      dismissed = __VALUE
    }
    
    override property get CurrentLocation () : pcf.DesktopActivities {
      return super.CurrentLocation as pcf.DesktopActivities
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return getVariableValue("activities", 0) as gw.api.database.IQueryBeanResult<entity.Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<entity.Activity>) {
      setVariableValue("activities", 0, $arg)
    }
    
    
    property get dismissed() : Boolean {
            return not gw.api.web.activity.CanceledActivitiesAlertUtil.hasCanceledActivitiesSinceLastDismissed()
          }
          property set dismissed(d : Boolean) {
            if(d) {
              gw.api.web.activity.CanceledActivitiesAlertUtil.onDismiss()
            }
          }
        
    
    
  }
  
  
}