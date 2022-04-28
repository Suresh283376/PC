package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopOtherWorkOrdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopOtherWorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.pcf: line 22, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.pcf: line 25, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopOtherWorkOrdersLV.pcf: line 29, column 24
    function sortBy_3 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopOtherWorkOrdersLV.pcf: line 43, column 43
    function sortValue_4 (job :  entity.Job) : java.lang.Object {
      return job.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.pcf: line 49, column 25
    function sortValue_5 (job :  entity.Job) : java.lang.Object {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.pcf: line 56, column 25
    function sortValue_6 (job :  entity.Job) : java.lang.Object {
      return job.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.pcf: line 69, column 25
    function sortValue_7 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopOtherWorkOrdersLV.pcf: line 18, column 70
    function value_48 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return workOrders
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopOtherWorkOrdersLV.pcf: line 25, column 66
    function visible_2 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.pcf: line 76, column 67
    function visible_8 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get workOrders () : gw.api.database.IQueryBeanResult<Job> {
      return getRequireValue("workOrders", 0) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set workOrders ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setRequireValue("workOrders", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopOtherWorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.pcf: line 38, column 25
    function action_11 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.pcf: line 56, column 25
    function action_24 () : void {
      JobForward.go(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.pcf: line 76, column 67
    function action_36 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.pcf: line 83, column 66
    function action_42 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.pcf: line 38, column 25
    function action_dest_12 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.pcf: line 56, column 25
    function action_dest_25 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.pcf: line 76, column 67
    function action_dest_37 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopOtherWorkOrdersLV.pcf: line 83, column 66
    function action_dest_43 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.pcf: line 38, column 25
    function available_10 () : java.lang.Boolean {
      return job.Viewable
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.pcf: line 38, column 25
    function valueRoot_14 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.pcf: line 49, column 25
    function valueRoot_21 () : java.lang.Object {
      return job.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.pcf: line 69, column 25
    function valueRoot_34 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.pcf: line 76, column 67
    function valueRoot_39 () : java.lang.Object {
      return job.getUserRoleAssignmentByRole( TC_PRODUCER )
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.pcf: line 83, column 66
    function valueRoot_45 () : java.lang.Object {
      return job.getUserRoleAssignmentByRole( TC_UNDERWRITER )
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at DesktopOtherWorkOrdersLV.pcf: line 38, column 25
    function value_13 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopOtherWorkOrdersLV.pcf: line 43, column 43
    function value_17 () : java.lang.String {
      return job.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopOtherWorkOrdersLV.pcf: line 49, column 25
    function value_20 () : java.util.Date {
      return job.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopOtherWorkOrdersLV.pcf: line 56, column 25
    function value_26 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at DesktopOtherWorkOrdersLV.pcf: line 62, column 25
    function value_30 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopOtherWorkOrdersLV.pcf: line 69, column 25
    function value_33 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.pcf: line 76, column 67
    function value_38 () : entity.User {
      return job.getUserRoleAssignmentByRole( TC_PRODUCER ).AssignedUser
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.pcf: line 83, column 66
    function value_44 () : entity.User {
      return job.getUserRoleAssignmentByRole( TC_UNDERWRITER ).AssignedUser
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopOtherWorkOrdersLV.pcf: line 76, column 67
    function visible_40 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Underwriter_Cell) at DesktopOtherWorkOrdersLV.pcf: line 83, column 66
    function visible_46 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  
}