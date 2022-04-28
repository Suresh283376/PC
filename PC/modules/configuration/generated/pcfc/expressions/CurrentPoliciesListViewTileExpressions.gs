package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/contactfile/overview/CurrentPoliciesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CurrentPoliciesListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/CurrentPoliciesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CurrentPoliciesListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=CurrentPoliciesListViewTile) at CurrentPoliciesListViewTile.pcf: line 11, column 61
    function action_34 () : void {
      currentPoliciesHelper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at CurrentPoliciesListViewTile.pcf: line 18, column 66
    function initialValue_31 () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return gw.api.web.dashboard.ui.policy.CurrentPolicyHelper.forContact(contact)
    }
    
    // 'initialValue' attribute on Variable at CurrentPoliciesListViewTile.pcf: line 22, column 91
    function initialValue_32 () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions.Instance
    }
    
    // 'value' attribute on RowIterator at CurrentPoliciesListViewTile.pcf: line 27, column 41
    function value_30 () : entity.PolicyPeriod[] {
      return currentPoliciesHelper.PolicyPeriods
    }
    
    // 'visible' attribute on ButtonCell (id=FileClaim_Cell) at CurrentPoliciesListViewTile.pcf: line 87, column 25
    function visible_0 () : java.lang.Boolean {
      return currentPoliciesHelper.CanFileClaim and permissions.ViewInClaimCenter
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=CurrentPoliciesListViewTile) at CurrentPoliciesListViewTile.pcf: line 11, column 61
    function visible_33 () : java.lang.Boolean {
      return currentPoliciesHelper.ViewMoreVisible
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    property get currentPoliciesHelper () : gw.api.web.dashboard.ui.policy.CurrentPolicyHelper {
      return getVariableValue("currentPoliciesHelper", 0) as gw.api.web.dashboard.ui.policy.CurrentPolicyHelper
    }
    
    property set currentPoliciesHelper ($arg :  gw.api.web.dashboard.ui.policy.CurrentPolicyHelper) {
      setVariableValue("currentPoliciesHelper", 0, $arg)
    }
    
    property get permissions () : gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions {
      return getVariableValue("permissions", 0) as gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions
    }
    
    property set permissions ($arg :  gw.api.web.dashboard.ui.DashboardParameters.AccountHolderSummaryPermissions) {
      setVariableValue("permissions", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/contactfile/overview/CurrentPoliciesListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CurrentPoliciesListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 36, column 25
    function action_1 () : void {
      PolicyFileForward.go(policyPeriod.PolicyNumber, policyPeriod.PeriodStart)
    }
    
    // 'action' attribute on MenuItem (id=PolicyCancel) at CurrentPoliciesListViewTile.pcf: line 73, column 66
    function action_18 () : void {
      StartCancellation.go(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyRenew) at CurrentPoliciesListViewTile.pcf: line 79, column 65
    function action_21 () : void {
      currentPoliciesHelper.startRenewal(policyPeriod, CurrentLocation)
    }
    
    // 'action' attribute on ButtonCell (id=PolicyActions_Cell) at CurrentPoliciesListViewTile.pcf: line 68, column 24
    function action_23 () : void {
      StartPolicyChange.go(policyPeriod)
    }
    
    // 'action' attribute on ButtonCell (id=FileClaim_Cell) at CurrentPoliciesListViewTile.pcf: line 87, column 25
    function action_27 () : void {
      currentPoliciesHelper.fileClaim(policyPeriod)
    }
    
    // 'action' attribute on MenuItem (id=PolicyCancel) at CurrentPoliciesListViewTile.pcf: line 73, column 66
    function action_dest_19 () : pcf.api.Destination {
      return pcf.StartCancellation.createDestination(policyPeriod)
    }
    
    // 'action' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 36, column 25
    function action_dest_2 () : pcf.api.Destination {
      return pcf.PolicyFileForward.createDestination(policyPeriod.PolicyNumber, policyPeriod.PeriodStart)
    }
    
    // 'action' attribute on ButtonCell (id=PolicyActions_Cell) at CurrentPoliciesListViewTile.pcf: line 68, column 24
    function action_dest_24 () : pcf.api.Destination {
      return pcf.StartPolicyChange.createDestination(policyPeriod)
    }
    
    // 'available' attribute on ButtonCell (id=PolicyActions_Cell) at CurrentPoliciesListViewTile.pcf: line 68, column 24
    function available_22 () : java.lang.Boolean {
      return policyPeriod.Policy.Issued and permissions.canChangePolicy(policyPeriod)
    }
    
    // 'available' attribute on ButtonCell (id=FileClaim_Cell) at CurrentPoliciesListViewTile.pcf: line 87, column 25
    function available_26 () : java.lang.Boolean {
      return currentPoliciesHelper.CanFileClaim and permissions.ViewInClaimCenter
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 36, column 25
    function valueRoot_4 () : java.lang.Object {
      return policyPeriod
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPoliciesListViewTile.pcf: line 43, column 52
    function valueRoot_7 () : java.lang.Object {
      return policyPeriod.Policy
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at CurrentPoliciesListViewTile.pcf: line 56, column 25
    function value_12 () : java.util.Date {
      return policyPeriod.PeriodStart
    }
    
    // 'value' attribute on DateCell (id=EndDate_Cell) at CurrentPoliciesListViewTile.pcf: line 62, column 25
    function value_15 () : java.util.Date {
      return policyPeriod.Policy.findCoverageEndDate()
    }
    
    // 'value' attribute on TextCell (id=Policy_Cell) at CurrentPoliciesListViewTile.pcf: line 36, column 25
    function value_3 () : String {
      return policyPeriod.PolicyNumberDisplayString
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at CurrentPoliciesListViewTile.pcf: line 43, column 52
    function value_6 () : gw.api.productmodel.Product {
      return policyPeriod.Policy.Product
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at CurrentPoliciesListViewTile.pcf: line 50, column 25
    function value_9 () : java.lang.String {
      return policyPeriod.PeriodDisplayStatus
    }
    
    // 'visible' attribute on MenuItem (id=PolicyCancel) at CurrentPoliciesListViewTile.pcf: line 73, column 66
    function visible_17 () : java.lang.Boolean {
      return permissions.canCancelPolicy(policyPeriod)
    }
    
    // 'visible' attribute on MenuItem (id=PolicyRenew) at CurrentPoliciesListViewTile.pcf: line 79, column 65
    function visible_20 () : java.lang.Boolean {
      return permissions.canRenewPolicy(policyPeriod)
    }
    
    property get policyPeriod () : entity.PolicyPeriod {
      return getIteratedValue(1) as entity.PolicyPeriod
    }
    
    
  }
  
  
}