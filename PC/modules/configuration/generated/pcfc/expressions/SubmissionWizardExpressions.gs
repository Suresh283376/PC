package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SubmissionWizardExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/SubmissionWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SubmissionWizardExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (submission :  Submission, policyPeriod :  PolicyPeriod) : int {
      return 0
    }
    
    static function __constructorIndex (submission :  Submission, policyPeriod :  PolicyPeriod, wizardStep :  String) : int {
      return 1
    }
    
    static function __constructorIndex (submission :  Submission, policyPeriod :  PolicyPeriod, locationPublicID :  String, wizardStep :  String) : int {
      return 2
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function acceleratedMenuActions_onEnter_90 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.onEnter(submission, policyPeriod, jobWizardHelper)
    }
    
    // 'acceleratedMenuActions' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function acceleratedMenuActions_refreshVariables_91 (def :  pcf.MultiQuoteAcceleratedMenuActions) : void {
      def.refreshVariables(submission, policyPeriod, jobWizardHelper)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function beforeSave_12 () : void {
      gw.policy.PolicyPeriodValidation.validateOfferingAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=PreQualification) at SubmissionWizard.pcf: line 107, column 35
    function beforeSave_19 () : void {
      gw.question.IncorrectAnswerProcessor.processIncorrectAnswers(policyPeriod, incorrectAnswerMap); gw.policy.PolicyPeriodValidation.validatePreQualAnswers(policyPeriod)
    }
    
    // 'beforeSave' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function beforeSave_81 () : void {
      policyPeriodBillingInstructionsManager.saveStateToPolicyPeriod(policyPeriod)
    }
    
    // 'canEdit' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function canEdit_92 () : java.lang.Boolean {
      return (not job.Complete) and perm.Submission.edit(submission)
    }
    
    // 'canVisit' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    static function canVisit_93 (locationPublicID :  String, policyPeriod :  PolicyPeriod, submission :  Submission, wizardStep :  String) : java.lang.Boolean {
      return perm.Submission.view(submission)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_31 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_33 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_35 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_37 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_39 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_41 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_43 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_45 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_47 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_onEnter_49 (def :  pcf.LineWizardStepSet_default) : void {
      def.onEnter(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 173, column 77
    function def_onEnter_88 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.onEnter(jobWizardHelper, policyPeriod)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_32 (def :  pcf.LineWizardStepSet_BusinessAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_34 (def :  pcf.LineWizardStepSet_BusinessOwners) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_36 (def :  pcf.LineWizardStepSet_CommercialPackage) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_38 (def :  pcf.LineWizardStepSet_CommercialProperty) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_40 (def :  pcf.LineWizardStepSet_GeneralLiability) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_42 (def :  pcf.LineWizardStepSet_HOPHomeowners) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_44 (def :  pcf.LineWizardStepSet_InlandMarine) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_46 (def :  pcf.LineWizardStepSet_PersonalAuto) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_48 (def :  pcf.LineWizardStepSet_WorkersComp) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function def_refreshVariables_50 (def :  pcf.LineWizardStepSet_default) : void {
      def.refreshVariables(job, policyPeriod, jobWizardHelper, openForEdit)
    }
    
    // 'def' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 173, column 77
    function def_refreshVariables_89 (def :  pcf.JobWizardToolsMenuWizardStepSet) : void {
      def.refreshVariables(jobWizardHelper, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function infoBar_onEnter_94 (def :  pcf.JobWizardInfoBar) : void {
      def.onEnter(submission, policyPeriod)
    }
    
    // 'infoBar' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function infoBar_refreshVariables_95 (def :  pcf.JobWizardInfoBar) : void {
      def.refreshVariables(submission, policyPeriod)
    }
    
    // 'initialStep' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function initialStep_104 () : java.lang.String {
      return wizardStep == null ? jobWizardHelper.getInitialWizardStepId( policyPeriod ) : wizardStep
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 39, column 75
    function initialValue_0 () : gw.util.concurrent.LocklessLazyVar<java.lang.Boolean> {
      return gw.util.concurrent.LocklessLazyVar.make(\ -> policyPeriod.OpenForEdit)
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 44, column 33
    function initialValue_1 () : java.lang.Boolean {
      return openForEditInit.get()
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 89, column 65
    function initialValue_10 () : gw.billing.PolicyPeriodBillingInstructionsManager {
      return new gw.billing.PolicyPeriodBillingInstructionsManager()
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 48, column 33
    function initialValue_2 () : entity.Submission {
      return submission
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 53, column 29
    function initialValue_3 () : entity.Policy {
      return policyPeriod.Policy
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 58, column 30
    function initialValue_4 () : entity.Account {
      return policy.Account
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 62, column 22
    function initialValue_5 () : String {
      return policy.Product.PublicID
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 66, column 46
    function initialValue_6 () : gw.api.web.job.JobWizardHelper {
      return new gw.api.web.job.JobWizardHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 70, column 23
    function initialValue_7 () : boolean {
      return policy.Product.getAvailableQuestionSetsByType(QuestionSetType.TC_PREQUAL,policyPeriod).Count > 0
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 74, column 23
    function initialValue_8 () : boolean {
      return policy.Product.Offerings.Count > 0
    }
    
    // 'initialValue' attribute on Variable at SubmissionWizard.pcf: line 78, column 73
    function initialValue_9 () : java.util.Map<gw.api.productmodel.Question, String> {
      return new java.util.HashMap<gw.api.productmodel.Question, String>()
    }
    
    // 'menuActions' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function menuActions_onEnter_96 (def :  pcf.WizardMenuActions) : void {
      def.onEnter(jobWizardHelper,submission,policyPeriod)
    }
    
    // 'menuActions' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function menuActions_refreshVariables_97 (def :  pcf.WizardMenuActions) : void {
      def.refreshVariables(jobWizardHelper,submission,policyPeriod)
    }
    
    // 'mode' attribute on WizardStepSetRef at SubmissionWizard.pcf: line 121, column 29
    function mode_51 () : java.lang.Object {
      return productCode
    }
    
    // 'onChange' attribute on JobWizardStep (id=PolicyInfo) at SubmissionWizard.pcf: line 118, column 82
    function onChange_30 () : void {
      handleOnChangeForProduct()
    }
    
    // 'onConcurrentDataChange' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function onConcurrentDataChange_98 () : void {
      CurrentLocation.cancel(); JobForward.go(job)
    }
    
    // 'onEnter' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function onEnter_13 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncOffering(policyPeriod, jobWizardHelper );                                                  gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions({policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PreQualification) at SubmissionWizard.pcf: line 107, column 35
    function onEnter_20 () : void {
      if(openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncQuestions( {policyPeriod}, jobWizardHelper )}
    }
    
    // 'onEnter' attribute on JobWizardStep (id=PolicyInfo) at SubmissionWizard.pcf: line 118, column 82
    function onEnter_25 () : void {
      if (openForEdit) { gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm( policyPeriod, jobWizardHelper ) }
    }
    
    // 'onEnter' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function onEnter_82 () : void {
      policyPeriodBillingInstructionsManager.populateFromPolicyPeriod(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function onExit_14 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod); if (openForEdit) {                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyTerm(policyPeriod, jobWizardHelper);                     gw.web.productmodel.ProductModelSyncIssuesHandler.syncPolicyLines(jobWizardHelper)               }
    }
    
    // 'onExit' attribute on JobWizardStep (id=PreQualification) at SubmissionWizard.pcf: line 107, column 35
    function onExit_21 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyInfo) at SubmissionWizard.pcf: line 118, column 82
    function onExit_26 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=RiskAnalysis) at SubmissionWizard.pcf: line 129, column 189
    function onExit_53 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=PolicyReview) at SubmissionWizard.pcf: line 135, column 93
    function onExit_58 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewQuote) at SubmissionWizard.pcf: line 143, column 42
    function onExit_62 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=ViewMultiLineQuote) at SubmissionWizard.pcf: line 152, column 41
    function onExit_68 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=Forms) at SubmissionWizard.pcf: line 160, column 50
    function onExit_75 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'onExit' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function onExit_83 () : void {
      jobWizardHelper.reloadPolicyPeriodIfAsyncQuoteComplete(policyPeriod)
    }
    
    // 'parent' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    static function parent_99 (locationPublicID :  String, policyPeriod :  PolicyPeriod, submission :  Submission, wizardStep :  String) : pcf.api.Destination {
      return pcf.JobForward.createDestination(submission)
    }
    
    // 'save' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function save_15 () : java.lang.Boolean {
      return openForEdit
    }
    
    // 'save' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function save_84 () : java.lang.Boolean {
      return (!policyPeriod.Promoted) and perm.Submission.edit(submission)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function screen_onEnter_16 (def :  pcf.OfferingScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PreQualification) at SubmissionWizard.pcf: line 107, column 35
    function screen_onEnter_23 (def :  pcf.SubmissionWizard_PreQualificationScreen) : void {
      def.onEnter(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at SubmissionWizard.pcf: line 118, column 82
    function screen_onEnter_28 (def :  pcf.SubmissionWizard_PolicyInfoScreen) : void {
      def.onEnter(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at SubmissionWizard.pcf: line 129, column 189
    function screen_onEnter_55 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at SubmissionWizard.pcf: line 135, column 93
    function screen_onEnter_59 (def :  pcf.SubmissionWizard_PolicyReviewScreen) : void {
      def.onEnter(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at SubmissionWizard.pcf: line 143, column 42
    function screen_onEnter_63 (def :  pcf.SubmissionWizard_QuoteScreen) : void {
      def.onEnter(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at SubmissionWizard.pcf: line 152, column 41
    function screen_onEnter_69 (def :  pcf.SubmissionWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.onEnter(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at SubmissionWizard.pcf: line 152, column 41
    function screen_onEnter_71 (def :  pcf.SubmissionWizard_MultiLine_QuoteScreen_default) : void {
      def.onEnter(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at SubmissionWizard.pcf: line 160, column 50
    function screen_onEnter_77 (def :  pcf.FormsScreen) : void {
      def.onEnter(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function screen_onEnter_85 (def :  pcf.SubmissionWizard_PaymentScreen) : void {
      def.onEnter(submission, policyPeriod, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'screen' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function screen_refreshVariables_17 (def :  pcf.OfferingScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PreQualification) at SubmissionWizard.pcf: line 107, column 35
    function screen_refreshVariables_24 (def :  pcf.SubmissionWizard_PreQualificationScreen) : void {
      def.refreshVariables(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyInfo) at SubmissionWizard.pcf: line 118, column 82
    function screen_refreshVariables_29 (def :  pcf.SubmissionWizard_PolicyInfoScreen) : void {
      def.refreshVariables(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=RiskAnalysis) at SubmissionWizard.pcf: line 129, column 189
    function screen_refreshVariables_56 (def :  pcf.Job_RiskAnalysisScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=PolicyReview) at SubmissionWizard.pcf: line 135, column 93
    function screen_refreshVariables_60 (def :  pcf.SubmissionWizard_PolicyReviewScreen) : void {
      def.refreshVariables(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewQuote) at SubmissionWizard.pcf: line 143, column 42
    function screen_refreshVariables_64 (def :  pcf.SubmissionWizard_QuoteScreen) : void {
      def.refreshVariables(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at SubmissionWizard.pcf: line 152, column 41
    function screen_refreshVariables_70 (def :  pcf.SubmissionWizard_MultiLine_QuoteScreen_CommercialPackage) : void {
      def.refreshVariables(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=ViewMultiLineQuote) at SubmissionWizard.pcf: line 152, column 41
    function screen_refreshVariables_72 (def :  pcf.SubmissionWizard_MultiLine_QuoteScreen_default) : void {
      def.refreshVariables(submission, policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=Forms) at SubmissionWizard.pcf: line 160, column 50
    function screen_refreshVariables_78 (def :  pcf.FormsScreen) : void {
      def.refreshVariables(policyPeriod, openForEdit, jobWizardHelper)
    }
    
    // 'screen' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function screen_refreshVariables_86 (def :  pcf.SubmissionWizard_PaymentScreen) : void {
      def.refreshVariables(submission, policyPeriod, jobWizardHelper, policyPeriodBillingInstructionsManager)
    }
    
    // 'subtitle' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function subtitle_103 () : java.lang.String {
      return policyPeriod.Status.DisplayName
    }
    
    // 'tabBar' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function tabBar_onEnter_100 (def :  pcf.TabBar) : void {
      def.onEnter()
    }
    
    // 'tabBar' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    function tabBar_refreshVariables_101 (def :  pcf.TabBar) : void {
      def.refreshVariables()
    }
    
    // 'title' attribute on JobWizard (id=SubmissionWizard) at SubmissionWizard.pcf: line 22, column 90
    static function title_102 (locationPublicID :  String, policyPeriod :  PolicyPeriod, submission :  Submission, wizardStep :  String) : java.lang.Object {
      return DisplayKey.get("Web.SubmissionWizard.Title", submission.JobNumber)
    }
    
    // 'visible' attribute on JobWizardStep (id=Offering) at SubmissionWizard.pcf: line 98, column 36
    function visible_11 () : java.lang.Boolean {
      return offeringNecessary
    }
    
    // 'visible' attribute on JobWizardStep (id=PreQualification) at SubmissionWizard.pcf: line 107, column 35
    function visible_18 () : java.lang.Boolean {
      return preQualNecessary
    }
    
    // 'visible' attribute on JobWizardStep (id=RiskAnalysis) at SubmissionWizard.pcf: line 129, column 189
    function visible_52 () : java.lang.Boolean {
      return submission.QuoteType == TC_FULL and (perm.System.viewriskevalissues or perm.System.viewriskpriorpolicies or perm.System.viewriskclaims or perm.System.viewriskpriorlosses)
    }
    
    // 'visible' attribute on JobWizardStep (id=PolicyReview) at SubmissionWizard.pcf: line 135, column 93
    function visible_57 () : java.lang.Boolean {
      return submission.QuoteType == TC_FULL and policy.Product.LinePatterns.Count == 1
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewQuote) at SubmissionWizard.pcf: line 143, column 42
    function visible_61 () : java.lang.Boolean {
      return !policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=ViewMultiLineQuote) at SubmissionWizard.pcf: line 152, column 41
    function visible_66 () : java.lang.Boolean {
      return policyPeriod.MultiLine
    }
    
    // 'visible' attribute on JobWizardStep (id=Forms) at SubmissionWizard.pcf: line 160, column 50
    function visible_74 () : java.lang.Boolean {
      return submission.QuoteType == TC_FULL
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=ViewQuote) at SubmissionWizard.pcf: line 143, column 42
    function wizardStepAvailable_65 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewQuote()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=Forms) at SubmissionWizard.pcf: line 160, column 50
    function wizardStepAvailable_79 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewForms()
    }
    
    // '$$wizardStepAvailable' attribute on JobWizardStep (id=BillingInfo) at SubmissionWizard.pcf: line 171, column 50
    function wizardStepAvailable_87 () : java.lang.Boolean {
      return policyPeriod.JobProcess.canViewBillingInfo()
    }
    
    override property get CurrentLocation () : pcf.SubmissionWizard {
      return super.CurrentLocation as pcf.SubmissionWizard
    }
    
    property get account () : entity.Account {
      return getVariableValue("account", 0) as entity.Account
    }
    
    property set account ($arg :  entity.Account) {
      setVariableValue("account", 0, $arg)
    }
    
    property get incorrectAnswerMap () : java.util.Map<gw.api.productmodel.Question, String> {
      return getVariableValue("incorrectAnswerMap", 0) as java.util.Map<gw.api.productmodel.Question, String>
    }
    
    property set incorrectAnswerMap ($arg :  java.util.Map<gw.api.productmodel.Question, String>) {
      setVariableValue("incorrectAnswerMap", 0, $arg)
    }
    
    property get job () : entity.Submission {
      return getVariableValue("job", 0) as entity.Submission
    }
    
    property set job ($arg :  entity.Submission) {
      setVariableValue("job", 0, $arg)
    }
    
    property get jobWizardHelper () : gw.api.web.job.JobWizardHelper {
      return getVariableValue("jobWizardHelper", 0) as gw.api.web.job.JobWizardHelper
    }
    
    property set jobWizardHelper ($arg :  gw.api.web.job.JobWizardHelper) {
      setVariableValue("jobWizardHelper", 0, $arg)
    }
    
    property get locationPublicID () : String {
      return getVariableValue("locationPublicID", 0) as String
    }
    
    property set locationPublicID ($arg :  String) {
      setVariableValue("locationPublicID", 0, $arg)
    }
    
    property get offeringNecessary () : boolean {
      return getVariableValue("offeringNecessary", 0) as java.lang.Boolean
    }
    
    property set offeringNecessary ($arg :  boolean) {
      setVariableValue("offeringNecessary", 0, $arg)
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
    
    property get preQualNecessary () : boolean {
      return getVariableValue("preQualNecessary", 0) as java.lang.Boolean
    }
    
    property set preQualNecessary ($arg :  boolean) {
      setVariableValue("preQualNecessary", 0, $arg)
    }
    
    property get productCode () : String {
      return getVariableValue("productCode", 0) as String
    }
    
    property set productCode ($arg :  String) {
      setVariableValue("productCode", 0, $arg)
    }
    
    property get submission () : Submission {
      return getVariableValue("submission", 0) as Submission
    }
    
    property set submission ($arg :  Submission) {
      setVariableValue("submission", 0, $arg)
    }
    
    property get wizardStep () : String {
      return getVariableValue("wizardStep", 0) as String
    }
    
    property set wizardStep ($arg :  String) {
      setVariableValue("wizardStep", 0, $arg)
    }
    
    
          function handleOnChangeForProduct() {
            var context = gw.validation.ValidationUtil.createContext(TC_DEFAULT)
            policyPeriod.Lines.each(\p -> p.validateSubmissionWizardPolicyInfo(policyPeriod))
            context.raiseExceptionIfProblemsFound()
          }
    
    
  }
  
  
}