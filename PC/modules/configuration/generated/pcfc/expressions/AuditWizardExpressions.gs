package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AuditWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/audit/AuditWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AuditWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (audit :  Audit, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function acceleratedMenuActions_onEnter_16 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.onEnter()
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function acceleratedMenuActions_refreshVariables_17 (def :  pcf.BlankAcceleratedMenuActions) : void {
      def.refreshVariables()
    }
    
    // 'canEdit' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function canEdit_18 () : java.lang.Boolean {
      return (not job.Complete) and perm.Audit.edit
    }
    
    // 'canVisit' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    static function canVisit_19 (audit :  Audit, policyPeriod :  PolicyPeriod) : java.lang.Boolean {
      return perm.Audit.view
    }
    
    // 'def' attribute on WizardStepSetRef at AuditWizard.pcf: line 70, column 77
    function def_onEnter_14 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod)
    }
    
    // 'def' attribute on WizardStepSetRef at AuditWizard.pcf: line 70, column 77
    function def_refreshVariables_15 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function infoBar_onEnter_20 (def :  pcf.AuditWizardInfoBar) : void {
      def.onEnter(policyPeriod, audit)
    }
    
    // 'infoBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function infoBar_refreshVariables_21 (def :  pcf.AuditWizardInfoBar) : void {
      def.refreshVariables(policyPeriod, audit)
    }
    
    // 'initialStep' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function initialStep_30 () : java.lang.String {
      return jobWizardHelper.getInitialWizardStepId( policyPeriod )
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 31, column 28
    function initialValue_0 () : entity.Audit {
      return audit
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 36, column 29
    function initialValue_1 () : entity.Policy {
      return audit.Policy
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 43, column 46
    function initialValue_2 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at AuditWizard.pcf: line 48, column 75
    function initialValue_3 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'menuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function menuActions_onEnter_22 (def :  pcf.AuditWizardMenuActions) : void {
      def.onEnter(job, policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function menuActions_refreshVariables_23 (def :  pcf.AuditWizardMenuActions) : void {
      def.refreshVariables(job, policyPeriod)
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function onConcurrentDataChange_24 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 68, column 73
    function onExit_10 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Summary) at AuditWizard.pcf: line 54, column 72
    function onExit_4 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Details) at AuditWizard.pcf: line 60, column 72
    function onExit_7 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    static function parent_25 (audit :  Audit, policyPeriod :  PolicyPeriod) : pcf.api.Destination {
      return pcf.JobForward.createDestination(audit)
    }
    
    // 'screen' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 68, column 73
    function screen_onEnter_11 (def :  pcf.AuditWizard_PremiumsScreen) : void {
      def.onEnter(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Summary) at AuditWizard.pcf: line 54, column 72
    function screen_onEnter_5 (def :  pcf.AuditWizard_SummaryScreen) : void {
      def.onEnter(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Details) at AuditWizard.pcf: line 60, column 72
    function screen_onEnter_8 (def :  pcf.AuditWizard_DetailsScreen) : void {
      def.onEnter(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 68, column 73
    function screen_refreshVariables_12 (def :  pcf.AuditWizard_PremiumsScreen) : void {
      def.refreshVariables(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Summary) at AuditWizard.pcf: line 54, column 72
    function screen_refreshVariables_6 (def :  pcf.AuditWizard_SummaryScreen) : void {
      def.refreshVariables(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Details) at AuditWizard.pcf: line 60, column 72
    function screen_refreshVariables_9 (def :  pcf.AuditWizard_DetailsScreen) : void {
      def.refreshVariables(audit, policyPeriod, jobWizardHelper)
    }
    
    // 'subtitle' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function subtitle_29 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function tabBar_onEnter_26 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    function tabBar_refreshVariables_27 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=AuditWizard) at AuditWizard.pcf: line 22, column 80
    static function title_28 (audit :  Audit, policyPeriod :  PolicyPeriod) : java.lang.Object {
      return DisplayKey.get("Web.AuditWizard.Title", audit.JobNumber)
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Premiums) at AuditWizard.pcf: line 68, column 73
    function wizardStepAvailable_13 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    override property get CurrentLocation () : pcf.AuditWizard {
      return super.CurrentLocation as pcf.AuditWizard
    }
    
    property get audit () : Audit {
      return getVariableValue("audit", 0) as Audit
    }
    
    property set audit ($arg :  Audit) {
      setVariableValue("audit", 0, $arg)
    }
    
    property get job () : entity.Audit {
      return getVariableValue("job", 0) as entity.Audit
    }
    
    property set job ($arg :  entity.Audit) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEditInit () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return getVariableValue("openForEditInit", 0) as gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>
    }
    
    property set openForEditInit ($arg :  gw.util.concurrent.LocklessLazyVar<java.lang.Boolean>) {
      setVariableValue("openForEditInit", 0, $arg)
    }
    
    property get policy () : entity.Policy {
      return getVariableValue("policy", 0) as entity.Policy
    }
    
    property set policy ($arg :  entity.Policy) {
      setVariableValue("policy", 0, $arg)
    }
    
    property get policyPeriod () : PolicyPeriod {
      return getVariableValue("policyPeriod", 0) as PolicyPeriod
    }
    
    property set policyPeriod ($arg :  PolicyPeriod) {
      setVariableValue("policyPeriod", 0, $arg)
    }
    
    
  }
  
  
}