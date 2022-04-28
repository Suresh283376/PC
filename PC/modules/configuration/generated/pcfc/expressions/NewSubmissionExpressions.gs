package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/job/submission/new/NewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewSubmissionExpressions {
  @javax.annotation.Generated("config/web/pcf/job/submission/new/NewSubmission.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewSubmissionExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    static function __constructorIndex (acct :  Account) : int {
      return 1
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 82, column 53
    function action_16 () : void {
      AccountFileDoRetrievalForward.go(acct.AccountNumber)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function action_24 () : void {
      OrganizationSearchPopup.push(null, true)
    }
    
    // 'action' attribute on ToolbarButton (id=MakeSubmissions) at NewSubmission.pcf: line 180, column 47
    function action_64 () : void {
      uiHelper.createMultipleSubmissions(productOffers, acct, selectionOfProducer, typeOfQuote)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function action_7 () : void {
      NewAccountPopup.push(true)
    }
    
    // 'action' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 82, column 53
    function action_dest_17 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(acct.AccountNumber)
    }
    
    // 'pickLocation' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function action_dest_25 () : pcf.api.Destination {
      return pcf.OrganizationSearchPopup.createDestination(null, true)
    }
    
    // 'pickLocation' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function action_dest_8 () : pcf.api.Destination {
      return pcf.NewAccountPopup.createDestination(true)
    }
    
    // 'afterReturnFromPopup' attribute on Page (id=NewSubmission) at NewSubmission.pcf: line 16, column 36
    function afterReturnFromPopup_70 (popupCommitted :  boolean) : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'available' attribute on DetailViewPanel (id=ProductOffersDV) at NewSubmission.pcf: line 170, column 32
    function available_68 () : java.lang.Boolean {
      return typeOfQuote != null
    }
    
    // 'beforeCommit' attribute on Page (id=NewSubmission) at NewSubmission.pcf: line 16, column 36
    function beforeCommit_71 (pickedValue :  java.lang.Object) : void {
      throw "NewSubmission should never commit"
    }
    
    // 'conversionExpression' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function conversionExpression_10 (PickedValue :  AccountSummary) : entity.Account {
      return Account.checkedFindByNumber(PickedValue.AccountNumber, \ a -> perm.Account.newSubmission(a))
    }
    
    // 'def' attribute on ListViewInput at NewSubmission.pcf: line 174, column 85
    function def_onEnter_66 (def :  pcf.ProductSelectionLV) : void {
      def.onEnter(productOffers, acct, selectionOfProducer, createSingle, typeOfQuote, uiHelper)
    }
    
    // 'def' attribute on ListViewInput at NewSubmission.pcf: line 174, column 85
    function def_refreshVariables_67 (def :  pcf.ProductSelectionLV) : void {
      def.refreshVariables(productOffers, acct, selectionOfProducer, createSingle, typeOfQuote, uiHelper)
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      acct = (__VALUE_TO_SET as entity.Account)
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.Producer = (__VALUE_TO_SET as entity.Organization)
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.ProducerCode = (__VALUE_TO_SET as entity.ProducerCode)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CreateSingle_Input) at NewSubmission.pcf: line 137, column 36
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      createSingle = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at NewSubmission.pcf: line 146, column 45
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      typeOfQuote = (__VALUE_TO_SET as typekey.QuoteType)
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultBaseState_Input) at NewSubmission.pcf: line 155, column 48
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.State = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'value' attribute on DateInput (id=DefaultPPEffDate_Input) at NewSubmission.pcf: line 163, column 60
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectionOfProducer.DefaultPPEffDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'editable' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function editable_26 () : java.lang.Boolean {
      return gw.api.web.producer.ProducerUtil.canEditOrganization()
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 24, column 59
    function initialValue_0 () : gw.web.job.submission.NewSubmissionUIHelper {
      return new gw.web.job.submission.NewSubmissionUIHelper(CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 28, column 23
    function initialValue_1 () : Account {
      return null
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 32, column 23
    function initialValue_2 () : boolean {
      return acct == null
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 36, column 33
    function initialValue_3 () : ProducerSelection {
      return uiHelper.initializeProducerSelection(acct)
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 41, column 34
    function initialValue_4 () : ProductSelection[] {
      return uiHelper.performNameClearance(acct, selectionOfProducer)
    }
    
    // 'initialValue' attribute on Variable at NewSubmission.pcf: line 49, column 25
    function initialValue_5 () : QuoteType {
      return typekey.QuoteType.TC_FULL
    }
    
    // 'inputConversion' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function inputConversion_11 (VALUE :  java.lang.String) : java.lang.Object {
      return Account.checkedFindByNumber(VALUE, \ a -> perm.Account.newSubmission(a))
    }
    
    // 'onChange' attribute on PostOnChange at NewSubmission.pcf: line 99, column 81
    function onChange_23 () : void {
      uiHelper.changedProducer(acct, selectionOfProducer)
    }
    
    // 'onChange' attribute on PostOnChange at NewSubmission.pcf: line 114, column 86
    function onChange_35 () : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'onChange' attribute on PostOnChange at NewSubmission.pcf: line 74, column 86
    function onChange_6 () : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'onPick' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function onPick_28 (PickedValue :  Organization) : void {
      uiHelper.changedProducer(acct, selectionOfProducer)
    }
    
    // 'onPick' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function onPick_9 (PickedValue :  AccountSummary) : void {
      uiHelper.refreshProductOffers(acct, selectionOfProducer)
    }
    
    // 'optionLabel' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function optionLabel_41 (VALUE :  entity.ProducerCode) : java.lang.String {
      return DisplayKey.get("Web.ProducerSelection.ProducerCode.OptionLabel", VALUE.Code, VALUE.Description  != null ? VALUE.Description : "" )
    }
    
    // 'parent' attribute on Page (id=NewSubmission) at NewSubmission.pcf: line 16, column 36
    static function parent_72 (acct :  Account) : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    // 'validationExpression' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function validationExpression_27 () : java.lang.Object {
      return selectionOfProducer.validateProducer()
    }
    
    // 'validationExpression' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function validationExpression_36 () : java.lang.Object {
      return selectionOfProducer.validateProducerCodeForSubmission()
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function valueRange_42 () : java.lang.Object {
      return selectionOfProducer.getRangeOfActiveProducerCodesForCurrentUser()
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 82, column 53
    function valueRoot_19 () : java.lang.Object {
      return acct.AccountHolder
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function valueRoot_31 () : java.lang.Object {
      return selectionOfProducer
    }
    
    // 'value' attribute on PickerInput (id=Account_Input) at NewSubmission.pcf: line 72, column 30
    function value_12 () : entity.Account {
      return acct
    }
    
    // 'value' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 82, column 53
    function value_18 () : entity.AccountContact {
      return acct.AccountHolder.AccountContact
    }
    
    // 'value' attribute on OrgInput (id=Producer_Input) at NewSubmission.pcf: line 97, column 52
    function value_29 () : entity.Organization {
      return selectionOfProducer.Producer
    }
    
    // 'value' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function value_38 () : entity.ProducerCode {
      return selectionOfProducer.ProducerCode
    }
    
    // 'value' attribute on BooleanRadioInput (id=CreateSingle_Input) at NewSubmission.pcf: line 137, column 36
    function value_49 () : java.lang.Boolean {
      return createSingle
    }
    
    // 'value' attribute on TypeKeyInput (id=QuoteType_Input) at NewSubmission.pcf: line 146, column 45
    function value_52 () : typekey.QuoteType {
      return typeOfQuote
    }
    
    // 'value' attribute on TypeKeyInput (id=DefaultBaseState_Input) at NewSubmission.pcf: line 155, column 48
    function value_55 () : typekey.Jurisdiction {
      return selectionOfProducer.State
    }
    
    // 'value' attribute on DateInput (id=DefaultPPEffDate_Input) at NewSubmission.pcf: line 163, column 60
    function value_59 () : java.util.Date {
      return selectionOfProducer.DefaultPPEffDate
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function verifyValueRangeIsAllowedType_43 ($$arg :  entity.ProducerCode[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function verifyValueRangeIsAllowedType_43 ($$arg :  gw.api.database.IQueryBeanResult<entity.ProducerCode>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function verifyValueRangeIsAllowedType_43 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function verifyValueRange_44 () : void {
      var __valueRangeArg = selectionOfProducer.getRangeOfActiveProducerCodesForCurrentUser()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_43(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=AccountName_Input) at NewSubmission.pcf: line 82, column 53
    function visible_15 () : java.lang.Boolean {
      return acct.AccountNumber != null
    }
    
    // 'visible' attribute on InputSet at NewSubmission.pcf: line 57, column 37
    function visible_22 () : java.lang.Boolean {
      return selectAccount
    }
    
    // 'visible' attribute on RangeInput (id=ProducerCode_Input) at NewSubmission.pcf: line 112, column 62
    function visible_37 () : java.lang.Boolean {
      return selectionOfProducer.Producer != null
    }
    
    // 'visible' attribute on Label (id=NoProducts) at NewSubmission.pcf: line 130, column 51
    function visible_48 () : java.lang.Boolean {
      return productOffers.Count == 0
    }
    
    // 'visible' attribute on ToolbarButton (id=MakeSubmissions) at NewSubmission.pcf: line 180, column 47
    function visible_63 () : java.lang.Boolean {
      return not createSingle
    }
    
    // 'visible' attribute on ListViewInput at NewSubmission.pcf: line 174, column 85
    function visible_65 () : java.lang.Boolean {
      return uiHelper.canPerformNameClearance(acct, selectionOfProducer)
    }
    
    override property get CurrentLocation () : pcf.NewSubmission {
      return super.CurrentLocation as pcf.NewSubmission
    }
    
    property get acct () : Account {
      return getVariableValue("acct", 0) as Account
    }
    
    property set acct ($arg :  Account) {
      setVariableValue("acct", 0, $arg)
    }
    
    property get createSingle () : boolean {
      return getVariableValue("createSingle", 0) as java.lang.Boolean
    }
    
    property set createSingle ($arg :  boolean) {
      setVariableValue("createSingle", 0, $arg)
    }
    
    property get productOffers () : ProductSelection[] {
      return getVariableValue("productOffers", 0) as ProductSelection[]
    }
    
    property set productOffers ($arg :  ProductSelection[]) {
      setVariableValue("productOffers", 0, $arg)
    }
    
    property get selectAccount () : boolean {
      return getVariableValue("selectAccount", 0) as java.lang.Boolean
    }
    
    property set selectAccount ($arg :  boolean) {
      setVariableValue("selectAccount", 0, $arg)
    }
    
    property get selectionOfProducer () : ProducerSelection {
      return getVariableValue("selectionOfProducer", 0) as ProducerSelection
    }
    
    property set selectionOfProducer ($arg :  ProducerSelection) {
      setVariableValue("selectionOfProducer", 0, $arg)
    }
    
    property get typeOfQuote () : QuoteType {
      return getVariableValue("typeOfQuote", 0) as QuoteType
    }
    
    property set typeOfQuote ($arg :  QuoteType) {
      setVariableValue("typeOfQuote", 0, $arg)
    }
    
    property get uiHelper () : gw.web.job.submission.NewSubmissionUIHelper {
      return getVariableValue("uiHelper", 0) as gw.web.job.submission.NewSubmissionUIHelper
    }
    
    property set uiHelper ($arg :  gw.web.job.submission.NewSubmissionUIHelper) {
      setVariableValue("uiHelper", 0, $arg)
    }
    
    
  }
  
  
}