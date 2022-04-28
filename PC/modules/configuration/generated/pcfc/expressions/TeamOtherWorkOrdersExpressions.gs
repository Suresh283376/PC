package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamOtherWorkOrdersExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamOtherWorkOrdersExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamOtherWorkOrders.pcf: line 42, column 54
    function allCheckedRowsAction_5 (CheckedValues :  Job[], CheckedValuesErrors :  java.util.Map) : void {
      AssignUserRoleOwnerPopup.push(CheckedValues.cast(Job), typekeyMenuItem )
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamOtherWorkOrders.pcf: line 42, column 54
    function label_4 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(1) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamOtherWorkOrdersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=TeamOtherWorkOrders) at TeamOtherWorkOrders.pcf: line 8, column 179
    static function canVisit_11 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.User.viewteam and teamModel.hasOtherWorkOrdersPage()
    }
    
    // 'def' attribute on PanelRef at TeamOtherWorkOrders.pcf: line 27, column 48
    function def_onEnter_9 (def :  pcf.TeamOtherWorkOrdersLV) : void {
      def.onEnter(teamModel.OtherWorkOrders)
    }
    
    // 'def' attribute on PanelRef at TeamOtherWorkOrders.pcf: line 27, column 48
    function def_refreshVariables_10 (def :  pcf.TeamOtherWorkOrdersLV) : void {
      def.refreshVariables(teamModel.OtherWorkOrders)
    }
    
    // 'initialValue' attribute on Variable at TeamOtherWorkOrders.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewOtherWorkOrders()
    }
    
    // 'label' attribute on Verbatim at TeamOtherWorkOrders.pcf: line 24, column 53
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "policy changes", teamModel.Label)
    }
    
    // Page (id=TeamOtherWorkOrders) at TeamOtherWorkOrders.pcf: line 8, column 179
    static function parent_12 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on TitleBar at TeamOtherWorkOrders.pcf: line 21, column 184
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.WorkOrders", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getOtherWorkOrdersWindow())
    }
    
    // 'title' attribute on Page (id=TeamOtherWorkOrders) at TeamOtherWorkOrders.pcf: line 8, column 179
    static function title_13 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.WorkOrders", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getOtherWorkOrdersWindow())
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator at TeamOtherWorkOrders.pcf: line 38, column 46
    function value_6 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(UserRoleConstraint.TC_JOBEXCLUSIVE)
    }
    
    // 'visible' attribute on Verbatim at TeamOtherWorkOrders.pcf: line 24, column 53
    function visible_2 () : java.lang.Boolean {
      return not canViewMisassignedWorkOrders
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=ReassignmentButton) at TeamOtherWorkOrders.pcf: line 34, column 64
    function visible_7 () : java.lang.Boolean {
      return perm.System.userroleassignmentbulkassign
    }
    
    // 'visible' attribute on PanelRef at TeamOtherWorkOrders.pcf: line 27, column 48
    function visible_8 () : java.lang.Boolean {
      return canViewMisassignedWorkOrders
    }
    
    override property get CurrentLocation () : pcf.TeamOtherWorkOrders {
      return super.CurrentLocation as pcf.TeamOtherWorkOrders
    }
    
    property get canViewMisassignedWorkOrders () : boolean {
      return getVariableValue("canViewMisassignedWorkOrders", 0) as java.lang.Boolean
    }
    
    property set canViewMisassignedWorkOrders ($arg :  boolean) {
      setVariableValue("canViewMisassignedWorkOrders", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}