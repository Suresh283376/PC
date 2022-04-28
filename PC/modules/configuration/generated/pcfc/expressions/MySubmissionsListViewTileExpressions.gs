package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/summary/MySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MySubmissionsListViewTileExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MySubmissionsListViewTileExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function action_13 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function action_18 () : void {
      ContactForward.go(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MySubmissionsListViewTile.pcf: line 77, column 85
    function action_38 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function action_dest_14 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function action_dest_19 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(submission.LatestPeriod.PrimaryNamedInsured.AccountContactRole.AccountContact.Contact)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at MySubmissionsListViewTile.pcf: line 77, column 85
    function action_dest_39 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function valueRoot_16 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MySubmissionsListViewTile.pcf: line 52, column 25
    function valueRoot_24 () : java.lang.Object {
      return submission.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MySubmissionsListViewTile.pcf: line 72, column 58
    function valueRoot_36 () : java.lang.Object {
      return submission.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MySubmissionsListViewTile.pcf: line 77, column 85
    function valueRoot_41 () : java.lang.Object {
      return submission.getUserRoleAssignmentByRole(TC_PRODUCER)
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function value_15 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function value_20 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MySubmissionsListViewTile.pcf: line 52, column 25
    function value_23 () : java.util.Date {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MySubmissionsListViewTile.pcf: line 57, column 25
    function value_26 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at MySubmissionsListViewTile.pcf: line 62, column 25
    function value_29 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at MySubmissionsListViewTile.pcf: line 67, column 25
    function value_32 () : gw.pl.currency.MonetaryAmount {
      return submission.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MySubmissionsListViewTile.pcf: line 72, column 58
    function value_35 () : java.lang.String {
      return submission.Policy.Product.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MySubmissionsListViewTile.pcf: line 77, column 85
    function value_40 () : entity.User {
      return submission.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    property get submission () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/summary/MySubmissionsListViewTile.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MySubmissionsListViewTileExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MySubmissionsListViewTile) at MySubmissionsListViewTile.pcf: line 11, column 56
    function action_44 () : void {
      DesktopSubmissions.push()
    }
    
    // 'viewMoreAction' attribute on ListViewTile (id=MySubmissionsListViewTile) at MySubmissionsListViewTile.pcf: line 11, column 56
    function action_dest_45 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'filter' attribute on ToolbarFilterOption at MySubmissionsListViewTile.pcf: line 26, column 93
    function filter_1 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.DesktopJobFilters.openIssuanceJobFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MySubmissionsListViewTile.pcf: line 23, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at MySubmissionsListViewTile.pcf: line 29, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at MySubmissionsListViewTile.pcf: line 33, column 24
    function sortBy_4 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on MonetaryAmountCell (id=Premium_Cell) at MySubmissionsListViewTile.pcf: line 67, column 25
    function sortValue_10 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.TotalPremiumRPT
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at MySubmissionsListViewTile.pcf: line 72, column 58
    function sortValue_11 (submission :  entity.Job) : java.lang.Object {
      return submission.Policy.Product.DisplayName
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at MySubmissionsListViewTile.pcf: line 77, column 85
    function sortValue_12 (submission :  entity.Job) : java.lang.Object {
      return submission.getUserRoleAssignmentByRole(TC_PRODUCER).AssignedUser
    }
    
    // 'value' attribute on TextCell (id=Transaction_Cell) at MySubmissionsListViewTile.pcf: line 40, column 25
    function sortValue_5 (submission :  entity.Job) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=PrimaryInsured_Cell) at MySubmissionsListViewTile.pcf: line 46, column 50
    function sortValue_6 (submission :  entity.Job) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at MySubmissionsListViewTile.pcf: line 52, column 25
    function sortValue_7 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at MySubmissionsListViewTile.pcf: line 57, column 25
    function sortValue_8 (submission :  entity.Job) : java.lang.Object {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at MySubmissionsListViewTile.pcf: line 62, column 25
    function sortValue_9 (submission :  entity.Job) : java.lang.Object {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on RowIterator at MySubmissionsListViewTile.pcf: line 19, column 70
    function value_43 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return Job.finder.findSubmissionsAndIssuancesByUser(user)
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at MySubmissionsListViewTile.pcf: line 29, column 66
    function visible_3 () : java.lang.Boolean {
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