package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateBookSearchScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateBookSearchScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    property get displayImportResults () : boolean {
      return getRequireValue("displayImportResults", 0) as java.lang.Boolean
    }
    
    property set displayImportResults ($arg :  boolean) {
      setRequireValue("displayImportResults", 0, $arg)
    }
    
    property get initialRateBook () : RateBook {
      return getRequireValue("initialRateBook", 0) as RateBook
    }
    
    property set initialRateBook ($arg :  RateBook) {
      setRequireValue("initialRateBook", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateBookSearchScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends RateBookSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 21, column 49
    function def_onEnter_0 (def :  pcf.RateBookSearchDV) : void {
      def.onEnter(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 23, column 60
    function def_onEnter_2 (def :  pcf.RateBookPanelSet) : void {
      def.onEnter(rateBooks, initialRateBook)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 21, column 49
    function def_refreshVariables_1 (def :  pcf.RateBookSearchDV) : void {
      def.refreshVariables(searchCriteria)
    }
    
    // 'def' attribute on PanelRef at RateBookSearchScreen.pcf: line 23, column 60
    function def_refreshVariables_3 (def :  pcf.RateBookPanelSet) : void {
      def.refreshVariables(rateBooks, initialRateBook)
    }
    
    // 'searchCriteria' attribute on SearchPanel at RateBookSearchScreen.pcf: line 19, column 83
    function searchCriteria_5 () : gw.rating.rtm.query.RateBookSearchCriteria {
      return new gw.rating.rtm.query.RateBookSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at RateBookSearchScreen.pcf: line 19, column 83
    function search_4 () : java.lang.Object {
      return searchCriteria.performSearch()
    }
    
    property get rateBooks () : gw.api.database.IQueryBeanResult<entity.RateBook> {
      return getResultsValue(1) as gw.api.database.IQueryBeanResult<entity.RateBook>
    }
    
    property get searchCriteria () : gw.rating.rtm.query.RateBookSearchCriteria {
      return getCriteriaValue(1) as gw.rating.rtm.query.RateBookSearchCriteria
    }
    
    property set searchCriteria ($arg :  gw.rating.rtm.query.RateBookSearchCriteria) {
      setCriteriaValue(1, $arg)
    }
    
    
  }
  
  
}