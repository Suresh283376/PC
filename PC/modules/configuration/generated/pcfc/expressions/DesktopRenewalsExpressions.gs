package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewals.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopRenewalsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewals.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopRenewalsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopRenewals) at DesktopRenewals.pcf: line 8, column 61
    static function canVisit_3 () : java.lang.Boolean {
      return perm.System.viewmyrenewals
    }
    
    // 'def' attribute on PanelRef at DesktopRenewals.pcf: line 22, column 44
    function def_onEnter_1 (def :  pcf.DesktopRenewalsLV) : void {
      def.onEnter(renewals)
    }
    
    // 'def' attribute on PanelRef at DesktopRenewals.pcf: line 22, column 44
    function def_refreshVariables_2 (def :  pcf.DesktopRenewalsLV) : void {
      def.refreshVariables(renewals)
    }
    
    // 'initialValue' attribute on Variable at DesktopRenewals.pcf: line 15, column 70
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return Job.finder.findRenewalsByUser(User.util.CurrentUser)
    }
    
    // Page (id=DesktopRenewals) at DesktopRenewals.pcf: line 8, column 61
    static function parent_4 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopRenewals {
      return super.CurrentLocation as pcf.DesktopRenewals
    }
    
    property get renewals () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return getVariableValue("renewals", 0) as gw.api.database.IQueryBeanResult<entity.Renewal>
    }
    
    property set renewals ($arg :  gw.api.database.IQueryBeanResult<entity.Renewal>) {
      setVariableValue("renewals", 0, $arg)
    }
    
    
  }
  
  
}