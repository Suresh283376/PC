package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RewriteWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/rewrite/RewriteWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RewriteWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (rewrite :  Rewrite, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (rewrite :  Rewrite, policyPeriod :  PolicyPeriod, wizardStep :  String) : int {
      return 1
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function acceleratedMenuActions_onEnter_78 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.onEnter(rewrite, policyPeriod, jobWizardHelper)
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function acceleratedMenuActions_refreshVariables_79 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.refreshVariables(rewrite, policyPeriod, jobWizardHelper)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function beforeSave_10 () : void {
      gw.policy.PolicyPeriodValidation.validateOfferingAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function beforeSave_69 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function canEdit_80 () : java.lang.Boolean {
      return (not job.Complete) and perm.Rewrite.edit(rewrite)
    }
    
    // 'canVisit' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    static function canVisit_81 (policyPeriod :  PolicyPeriod, rewrite :  Rewrite, wizardStep :  String) : java.lang.Boolean {
      return perm.Rewrite.view(rewrite)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_21 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_23 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_25 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_27 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_29 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_31 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_33 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_35 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_37 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_onEnter_39 (def :  pcf.LineWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 146, column 77
    function def_onEnter_76 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_22 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_24 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_26 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_28 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_30 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_32 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_34 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_36 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_38 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function def_refreshVariables_40 (def :  pcf.LineWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod,jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at RewriteWizard.pcf: line 146, column 77
    function def_refreshVariables_77 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function infoBar_onEnter_82 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(rewrite, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function infoBar_refreshVariables_83 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(rewrite, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function initialStep_92 () : java.lang.String {
      return wizardStep == null ? jobWizardHelper.getInitialWizardStepId( policyPeriod ) : wizardStep
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 37, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 42, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 47, column 30
    function initialValue_2 () : entity.Account {
      return policyPeriod.Policy.Account
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 51, column 30
    function initialValue_3 () : entity.Rewrite {
      return rewrite
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 56, column 29
    function initialValue_4 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 60, column 22
    function initialValue_5 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 64, column 46
    function initialValue_6 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 69, column 23
    function initialValue_7 () : boolean {
      return !policyPeriod.Promoted and perm.Rewrite.edit(rewrite)
    }
    
    // 'initialValue' attribute on Variable at RewriteWizard.pcf: line 76, column 65
    function initialValue_8 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'menuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function menuActions_onEnter_84 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,rewrite,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function menuActions_refreshVariables_85 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,rewrite,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at RewriteWizard.pcf: line 98, column 41
    function mode_41 () : java.lang.Object {
      return policy.Product.PublicID
    }
    
    // 'mode' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function mode_57 () : java.lang.Object {
      return productCode
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function onConcurrentDataChange_86 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function onEnter_11 () : void {
      if ( openForEdit ) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(policyPeriod, jobWizardHelper );                                                  gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 95, column 75
    function onEnter_16 () : void {
      if ( openForEdit ) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm( policyPeriod, jobWizardHelper ) }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 112, column 69
    function onEnter_47 () : void {
      policyPeriod.AllAccountSyncables.each(\ a -> a.prepareForDiff())
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function onEnter_70 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function onExit_12 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); if ( openForEdit) {                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper);                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyLines(jobWizardHelper)               }
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 95, column 75
    function onExit_17 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 106, column 151
    function onExit_43 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 112, column 69
    function onExit_48 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 119, column 42
    function onExit_52 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function onExit_58 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 134, column 87
    function onExit_64 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function onExit_71 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    static function parent_87 (policyPeriod :  PolicyPeriod, rewrite :  Rewrite, wizardStep :  String) : pcf.api.Destination {
      return pcf.JobForward.createDestination(rewrite)
    }
    
    // 'save' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function save_13 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function save_72 () : java.lang.Boolean {
      return (!policyPeriod.Promoted and perm.Rewrite.edit(rewrite))
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function screen_onEnter_14 (def :  pcf.OfferingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 95, column 75
    function screen_onEnter_19 (def :  pcf.RewriteWizard_PolicyInfoScreen) : void {
      def.onEnter(policyPeriod, rewrite, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 106, column 151
    function screen_onEnter_45 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 112, column 69
    function screen_onEnter_49 (def :  pcf.RewriteWizard_DifferencesScreen) : void {
      def.onEnter(policyPeriod,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 119, column 42
    function screen_onEnter_53 (def :  pcf.RewriteWizard_QuoteScreen) : void {
      def.onEnter(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function screen_onEnter_59 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function screen_onEnter_61 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 134, column 87
    function screen_onEnter_66 (def :  pcf.FormsScreen) : void {
      def.onEnter(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function screen_onEnter_73 (def :  pcf.RewriteWizard_PaymentScreen) : void {
      def.onEnter(rewrite, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function screen_refreshVariables_15 (def :  pcf.OfferingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at RewriteWizard.pcf: line 95, column 75
    function screen_refreshVariables_20 (def :  pcf.RewriteWizard_PolicyInfoScreen) : void {
      def.refreshVariables(policyPeriod, rewrite, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 106, column 151
    function screen_refreshVariables_46 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at RewriteWizard.pcf: line 112, column 69
    function screen_refreshVariables_50 (def :  pcf.RewriteWizard_DifferencesScreen) : void {
      def.refreshVariables(policyPeriod,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 119, column 42
    function screen_refreshVariables_54 (def :  pcf.RewriteWizard_QuoteScreen) : void {
      def.refreshVariables(job, policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function screen_refreshVariables_60 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function screen_refreshVariables_62 (def :  pcf.RewriteWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(job, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 134, column 87
    function screen_refreshVariables_67 (def :  pcf.FormsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit,jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function screen_refreshVariables_74 (def :  pcf.RewriteWizard_PaymentScreen) : void {
      def.refreshVariables(rewrite, policyPeriod, billingPageEditable, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'subtitle' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function subtitle_91 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function tabBar_onEnter_88 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    function tabBar_refreshVariables_89 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=RewriteWizard) at RewriteWizard.pcf: line 22, column 84
    static function title_90 (policyPeriod :  PolicyPeriod, rewrite :  Rewrite, wizardStep :  String) : java.lang.Object {
      return DisplayKey.get("Web.RewriteWizard.Title", rewrite.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at RewriteWizard.pcf: line 106, column 151
    function visible_42 () : java.lang.Boolean {
      return perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 119, column 42
    function visible_51 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at RewriteWizard.pcf: line 127, column 41
    function visible_56 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=Offering) at RewriteWizard.pcf: line 85, column 56
    function visible_9 () : java.lang.Boolean {
      return policy.Product.Offerings.Count > 0
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at RewriteWizard.pcf: line 119, column 42
    function wizardStepAvailable_55 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Forms) at RewriteWizard.pcf: line 134, column 87
    function wizardStepAvailable_68 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewForms()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at RewriteWizard.pcf: line 144, column 70
    function wizardStepAvailable_75 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.RewriteWizard {
      return super.CurrentLocation as pcf.RewriteWizard
    }
    
    property get account () : entity.Account {
      return getVariableValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get billingPageEditable () : boolean {
      return getVariableValue("billingPageEditable", 0) as java.lang.Boolean
    }
    
    property set billingPageEditable ($arg :  boolean) {
      setVariableValue("billingPageEditable", 0, $arg)
    }
    
    property get job () : entity.Rewrite {
      return getVariableValue("job", 0) as entity.Rewrite
    }
    
    property set job ($arg :  entity.Rewrite) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get openForEdit () : java.lang.Boolean {
      return getVariableValue("openForEdit", 0) as java.lang.Boolean
    }
    
    property set openForEdit ($arg :  java.lang.Boolean) {
      setVariableValue("openForEdit", 0, $arg)
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
    
    property get policyPeriodBillingInstructionsManager () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return getVariableValue("policyPeriodBillingInstructionsManager", 0) as gw.billing.PolicyPeriodBillingInstructionsManager
    }
    
    property set policyPeriodBillingInstructionsManager ($arg :  gw.billing.PolicyPeriodBillingInstructionsManager) {
      setVariableValue("policyPeriodBillingInstructionsManager", 0, $arg)
    }
    
    property get productCode () : String {
      return getVariableValue("productCode", 0) as String
    }
    
    property set productCode ($arg :  String) {
      setVariableValue("productCode", 0, $arg)
    }
    
    property get rewrite () : Rewrite {
      return getVariableValue("rewrite", 0) as Rewrite
    }
    
    property set rewrite ($arg :  Rewrite) {
      setVariableValue("rewrite", 0, $arg)
    }
    
    property get wizardStep () : String {
      return getVariableValue("wizardStep", 0) as String
    }
    
    property set wizardStep ($arg :  String) {
      setVariableValue("wizardStep", 0, $arg)
    }
    
    
  }
  
  
}