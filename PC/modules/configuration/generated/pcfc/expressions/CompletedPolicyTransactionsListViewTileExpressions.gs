package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CompletedPolicyTransactionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CompletedPolicyTransactionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CompletedPolicyTransactionsListViewTile) at CompletedPolicyTransactionsListViewTile.pcf: line 10, column 46
    function action_22 () : void {
      helper.viewMore(policyPeriod, asOfDate)
    }
    
    // 'initialValue' attribute on Variable at CompletedPolicyTransactionsListViewTile.pcf: line 20, column 74
    function initialValue_20 () : gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper {
      return new gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper(policyPeriod)
    }
    
    // 'value' attribute on RowIterator at CompletedPolicyTransactionsListViewTile.pcf: line 25, column 41
    function value_19 () : entity.PolicyPeriod[] {
      return helper.LatestCompletedPolicyTransactions
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=CompletedPolicyTransactionsListViewTile) at CompletedPolicyTransactionsListViewTile.pcf: line 10, column 46
    function visible_21 () : java.lang.Boolean {
      return helper.ViewMoreVisible
    }
    
    property get asOfDate () : Date {
      return getRequireValue("asOfDate", 0) as Date
    }
    
    property set asOfDate ($arg :  Date) {
      setRequireValue("asOfDate", 0, $arg)
    }
    
    property get helper () : gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper {
      return getVariableValue("helper", 0) as gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper
    }
    
    property set helper ($arg :  gw.api.web.dashboard.ui.policy.CompletedTransactionsHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/CompletedPolicyTransactionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CompletedPolicyTransactionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 35, column 25
    function action_1 () : void {
      JobForward.go(transaction.Job)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 35, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(transaction.Job)
    }
    
    // 'available' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 35, column 25
    function available_0 () : java.lang.Boolean {
      return transaction.Job.Viewable
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 35, column 25
    function valueRoot_4 () : java.lang.Object {
      return transaction.Job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 42, column 25
    function valueRoot_8 () : java.lang.Object {
      return transaction
    }
    
    // 'value' attribute on DateCell (id=CloseDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 50, column 25
    function value_10 () : java.util.Date {
      return transaction.Job.CloseDate
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 57, column 25
    function value_13 () : java.lang.String {
      return transaction.Job.DisplayType
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 64, column 25
    function value_16 () : gw.pl.currency.MonetaryAmount {
      return transaction.TransactionCostRPT
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 35, column 25
    function value_3 () : java.lang.String {
      return transaction.Job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CompletedPolicyTransactionsListViewTile.pcf: line 42, column 25
    function value_7 () : java.util.Date {
      return transaction.EditEffectiveDate
    }
    
    property get transaction () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}