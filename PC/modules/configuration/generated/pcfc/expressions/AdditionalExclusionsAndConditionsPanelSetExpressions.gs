package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/AdditionalExclusionsAndConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalExclusionsAndConditionsPanelSetExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/AdditionalExclusionsAndConditionsPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalExclusionsAndConditionsPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddExclusionsOrCondition) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 24, column 66
    function action_0 () : void {
      CoveragePatternSearchPopup.push(coverable, CoveragePatternSearchType.TC_EXCLCOND, coverageCategories, includeExclude)
    }
    
    // 'action' attribute on PickerToolbarButton (id=AddExclusionsOrCondition) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 24, column 66
    function action_dest_1 () : pcf.api.Destination {
      return pcf.CoveragePatternSearchPopup.createDestination(coverable, CoveragePatternSearchType.TC_EXCLCOND, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionsPanel) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 29, column 32
    function def_onEnter_3 (def :  pcf.AdditionalExclusionsDV) : void {
      def.onEnter(coverable, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef (id=ConditionsPanel) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 35, column 32
    function def_onEnter_5 (def :  pcf.AdditionalConditionsDV) : void {
      def.onEnter(coverable, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef (id=ExclusionsPanel) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 29, column 32
    function def_refreshVariables_4 (def :  pcf.AdditionalExclusionsDV) : void {
      def.refreshVariables(coverable, coverageCategories, includeExclude)
    }
    
    // 'def' attribute on PanelRef (id=ConditionsPanel) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 35, column 32
    function def_refreshVariables_6 (def :  pcf.AdditionalConditionsDV) : void {
      def.refreshVariables(coverable, coverageCategories, includeExclude)
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=AddExclusionsOrCondition) at AdditionalExclusionsAndConditionsPanelSet.pcf: line 24, column 66
    function onPick_2 (PickedValue :  gw.api.productmodel.ClausePattern[]) : void {
      createExclusionsAndConditions( PickedValue )
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
    
    
                    function createExclusionsAndConditions(patterns: gw.api.productmodel.ClausePattern[]) {
                        for (pattern in patterns) {
                            if (pattern typeis gw.api.productmodel.ExclusionPattern) {
                                coverable.createExclusion(pattern)
                            } else if (pattern typeis gw.api.productmodel.ConditionPattern){
                                coverable.createCondition(pattern)
                            }
                        }
                    }
            
    
    
  }
  
  
}