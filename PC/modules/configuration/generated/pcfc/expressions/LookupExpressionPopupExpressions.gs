package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class LookupExpressionPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends LookupMetadataSelectedExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'autoComplete' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 156, column 54
    function autoComplete_46 () : gw.api.contact.AutocompleteHandler {
      return fragHolder.getAutocompleteHandler(lookupInput.ColumnType)
    }
    
    // 'value' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 156, column 54
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      lookupInput.Symbol = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'iconColor' attribute on Link (id=RightOperandErrorIcon) at LookupExpressionPopup.pcf: line 176, column 57
    function iconColor_48 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'onChange' attribute on PostOnChange at LookupExpressionPopup.pcf: line 158, column 79
    function onChange_42 () : void {
      fragHolder.validateLookupExpression()
    }
    
    // 'value' attribute on TextCell (id=InputName_Cell) at LookupExpressionPopup.pcf: line 147, column 59
    function valueRoot_40 () : java.lang.Object {
      return lookupInput
    }
    
    // 'value' attribute on TextCell (id=InputName_Cell) at LookupExpressionPopup.pcf: line 147, column 59
    function value_39 () : java.lang.String {
      return lookupInput.ColumnName
    }
    
    // 'value' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 156, column 54
    function value_43 () : java.lang.String {
      return lookupInput.Symbol
    }
    
    // 'value' attribute on InputIterator (id=RightOperandErrors) at LookupExpressionPopup.pcf: line 187, column 58
    function value_52 () : java.lang.String[] {
      return fragHolder.getLookupInputErrors(lookupInput.ColumnName)
    }
    
    // 'visible' attribute on ContentInput (id=RightOperandValidationErrorsCellHeader) at LookupExpressionPopup.pcf: line 171, column 107
    function visible_49 () : java.lang.Boolean {
      return fragHolder.getLookupInputErrors(lookupInput.ColumnName).length > 0
    }
    
    // 'visible' attribute on Row at LookupExpressionPopup.pcf: line 162, column 146
    function visible_53 () : java.lang.Boolean {
      return fragHolder.getShowValidationErrors() and fragHolder.getLookupInputErrors(lookupInput.ColumnName).length > 0
    }
    
    property get lookupInput () : RuleLookupParameterDef {
      return getIteratedValue(2) as RuleLookupParameterDef
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends IteratorEntry2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=RightOperandError_Input) at LookupExpressionPopup.pcf: line 190, column 44
    function value_50 () : java.lang.String {
      return error
    }
    
    property get error () : java.lang.String {
      return getIteratedValue(3) as java.lang.String
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends LookupMetadataSelectedExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=TableName_Cell) at LookupExpressionPopup.pcf: line 72, column 87
    function valueRoot_13 () : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata)
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupExpressionPopup.pcf: line 77, column 89
    function valueRoot_16 () : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupExpressionPopup.pcf: line 82, column 106
    function valueRoot_19 () : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.DataType
    }
    
    // 'value' attribute on TextCell (id=TableName_Cell) at LookupExpressionPopup.pcf: line 72, column 87
    function value_12 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).TableName
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupExpressionPopup.pcf: line 77, column 89
    function value_15 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.Name
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupExpressionPopup.pcf: line 82, column 106
    function value_18 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.DataType.RelativeName
    }
    
    // 'value' attribute on TextCell (id=Inputs_Cell) at LookupExpressionPopup.pcf: line 87, column 156
    function value_21 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Inputs.map(\lookupMetaColumn -> lookupMetaColumn.Name).join(", ")
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at LookupExpressionPopup.pcf: line 93, column 89
    function value_23 () : java.lang.String {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Description
    }
    
    property get lookupTable () : java.lang.Object {
      return getIteratedValue(2) as java.lang.Object
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LookupExpressionPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (fragHolder :  gw.bizrules.pcf.LookupExpressionFragmentHolder, rule :  Rule) : int {
      return 0
    }
    
    // 'afterCancel' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterCancel_57 () : void {
      fragHolder.onCancel()
    }
    
    // 'afterCommit' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterCommit_58 (TopLocation :  pcf.api.Location) : void {
      fragHolder.inputConversion()
    }
    
    // 'afterEnter' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterEnter_59 () : void {
      fragHolder.syncRuleRequestDefinition();fragHolder.validateLookupExpression()
    }
    
    // 'afterReturnFromPopup' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function afterReturnFromPopup_60 (popupCommitted :  boolean) : void {
      fragHolder.inputConversion()
    }
    
    // 'beforeCancel' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function beforeCancel_61 () : void {
      fragHolder.clearCacheOnCancel()
    }
    
    // 'beforeCommit' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    function beforeCommit_62 (pickedValue :  java.lang.Object) : void {
      fragHolder.clearCacheOnCommit()
    }
    
    // 'initialValue' attribute on Variable at LookupExpressionPopup.pcf: line 25, column 23
    function initialValue_0 () : Boolean {
      return fragHolder.updateLookupMetadataMap()
    }
    
    // 'label' attribute on AlertBar (id=LookupMetaRefreshTag) at LookupExpressionPopup.pcf: line 43, column 175
    function label_4 () : java.lang.Object {
      return fragHolder.getLookupInputErrors("MetadataUpdated")[0]
    }
    
    // 'title' attribute on Popup (id=LookupExpressionPopup) at LookupExpressionPopup.pcf: line 15, column 35
    static function title_63 (fragHolder :  gw.bizrules.pcf.LookupExpressionFragmentHolder, rule :  Rule) : java.lang.Object {
      return fragHolder.PopupTitle
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at LookupExpressionPopup.pcf: line 38, column 79
    function toolbarButtonSet_onEnter_1 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.onEnter(fragHolder)
    }
    
    // 'toolbarButtonSet' attribute on ToolbarButtonSetRef at LookupExpressionPopup.pcf: line 38, column 79
    function toolbarButtonSet_refreshVariables_2 (def :  pcf.ConditionValidationToolbarButtonSet) : void {
      def.refreshVariables(fragHolder)
    }
    
    // 'visible' attribute on AlertBar (id=LookupMetaRefreshTag) at LookupExpressionPopup.pcf: line 43, column 175
    function visible_3 () : java.lang.Boolean {
      return fragHolder.getLookupInputErrors("MetadataUpdated") != null && fragHolder.getLookupInputErrors("MetadataUpdated").length > 0
    }
    
    override property get CurrentLocation () : pcf.LookupExpressionPopup {
      return super.CurrentLocation as pcf.LookupExpressionPopup
    }
    
    property get fragHolder () : gw.bizrules.pcf.LookupExpressionFragmentHolder {
      return getVariableValue("fragHolder", 0) as gw.bizrules.pcf.LookupExpressionFragmentHolder
    }
    
    property set fragHolder ($arg :  gw.bizrules.pcf.LookupExpressionFragmentHolder) {
      setVariableValue("fragHolder", 0, $arg)
    }
    
    property get rule () : Rule {
      return getVariableValue("rule", 0) as Rule
    }
    
    property set rule ($arg :  Rule) {
      setVariableValue("rule", 0, $arg)
    }
    
    property get updateMetaDataMap () : Boolean {
      return getVariableValue("updateMetaDataMap", 0) as Boolean
    }
    
    property set updateMetaDataMap ($arg :  Boolean) {
      setVariableValue("updateMetaDataMap", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/bizrules/LookupExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LookupMetadataSelectedExpressionsImpl extends LookupExpressionPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ButtonInput (id=LookupContextHelp_Input) at LookupExpressionPopup.pcf: line 122, column 57
    function action_34 () : void {
      ContextHelp.push()
    }
    
    // 'action' attribute on ToolbarButton (id=CreateNewLookupButton) at LookupExpressionPopup.pcf: line 55, column 251
    function action_6 () : void {
      gw.plugin.Plugins.get(gw.bizrules.IBizRulesPlugin).getAppBizRulesPageNavigation(rule).gotoCreateLookupPage()
    }
    
    // 'action' attribute on ButtonInput (id=LookupContextHelp_Input) at LookupExpressionPopup.pcf: line 122, column 57
    function action_dest_35 () : pcf.api.Destination {
      return pcf.ContextHelp.createDestination()
    }
    
    // 'label' attribute on Label (id=LTLabelID) at LookupExpressionPopup.pcf: line 107, column 51
    function label_29 () : java.lang.String {
      return targetLookup.TableName
    }
    
    // 'selectionOnEnter' attribute on ListDetailPanel (id=LookupMetadataSelected) at LookupExpressionPopup.pcf: line 48, column 57
    function selectionOnEnter_56 () : java.lang.Object {
      return fragHolder.LookupMetadataSelected
    }
    
    // 'value' attribute on TextCell (id=Inputs_Cell) at LookupExpressionPopup.pcf: line 87, column 156
    function sortValue_10 (lookupTable :  java.lang.Object) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Inputs.map(\lookupMetaColumn -> lookupMetaColumn.Name).join(", ")
    }
    
    // 'value' attribute on TextCell (id=Description_Cell) at LookupExpressionPopup.pcf: line 93, column 89
    function sortValue_11 (lookupTable :  java.lang.Object) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Description
    }
    
    // 'value' attribute on TextCell (id=InputName_Cell) at LookupExpressionPopup.pcf: line 147, column 59
    function sortValue_37 (lookupInput :  RuleLookupParameterDef) : java.lang.Object {
      return lookupInput.ColumnName
    }
    
    // 'value' attribute on TextCell (id=ContextSymbol_Cell) at LookupExpressionPopup.pcf: line 156, column 54
    function sortValue_38 (lookupInput :  RuleLookupParameterDef) : java.lang.Object {
      return lookupInput.Symbol
    }
    
    // 'value' attribute on TextCell (id=TableName_Cell) at LookupExpressionPopup.pcf: line 72, column 87
    function sortValue_7 (lookupTable :  java.lang.Object) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).TableName
    }
    
    // 'value' attribute on TextCell (id=Output_Cell) at LookupExpressionPopup.pcf: line 77, column 89
    function sortValue_8 (lookupTable :  java.lang.Object) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.Name
    }
    
    // 'value' attribute on TextCell (id=OutputType_Cell) at LookupExpressionPopup.pcf: line 82, column 106
    function sortValue_9 (lookupTable :  java.lang.Object) : java.lang.Object {
      return (lookupTable as gw.plugin.lookup.LookupMetadata).Output.DataType.RelativeName
    }
    
    // 'value' attribute on TextInput (id=LTDescritionID_Input) at LookupExpressionPopup.pcf: line 111, column 53
    function valueRoot_31 () : java.lang.Object {
      return targetLookup
    }
    
    // 'value' attribute on RowIterator (id=LookupPagination) at LookupExpressionPopup.pcf: line 66, column 71
    function value_26 () : List<gw.plugin.lookup.LookupMetadata> {
      return new ArrayList<gw.plugin.lookup.LookupMetadata>(fragHolder.LookupMetadataMap.values())
    }
    
    // 'value' attribute on TextInput (id=LTDescritionID_Input) at LookupExpressionPopup.pcf: line 111, column 53
    function value_30 () : java.lang.String {
      return targetLookup.Description
    }
    
    // 'value' attribute on RowIterator at LookupExpressionPopup.pcf: line 141, column 60
    function value_54 () : RuleLookupParameterDef[] {
      return fragHolder.getOrCreateLookupRequestDefinition(targetLookup.TableID)
    }
    
    // 'valueType' attribute on RowIterator (id=LookupPagination) at LookupExpressionPopup.pcf: line 66, column 71
    function verifyValueTypeIsAllowedType_27 ($$arg :  gw.api.database.IQueryBeanResult) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=LookupPagination) at LookupExpressionPopup.pcf: line 66, column 71
    function verifyValueTypeIsAllowedType_27 ($$arg :  gw.api.iterator.IteratorBackingData) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=LookupPagination) at LookupExpressionPopup.pcf: line 66, column 71
    function verifyValueTypeIsAllowedType_27 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueType' attribute on RowIterator (id=LookupPagination) at LookupExpressionPopup.pcf: line 66, column 71
    function verifyValueType_28 () : void {
      var __valueTypeArg : List<gw.plugin.lookup.LookupMetadata>
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the valueType is not a valid type for use with an iterator
      // The valueType for an iterator must be an array or extend from List or IQueryBeanResult
      verifyValueTypeIsAllowedType_27(__valueTypeArg)
    }
    
    // 'visible' attribute on ButtonInput (id=LookupContextHelp_Input) at LookupExpressionPopup.pcf: line 122, column 57
    function visible_33 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on ToolbarButton (id=CreateNewLookupButton) at LookupExpressionPopup.pcf: line 55, column 251
    function visible_5 () : java.lang.Boolean {
      return gw.plugin.Plugins.get(gw.bizrules.IBizRulesPlugin).getAppBizRulesPageNavigation(rule) != null && gw.plugin.Plugins.get(gw.bizrules.IBizRulesPlugin).getAppBizRulesPageNavigation(rule).shouldDisplayCreateLookupButton()
    }
    
    // 'visible' attribute on DetailViewPanel (id=LookupRequestDefDV) at LookupExpressionPopup.pcf: line 128, column 46
    function visible_55 () : java.lang.Boolean {
      return targetLookup != null
    }
    
    property get targetLookup () : gw.plugin.lookup.LookupMetadata {
      return getCurrentSelection(1) as gw.plugin.lookup.LookupMetadata
    }
    
    property set targetLookup ($arg :  gw.plugin.lookup.LookupMetadata) {
      setCurrentSelection(1, $arg)
    }
    
    
  }
  
  
}