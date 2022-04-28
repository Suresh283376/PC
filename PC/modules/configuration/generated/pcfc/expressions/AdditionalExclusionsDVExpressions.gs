package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/line/common/AdditionalExclusionsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdditionalExclusionsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/line/common/AdditionalExclusionsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdditionalExclusionsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at AdditionalExclusionsDV.pcf: line 20, column 51
    function initialValue_0 () : gw.api.productmodel.ClausePattern[] {
      return coverable == null ? null : filteredExclusions().map(\ excl -> excl.Pattern )
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalExclusionsDV.pcf: line 32, column 28
    function sortBy_1 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.CoverageCategory.Priority
    }
    
    // 'sortBy' attribute on IteratorSort at AdditionalExclusionsDV.pcf: line 35, column 28
    function sortBy_2 (pattern :  gw.api.productmodel.ClausePattern) : java.lang.Object {
      return pattern.Priority
    }
    
    // 'value' attribute on InputIterator (id=addedExclIterator) at AdditionalExclusionsDV.pcf: line 29, column 59
    function value_34 () : gw.api.productmodel.ClausePattern[] {
      return addExclusionsToShow
    }
    
    // 'visible' attribute on InputSet at AdditionalExclusionsDV.pcf: line 23, column 52
    function visible_35 () : java.lang.Boolean {
      return addExclusionsToShow.Count > 0
    }
    
    property get addExclusionsToShow () : gw.api.productmodel.ClausePattern[] {
      return getVariableValue("addExclusionsToShow", 0) as gw.api.productmodel.ClausePattern[]
    }
    
    property set addExclusionsToShow ($arg :  gw.api.productmodel.ClausePattern[]) {
      setVariableValue("addExclusionsToShow", 0, $arg)
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
    
    function filteredExclusions() : Exclusion[] {
      var excllist : Exclusion[]
      if (coverable == null ) {
        return null
      }
      if (includeExclude) {
        return coverable.getExclusionsInCategories( coverageCategories )?.toTypedArray()
      } else {
        return coverable.getExclusionsNotInCategories( coverageCategories )?.toTypedArray()
      }
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/line/common/AdditionalExclusionsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends AdditionalExclusionsDVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_11 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_13 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_15 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_17 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_19 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_21 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_23 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_25 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_27 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_29 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_3 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_31 (def :  pcf.CoverageInputSet_default) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_5 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_7 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_onEnter_9 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.onEnter( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_10 (def :  pcf.CoverageInputSet_BOPToolsSchedCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_12 (def :  pcf.CoverageInputSet_CPBPPCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_14 (def :  pcf.CoverageInputSet_CPBldgCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_16 (def :  pcf.CoverageInputSet_CPBldgStockCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_18 (def :  pcf.CoverageInputSet_HOPCovA) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_20 (def :  pcf.CoverageInputSet_HOPCovB) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_22 (def :  pcf.CoverageInputSet_HOPCovC) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_24 (def :  pcf.CoverageInputSet_HOPCovD) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_26 (def :  pcf.CoverageInputSet_PALiabilityCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_28 (def :  pcf.CoverageInputSet_WCEmpLiabCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_30 (def :  pcf.CoverageInputSet_WCOtherStatesInsurance) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_32 (def :  pcf.CoverageInputSet_default) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_4 (def :  pcf.CoverageInputSet_BOPBuildingCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_6 (def :  pcf.CoverageInputSet_BOPPersonalPropCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'def' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function def_refreshVariables_8 (def :  pcf.CoverageInputSet_BOPSpoilageCov) : void {
      def.refreshVariables( pattern, coverable, CurrentLocation.InEditMode )
    }
    
    // 'mode' attribute on InputSetRef at AdditionalExclusionsDV.pcf: line 38, column 38
    function mode_33 () : java.lang.Object {
      return pattern.PublicID
    }
    
    property get pattern () : gw.api.productmodel.ClausePattern {
      return getIteratedValue(1) as gw.api.productmodel.ClausePattern
    }
    
    
  }
  
  
}