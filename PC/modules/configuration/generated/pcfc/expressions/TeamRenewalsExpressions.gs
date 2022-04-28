package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamRenewals.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamRenewalsExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewals.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamRenewalsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamRenewals.pcf: line 42, column 54
    function allCheckedRowsAction_5 (CheckedValues :  entity.Renewal[], CheckedValuesErrors :  java.util.Map) : void {
      AssignUserRoleOwnerPopup.push(CheckedValues.cast(Job), typekeyMenuItem )
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamRenewals.pcf: line 42, column 54
    function label_4 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(1) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewals.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamRenewalsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=TeamRenewals) at TeamRenewals.pcf: line 8, column 170
    static function canVisit_11 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.User.viewteam and teamModel.hasRenewalsPage()
    }
    
    // 'def' attribute on PanelRef at TeamRenewals.pcf: line 27, column 35
    function def_onEnter_9 (def :  pcf.TeamRenewalsLV) : void {
      def.onEnter(teamModel.Renewals as gw.api.database.IQueryBeanResult<Renewal>)
    }
    
    // 'def' attribute on PanelRef at TeamRenewals.pcf: line 27, column 35
    function def_refreshVariables_10 (def :  pcf.TeamRenewalsLV) : void {
      def.refreshVariables(teamModel.Renewals as gw.api.database.IQueryBeanResult<Renewal>)
    }
    
    // 'initialValue' attribute on Variable at TeamRenewals.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewRenewals()
    }
    
    // 'label' attribute on Verbatim at TeamRenewals.pcf: line 24, column 40
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "renewals", teamModel.Label)
    }
    
    // Page (id=TeamRenewals) at TeamRenewals.pcf: line 8, column 170
    static function parent_12 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on TitleBar at TeamRenewals.pcf: line 21, column 175
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Renewals", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getRenewalsWindow())
    }
    
    // 'title' attribute on Page (id=TeamRenewals) at TeamRenewals.pcf: line 8, column 170
    static function title_13 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.Renewals", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getRenewalsWindow())
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator at TeamRenewals.pcf: line 38, column 46
    function value_6 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(UserRoleConstraint.TC_JOBEXCLUSIVE)
    }
    
    // 'visible' attribute on Verbatim at TeamRenewals.pcf: line 24, column 40
    function visible_2 () : java.lang.Boolean {
      return not canViewRenewals
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=ReassignmentButton) at TeamRenewals.pcf: line 34, column 64
    function visible_7 () : java.lang.Boolean {
      return perm.System.userroleassignmentbulkassign
    }
    
    // 'visible' attribute on PanelRef at TeamRenewals.pcf: line 27, column 35
    function visible_8 () : java.lang.Boolean {
      return canViewRenewals
    }
    
    override property get CurrentLocation () : pcf.TeamRenewals {
      return super.CurrentLocation as pcf.TeamRenewals
    }
    
    property get canViewRenewals () : boolean {
      return getVariableValue("canViewRenewals", 0) as java.lang.Boolean
    }
    
    property set canViewRenewals ($arg :  boolean) {
      setVariableValue("canViewRenewals", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}