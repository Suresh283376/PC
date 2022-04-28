package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary/MyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MyRenewalListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MyRenewalListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function action_12 () : void {
      JobForward.go(renewal)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function action_18 () : void {
      ContactForward.go(renewal.Policy.Account.AccountHolderContact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MyRenewalListViewTile.pcf: line 69, column 82
    function action_35 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(renewal.Policy.Account.AccountHolderContact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MyRenewalListViewTile.pcf: line 69, column 82
    function action_dest_36 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function available_11 () : java.lang.Boolean {
      return renewal.Viewable
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function valueRoot_15 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MyRenewalListViewTile.pcf: line 49, column 25
    function valueRoot_24 () : java.lang.Object {
      return renewal.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyRenewalListViewTile.pcf: line 64, column 55
    function valueRoot_33 () : java.lang.Object {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MyRenewalListViewTile.pcf: line 69, column 82
    function valueRoot_38 () : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole(TC_PRODUCER)
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function value_14 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function value_20 () : java.lang.String {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MyRenewalListViewTile.pcf: line 49, column 25
    function value_23 () : java.util.Date {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MyRenewalListViewTile.pcf: line 54, column 25
    function value_26 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at MyRenewalListViewTile.pcf: line 59, column 25
    function value_29 () : gw.pl.currency.MonetaryAmount {
      return renewal.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyRenewalListViewTile.pcf: line 64, column 55
    function value_32 () : java.lang.String {
      return renewal.Policy.Product.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MyRenewalListViewTile.pcf: line 69, column 82
    function value_37 () : entity.User {
      return renewal.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MyRenewalListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MyRenewalListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MyRenewalListViewTile) at MyRenewalListViewTile.pcf: line 11, column 56
    function action_41 () : void {
      DesktopRenewals.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MyRenewalListViewTile) at MyRenewalListViewTile.pcf: line 11, column 56
    function action_dest_42 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MyRenewalListViewTile.pcf: line 23, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MyRenewalListViewTile.pcf: line 26, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at MyRenewalListViewTile.pcf: line 30, column 24
    function sortBy_3 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MyRenewalListViewTile.pcf: line 69, column 82
    function sortValue_10 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at MyRenewalListViewTile.pcf: line 38, column 25
    function sortValue_4 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at MyRenewalListViewTile.pcf: line 44, column 47
    function sortValue_5 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MyRenewalListViewTile.pcf: line 49, column 25
    function sortValue_6 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MyRenewalListViewTile.pcf: line 54, column 25
    function sortValue_7 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at MyRenewalListViewTile.pcf: line 59, column 25
    function sortValue_8 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MyRenewalListViewTile.pcf: line 64, column 55
    function sortValue_9 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.Product.DisplayName
    }
    
    // 'value' attribute on RowIterator at MyRenewalListViewTile.pcf: line 19, column 74
    function value_40 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return Job.finder.findRenewalsByUser(User.util.CurrentUser)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at MyRenewalListViewTile.pcf: line 26, column 66
    function visible_2 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get user () : User {
      return getRequireValue("user", 0) as User
    }
    
    property set user ($arg :  User) {
      setRequireValue("user", 0, $arg)
    }
    
    
  }
  
  
}