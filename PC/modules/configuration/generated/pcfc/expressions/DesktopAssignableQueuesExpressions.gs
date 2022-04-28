package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueues.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAssignableQueuesExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAssignableQueues.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAssignableQueuesExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=AssignFirstButton) at DesktopAssignableQueues.pcf: line 21, column 25
    function action_1 () : void {
      gw.api.web.assignment.AssignableQueueUtil.assignFirstActivity(CurrentLocation)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=AssignSelectedButton) at DesktopAssignableQueues.pcf: line 29, column 50
    function allCheckedRowsAction_3 (CheckedValues :  entity.Activity[], CheckedValuesErrors :  java.util.Map) : void {
      gw.api.web.assignment.AssignableQueueUtil.assignActivitiesFromQueue(CheckedValues)
    }
    
    // 'available' attribute on ToolbarButton (id=AssignFirstButton) at DesktopAssignableQueues.pcf: line 21, column 25
    function available_0 () : java.lang.Boolean {
      return !gw.api.web.assignment.AssignableQueueUtil.isSelectedQueueEmpty(CurrentLocation)
    }
    
    // 'canVisit' attribute on Page (id=DesktopAssignableQueues) at DesktopAssignableQueues.pcf: line 8, column 69
    static function canVisit_6 () : java.lang.Boolean {
      return perm.System.viewmyqueues
    }
    
    // 'def' attribute on PanelRef at DesktopAssignableQueues.pcf: line 33, column 44
    function def_onEnter_4 (def :  pcf.DesktopAssignableQueuesLV) : void {
      def.onEnter()
    }
    
    // 'def' attribute on PanelRef at DesktopAssignableQueues.pcf: line 33, column 44
    function def_refreshVariables_5 (def :  pcf.DesktopAssignableQueuesLV) : void {
      def.refreshVariables()
    }
    
    // Page (id=DesktopAssignableQueues) at DesktopAssignableQueues.pcf: line 8, column 69
    static function parent_7 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=AssignSelectedButton) at DesktopAssignableQueues.pcf: line 29, column 50
    function visible_2 () : java.lang.Boolean {
      return perm.Activity.pickfromqueue
    }
    
    override property get CurrentLocation () : pcf.DesktopAssignableQueues {
      return super.CurrentLocation as pcf.DesktopAssignableQueues
    }
    
    
  }
  
  
}