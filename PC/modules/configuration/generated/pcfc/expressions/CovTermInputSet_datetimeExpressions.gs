package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.datetime.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermInputSet_datetimeExpressions {
  @javax.annotation.Generated("config/web/pcf/shared/coverage/CovTermInputSet.datetime.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateInput (id=DateTimeTermInput_Input) at CovTermInputSet.datetime.pcf: line 19, column 91
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      (term as gw.api.domain.covterm.GenericCovTerm<java.util.Date>).Value = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'label' attribute on DateInput (id=DateTimeTermInput_Input) at CovTermInputSet.datetime.pcf: line 19, column 91
    function label_0 () : java.lang.Object {
      return term.Pattern.DisplayName
    }
    
    // 'required' attribute on DateInput (id=DateTimeTermInput_Input) at CovTermInputSet.datetime.pcf: line 19, column 91
    function required_1 () : java.lang.Boolean {
      return term.Pattern.Required
    }
    
    // 'value' attribute on DateInput (id=DateTimeTermInput_Input) at CovTermInputSet.datetime.pcf: line 19, column 91
    function valueRoot_4 () : java.lang.Object {
      return (term as gw.api.domain.covterm.GenericCovTerm<java.util.Date>)
    }
    
    // 'value' attribute on DateInput (id=DateTimeTermInput_Input) at CovTermInputSet.datetime.pcf: line 19, column 91
    function value_2 () : java.util.Date {
      return (term as gw.api.domain.covterm.GenericCovTerm<java.util.Date>).Value
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