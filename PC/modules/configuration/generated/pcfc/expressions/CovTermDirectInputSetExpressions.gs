package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermDirectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermDirectInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermDirectInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermDirectInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      directCovTerm.Value = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'inputConversion' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function inputConversion_2 (VALUE :  java.lang.String) : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertFromString(VALUE)
    }
    
    // 'label' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function label_1 () : java.lang.Object {
      return directCovTerm.Pattern.DisplayName
    }
    
    // 'outputConversion' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function outputConversion_3 (VALUE :  java.math.BigDecimal) : java.lang.String {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.convertToString(VALUE)
    }
    
    // 'required' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function required_4 () : java.lang.Boolean {
      return directCovTerm.Pattern.Required
    }
    
    // 'validationExpression' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function validationExpression_0 () : java.lang.Object {
      return gw.pcf.coverage.CovTermDirectInputSetHelper.validate(directCovTerm)
    }
    
    // 'value' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function valueRoot_7 () : java.lang.Object {
      return directCovTerm
    }
    
    // 'value' attribute on TextInput (id=DirectTermInput_Input) at CovTermDirectInputSet.pcf: line 19, column 41
    function value_5 () : java.math.BigDecimal {
      return directCovTerm.Value
    }
    
    property get directCovTerm () : gw.api.domain.covterm.DirectCovTerm {
      return getRequireValue("directCovTerm", 0) as gw.api.domain.covterm.DirectCovTerm
    }
    
    property set directCovTerm ($arg :  gw.api.domain.covterm.DirectCovTerm) {
      setRequireValue("directCovTerm", 0, $arg)
    }
    
    
  }
  
  
}