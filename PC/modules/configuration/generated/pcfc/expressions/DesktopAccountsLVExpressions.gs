package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopAccountsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopAccountsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopAccountsLV.pcf: line 20, column 82
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopAccountFilters.myAccountFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopAccountsLV.pcf: line 24, column 24
    function sortBy_1 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.pcf: line 31, column 25
    function sortValue_2 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountNumber
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.pcf: line 37, column 25
    function sortValue_3 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountStatus
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DesktopAccountsLV.pcf: line 42, column 25
    function sortValue_4 (account :  entity.AccountSummary) : java.lang.Object {
      return account.AccountHolderName
    }
    
    // 'value' attribute on RowIterator at DesktopAccountsLV.pcf: line 16, column 81
    function value_19 () : gw.api.database.IQueryBeanResult<entity.AccountSummary> {
      return accounts
    }
    
    property get accounts () : gw.api.database.IQueryBeanResult<AccountSummary> {
      return getRequireValue("accounts", 0) as gw.api.database.IQueryBeanResult<AccountSummary>
    }
    
    property set accounts ($arg :  gw.api.database.IQueryBeanResult<AccountSummary>) {
      setRequireValue("accounts", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopAccountsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopAccountsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.pcf: line 31, column 25
    function action_5 () : void {
      pcf.AccountFileDoRetrievalForward.go( account.AccountNumber)
    }
    
    // 'action' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.pcf: line 31, column 25
    function action_dest_6 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination( account.AccountNumber)
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.pcf: line 31, column 25
    function valueRoot_8 () : java.lang.Object {
      return account
    }
    
    // 'value' attribute on TypeKeyCell (id=Status_Cell) at DesktopAccountsLV.pcf: line 37, column 25
    function value_10 () : typekey.AccountStatus {
      return account.AccountStatus
    }
    
    // 'value' attribute on TextCell (id=Name_Cell) at DesktopAccountsLV.pcf: line 42, column 25
    function value_13 () : java.lang.String {
      return account.AccountHolderName
    }
    
    // 'value' attribute on TextCell (id=Address_Cell) at DesktopAccountsLV.pcf: line 49, column 24
    function value_16 () : java.lang.String {
      return account.AccountHolderAddress
    }
    
    // 'value' attribute on TextCell (id=AccountNumber_Cell) at DesktopAccountsLV.pcf: line 31, column 25
    function value_7 () : java.lang.String {
      return account.AccountNumber
    }
    
    property get account () : entity.AccountSummary {
      return getIteratedValue(1) as entity.AccountSummary
    }
    
    
  }
  
  
}