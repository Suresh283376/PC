package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class RateTableDefinitionDetailsScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ArgSrcSetDetailPanelExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=SourceSetDeleteButton) at RateTableDefinitionDetailsScreen.pcf: line 531, column 118
    function allCheckedRowsAction_187 (CheckedValues :  entity.RateTableArgumentSourceSet[], CheckedValuesErrors :  java.util.Map) : void {
      helper.deleteSelectedArgSrcSets(CheckedValues); gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.RateTableArgumentSourceSet)
    }
    
    // 'value' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 582, column 55
    function defaultSetter_202 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedArgSrcSet.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 589, column 55
    function defaultSetter_209 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedArgSrcSet.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 582, column 55
    function editable_200 () : java.lang.Boolean {
      return not argumentSourceSetsUsedInPromotedBooks.contains(selectedArgSrcSet)
    }
    
    // 'editable' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 589, column 55
    function editable_206 () : java.lang.Boolean {
      return selectedArgSrcSet.Code == null or selectedArgSrcSet.NotUsedByRateRoutines
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 552, column 36
    function sortBy_188 (argumentSrcSet :  entity.RateTableArgumentSourceSet) : java.lang.Object {
      return argumentSrcSet.Name
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 615, column 40
    function sortBy_214 (matchOp :  entity.RateTableMatchOp) : java.lang.Object {
      return matchOp.sortedParams().first().SortOrder
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 544, column 67
    function toCreateAndAdd_198 () : entity.RateTableArgumentSourceSet {
      return helper.addNewArgumentSourceSet(parameterSet)
    }
    
    // 'validationExpression' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 589, column 55
    function validationExpression_207 () : java.lang.Object {
      var setCodes = tableDefinition.ArgumentSourceSets.map(\aSet -> aSet.Code); return (setCodes.Count == setCodes.toSet().Count ? null : DisplayKey.get("Web.Rating.Errors.DuplicateArgSrcSetCode") )
    }
    
    // 'value' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 582, column 55
    function valueRoot_203 () : java.lang.Object {
      return selectedArgSrcSet
    }
    
    // 'value' attribute on RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 544, column 67
    function value_199 () : entity.RateTableArgumentSourceSet[] {
      return tableDefinition.ArgumentSourceSets
    }
    
    // 'value' attribute on TextInput (id=ArgSrcName_Input) at RateTableDefinitionDetailsScreen.pcf: line 582, column 55
    function value_201 () : java.lang.String {
      return selectedArgSrcSet.Name
    }
    
    // 'value' attribute on TextInput (id=ArgSrcSetCode_Input) at RateTableDefinitionDetailsScreen.pcf: line 589, column 55
    function value_208 () : java.lang.String {
      return selectedArgSrcSet.Code
    }
    
    // 'value' attribute on RowIterator (id=ArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 602, column 38
    function value_238 () : entity.RateTableMatchOp[] {
      return tableDefinition.MatchOps
    }
    
    property get selectedArgSrcSet () : RateTableArgumentSourceSet {
      return getCurrentSelection(2) as RateTableArgumentSourceSet
    }
    
    property set selectedArgSrcSet ($arg :  RateTableArgumentSourceSet) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CardViewPanelExpressionsImpl extends RateTableDefinitionDetailsScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=SingleSourceSetAddButton) at RateTableDefinitionDetailsScreen.pcf: line 450, column 111
    function action_159 () : void {
      helper.addNewArgumentSourceSet(parameterSet)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 91, column 92
    function def_onEnter_19 (def :  pcf.RateTableDefinitionDV) : void {
      def.onEnter(tableDefinition, isRateTableDefinitionEditable)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 95, column 228
    function def_onEnter_21 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(tableDefinition, { "TableName", "TableDesc" }, { DisplayKey.get("Web.Rating.RateBooks.Name"), DisplayKey.get("Web.Rating.RateBooks.Description") })
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 655, column 63
    function def_onEnter_241 (def :  pcf.RateTableDefinitionUsagePanelSet) : void {
      def.onEnter(rateTables)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 91, column 92
    function def_refreshVariables_20 (def :  pcf.RateTableDefinitionDV) : void {
      def.refreshVariables(tableDefinition, isRateTableDefinitionEditable)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 95, column 228
    function def_refreshVariables_22 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(tableDefinition, { "TableName", "TableDesc" }, { DisplayKey.get("Web.Rating.RateBooks.Name"), DisplayKey.get("Web.Rating.RateBooks.Description") })
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 655, column 63
    function def_refreshVariables_242 (def :  pcf.RateTableDefinitionUsagePanelSet) : void {
      def.refreshVariables(rateTables)
    }
    
    // 'value' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function defaultSetter_149 (__VALUE_TO_SET :  java.lang.Object) : void {
      parameterSet = (__VALUE_TO_SET as entity.CalcRoutineParameterSet)
    }
    
    // 'editable' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function editable_147 () : java.lang.Boolean {
      return argumentSourceSetsUsedInPromotedBooks.Empty
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 84, column 32
    function initialValue_18 () : LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'label' attribute on Link (id=ParamInfo) at RateTableDefinitionDetailsScreen.pcf: line 435, column 76
    function label_156 () : java.lang.Object {
      return helper.getStringForParamTypes(parameterSet)
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 426, column 75
    function onChange_146 () : void {
      tableDefinition.setParameterSet(parameterSet)
    }
    
    // 'onSelect' attribute on Card (id=ArgumentSourceCard) at RateTableDefinitionDetailsScreen.pcf: line 413, column 92
    function onSelect_240 () : void {
      gw.api.web.PebblesUtil.invalidateIterators(CurrentLocation, entity.RateTableMatchOp)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function optionLabel_150 (VALUE :  entity.CalcRoutineParameterSet) : java.lang.String {
      return VALUE.Name
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 479, column 32
    function sortBy_160 (matchOp :  entity.RateTableMatchOp) : java.lang.Object {
      return matchOp.sortedParams().first().SortOrder
    }
    
    // 'tooltip' attribute on Link (id=ParamInfo) at RateTableDefinitionDetailsScreen.pcf: line 435, column 76
    function tooltip_157 () : java.lang.String {
      return helper.getHelpStringForParamTypes(parameterSet)
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function valueRange_151 () : java.lang.Object {
      return paramSets
    }
    
    // 'value' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function value_148 () : entity.CalcRoutineParameterSet {
      return parameterSet
    }
    
    // 'value' attribute on RowIterator (id=SingleArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 461, column 30
    function value_185 () : entity.RateTableMatchOp[] {
      return tableDefinition.MatchOps
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function verifyValueRangeIsAllowedType_152 ($$arg :  entity.CalcRoutineParameterSet[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function verifyValueRangeIsAllowedType_152 ($$arg :  gw.api.database.IQueryBeanResult<entity.CalcRoutineParameterSet>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function verifyValueRangeIsAllowedType_152 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RoutineParamSet_Input) at RateTableDefinitionDetailsScreen.pcf: line 424, column 58
    function verifyValueRange_153 () : void {
      var __valueRangeArg = paramSets
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_152(__valueRangeArg)
    }
    
    // 'visible' attribute on ContentInput at RateTableDefinitionDetailsScreen.pcf: line 430, column 46
    function visible_158 () : java.lang.Boolean {
      return parameterSet != null
    }
    
    // 'visible' attribute on PanelRef (id=SingleArgSourcePanel) at RateTableDefinitionDetailsScreen.pcf: line 441, column 95
    function visible_186 () : java.lang.Boolean {
      return tableDefinition.ArgumentSourceSets.Count <= 1 and parameterSet != null
    }
    
    // 'visible' attribute on PanelRef (id=MultiArgSourceSetPanel) at RateTableDefinitionDetailsScreen.pcf: line 511, column 105
    function visible_239 () : java.lang.Boolean {
      return tableDefinition.ArgumentSourceSets.Count > 1 // nested panel refs for visibility
    }
    
    property get languages () : LanguageType[] {
      return getVariableValue("languages", 1) as LanguageType[]
    }
    
    property set languages ($arg :  LanguageType[]) {
      setVariableValue("languages", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FactorCVExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef (id=FactorColumnDetails) at RateTableDefinitionDetailsScreen.pcf: line 399, column 51
    function def_onEnter_142 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.onEnter(selectedFactor, tableDefinition, isSelectedFactorEditable, false, helper)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 403, column 166
    function def_onEnter_144 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(selectedFactor, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on InputSetRef (id=FactorColumnDetails) at RateTableDefinitionDetailsScreen.pcf: line 399, column 51
    function def_refreshVariables_143 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.refreshVariables(selectedFactor, tableDefinition, isSelectedFactorEditable, false, helper)
    }
    
    // 'def' attribute on PanelRef at RateTableDefinitionDetailsScreen.pcf: line 403, column 166
    function def_refreshVariables_145 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(selectedFactor, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'value' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 385, column 63
    function defaultSetter_129 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedFactor.ColumnType = (__VALUE_TO_SET as typekey.RateTableDataType)
    }
    
    // 'value' attribute on TextInput (id=ColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 396, column 94
    function defaultSetter_137 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedFactor.ColumnScale = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 385, column 63
    function editable_127 () : java.lang.Boolean {
      return isSelectedFactorEditable
    }
    
    // 'filter' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 385, column 63
    function filter_131 (VALUE :  typekey.RateTableDataType, VALUES :  typekey.RateTableDataType[]) : java.lang.Boolean {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.tableFactorFilter(tableDefinition, VALUE)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 370, column 31
    function initialValue_125 () : boolean {
      return selectedFactor == null or selectedFactor.New or helper.canEditFactor(selectedFactor)
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 387, column 80
    function onChange_126 () : void {
      selectedFactor.PhysicalColumnName = null
    }
    
    // 'value' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 385, column 63
    function valueRoot_130 () : java.lang.Object {
      return selectedFactor
    }
    
    // 'value' attribute on TypeKeyInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 385, column 63
    function value_128 () : typekey.RateTableDataType {
      return selectedFactor.ColumnType
    }
    
    // 'value' attribute on TextInput (id=ColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 396, column 94
    function value_136 () : java.lang.Integer {
      return selectedFactor.ColumnScale
    }
    
    // 'visible' attribute on TextInput (id=ColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 396, column 94
    function visible_135 () : java.lang.Boolean {
      return selectedFactor.ColumnType == RateTableDataType.TC_DECIMAL
    }
    
    property get isSelectedFactorEditable () : boolean {
      return getVariableValue("isSelectedFactorEditable", 3) as java.lang.Boolean
    }
    
    property set isSelectedFactorEditable ($arg :  boolean) {
      setVariableValue("isSelectedFactorEditable", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 141, column 55
    function checkBoxVisible_42 () : java.lang.Boolean {
      return isMatchOpRemovable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 145, column 52
    function initialValue_27 () : entity.RateTableColumn[] {
      return matchOp.Params.sortBy(\ p -> p.SortOrder)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 150, column 50
    function initialValue_28 () : entity.RateTableColumn {
      return orderedParams == null ? null : orderedParams.first()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 155, column 35
    function initialValue_29 () : boolean {
      return helper.canRemoveParameter(matchOp.Params.first())
    }
    
    // RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 141, column 55
    function initializeVariables_43 () : void {
        orderedParams = matchOp.Params.sortBy(\ p -> p.SortOrder);
  currentFirstParam = orderedParams == null ? null : orderedParams.first();
  isMatchOpRemovable = helper.canRemoveParameter(matchOp.Params.first());

    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 165, column 50
    function valueRoot_31 () : java.lang.Object {
      return matchOp
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 183, column 60
    function valueRoot_38 () : java.lang.Object {
      return currentFirstParam
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 165, column 50
    function value_30 () : java.lang.String {
      return matchOp.DisplayText
    }
    
    // 'value' attribute on TextCell (id=sortOrder_Cell) at RateTableDefinitionDetailsScreen.pcf: line 171, column 76
    function value_33 () : java.lang.String {
      return orderedParams*.SortOrder.join(", ")
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 176, column 109
    function value_35 () : java.lang.String {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.getOpCodeLabel(matchOp)
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 183, column 60
    function value_37 () : typekey.RateTableDataType {
      return currentFirstParam.ColumnType
    }
    
    // 'value' attribute on TextCell (id=labels_Cell) at RateTableDefinitionDetailsScreen.pcf: line 188, column 123
    function value_40 () : java.lang.String {
      return orderedParams*.ColumnLabel.map(\ s -> s == null ? "" : s) .join(", ")
    }
    
    property get currentFirstParam () : entity.RateTableColumn {
      return getVariableValue("currentFirstParam", 3) as entity.RateTableColumn
    }
    
    property set currentFirstParam ($arg :  entity.RateTableColumn) {
      setVariableValue("currentFirstParam", 3, $arg)
    }
    
    property get isMatchOpRemovable () : boolean {
      return getVariableValue("isMatchOpRemovable", 3) as java.lang.Boolean
    }
    
    property set isMatchOpRemovable ($arg :  boolean) {
      setVariableValue("isMatchOpRemovable", 3, $arg)
    }
    
    property get matchOp () : entity.RateTableMatchOp {
      return getIteratedValue(3) as entity.RateTableMatchOp
    }
    
    property get orderedParams () : entity.RateTableColumn[] {
      return getVariableValue("orderedParams", 3) as entity.RateTableColumn[]
    }
    
    property set orderedParams ($arg :  entity.RateTableColumn[]) {
      setVariableValue("orderedParams", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ListDetailPanel2ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 330, column 54
    function checkBoxVisible_120 () : java.lang.Boolean {
      return isFactorRemovable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 335, column 35
    function initialValue_107 () : boolean {
      return helper.canRemoveFactor(factor)
    }
    
    // RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 330, column 54
    function initializeVariables_121 () : void {
        isFactorRemovable = helper.canRemoveFactor(factor);

    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 344, column 48
    function valueRoot_109 () : java.lang.Object {
      return factor
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 344, column 48
    function value_108 () : java.lang.String {
      return factor.ColumnName
    }
    
    // 'value' attribute on TextCell (id=priority_Cell) at RateTableDefinitionDetailsScreen.pcf: line 350, column 52
    function value_111 () : java.lang.Integer {
      return factor.SortOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 355, column 60
    function value_114 () : typekey.RateTableDataType {
      return factor.ColumnType
    }
    
    // 'value' attribute on TextCell (id=labels_Cell) at RateTableDefinitionDetailsScreen.pcf: line 359, column 49
    function value_117 () : java.lang.String {
      return factor.ColumnLabel
    }
    
    property get factor () : entity.RateTableColumn {
      return getIteratedValue(3) as entity.RateTableColumn
    }
    
    property get isFactorRemovable () : boolean {
      return getVariableValue("isFactorRemovable", 3) as java.lang.Boolean
    }
    
    property set isFactorRemovable ($arg :  boolean) {
      setVariableValue("isFactorRemovable", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function def_onEnter_174 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function def_onEnter_176 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function def_onEnter_178 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function def_refreshVariables_175 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function def_refreshVariables_177 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'def' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function def_refreshVariables_179 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, firstSourceSet))
    }
    
    // 'editable' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function editable_173 () : java.lang.Boolean {
      return not argumentSourceSetsUsedInPromotedBooks.contains(firstSourceSet)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 466, column 43
    function initialValue_161 () : RateTableColumn[] {
      return matchOp.Params.sortBy(\ p -> p.SortOrder)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 471, column 41
    function initialValue_162 () : RateTableColumn {
      return orderedParams.first()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 476, column 59
    function initialValue_163 () : entity.RateTableArgumentSourceSet {
      return tableDefinition.ArgumentSourceSets.first()
    }
    
    // RowIterator (id=SingleArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 461, column 30
    function initializeVariables_184 () : void {
        orderedParams = matchOp.Params.sortBy(\ p -> p.SortOrder);
  currentFirstParam = orderedParams.first();
  firstSourceSet = tableDefinition.ArgumentSourceSets.first();

    }
    
    // 'mode' attribute on ModalCellRef at RateTableDefinitionDetailsScreen.pcf: line 504, column 65
    function mode_180 () : java.lang.Object {
      return matchOp.ModeForRateTableArgumentValue
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 487, column 41
    function valueRoot_165 () : java.lang.Object {
      return matchOp
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 492, column 61
    function valueRoot_168 () : java.lang.Object {
      return matchOp.MatchOpDefinition
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 499, column 58
    function valueRoot_171 () : java.lang.Object {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first()
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 487, column 41
    function value_164 () : java.lang.String {
      return matchOp.Name
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 492, column 61
    function value_167 () : java.lang.String {
      return matchOp.MatchOpDefinition.OpCode
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 499, column 58
    function value_170 () : typekey.RateTableDataType {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first().ColumnType
    }
    
    // 'visible' attribute on Row at RateTableDefinitionDetailsScreen.pcf: line 481, column 96
    function visible_183 () : java.lang.Boolean {
      return firstSourceSet.RateTableArgumentSources*.Parameter.contains(matchOp)
    }
    
    property get currentFirstParam () : RateTableColumn {
      return getVariableValue("currentFirstParam", 2) as RateTableColumn
    }
    
    property set currentFirstParam ($arg :  RateTableColumn) {
      setVariableValue("currentFirstParam", 2, $arg)
    }
    
    property get firstSourceSet () : entity.RateTableArgumentSourceSet {
      return getVariableValue("firstSourceSet", 2) as entity.RateTableArgumentSourceSet
    }
    
    property set firstSourceSet ($arg :  entity.RateTableArgumentSourceSet) {
      setVariableValue("firstSourceSet", 2, $arg)
    }
    
    property get matchOp () : entity.RateTableMatchOp {
      return getIteratedValue(2) as entity.RateTableMatchOp
    }
    
    property get orderedParams () : RateTableColumn[] {
      return getVariableValue("orderedParams", 2) as RateTableColumn[]
    }
    
    property set orderedParams ($arg :  RateTableColumn[]) {
      setVariableValue("orderedParams", 2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ArgSrcSetDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'checkBoxVisible' attribute on RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 544, column 67
    function checkBoxVisible_196 () : java.lang.Boolean {
      return isArgSrcSetRemovable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 549, column 37
    function initialValue_189 () : boolean {
      return argumentSrcSet.NotUsedByRateRoutines
    }
    
    // RowIterator (id=ArgSrcSetIterator) at RateTableDefinitionDetailsScreen.pcf: line 544, column 67
    function initializeVariables_197 () : void {
        isArgSrcSetRemovable = argumentSrcSet.NotUsedByRateRoutines;

    }
    
    // 'value' attribute on TextCell (id=ArgSrcSetName_Cell) at RateTableDefinitionDetailsScreen.pcf: line 559, column 52
    function valueRoot_191 () : java.lang.Object {
      return argumentSrcSet
    }
    
    // 'value' attribute on TextCell (id=ArgSrcSetName_Cell) at RateTableDefinitionDetailsScreen.pcf: line 559, column 52
    function value_190 () : java.lang.String {
      return argumentSrcSet.Name
    }
    
    // 'value' attribute on TextCell (id=ArgSrcSetCode_Cell) at RateTableDefinitionDetailsScreen.pcf: line 565, column 52
    function value_193 () : java.lang.String {
      return argumentSrcSet.Code
    }
    
    property get argumentSrcSet () : entity.RateTableArgumentSourceSet {
      return getIteratedValue(3) as entity.RateTableArgumentSourceSet
    }
    
    property get isArgSrcSetRemovable () : boolean {
      return getVariableValue("isArgSrcSetRemovable", 3) as java.lang.Boolean
    }
    
    property set isArgSrcSetRemovable ($arg :  boolean) {
      setVariableValue("isArgSrcSetRemovable", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ArgSrcSetDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function def_onEnter_227 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function def_onEnter_229 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function def_onEnter_231 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.onEnter(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function def_refreshVariables_228 (def :  pcf.RateTableArgumentValue_Coverage) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function def_refreshVariables_230 (def :  pcf.RateTableArgumentValue_FreeForm) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'def' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function def_refreshVariables_232 (def :  pcf.RateTableArgumentValue_Typelist) : void {
      def.refreshVariables(new gw.pcf.rating.rtm.RateTableArgumentSourceHelper(matchOp, selectedArgSrcSet))
    }
    
    // 'editable' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function editable_226 () : java.lang.Boolean {
      return not argumentSourceSetsUsedInPromotedBooks.contains(selectedArgSrcSet)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 607, column 51
    function initialValue_215 () : RateTableColumn[] {
      return matchOp.Params.sortBy(\ p -> p.SortOrder)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 612, column 49
    function initialValue_216 () : RateTableColumn {
      return orderedParams.first()
    }
    
    // RowIterator (id=ArgumentSourcesIterator) at RateTableDefinitionDetailsScreen.pcf: line 602, column 38
    function initializeVariables_237 () : void {
        orderedParams = matchOp.Params.sortBy(\ p -> p.SortOrder);
  currentFirstParam = orderedParams.first();

    }
    
    // 'mode' attribute on ModalCellRef (id=RateTableArgumentValues) at RateTableDefinitionDetailsScreen.pcf: line 641, column 73
    function mode_233 () : java.lang.Object {
      return matchOp.ModeForRateTableArgumentValue
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 623, column 49
    function valueRoot_218 () : java.lang.Object {
      return matchOp
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 628, column 69
    function valueRoot_221 () : java.lang.Object {
      return matchOp.MatchOpDefinition
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 635, column 66
    function valueRoot_224 () : java.lang.Object {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first()
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 623, column 49
    function value_217 () : java.lang.String {
      return matchOp.Name
    }
    
    // 'value' attribute on TextCell (id=matchingRule_Cell) at RateTableDefinitionDetailsScreen.pcf: line 628, column 69
    function value_220 () : java.lang.String {
      return matchOp.MatchOpDefinition.OpCode
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 635, column 66
    function value_223 () : typekey.RateTableDataType {
      return matchOp.Params.sortBy(\ p -> p.SortOrder).first().ColumnType
    }
    
    // 'visible' attribute on Row at RateTableDefinitionDetailsScreen.pcf: line 617, column 107
    function visible_236 () : java.lang.Boolean {
      return selectedArgSrcSet.RateTableArgumentSources*.Parameter.contains(matchOp)
    }
    
    property get currentFirstParam () : RateTableColumn {
      return getVariableValue("currentFirstParam", 3) as RateTableColumn
    }
    
    property set currentFirstParam ($arg :  RateTableColumn) {
      setVariableValue("currentFirstParam", 3, $arg)
    }
    
    property get matchOp () : entity.RateTableMatchOp {
      return getIteratedValue(3) as entity.RateTableMatchOp
    }
    
    property get orderedParams () : RateTableColumn[] {
      return getVariableValue("orderedParams", 3) as RateTableColumn[]
    }
    
    property set orderedParams ($arg :  RateTableColumn[]) {
      setVariableValue("orderedParams", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'label' attribute on AddMenuItem (id=MatchOp) at RateTableDefinitionDetailsScreen.pcf: line 122, column 138
    function label_23 () : java.lang.Object {
      return matchOp.OpName
    }
    
    // 'toCreateAndAdd' attribute on AddMenuItem (id=MatchOp) at RateTableDefinitionDetailsScreen.pcf: line 122, column 138
    function toCreateAndAdd_24 (CheckedValues :  Object[]) : java.lang.Object {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.addMatchOperation(tableDefinition, matchOp)
    }
    
    property get matchOp () : entity.RateTableMatchOpDefinition {
      return getIteratedValue(3) as entity.RateTableMatchOpDefinition
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanel2ExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 311, column 29
    function initialValue_100 () : boolean {
      return helper.canAddFactor()
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 338, column 34
    function sortBy_102 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.SortOrder
    }
    
    // 'value' attribute on TextCell (id=name_Cell) at RateTableDefinitionDetailsScreen.pcf: line 344, column 48
    function sortValue_103 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.ColumnName
    }
    
    // 'value' attribute on TextCell (id=priority_Cell) at RateTableDefinitionDetailsScreen.pcf: line 350, column 52
    function sortValue_104 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.SortOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=dataType_Cell) at RateTableDefinitionDetailsScreen.pcf: line 355, column 60
    function sortValue_105 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.ColumnType
    }
    
    // 'value' attribute on TextCell (id=labels_Cell) at RateTableDefinitionDetailsScreen.pcf: line 359, column 49
    function sortValue_106 (factor :  entity.RateTableColumn) : java.lang.Object {
      return factor.ColumnLabel
    }
    
    // 'toCreateAndAdd' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 330, column 54
    function toCreateAndAdd_122 () : entity.RateTableColumn {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.addFactorDefinition(tableDefinition)
    }
    
    // 'toRemove' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 330, column 54
    function toRemove_123 (factor :  entity.RateTableColumn) : void {
      tableDefinition.removeFromFactors(factor)
    }
    
    // 'value' attribute on RowIterator (id=FactorsIterator) at RateTableDefinitionDetailsScreen.pcf: line 330, column 54
    function value_124 () : entity.RateTableColumn[] {
      return tableDefinition.Factors
    }
    
    // 'addVisible' attribute on IteratorButtons at RateTableDefinitionDetailsScreen.pcf: line 316, column 45
    function visible_101 () : java.lang.Boolean {
      return canAddFactor
    }
    
    property get canAddFactor () : boolean {
      return getVariableValue("canAddFactor", 2) as java.lang.Boolean
    }
    
    property set canAddFactor ($arg :  boolean) {
      setVariableValue("canAddFactor", 2, $arg)
    }
    
    property get selectedFactor () : RateTableColumn {
      return getCurrentSelection(2) as RateTableColumn
    }
    
    property set selectedFactor ($arg :  RateTableColumn) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends CardViewPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'sortBy' attribute on IteratorSort at RateTableDefinitionDetailsScreen.pcf: line 158, column 34
    function sortBy_26 (matchOp :  entity.RateTableMatchOp) : java.lang.Object {
      return matchOp.sortedParams().first().SortOrder
    }
    
    // 'toRemove' attribute on RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 141, column 55
    function toRemove_44 (matchOp :  entity.RateTableMatchOp) : void {
      tableDefinition.removeFromMatchOps(matchOp)
    }
    
    // 'validationExpression' attribute on ListViewPanel (id=MatchOpLV) at RateTableDefinitionDetailsScreen.pcf: line 131, column 62
    function validationExpression_46 () : java.lang.Object {
      return helper.validateChange()
    }
    
    // 'value' attribute on AddMenuItemIterator (id=MatchOps) at RateTableDefinitionDetailsScreen.pcf: line 117, column 87
    function value_25 () : java.util.List<entity.RateTableMatchOpDefinition> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.MatchOpDefinitions.orderBy(gw.api.database.QuerySelectColumns.path(gw.api.path.Paths.make(RateTableMatchOpDefinition#SortOrder))).toList()
    }
    
    // 'value' attribute on RowIterator (id=MatchOpsIterator) at RateTableDefinitionDetailsScreen.pcf: line 141, column 55
    function value_45 () : entity.RateTableMatchOp[] {
      return tableDefinition.MatchOps
    }
    
    property get selectedMatchOp () : RateTableMatchOp {
      return getCurrentSelection(2) as RateTableMatchOp
    }
    
    property set selectedMatchOp ($arg :  RateTableMatchOp) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ParameterCVExpressionsImpl extends ListDetailPanelExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 261, column 44
    function def_onEnter_85 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(selectedMatchOp, { "DisplayText"}, { DisplayKey.get("Web.Rating.RateTableDefinition.DisplayText") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn1Details) at RateTableDefinitionDetailsScreen.pcf: line 273, column 55
    function def_onEnter_89 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.onEnter(firstParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedColumnLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 279, column 69
    function def_onEnter_92 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(firstParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn2Details) at RateTableDefinitionDetailsScreen.pcf: line 289, column 55
    function def_onEnter_95 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.onEnter(secondParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedValuesDV2) at RateTableDefinitionDetailsScreen.pcf: line 294, column 46
    function def_onEnter_97 (def :  pcf.LocalizedValuesDV) : void {
      def.onEnter(secondParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on PanelRef (id=LocalizedLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 261, column 44
    function def_refreshVariables_86 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(selectedMatchOp, { "DisplayText"}, { DisplayKey.get("Web.Rating.RateTableDefinition.DisplayText") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn1Details) at RateTableDefinitionDetailsScreen.pcf: line 273, column 55
    function def_refreshVariables_90 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.refreshVariables(firstParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedColumnLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 279, column 69
    function def_refreshVariables_93 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(firstParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'def' attribute on InputSetRef (id=ParameterColumn2Details) at RateTableDefinitionDetailsScreen.pcf: line 289, column 55
    function def_refreshVariables_96 (def :  pcf.ColumnDefinitionInputSet) : void {
      def.refreshVariables(secondParam, tableDefinition, isSelectedMatchOpEditable, true, helper)
    }
    
    // 'def' attribute on PanelRef (id=LocalizedValuesDV2) at RateTableDefinitionDetailsScreen.pcf: line 294, column 46
    function def_refreshVariables_98 (def :  pcf.LocalizedValuesDV) : void {
      def.refreshVariables(secondParam, { "ColumnLabel"}, { DisplayKey.get("Web.Rating.RateTableDefinition.ColumnLabel") })
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 225, column 50
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMatchOp.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=DisplayText_Input) at RateTableDefinitionDetailsScreen.pcf: line 234, column 57
    function defaultSetter_63 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMatchOp.DisplayText = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      firstParam.ColumnType = (__VALUE_TO_SET as typekey.RateTableDataType)
    }
    
    // 'value' attribute on TextInput (id=ParamsColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 256, column 86
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      selectedMatchOp.AllParamColumnScales = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'editable' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 225, column 50
    function editable_54 () : java.lang.Boolean {
      return isSelectedMatchOpEditable
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 199, column 46
    function initialValue_47 () : entity.RateTableColumn {
      return selectedMatchOp.Params == null ? null : selectedMatchOp.Params.sortBy(\ p -> p.SortOrder).first()
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 204, column 46
    function initialValue_48 () : entity.RateTableColumn {
      return selectedMatchOp.Params == null or selectedMatchOp.Params.Count < 2 ? null : selectedMatchOp.Params.sortBy(\ p -> p.SortOrder)[1]
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 209, column 31
    function initialValue_49 () : boolean {
      return helper.canEditMatchOp(selectedMatchOp)
    }
    
    // 'label' attribute on Label at RateTableDefinitionDetailsScreen.pcf: line 270, column 72
    function label_88 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTableDefinition.MatchOpColumnHeader", 1)
    }
    
    // 'label' attribute on Label at RateTableDefinitionDetailsScreen.pcf: line 286, column 116
    function label_94 () : java.lang.String {
      return DisplayKey.get("Web.Rating.RateTableDefinition.MatchOpColumnHeader", 2)
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 227, column 61
    function onChange_53 () : void {
      copyDetailsToParameters()
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 236, column 61
    function onChange_60 () : void {
      copyDetailsToParameters()
    }
    
    // 'onChange' attribute on PostOnChange at RateTableDefinitionDetailsScreen.pcf: line 247, column 252
    function onChange_67 () : void {
      firstParam.PhysicalColumnName = null; selectedMatchOp.Params.first().MultiSelect = false; if(selectedMatchOp.Params.Count > 1){secondParam.ColumnType = firstParam.ColumnType; secondParam.PhysicalColumnName = null}
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function valueRange_72 () : java.lang.Object {
      return selectedMatchOp.MatchOpDefinition.AllowedParameterTypeSet.toTypedArray().sortBy(\ r -> r.Priority)
    }
    
    // 'value' attribute on TextInput (id=MatchingRule_Input) at RateTableDefinitionDetailsScreen.pcf: line 219, column 71
    function valueRoot_51 () : java.lang.Object {
      return selectedMatchOp.MatchOpDefinition
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 225, column 50
    function valueRoot_57 () : java.lang.Object {
      return selectedMatchOp
    }
    
    // 'value' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function valueRoot_71 () : java.lang.Object {
      return firstParam
    }
    
    // 'value' attribute on TextInput (id=MatchingRule_Input) at RateTableDefinitionDetailsScreen.pcf: line 219, column 71
    function value_50 () : java.lang.String {
      return selectedMatchOp.MatchOpDefinition.OpName
    }
    
    // 'value' attribute on TextInput (id=Name_Input) at RateTableDefinitionDetailsScreen.pcf: line 225, column 50
    function value_55 () : java.lang.String {
      return selectedMatchOp.Name
    }
    
    // 'value' attribute on TextInput (id=DisplayText_Input) at RateTableDefinitionDetailsScreen.pcf: line 234, column 57
    function value_62 () : java.lang.String {
      return selectedMatchOp.DisplayText
    }
    
    // 'value' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function value_69 () : typekey.RateTableDataType {
      return firstParam.ColumnType
    }
    
    // 'value' attribute on TextInput (id=ParamsColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 256, column 86
    function value_79 () : java.lang.Integer {
      return selectedMatchOp.AllParamColumnScales
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function verifyValueRangeIsAllowedType_73 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function verifyValueRangeIsAllowedType_73 ($$arg :  typekey.RateTableDataType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=DataType_Input) at RateTableDefinitionDetailsScreen.pcf: line 245, column 59
    function verifyValueRange_74 () : void {
      var __valueRangeArg = selectedMatchOp.MatchOpDefinition.AllowedParameterTypeSet.toTypedArray().sortBy(\ r -> r.Priority)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_73(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=ParamsColumnScale_Input) at RateTableDefinitionDetailsScreen.pcf: line 256, column 86
    function visible_78 () : java.lang.Boolean {
      return firstParam.ColumnType == RateTableDataType.TC_DECIMAL
    }
    
    // 'visible' attribute on Label at RateTableDefinitionDetailsScreen.pcf: line 270, column 72
    function visible_87 () : java.lang.Boolean {
      return selectedMatchOp.Params.Count > 1
    }
    
    // 'visible' attribute on PanelRef (id=LocalizedColumnLabelValues) at RateTableDefinitionDetailsScreen.pcf: line 279, column 69
    function visible_91 () : java.lang.Boolean {
      return selectedMatchOp.Params.length > 1
    }
    
    property get firstParam () : entity.RateTableColumn {
      return getVariableValue("firstParam", 3) as entity.RateTableColumn
    }
    
    property set firstParam ($arg :  entity.RateTableColumn) {
      setVariableValue("firstParam", 3, $arg)
    }
    
    property get isSelectedMatchOpEditable () : boolean {
      return getVariableValue("isSelectedMatchOpEditable", 3) as java.lang.Boolean
    }
    
    property set isSelectedMatchOpEditable ($arg :  boolean) {
      setVariableValue("isSelectedMatchOpEditable", 3, $arg)
    }
    
    property get secondParam () : entity.RateTableColumn {
      return getVariableValue("secondParam", 3) as entity.RateTableColumn
    }
    
    property set secondParam ($arg :  entity.RateTableColumn) {
      setVariableValue("secondParam", 3, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/admin/rating/RateTableDefinitionDetailsScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class RateTableDefinitionDetailsScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Copy) at RateTableDefinitionDetailsScreen.pcf: line 66, column 80
    function action_13 () : void {
      NewRateTableDefinition.go(tableDefinition)
    }
    
    // 'action' attribute on ToolbarButton (id=Delete) at RateTableDefinitionDetailsScreen.pcf: line 72, column 101
    function action_16 () : void {
      tableDefinition.delete(); RateTableDefinitions.go()
    }
    
    // 'action' attribute on ToolbarButton (id=myUpdate) at RateTableDefinitionDetailsScreen.pcf: line 58, column 99
    function action_9 () : void {
      copyDetailsToParameters(); CurrentLocation.commit()
    }
    
    // 'action' attribute on ToolbarButton (id=Copy) at RateTableDefinitionDetailsScreen.pcf: line 66, column 80
    function action_dest_14 () : pcf.api.Destination {
      return pcf.NewRateTableDefinition.createDestination(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 17, column 61
    function initialValue_0 () : gw.pcf.rating.rtm.RateTableParameterSetHelper {
      return new gw.pcf.rating.rtm.RateTableParameterSetHelper(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 22, column 49
    function initialValue_1 () : List<CalcRoutineDefinition> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcRateRoutines(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 27, column 37
    function initialValue_2 () : List<RateTable> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcRateTables(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 32, column 23
    function initialValue_3 () : boolean {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.isRateTableDefinitionEditable(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 36, column 39
    function initialValue_4 () : CalcRoutineParameterSet {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcParameterSet(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 41, column 51
    function initialValue_5 () : List<CalcRoutineParameterSet> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcParameterSets(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 46, column 63
    function initialValue_6 () : java.util.Set<RateTableArgumentSourceSet> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcArgumentSourceSetsUsedInPromotedBooks(tableDefinition)
    }
    
    // 'initialValue' attribute on Variable at RateTableDefinitionDetailsScreen.pcf: line 51, column 70
    function initialValue_7 () : java.util.Set<entity.RateTableArgumentSourceSet> {
      return gw.web.rating.RateTableDefinitionDetailsScreenUIHelper.calcArgumentSourceSetsUsedInAnyRateBooks(tableDefinition)
    }
    
    // EditButtons at RateTableDefinitionDetailsScreen.pcf: line 61, column 32
    function label_11 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'editVisible' attribute on EditButtons at RateTableDefinitionDetailsScreen.pcf: line 61, column 32
    function visible_10 () : java.lang.Boolean {
      return perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=Copy) at RateTableDefinitionDetailsScreen.pcf: line 66, column 80
    function visible_12 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and perm.System.ratebookedit
    }
    
    // 'visible' attribute on ToolbarButton (id=Delete) at RateTableDefinitionDetailsScreen.pcf: line 72, column 101
    function visible_15 () : java.lang.Boolean {
      return rateTables.Empty and not CurrentLocation.InEditMode and perm.System.ratebookedit
    }
    
    // 'visible' attribute on AlertBar (id=RateTableDefinitionReferencedMessage) at RateTableDefinitionDetailsScreen.pcf: line 79, column 55
    function visible_17 () : java.lang.Boolean {
      return not (isRateTableDefinitionEditable) 
    }
    
    // 'visible' attribute on ToolbarButton (id=myUpdate) at RateTableDefinitionDetailsScreen.pcf: line 58, column 99
    function visible_8 () : java.lang.Boolean {
      return perm.System.ratebookedit and not disallowUpdate and CurrentLocation.InEditMode
    }
    
    property get argumentSourceSetsUsedInAnyRateBooks () : java.util.Set<entity.RateTableArgumentSourceSet> {
      return getVariableValue("argumentSourceSetsUsedInAnyRateBooks", 0) as java.util.Set<entity.RateTableArgumentSourceSet>
    }
    
    property set argumentSourceSetsUsedInAnyRateBooks ($arg :  java.util.Set<entity.RateTableArgumentSourceSet>) {
      setVariableValue("argumentSourceSetsUsedInAnyRateBooks", 0, $arg)
    }
    
    property get argumentSourceSetsUsedInPromotedBooks () : java.util.Set<RateTableArgumentSourceSet> {
      return getVariableValue("argumentSourceSetsUsedInPromotedBooks", 0) as java.util.Set<RateTableArgumentSourceSet>
    }
    
    property set argumentSourceSetsUsedInPromotedBooks ($arg :  java.util.Set<RateTableArgumentSourceSet>) {
      setVariableValue("argumentSourceSetsUsedInPromotedBooks", 0, $arg)
    }
    
    property get disallowUpdate () : boolean {
      return getRequireValue("disallowUpdate", 0) as java.lang.Boolean
    }
    
    property set disallowUpdate ($arg :  boolean) {
      setRequireValue("disallowUpdate", 0, $arg)
    }
    
    property get helper () : gw.pcf.rating.rtm.RateTableParameterSetHelper {
      return getVariableValue("helper", 0) as gw.pcf.rating.rtm.RateTableParameterSetHelper
    }
    
    property set helper ($arg :  gw.pcf.rating.rtm.RateTableParameterSetHelper) {
      setVariableValue("helper", 0, $arg)
    }
    
    property get isRateTableDefinitionEditable () : boolean {
      return getVariableValue("isRateTableDefinitionEditable", 0) as java.lang.Boolean
    }
    
    property set isRateTableDefinitionEditable ($arg :  boolean) {
      setVariableValue("isRateTableDefinitionEditable", 0, $arg)
    }
    
    property get paramSets () : List<CalcRoutineParameterSet> {
      return getVariableValue("paramSets", 0) as List<CalcRoutineParameterSet>
    }
    
    property set paramSets ($arg :  List<CalcRoutineParameterSet>) {
      setVariableValue("paramSets", 0, $arg)
    }
    
    property get parameterSet () : CalcRoutineParameterSet {
      return getVariableValue("parameterSet", 0) as CalcRoutineParameterSet
    }
    
    property set parameterSet ($arg :  CalcRoutineParameterSet) {
      setVariableValue("parameterSet", 0, $arg)
    }
    
    property get rateRoutines () : List<CalcRoutineDefinition> {
      return getVariableValue("rateRoutines", 0) as List<CalcRoutineDefinition>
    }
    
    property set rateRoutines ($arg :  List<CalcRoutineDefinition>) {
      setVariableValue("rateRoutines", 0, $arg)
    }
    
    property get rateTables () : List<RateTable> {
      return getVariableValue("rateTables", 0) as List<RateTable>
    }
    
    property set rateTables ($arg :  List<RateTable>) {
      setVariableValue("rateTables", 0, $arg)
    }
    
    property get tableDefinition () : RateTableDefinition {
      return getRequireValue("tableDefinition", 0) as RateTableDefinition
    }
    
    property set tableDefinition ($arg :  RateTableDefinition) {
      setRequireValue("tableDefinition", 0, $arg)
    }
    
    public function copyDetailsToParameters() {
      helper.copyNameLabelAndLocalizationDataOnSingleParameterOps()
    }
    
    
  }
  
  
}