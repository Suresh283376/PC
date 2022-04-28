package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/account/overview/OpenPolicyTransactionsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class OpenPolicyTransactionsAccountListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/account/overview/OpenPolicyTransactionsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends OpenPolicyTransactionsAccountListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 62, column 25
    function action_22 () : void {
      PolicyFileForward.go(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 38, column 25
    function action_7 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 62, column 25
    function action_dest_23 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(job.LatestPeriod.PolicyNumber)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 38, column 25
    function action_dest_8 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'available' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 62, column 25
    function available_21 () : java.lang.Boolean {
      return job.SelectedVersion.PolicyNumberAssigned
    }
    
    // 'useArchivedStyle' attribute on Row at OpenPolicyTransactionsAccountListViewTile.pcf: line 32, column 57
    function useArchivedStyle_33 () : java.lang.Boolean {
      return job.PolicyTerm.CheckArchived
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 38, column 25
    function valueRoot_10 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 68, column 52
    function valueRoot_28 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 74, column 29
    function valueRoot_31 () : java.lang.Object {
      return job.SelectedVersion
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 43, column 25
    function value_12 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 49, column 25
    function value_15 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 54, column 25
    function value_18 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 62, column 25
    function value_24 () : String {
      return policyTransactionsHelper.getPolicyNumber(job)
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 68, column 52
    function value_27 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 74, column 29
    function value_30 () : java.lang.String {
      return job.SelectedVersion.PrimaryInsuredName
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 38, column 25
    function value_9 () : java.lang.String {
      return job.JobNumber
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/account/overview/OpenPolicyTransactionsAccountListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class OpenPolicyTransactionsAccountListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TileAction (id=NewSubmission) at OpenPolicyTransactionsAccountListViewTile.pcf: line 24, column 66
    function action_37 () : void {
      NewSubmission.go(account)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=OpenPolicyTransactionsAccountListViewTile) at OpenPolicyTransactionsAccountListViewTile.pcf: line 11, column 56
    function action_39 () : void {
      policyTransactionsHelper.viewMore()
    }
    
    // 'action' attribute on TileAction (id=NewSubmission) at OpenPolicyTransactionsAccountListViewTile.pcf: line 24, column 66
    function action_dest_38 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination(account)
    }
    
    // 'initialValue' attribute on Variable at OpenPolicyTransactionsAccountListViewTile.pcf: line 18, column 70
    function initialValue_35 () : gw.api.web.dashboard.ui.policy.PolicyTransactionHelper {
      return gw.api.web.dashboard.ui.policy.PolicyTransactionHelper.forAccount(account)
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 38, column 25
    function sortValue_0 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 43, column 25
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 49, column 25
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 54, column 25
    function sortValue_3 (job :  entity.Job) : java.lang.Object {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=PolicyNumber_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 62, column 25
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return policyTransactionsHelper.getPolicyNumber(job)
    }
    
    // 'value' attribute on TextCell (id=Lob_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 68, column 52
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return job.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=NamedInsured_Cell) at OpenPolicyTransactionsAccountListViewTile.pcf: line 74, column 29
    function sortValue_6 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.PrimaryInsuredName
    }
    
    // 'value' attribute on RowIterator at OpenPolicyTransactionsAccountListViewTile.pcf: line 30, column 32
    function value_34 () : entity.Job[] {
      return policyTransactionsHelper.Jobs
    }
    
    // 'visible' attribute on TileAction (id=NewSubmission) at OpenPolicyTransactionsAccountListViewTile.pcf: line 24, column 66
    function visible_36 () : java.lang.Boolean {
      return account.NewSubmissionVisible
    }
    
    property get account () : Account {
      return getRequireValue("account", 0) as Account
    }
    
    property set account ($arg :  Account) {
      setRequireValue("account", 0, $arg)
    }
    
    property get policyTransactionsHelper () : gw.api.web.dashboard.ui.policy.PolicyTransactionHelper {
      return getVariableValue("policyTransactionsHelper", 0) as gw.api.web.dashboard.ui.policy.PolicyTransactionHelper
    }
    
    property set policyTransactionsHelper ($arg :  gw.api.web.dashboard.ui.policy.PolicyTransactionHelper) {
      setVariableValue("policyTransactionsHelper", 0, $arg)
    }
    
    
  }
  
  
}