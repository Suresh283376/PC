package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopOtherWorkOrdersExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrders.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopOtherWorkOrdersExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopOtherWorkOrders) at DesktopOtherWorkOrders.pcf: line 9, column 75
    static function canVisit_3 () : java.lang.Boolean {
      return perm.System.viewmypolicychanges
    }
    
    // 'def' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 23, column 53
    function def_onEnter_1 (def :  pcf.DesktopOtherWorkOrdersLV) : void {
      def.onEnter(workOrders)
    }
    
    // 'def' attribute on PanelRef at DesktopOtherWorkOrders.pcf: line 23, column 53
    function def_refreshVariables_2 (def :  pcf.DesktopOtherWorkOrdersLV) : void {
      def.refreshVariables(workOrders)
    }
    
    // 'initialValue' attribute on Variable at DesktopOtherWorkOrders.pcf: line 16, column 66
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return Job.finder.findDesktopOtherWorkOrdersJobsByUser(User.util.CurrentUser)
    }
    
    // Page (id=DesktopOtherWorkOrders) at DesktopOtherWorkOrders.pcf: line 9, column 75
    static function parent_4 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopOtherWorkOrders {
      return super.CurrentLocation as pcf.DesktopOtherWorkOrders
    }
    
    property get workOrders () : gw.api.database.IQueryBeanResult<entity.Job> {
      return getVariableValue("workOrders", 0) as gw.api.database.IQueryBeanResult<entity.Job>
    }
    
    property set workOrders ($arg :  gw.api.database.IQueryBeanResult<entity.Job>) {
      setVariableValue("workOrders", 0, $arg)
    }
    
    
  }
  
  
}