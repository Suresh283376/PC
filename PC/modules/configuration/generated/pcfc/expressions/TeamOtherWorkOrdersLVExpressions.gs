package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamOtherWorkOrdersLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamOtherWorkOrdersLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at TeamOtherWorkOrdersLV.pcf: line 55, column 34
    function action_15 () : void {
      JobForward.go(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamOtherWorkOrdersLV.pcf: line 71, column 36
    function action_26 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 39, column 36
    function action_4 () : void {
      JobForward.go(job)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at TeamOtherWorkOrdersLV.pcf: line 55, column 34
    function action_dest_16 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamOtherWorkOrdersLV.pcf: line 71, column 36
    function action_dest_27 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'action' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 39, column 36
    function action_dest_5 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(job)
    }
    
    // 'condition' attribute on ToolbarFlag at TeamOtherWorkOrdersLV.pcf: line 32, column 31
    function condition_3 () : java.lang.Boolean {
      return job.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamOtherWorkOrdersLV.pcf: line 44, column 72
    function valueRoot_10 () : java.lang.Object {
      return job.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamOtherWorkOrdersLV.pcf: line 66, column 52
    function valueRoot_24 () : java.lang.Object {
      return job.Policy
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 39, column 36
    function valueRoot_7 () : java.lang.Object {
      return job
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamOtherWorkOrdersLV.pcf: line 49, column 35
    function value_12 () : java.util.Date {
      return job.CreateTime
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at TeamOtherWorkOrdersLV.pcf: line 55, column 34
    function value_17 () : java.lang.String {
      return job.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at TeamOtherWorkOrdersLV.pcf: line 60, column 38
    function value_20 () : java.lang.String {
      return job.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamOtherWorkOrdersLV.pcf: line 66, column 52
    function value_23 () : gw.api.productmodel.Product {
      return job.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at TeamOtherWorkOrdersLV.pcf: line 71, column 36
    function value_28 () : entity.User {
      return job.Underwriter
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at TeamOtherWorkOrdersLV.pcf: line 76, column 41
    function value_31 () : java.lang.String {
      return job.getAllAssigned()
    }
    
    // 'value' attribute on TextCell (id=Type_Cell) at TeamOtherWorkOrdersLV.pcf: line 39, column 36
    function value_6 () : java.lang.String {
      return job.DisplayType
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamOtherWorkOrdersLV.pcf: line 44, column 72
    function value_9 () : java.lang.String {
      return job.Policy.Account.AccountHolderContact.DisplayName
    }
    
    property get job () : entity.Job {
      return getIteratedValue(1) as entity.Job
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamOtherWorkOrdersLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamOtherWorkOrdersLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamOtherWorkOrdersLV.pcf: line 28, column 86
    function filters_0 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewPolicyChangeFilters().FilterOptions
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamOtherWorkOrdersLV.pcf: line 49, column 35
    function sortValue_1 (job :  entity.Job) : java.lang.Object {
      return job.CreateTime
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamOtherWorkOrdersLV.pcf: line 66, column 52
    function sortValue_2 (job :  entity.Job) : java.lang.Object {
      return job.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=OtherWorkOrdersIterator) at TeamOtherWorkOrdersLV.pcf: line 24, column 70
    function value_33 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return otherWorkOrders
    }
    
    property get otherWorkOrders () : gw.api.database.IQueryBeanResult<Job> {
      return getRequireValue("otherWorkOrders", 0) as gw.api.database.IQueryBeanResult<Job>
    }
    
    property set otherWorkOrders ($arg :  gw.api.database.IQueryBeanResult<Job>) {
      setRequireValue("otherWorkOrders", 0, $arg)
    }
    
    
  }
  
  
}