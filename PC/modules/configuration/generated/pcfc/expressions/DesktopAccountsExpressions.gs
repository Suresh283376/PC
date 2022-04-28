package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAccountsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccounts.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAccountsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'canVisit' attribute on Page (id=DesktopAccounts) at DesktopAccounts.pcf: line 8, column 61
    static function canVisit_3 () : java.lang.Boolean {
      return perm.System.viewmyaccounts
    }
    
    // 'def' attribute on PanelRef at DesktopAccounts.pcf: line 22, column 44
    function def_onEnter_1 (def :  pcf.DesktopAccountsLV) : void {
      def.onEnter(accounts)
    }
    
    // 'def' attribute on PanelRef at DesktopAccounts.pcf: line 22, column 44
    function def_refreshVariables_2 (def :  pcf.DesktopAccountsLV) : void {
      def.refreshVariables(accounts)
    }
    
    // 'initialValue' attribute on Variable at DesktopAccounts.pcf: line 15, column 77
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return Account.finder.findAccountSummariesForUser(User.util.CurrentUser)
    }
    
    // Page (id=DesktopAccounts) at DesktopAccounts.pcf: line 8, column 61
    static function parent_4 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    override property get CurrentLocation () : pcf.DesktopAccounts {
      return super.CurrentLocation as pcf.DesktopAccounts
    }
    
    property get accounts () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return getVariableValue("accounts", 0) as gw.api.database.IQueryBeanResult<entity.AccountSummary>
    }
    
    property set accounts ($arg :  gw.api.database.IQueryBeanResult<entity.AccountSummary>) {
      setVariableValue("accounts", 0, $arg)
    }
    
    
  }
  
  
}