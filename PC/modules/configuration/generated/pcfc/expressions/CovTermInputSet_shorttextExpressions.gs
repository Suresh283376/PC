package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.shorttext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_shorttextExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.shorttext.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=StringTermInput_Input) at CovTermInputSet.shorttext.pcf: line 19, column 83
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.GenericCovTerm<String>).Value = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'label' attribute on TextInput (id=StringTermInput_Input) at CovTermInputSet.shorttext.pcf: line 19, column 83
    function label_0 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'required' attribute on TextInput (id=StringTermInput_Input) at CovTermInputSet.shorttext.pcf: line 19, column 83
    function required_1 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'value' attribute on TextInput (id=StringTermInput_Input) at CovTermInputSet.shorttext.pcf: line 19, column 83
    function valueRoot_4 () : java.lang.Object {
      return (term as gw.api.domain.covterm.GenericCovTerm<String>)
    }
    
    // 'value' attribute on TextInput (id=StringTermInput_Input) at CovTermInputSet.shorttext.pcf: line 19, column 83
    function value_2 () : java.lang.String {
      return (term as gw.api.domain.covterm.GenericCovTerm<String>).Value
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