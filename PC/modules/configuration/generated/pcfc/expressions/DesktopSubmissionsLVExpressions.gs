package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopSubmissionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopSubmissionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filter' attribute on ToolbarFilterOption at DesktopSubmissionsLV.pcf: line 24, column 93
    function filter_1 () : gw.api.filters.IFilter {
      return gw.api.web.desktop.DesktopJobFilters.openIssuanceJobFilter()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.pcf: line 21, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.pcf: line 27, column 66
    function filters_2 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopSubmissionsLV.pcf: line 31, column 24
    function sortBy_4 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.pcf: line 39, column 50
    function sortValue_5 (submission :  entity.Job) : java.lang.Object {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.pcf: line 45, column 25
    function sortValue_6 (submission :  entity.Job) : java.lang.Object {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.pcf: line 57, column 25
    function sortValue_7 (submission :  entity.Job) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopSubmissionsLV.pcf: line 82, column 25
    function sortValue_8 (submission :  entity.Job) : java.lang.Object {
      return submission.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopSubmissionsLV.pcf: line 17, column 70
    function value_53 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return submissions
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopSubmissionsLV.pcf: line 27, column 66
    function visible_3 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.pcf: line 89, column 67
    function visible_9 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get submissions () : gw.api.database.IQueryBeanResult<Job> {
      return getRequireValue("submissions", 0) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set submissions ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setRequireValue("submissions", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopSubmissionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.pcf: line 39, column 50
    function action_12 () : void {
      JobForward.go(submission)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.pcf: line 57, column 25
    function action_24 () : void {
      JobForward.go(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.pcf: line 89, column 67
    function action_41 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.pcf: line 96, column 66
    function action_47 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.pcf: line 39, column 50
    function action_dest_13 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.pcf: line 57, column 25
    function action_dest_25 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.pcf: line 89, column 67
    function action_dest_42 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopSubmissionsLV.pcf: line 96, column 66
    function action_dest_48 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.pcf: line 39, column 50
    function available_11 () : java.lang.Boolean {
      return submission.Viewable
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.pcf: line 39, column 50
    function valueRoot_15 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.pcf: line 45, column 25
    function valueRoot_19 () : java.lang.Object {
      return submission.SelectedVersion
    }
    
    // 'value' attribute on BooleanRadioCell (id=Issued_Cell) at DesktopSubmissionsLV.pcf: line 75, column 25
    function valueRoot_36 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.pcf: line 89, column 67
    function valueRoot_44 () : java.lang.Object {
      return submission.getUserRoleAssignmentByRole( TC_PRODUCER )
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopSubmissionsLV.pcf: line 96, column 66
    function valueRoot_50 () : java.lang.Object {
      return submission.getUserRoleAssignmentByRole( TC_UNDERWRITER )
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopSubmissionsLV.pcf: line 39, column 50
    function value_14 () : java.lang.String {
      return submission.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopSubmissionsLV.pcf: line 45, column 25
    function value_18 () : java.util.Date {
      return submission.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on DateCell (id=QuoteNeeded_Cell) at DesktopSubmissionsLV.pcf: line 51, column 25
    function value_21 () : java.util.Date {
      return submission.DateQuoteNeeded
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at DesktopSubmissionsLV.pcf: line 57, column 25
    function value_26 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopSubmissionsLV.pcf: line 63, column 25
    function value_29 () : java.lang.String {
      return submission.DisplayType
    }
    
    // 'value' attribute on TextCell (id=SubmissionStatus_Cell) at DesktopSubmissionsLV.pcf: line 69, column 25
    function value_32 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on BooleanRadioCell (id=Issued_Cell) at DesktopSubmissionsLV.pcf: line 75, column 25
    function value_35 () : java.lang.Boolean {
      return submission.Policy.Issued
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopSubmissionsLV.pcf: line 82, column 25
    function value_38 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.pcf: line 89, column 67
    function value_43 () : entity.User {
      return submission.getUserRoleAssignmentByRole( TC_PRODUCER ).AssignedUser
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopSubmissionsLV.pcf: line 96, column 66
    function value_49 () : entity.User {
      return submission.getUserRoleAssignmentByRole( TC_UNDERWRITER ).AssignedUser
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopSubmissionsLV.pcf: line 89, column 67
    function visible_45 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Underwriter_Cell) at DesktopSubmissionsLV.pcf: line 96, column 66
    function visible_51 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get submission () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}