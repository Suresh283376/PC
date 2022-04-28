package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamActivitiesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamActivitiesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 71, column 37
    function action_31 () : void {
      ActivityForward.go(activity)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 91, column 44
    function action_44 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 102, column 42
    function action_52 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 71, column 37
    function action_dest_32 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 91, column 44
    function action_dest_45 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamActivitiesLV.pcf: line 102, column 42
    function action_dest_53 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamActivitiesLV.pcf: line 34, column 33
    function condition_10 () : java.lang.Boolean {
      return activity.canSkip()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamActivitiesLV.pcf: line 37, column 37
    function condition_11 () : java.lang.Boolean {
      return activity.canComplete()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamActivitiesLV.pcf: line 31, column 35
    function condition_9 () : java.lang.Boolean {
      return activity.canAssign()
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 56, column 40
    function fontColor_19 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 50, column 39
    function iconColor_17 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at TeamActivitiesLV.pcf: line 44, column 52
    function valueRoot_13 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on BooleanRadioCell (id=UpdatedSinceLastViewed_Cell) at TeamActivitiesLV.pcf: line 44, column 52
    function value_12 () : java.lang.Boolean {
      return activity.UpdatedSinceLastViewed
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 50, column 39
    function value_15 () : java.lang.Boolean {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 56, column 40
    function value_20 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at TeamActivitiesLV.pcf: line 61, column 41
    function value_25 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TeamActivitiesLV.pcf: line 66, column 47
    function value_28 () : typekey.ActivityStatus {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 71, column 37
    function value_33 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TextCell (id=SearchResultID_Cell) at TeamActivitiesLV.pcf: line 76, column 44
    function value_36 () : java.lang.String {
      return activity.SearchResultID
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamActivitiesLV.pcf: line 81, column 43
    function value_39 () : java.lang.String {
      return activity.UIDisplayName
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamActivitiesLV.pcf: line 87, column 52
    function value_42 () : gw.api.productmodel.Product {
      return activity.Policy.Product ?: activity.Job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at TeamActivitiesLV.pcf: line 91, column 44
    function value_46 () : entity.User {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on TypeKeyCell (id=State_Cell) at TeamActivitiesLV.pcf: line 97, column 38
    function value_49 () : typekey.State {
      return activity.UIDisplayState
    }
    
    // 'value' attribute on AltUserCell (id=AssignedTo_Cell) at TeamActivitiesLV.pcf: line 102, column 42
    function value_54 () : entity.User {
      return activity.AssignedUser
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 56, column 40
    function verifyFontColorIsAllowedType_22 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 56, column 40
    function verifyFontColorIsAllowedType_22 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 56, column 40
    function verifyFontColor_23 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_22(__fontColorArg)
    }
    
    property get activity () : entity.Activity {
      return getIteratedValue(1) as entity.Activity
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamActivitiesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamActivitiesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamActivitiesLV.pcf: line 25, column 82
    function filters_0 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewActivityFilters().FilterOptions
    }
    
    // 'iconColor' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 50, column 39
    function iconColor_1 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'value' attribute on BooleanRadioCell (id=Escalated_Cell) at TeamActivitiesLV.pcf: line 50, column 39
    function sortValue_2 (activity :  entity.Activity) : java.lang.Object {
      return activity.Escalated
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at TeamActivitiesLV.pcf: line 56, column 40
    function sortValue_3 (activity :  entity.Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at TeamActivitiesLV.pcf: line 61, column 41
    function sortValue_4 (activity :  entity.Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at TeamActivitiesLV.pcf: line 66, column 47
    function sortValue_5 (activity :  entity.Activity) : java.lang.Object {
      return activity.Status
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at TeamActivitiesLV.pcf: line 71, column 37
    function sortValue_6 (activity :  entity.Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamActivitiesLV.pcf: line 87, column 52
    function sortValue_7 (activity :  entity.Activity) : java.lang.Object {
      return activity.Job.Policy.ProductCode
    }
    
    // 'value' attribute on AltUserCell (id=AssignedBy_Cell) at TeamActivitiesLV.pcf: line 91, column 44
    function sortValue_8 (activity :  entity.Activity) : java.lang.Object {
      return activity.AssignedByUser
    }
    
    // 'value' attribute on RowIterator at TeamActivitiesLV.pcf: line 21, column 75
    function value_57 () : gw.api.database.IQueryBeanResult<entity.Activity> {
      return activities
    }
    
    property get activities () : gw.api.database.IQueryBeanResult<Activity> {
      return getRequireValue("activities", 0) as gw.api.database.IQueryBeanResult<Activity>
    }
    
    property set activities ($arg :  gw.api.database.IQueryBeanResult<Activity>) {
      setRequireValue("activities", 0, $arg)
    }
    
    
  }
  
  
}