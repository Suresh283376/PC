package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/CurrentActivitiesPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentActivitiesPolicyListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CurrentActivitiesPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentActivitiesPolicyListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentActivitiesPolicyListViewTile) at CurrentActivitiesPolicyListViewTile.pcf: line 11, column 56
    function action_28 () : void {
      CurrentActivitiesPolicyPopup.push(policyPeriod)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentActivitiesPolicyListViewTile) at CurrentActivitiesPolicyListViewTile.pcf: line 11, column 56
    function action_dest_29 () : pcf.api.Destination {
      return pcf.CurrentActivitiesPolicyPopup.createDestination(policyPeriod)
    }
    
    // 'initialValue' attribute on Variable at CurrentActivitiesPolicyListViewTile.pcf: line 19, column 61
    function initialValue_27 () : gw.api.web.dashboard.ui.policy.ActivityHelper {
      return new gw.api.web.dashboard.ui.policy.ActivityHelper(policyPeriod)
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function sortValue_0 (activity :  Activity) : java.lang.Object {
      return activity.TargetDate
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 39, column 37
    function sortValue_1 (activity :  Activity) : java.lang.Object {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 47, column 25
    function sortValue_2 (activity :  Activity) : java.lang.Object {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 54, column 25
    function sortValue_3 (activity :  Activity) : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on RowIterator at CurrentActivitiesPolicyListViewTile.pcf: line 24, column 30
    function value_26 () : Activity[] {
      return helper.Activities
    }
    
    property get helper () : gw.api.web.dashboard.ui.policy.ActivityHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.policy.ActivityHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.policy.ActivityHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CurrentActivitiesPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentActivitiesPolicyListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 39, column 37
    function action_11 () : void {
      ActivityForward.go(activity, policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 39, column 37
    function action_dest_12 () : pcf.api.Destination {
      return pcf.ActivityForward.createDestination(activity, policyPeriod)
    }
    
    // 'available' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 39, column 37
    function available_10 () : java.lang.Boolean {
      return perm.Activity.view(activity)
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 47, column 25
    function fontColor_17 () : java.lang.Object {
      return activity.UIPriorityColor
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function fontColor_4 () : java.lang.Object {
      return activity.UIOverdueColor
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function valueRoot_6 () : java.lang.Object {
      return activity
    }
    
    // 'value' attribute on TextCell (id=Subject_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 39, column 37
    function value_13 () : java.lang.String {
      return activity.Subject
    }
    
    // 'value' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 47, column 25
    function value_18 () : typekey.Priority {
      return activity.Priority
    }
    
    // 'value' attribute on TextCell (id=Assigned_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 54, column 25
    function value_23 () : java.lang.Object {
      return activity.AssignedTo
    }
    
    // 'value' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function value_5 () : java.util.Date {
      return activity.TargetDate
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 47, column 25
    function verifyFontColorIsAllowedType_20 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 47, column 25
    function verifyFontColorIsAllowedType_20 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function verifyFontColorIsAllowedType_7 ($$arg :  gw.api.web.color.GWColor) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function verifyFontColorIsAllowedType_7 ($$arg :  java.lang.String) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'fontColor' attribute on TypeKeyCell (id=Priority_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 47, column 25
    function verifyFontColor_21 () : void {
      var __fontColorArg = activity.UIPriorityColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_20(__fontColorArg)
    }
    
    // 'fontColor' attribute on DateCell (id=DueDate_Cell) at CurrentActivitiesPolicyListViewTile.pcf: line 32, column 25
    function verifyFontColor_8 () : void {
      var __fontColorArg = activity.UIOverdueColor
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the fontColor return type is not a valid type for use with a ValueWidget's fontColor
      // It needs to return a String or a GWColor.
      verifyFontColorIsAllowedType_7(__fontColorArg)
    }
    
    property get activity () : Activity {
      return getIteratedValue(1) as Activity
    }
    
    
  }
  
  
}