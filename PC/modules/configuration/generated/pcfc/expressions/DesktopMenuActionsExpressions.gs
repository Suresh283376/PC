package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopMenuActionsExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopMenuActions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopMenuActionsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewSubmission) at DesktopMenuActions.pcf: line 17, column 49
    function action_1 () : void {
      NewSubmission.go()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewAccount) at DesktopMenuActions.pcf: line 21, column 69
    function action_3 () : void {
      NewAccount.go()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_LoadAndVacation) at DesktopMenuActions.pcf: line 26, column 23
    function action_5 () : void {
      LoadFactorsPopup.push()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewSubmission) at DesktopMenuActions.pcf: line 17, column 49
    function action_dest_2 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_NewAccount) at DesktopMenuActions.pcf: line 21, column 69
    function action_dest_4 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=DesktopMenuActions_LoadAndVacation) at DesktopMenuActions.pcf: line 26, column 23
    function action_dest_6 () : pcf.api.Destination {
      return pcf.LoadFactorsPopup.createDestination()
    }
    
    // 'visible' attribute on MenuItem (id=DesktopMenuActions_NewSubmission) at DesktopMenuActions.pcf: line 17, column 49
    function visible_0 () : java.lang.Boolean {
      return perm.System.createsubmission
    }
    
    
  }
  
  
}