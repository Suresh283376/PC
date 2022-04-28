package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_TypekeyExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.Typekey.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      typekeyTerm.Value = (__VALUE_TO_SET as gw.entity.TypeKey)
    }
    
    // 'initialValue' attribute on Variable at CovTermInputSet.Typekey.pcf: line 17, column 52
    function initialValue_0 () : gw.api.domain.covterm.TypekeyCovTerm {
      return term as gw.api.domain.covterm.TypekeyCovTerm
    }
    
    // 'label' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function label_1 () : java.lang.Object {
      return typekeyTerm.Pattern.DisplayName
    }
    
    // 'required' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function required_2 () : java.lang.Boolean {
      return typekeyTerm.Pattern.Required
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function valueRange_6 () : java.lang.Object {
      return typekeyTerm?.Pattern.OrderedAvailableValues
    }
    
    // 'value' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function valueRoot_5 () : java.lang.Object {
      return typekeyTerm
    }
    
    // 'value' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function value_3 () : gw.entity.TypeKey {
      return typekeyTerm.Value
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  gw.entity.TypeKey[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function verifyValueRangeIsAllowedType_7 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TypekeyTermInput_Input) at CovTermInputSet.Typekey.pcf: line 25, column 38
    function verifyValueRange_8 () : void {
      var __valueRangeArg = typekeyTerm?.Pattern.OrderedAvailableValues
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
    
    property get typekeyTerm () : gw.api.domain.covterm.TypekeyCovTerm {
      return getVariableValue("typekeyTerm", 0) as gw.api.domain.covterm.TypekeyCovTerm
    }
    
    property set typekeyTerm ($arg :  gw.api.domain.covterm.TypekeyCovTerm) {
      setVariableValue("typekeyTerm", 0, $arg)
    }
    
    
  }
  
  
}