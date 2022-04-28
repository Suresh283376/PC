package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopSubmissionsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopSubmissions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopSubmissionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'afterFailure' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 28, column 125
    function afterFailure_1 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      if (searchCriteria typeis gw.policy.PolicyPeriodSearchCriteria) searchCriteria.resetForSearchItems(Submission, searchText)
    }
    
    // 'canVisit' attribute on Page (id=DesktopSubmissions) at DesktopSubmissions.pcf: line 8, column 64
    static function canVisit_8 () : java.lang.Boolean {
      return perm.System.viewmysubmissions
    }
    
    // 'def' attribute on PanelRef at DesktopSubmissions.pcf: line 31, column 50
    function def_onEnter_6 (def :  pcf.DesktopSubmissionsLV) : void {
      def.onEnter(submissions)
    }
    
    // 'def' attribute on PanelRef at DesktopSubmissions.pcf: line 31, column 50
    function def_refreshVariables_7 (def :  pcf.DesktopSubmissionsLV) : void {
      def.refreshVariables(submissions)
    }
    
    // 'initialValue' attribute on Variable at DesktopSubmissions.pcf: line 15, column 66
    function initialValue_0 () : gw.api.database.IQueryBeanResult<entity.Job> {
      return Job.finder.findSubmissionsAndIssuancesByUser(User.util.CurrentUser)
    }
    
    // 'onFailure' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 28, column 125
    function onFailure_2 (searchText :  java.lang.String) : pcf.api.Location {
      return PolicySearch.go()
    }
    
    // 'onResult' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 28, column 125
    function onResult_3 (result :  java.lang.Object) : void {
      JobForward.go(result as Job)
    }
    
    // Page (id=DesktopSubmissions) at DesktopSubmissions.pcf: line 8, column 64
    static function parent_9 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'search' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 28, column 125
    function search_4 (searchText :  java.lang.String) : java.lang.Object {
      return searchSubmission(searchText)
    }
    
    // 'validationError' attribute on SearchItem (id=SubmissionSearch_widget) at DesktopSubmissions.pcf: line 28, column 125
    function validationError_5 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Policy.SubmissionNumberSearchMenuItem.Error", searchText)
    }
    
    override property get CurrentLocation () : pcf.DesktopSubmissions {
      return super.CurrentLocation as pcf.DesktopSubmissions
    }
    
    property get submissions () : gw.api.database.IQueryBeanResult<entity.Job> {
      return getVariableValue("submissions", 0) as gw.api.database.IQueryBeanResult<entity.Job>
    }
    
    property set submissions ($arg :  gw.api.database.IQueryBeanResult<entity.Job>) {
      setVariableValue("submissions", 0, $arg)
    }
    
    function searchSubmission (searchText : String) : Job{
      var result = Job.finder.findJobByJobNumber(searchText) 
      if (result == null or not perm.Job.view(result)) 
        return null
      return result
    }
    
    
  }
  
  
}