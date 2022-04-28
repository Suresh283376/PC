package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/AdditionalCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalCoveragesPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/AdditionalCoveragesPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalCoveragesPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=Add) at AdditionalCoveragesPanelSet.pcf: line 24, column 113
    function action_0 () : void {
      CoveragePatternSearchPopup.push(coverable, CoveragePatternSearchType.TC_COVERAGE, coverageCategories, includeExclude)
    }
    
    // 'action' attribute on PickerToolbarButton (id=Add) at AdditionalCoveragesPanelSet.pcf: line 24, column 113
    function action_dest_1 () : pcf.api.Destination {
      return pcf.CoveragePatternSearchPopup.createDestination(coverable, CoveragePatternSearchType.TC_COVERAGE, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef at AdditionalCoveragesPanelSet.pcf: line 17, column 82
    function def_onEnter_3 (def :  pcf.AdditionalCoveragesDV) : void {
      def.onEnter(coverable, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef at AdditionalCoveragesPanelSet.pcf: line 17, column 82
    function def_refreshVariables_4 (def :  pcf.AdditionalCoveragesDV) : void {
      def.refreshVariables(coverable, coverageCategories, includeExclude)
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=Add) at AdditionalCoveragesPanelSet.pcf: line 24, column 113
    function onPick_2 (PickedValue :  gw.api.productmodel.ClausePattern[]) : void {
      createCoverageList(PickedValue.whereTypeIs( gw.api.productmodel.CoveragePattern ).toList())
    }
    
    property get coverable () : Coverable {
      return getRequireValue("coverable", 0) as Coverable
    }
    
    property set coverable ($arg :  Coverable) {
      setRequireValue("coverable", 0, $arg)
    }
    
    property get coverageCategories () : String[] {
      return getRequireValue("coverageCategories", 0) as String[]
    }
    
    property set coverageCategories ($arg :  String[]) {
      setRequireValue("coverageCategories", 0, $arg)
    }
    
    property get includeExclude () : boolean {
      return getRequireValue("includeExclude", 0) as java.lang.Boolean
    }
    
    property set includeExclude ($arg :  boolean) {
      setRequireValue("includeExclude", 0, $arg)
    }
    
    function createCoverageList(patterns: java.util.List<gw.api.productmodel.CoveragePattern>) {
                        for (pattern in patterns) {
                            coverable.createCoverage(pattern)
                        }
                    }
    
    
  }
  
  
}