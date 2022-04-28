package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/Desktop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/Desktop.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 16, column 64
    function action_0 () : void {
      pcf.Underwriter_MySummary.go(User.util.CurrentUser)
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 36, column 44
    function action_10 () : void {
      pcf.DesktopOtherWorkOrders.go()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 40, column 45
    function action_12 () : void {
      pcf.DesktopAssignableQueues.go()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 20, column 39
    function action_2 () : void {
      pcf.DesktopActivities.go()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 24, column 37
    function action_4 () : void {
      pcf.DesktopAccounts.go()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 28, column 40
    function action_6 () : void {
      pcf.DesktopSubmissions.go()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 32, column 37
    function action_8 () : void {
      pcf.DesktopRenewals.go()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 16, column 64
    function action_dest_1 () : pcf.api.Destination {
      return pcf.Underwriter_MySummary.createDestination(User.util.CurrentUser)
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 36, column 44
    function action_dest_11 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 40, column 45
    function action_dest_13 () : pcf.api.Destination {
      return pcf.DesktopAssignableQueues.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 20, column 39
    function action_dest_3 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 24, column 37
    function action_dest_5 () : pcf.api.Destination {
      return pcf.DesktopAccounts.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 28, column 40
    function action_dest_7 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'location' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 32, column 37
    function action_dest_9 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // LocationGroup (id=Desktop) at Desktop.pcf: line 9, column 73
    static function firstVisitableChildDestinationMethod_18 () : pcf.api.Destination {
      var dest : pcf.api.Destination
      dest = pcf.Underwriter_MySummary.createDestination(User.util.CurrentUser)
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DesktopActivities.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DesktopAccounts.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DesktopSubmissions.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DesktopRenewals.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DesktopOtherWorkOrders.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      dest = pcf.DesktopAssignableQueues.createDestination()
      if (dest.canVisitSelf()) {
        return dest
      }
      return null
    }
    
    // 'menuActions' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 9, column 73
    function menuActions_onEnter_14 (def :  pcf.DesktopMenuActions) : void {
      def.onEnter()
    }
    
    // 'menuActions' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 9, column 73
    function menuActions_refreshVariables_15 (def :  pcf.DesktopMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 9, column 73
    function tabBar_onEnter_16 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on LocationGroup (id=Desktop) at Desktop.pcf: line 9, column 73
    function tabBar_refreshVariables_17 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    override property get CurrentLocation () : pcf.Desktop {
      return super.CurrentLocation as pcf.Desktop
    }
    
    
  }
  
  
}