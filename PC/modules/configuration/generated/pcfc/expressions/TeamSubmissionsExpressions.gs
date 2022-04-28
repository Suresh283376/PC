package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSubmissionsExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamSubmissionsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamSubmissions.pcf: line 45, column 54
    function allCheckedRowsAction_5 (CheckedValues :  entity.Submission[], CheckedValuesErrors :  java.util.Map) : void {
      AssignUserRoleOwnerPopup.push(CheckedValues.cast(Job), typekeyMenuItem )
    }
    
    // 'label' attribute on CheckedValuesMenuItem (id=AssignmentMenuItem) at TeamSubmissions.pcf: line 45, column 54
    function label_4 () : java.lang.Object {
      return typekeyMenuItem.DisplayName
    }
    
    property get typekeyMenuItem () : typekey.UserRole {
      return getIteratedValue(2) as typekey.UserRole
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSubmissionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=TeamSubmissions) at TeamSubmissions.pcf: line 8, column 176
    static function canVisit_10 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.User.viewteam and teamModel.hasSubmissionsPage()
    }
    
    // 'initialValue' attribute on Variable at TeamSubmissions.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewSubmissions()
    }
    
    // Page (id=TeamSubmissions) at TeamSubmissions.pcf: line 8, column 176
    static function parent_11 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on Page (id=TeamSubmissions) at TeamSubmissions.pcf: line 8, column 176
    static function title_12 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.Submissions", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getSubmissionsWindow())
    }
    
    override property get CurrentLocation () : pcf.TeamSubmissions {
      return super.CurrentLocation as pcf.TeamSubmissions
    }
    
    property get canViewSubmissions () : boolean {
      return getVariableValue("canViewSubmissions", 0) as java.lang.Boolean
    }
    
    property set canViewSubmissions ($arg :  boolean) {
      setVariableValue("canViewSubmissions", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSubmissionsScreenExpressionsImpl extends TeamSubmissionsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at TeamSubmissions.pcf: line 30, column 38
    function def_onEnter_8 (def :  pcf.TeamSubmissionsLV) : void {
      def.onEnter(teamModel.Submissions as gw.api.database.IQueryBeanResult<Submission>)
    }
    
    // 'def' attribute on PanelRef at TeamSubmissions.pcf: line 30, column 38
    function def_refreshVariables_9 (def :  pcf.TeamSubmissionsLV) : void {
      def.refreshVariables(teamModel.Submissions as gw.api.database.IQueryBeanResult<Submission>)
    }
    
    // 'label' attribute on Verbatim at TeamSubmissions.pcf: line 27, column 43
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "submissions", teamModel.Label)
    }
    
    // 'title' attribute on TitleBar at TeamSubmissions.pcf: line 24, column 181
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Submissions", teamModel.Label, teamModel.getDisplayMode(true), gw.api.domain.statistics.StatsWindowUtil.getSubmissionsWindow())
    }
    
    // 'value' attribute on CheckedValuesMenuItemIterator at TeamSubmissions.pcf: line 41, column 46
    function value_6 () : typekey.UserRole[] {
      return gw.assignment.AssignmentUtil.getMultipleAssignmentRoles(UserRoleConstraint.TC_JOBEXCLUSIVE)
    }
    
    // 'visible' attribute on Verbatim at TeamSubmissions.pcf: line 27, column 43
    function visible_2 () : java.lang.Boolean {
      return not canViewSubmissions
    }
    
    // 'visible' attribute on PanelRef at TeamSubmissions.pcf: line 30, column 38
    function visible_7 () : java.lang.Boolean {
      return canViewSubmissions
    }
    
    property get pickedUser () : User {
      return getVariableValue("pickedUser", 1) as User
    }
    
    property set pickedUser ($arg :  User) {
      setVariableValue("pickedUser", 1, $arg)
    }
    
    
  }
  
  
}