package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamActivitiesExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamActivities.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamActivitiesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (teamModel :  gw.api.web.team.PCTeamModel) : int {
      return 0
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=TeamGroupActivities_Assign) at TeamActivities.pcf: line 35, column 27
    function allCheckedRowsAction_4 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      AssignActivitiesPopup.push(new gw.api.web.activity.ActivityAssignmentPopup(CheckedValues, gw.assignment.AssignmentUtil.DefaultUser))
    }
    
    // 'canVisit' attribute on Page (id=TeamActivities) at TeamActivities.pcf: line 8, column 175
    static function canVisit_8 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Boolean {
      return perm.System.viewteam and teamModel.hasActivitiesPage()
    }
    
    // 'def' attribute on PanelRef at TeamActivities.pcf: line 27, column 37
    function def_onEnter_6 (def :  pcf.TeamActivitiesLV) : void {
      def.onEnter(teamModel.Activities)
    }
    
    // 'def' attribute on PanelRef at TeamActivities.pcf: line 27, column 37
    function def_refreshVariables_7 (def :  pcf.TeamActivitiesLV) : void {
      def.refreshVariables(teamModel.Activities)
    }
    
    // 'initialValue' attribute on Variable at TeamActivities.pcf: line 17, column 23
    function initialValue_0 () : boolean {
      return teamModel.canViewActivities()
    }
    
    // 'label' attribute on Verbatim at TeamActivities.pcf: line 24, column 42
    function label_3 () : java.lang.String {
      return DisplayKey.get("Web.Team.JobCountToDisplayExceedsMax", gw.api.system.PCConfigParameters.TeamScreenTabVisibilityRowCountCutoff.Value, "activities", teamModel.Label)
    }
    
    // Page (id=TeamActivities) at TeamActivities.pcf: line 8, column 175
    static function parent_9 (teamModel :  gw.api.web.team.PCTeamModel) : pcf.api.Destination {
      return pcf.TeamGroup.createDestination(teamModel)
    }
    
    // 'title' attribute on TitleBar at TeamActivities.pcf: line 21, column 180
    function title_1 () : java.lang.String {
      return DisplayKey.get("Web.Team.Activities", teamModel.Label, teamModel.getDisplayMode(false), gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    // 'title' attribute on Page (id=TeamActivities) at TeamActivities.pcf: line 8, column 175
    static function title_10 (teamModel :  gw.api.web.team.PCTeamModel) : java.lang.Object {
      return DisplayKey.get("Web.Team.Activities", teamModel.Label, teamModel.getDisplayMode(false), gw.api.domain.statistics.StatsWindowUtil.getActivitiesWindow())
    }
    
    // 'visible' attribute on Verbatim at TeamActivities.pcf: line 24, column 42
    function visible_2 () : java.lang.Boolean {
      return not canViewActivities
    }
    
    // 'visible' attribute on PanelRef at TeamActivities.pcf: line 27, column 37
    function visible_5 () : java.lang.Boolean {
      return canViewActivities
    }
    
    override property get CurrentLocation () : pcf.TeamActivities {
      return super.CurrentLocation as pcf.TeamActivities
    }
    
    property get canViewActivities () : boolean {
      return getVariableValue("canViewActivities", 0) as java.lang.Boolean
    }
    
    property set canViewActivities ($arg :  boolean) {
      setVariableValue("canViewActivities", 0, $arg)
    }
    
    property get teamModel () : gw.api.web.team.PCTeamModel {
      return getVariableValue("teamModel", 0) as gw.api.web.team.PCTeamModel
    }
    
    property set teamModel ($arg :  gw.api.web.team.PCTeamModel) {
      setVariableValue("teamModel", 0, $arg)
    }
    
    
  }
  
  
}