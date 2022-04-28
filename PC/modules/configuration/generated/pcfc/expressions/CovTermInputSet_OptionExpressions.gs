package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_OptionExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Option.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>).OptionValue = (__VALUE_TO_SET as gw.api.productmodel.CovTermOpt<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>)
    }
    
    // 'editable' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function editable_0 () : java.lang.Boolean {
      return openForEdit and gw.web.productmodel.ChoiceCovTermUtil.isEditable(term)
    }
    
    // 'label' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function label_1 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function required_2 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function valueRange_6 () : java.lang.Object {
      return gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(term as gw.api.domain.covterm.OptionCovTerm, openForEdit)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function valueRoot_5 () : java.lang.Object {
      return (term as gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>)
    }
    
    // 'value' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function value_3 () : gw.api.productmodel.CovTermOpt<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>> {
      return (term as gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>).OptionValue
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.api.productmodel.CovTermOpt<gw.api.domain.covterm.OptionCovTerm<gw.api.domain.covterm.OptionCovTerm>>[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=OptionTermInput_Input) at CovTermInputSet.Option.pcf: line 22, column 137
    function verifyValueRange_8 () : void {
      var __valueRangeArg = gw.web.productmodel.ChoiceCovTermUtil.getModelValueRange(term as gw.api.domain.covterm.OptionCovTerm, openForEdit)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_7(__valueRangeArg)
    }
    
    property get openForEdit () : boolean {
      return getRequireValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  boolean) {
      setRequireValue("openForEdit", 0, $arg)
    }
    
    property get term () : gw.api.domain.covterm.CovTerm {
      return getRequireValue("term", 0) as gw.api.domain.covterm.CovTerm
    }
    
    property set term ($arg :  gw.api.domain.covterm.CovTerm) {
      setRequireValue("term", 0, $arg)
    }
    
    
  }
  
  
}