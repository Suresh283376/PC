package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamRenewalsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamRenewalsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 54, column 52
    function action_13 () : void {
      JobForward.go(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamRenewalsLV.pcf: line 59, column 40
    function action_18 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 54, column 52
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamRenewalsLV.pcf: line 59, column 40
    function action_dest_19 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamRenewalsLV.pcf: line 31, column 31
    function condition_3 () : java.lang.Boolean {
      return renewal.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 54, column 52
    function valueRoot_16 () : java.lang.Object {
      return renewal.Policy
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamRenewalsLV.pcf: line 37, column 76
    function valueRoot_5 () : java.lang.Object {
      return renewal.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamRenewalsLV.pcf: line 42, column 39
    function valueRoot_8 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at TeamRenewalsLV.pcf: line 47, column 42
    function value_10 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 54, column 52
    function value_15 () : gw.api.productmodel.Product {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at TeamRenewalsLV.pcf: line 59, column 40
    function value_20 () : entity.User {
      return renewal.Underwriter
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at TeamRenewalsLV.pcf: line 64, column 45
    function value_23 () : java.lang.String {
      return renewal.getAllAssigned()
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamRenewalsLV.pcf: line 37, column 76
    function value_4 () : java.lang.String {
      return renewal.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamRenewalsLV.pcf: line 42, column 39
    function value_7 () : java.util.Date {
      return renewal.CreateTime
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamRenewalsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamRenewalsLV.pcf: line 27, column 81
    function filters_0 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewRenewalFilters().FilterOptions
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamRenewalsLV.pcf: line 42, column 39
    function sortValue_1 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamRenewalsLV.pcf: line 54, column 52
    function sortValue_2 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=RenewalsIterator) at TeamRenewalsLV.pcf: line 23, column 74
    function value_25 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return renewals
    }
    
    property get renewals () : gw.api.database.IQueryBeanResult<Renewal> {
      return getRequireValue("renewals", 0) as gw.api.database.IQueryBeanResult<Renewal>
    }
    
    property set renewals ($arg :  gw.api.database.IQueryBeanResult<Renewal>) {
      setRequireValue("renewals", 0, $arg)
    }
    
    
  }
  
  
}