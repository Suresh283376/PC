package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TeamSubmissionsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TeamSubmissionsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 47, column 41
    function action_11 () : void {
      JobForward.go(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamSubmissionsLV.pcf: line 65, column 24
    function action_22 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 47, column 41
    function action_dest_12 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at TeamSubmissionsLV.pcf: line 65, column 24
    function action_dest_23 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'condition' attribute on ToolbarFlag at TeamSubmissionsLV.pcf: line 30, column 31
    function condition_4 () : java.lang.Boolean {
      return submission.CloseDate == null
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamSubmissionsLV.pcf: line 59, column 24
    function valueRoot_20 () : java.lang.Object {
      return submission.Policy
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamSubmissionsLV.pcf: line 37, column 24
    function valueRoot_6 () : java.lang.Object {
      return submission.Policy.Account.AccountHolderContact
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamSubmissionsLV.pcf: line 42, column 42
    function valueRoot_9 () : java.lang.Object {
      return submission
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 47, column 41
    function value_13 () : java.lang.String {
      return submission.JobNumber
    }
    
    // 'value' attribute on TextCell (id=SubmissionStatus_Cell) at TeamSubmissionsLV.pcf: line 52, column 45
    function value_16 () : java.lang.String {
      return submission.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at TeamSubmissionsLV.pcf: line 59, column 24
    function value_19 () : gw.api.productmodel.Product {
      return submission.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at TeamSubmissionsLV.pcf: line 65, column 24
    function value_24 () : entity.User {
      return submission.Underwriter
    }
    
    // 'value' attribute on TextCell (id=AssignedTo_Cell) at TeamSubmissionsLV.pcf: line 71, column 24
    function value_27 () : java.lang.String {
      return submission.getAllAssigned()
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at TeamSubmissionsLV.pcf: line 37, column 24
    function value_5 () : java.lang.String {
      return submission.Policy.Account.AccountHolderContact.DisplayName
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamSubmissionsLV.pcf: line 42, column 42
    function value_8 () : java.util.Date {
      return submission.CreateTime
    }
    
    property get submission () : entity.Submission {
      return getIteratedValue(1) as entity.Submission
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/team/TeamSubmissionsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TeamSubmissionsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at TeamSubmissionsLV.pcf: line 26, column 84
    function filters_0 () : gw.api.filters.IFilter[] {
      return new gw.api.web.team.TeamViewSubmissionFilters().FilterOptions
    }
    
    // 'value' attribute on DateCell (id=CreateDate_Cell) at TeamSubmissionsLV.pcf: line 42, column 42
    function sortValue_1 (submission :  entity.Submission) : java.lang.Object {
      return submission.CreateTime
    }
    
    // 'value' attribute on TextCell (id=SubmissionNumber_Cell) at TeamSubmissionsLV.pcf: line 47, column 41
    function sortValue_2 (submission :  entity.Submission) : java.lang.Object {
      return submission.JobNumber
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at TeamSubmissionsLV.pcf: line 59, column 24
    function sortValue_3 (submission :  entity.Submission) : java.lang.Object {
      return submission.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator (id=SubmissionsIterator) at TeamSubmissionsLV.pcf: line 22, column 77
    function value_29 () : gw.api.database.IQueryBeanResult<entity.Submission> {
      return submissions
    }
    
    property get submissions () : gw.api.database.IQueryBeanResult<Submission> {
      return getRequireValue("submissions", 0) as gw.api.database.IQueryBeanResult<Submission>
    }
    
    property set submissions ($arg :  gw.api.database.IQueryBeanResult<Submission>) {
      setRequireValue("submissions", 0, $arg)
    }
    
    
  }
  
  
}