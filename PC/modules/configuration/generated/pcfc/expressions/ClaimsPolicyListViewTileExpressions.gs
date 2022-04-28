package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/policyfile/summary/ClaimsPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimsPolicyListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/ClaimsPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimsPolicyListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=ClaimsPolicyListViewTile) at ClaimsPolicyListViewTile.pcf: line 11, column 51
    function action_38 () : void {
      claimHelper.viewMore()
    }
    
    // 'initialValue' attribute on Variable at ClaimsPolicyListViewTile.pcf: line 18, column 58
    function initialValue_36 () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return gw.api.web.dashboard.ui.claims.ClaimHelper.forPolicy(policyPeriod.Policy)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 31, column 25
    function sortValue_0 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.ClaimNumber
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsPolicyListViewTile.pcf: line 43, column 25
    function sortValue_1 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossType_Cell) at ClaimsPolicyListViewTile.pcf: line 48, column 35
    function sortValue_2 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossType
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at ClaimsPolicyListViewTile.pcf: line 53, column 36
    function sortValue_3 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.LossCause
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsPolicyListViewTile.pcf: line 58, column 25
    function sortValue_4 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=InsuredName_Cell) at ClaimsPolicyListViewTile.pcf: line 63, column 38
    function sortValue_5 (claim :  gw.api.web.dashboard.data.claims.ClaimDTO) : java.lang.Object {
      return claim.InsuredName
    }
    
    // 'value' attribute on RowIterator at ClaimsPolicyListViewTile.pcf: line 23, column 63
    function value_35 () : gw.api.web.dashboard.data.claims.ClaimDTO[] {
      return claimHelper.Claims
    }
    
    // 'viewMoreVisible' attribute on ListViewTile (id=ClaimsPolicyListViewTile) at ClaimsPolicyListViewTile.pcf: line 11, column 51
    function visible_37 () : java.lang.Boolean {
      return claimHelper.ViewMoreVisible
    }
    
    property get claimHelper () : gw.api.web.dashboard.ui.claims.ClaimHelper {
      return getVariableValue("claimHelper", 0) as gw.api.web.dashboard.ui.claims.ClaimHelper
    }
    
    property set claimHelper ($arg :  gw.api.web.dashboard.ui.claims.ClaimHelper) {
      setVariableValue("claimHelper", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getRequireValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setRequireValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/policyfile/summary/ClaimsPolicyListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimsPolicyListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 31, column 25
    function action_7 () : void {
      claimHelper.viewInClaimSystem(claim)
    }
    
    // 'available' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 31, column 25
    function available_6 () : java.lang.Boolean {
      return claimHelper.isViewInClaimSystemLinkAvailable(claim)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 31, column 25
    function valueRoot_9 () : java.lang.Object {
      return claim
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at ClaimsPolicyListViewTile.pcf: line 37, column 25
    function value_12 () : java.lang.String {
      return claim.Status
    }
    
    // 'value' attribute on DateCell (id=LossDate_Cell) at ClaimsPolicyListViewTile.pcf: line 43, column 25
    function value_15 () : java.util.Date {
      return claim.LossDate
    }
    
    // 'value' attribute on TextCell (id=LossType_Cell) at ClaimsPolicyListViewTile.pcf: line 48, column 35
    function value_18 () : java.lang.String {
      return claim.LossType
    }
    
    // 'value' attribute on TextCell (id=LossCause_Cell) at ClaimsPolicyListViewTile.pcf: line 53, column 36
    function value_21 () : java.lang.String {
      return claim.LossCause
    }
    
    // 'value' attribute on MonetaryAmountCell (id=TotalIncurred_Cell) at ClaimsPolicyListViewTile.pcf: line 58, column 25
    function value_24 () : gw.pl.currency.MonetaryAmount {
      return claim.TotalIncurred
    }
    
    // 'value' attribute on TextCell (id=InsuredName_Cell) at ClaimsPolicyListViewTile.pcf: line 63, column 38
    function value_27 () : java.lang.String {
      return claim.InsuredName
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at ClaimsPolicyListViewTile.pcf: line 69, column 38
    function value_30 () : java.lang.String {
      return claim.Description
    }
    
    // 'value' attribute on TextCell (id=Adjuster_Cell) at ClaimsPolicyListViewTile.pcf: line 75, column 63
    function value_33 () : java.lang.String {
      return claimHelper.formatAdjuster(claim.Adjuster)
    }
    
    // 'value' attribute on TextCell (id=Number_Cell) at ClaimsPolicyListViewTile.pcf: line 31, column 25
    function value_8 () : java.lang.String {
      return claim.ClaimNumber
    }
    
    property get claim () : gw.api.web.dashboard.data.claims.ClaimDTO {
      return getIteratedValue(1) as gw.api.web.dashboard.data.claims.ClaimDTO
    }
    
    
  }
  
  
}