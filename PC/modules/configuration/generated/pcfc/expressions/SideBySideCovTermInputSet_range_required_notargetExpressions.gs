package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.range_required_notarget.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SideBySideCovTermInputSet_range_required_notargetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/SideBySideCovTermInputSet.range_required_notarget.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SideBySideCovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'colspan' attribute on LayoutConfig at SideBySideCovTermInputSet.range_required_notarget.pcf: line 50, column 95
    function colspan_13 () : java.lang.Integer {
      return colWidth
    }
    
    // 'value' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.RangeValue = __VALUE_TO_SET
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 23, column 28
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      covTermInfo.CovInfo.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'disablePostOnEnter' attribute on PostOnChange at SideBySideCovTermInputSet.range_required_notarget.pcf: line 53, column 68
    function disablePostOnEnter_15 () : java.lang.Boolean {
      return not (covTermInfo.AssociatedPeriodRatedOrQuoted or covTermInfo.AlwaysPostOnChange)
    }
    
    // 'editable' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function editable_18 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.Editable
    }
    
    // 'editable' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 23, column 28
    function editable_2 () : java.lang.Boolean {
      return covTermInfo.CovInfo.PeriodInfo.SxSEditable and covTermInfo.CovInfo.AllowToggle
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.range_required_notarget.pcf: line 27, column 68
    function onChange_1 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'onChange' attribute on PostOnChange at SideBySideCovTermInputSet.range_required_notarget.pcf: line 53, column 68
    function onChange_16 () : void {
      covTermInfo.CovInfo.coverageSelectionRefresh()
    }
    
    // 'tdClass' attribute on LayoutConfig at SideBySideCovTermInputSet.range_required_notarget.pcf: line 25, column 95
    function tdClass_0 () : java.lang.String {
      return "pc-sxs-col-" + (covTermInfo.CovInfo.PeriodInfo.ColumnIndex % 2)
    }
    
    // 'validationExpression' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function validationExpression_19 () : java.lang.Object {
      return (covTermInfo.CovTermPattern.Required and covTermInfo.RangeValue == null) ? DisplayKey.get("Web.Job.SideBySide.Errors.RequiredCovTerm", covTermInfo.CovTermPattern.Name) : null
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function valueRange_23 () : java.lang.Object {
      return covTermInfo.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function valueRoot_22 () : java.lang.Object {
      return covTermInfo
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 23, column 28
    function valueRoot_6 () : java.lang.Object {
      return covTermInfo.CovInfo
    }
    
    // 'value' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function value_20 () : java.lang.Object {
      return covTermInfo.RangeValue
    }
    
    // 'value' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 23, column 28
    function value_4 () : java.lang.Boolean {
      return covTermInfo.CovInfo.Selected
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.lang.Object[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function verifyValueRangeIsAllowedType_24 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=SideBySideRangeCovTermValue_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 47, column 36
    function verifyValueRange_25 () : void {
      var __valueRangeArg = covTermInfo.OrderedAvailableValues
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_24(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=rangeSpacer_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 34, column 29
    function visible_11 () : java.lang.Boolean {
      return !selectable
    }
    
    // 'visible' attribute on CheckBoxInput (id=covTermEnabledId_Input) at SideBySideCovTermInputSet.range_required_notarget.pcf: line 23, column 28
    function visible_3 () : java.lang.Boolean {
      return selectable
    }
    
    property get colWidth () : int {
      return getRequireValue("colWidth", 0) as java.lang.Integer
    }
    
    property set colWidth ($arg :  int) {
      setRequireValue("colWidth", 0, $arg)
    }
    
    property get covTermInfo () : gw.job.sxs.SideBySideCovTermInfo {
      return getRequireValue("covTermInfo", 0) as gw.job.sxs.SideBySideCovTermInfo
    }
    
    property set covTermInfo ($arg :  gw.job.sxs.SideBySideCovTermInfo) {
      setRequireValue("covTermInfo", 0, $arg)
    }
    
    property get selectable () : boolean {
      return getRequireValue("selectable", 0) as java.lang.Boolean
    }
    
    property set selectable ($arg :  boolean) {
      setRequireValue("selectable", 0, $arg)
    }
    
    
  }
  
  
}