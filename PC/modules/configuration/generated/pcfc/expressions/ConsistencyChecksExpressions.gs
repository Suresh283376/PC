package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ConsistencyChecksExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConsistencyChecksExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 16, column 60
    function initialValue_0 () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return new gw.api.tools.ConsistencyChecksRunsPageHelper()
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 20, column 43
    function initialValue_1 () : gw.api.tools.NameablePicker {
      return new gw.api.tools.NameablePicker(CCPageHelper.DbTableNames)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 24, column 43
    function initialValue_2 () : gw.api.tools.NameablePicker {
      return new gw.api.tools.NameablePicker(CCPageHelper.ConsistCheckTypeCodes)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 28, column 43
    function initialValue_3 () : gw.api.tools.NameablePicker {
      return new gw.api.tools.NameablePicker(CCPageHelper.TableGroups)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 33, column 104
    function initialValue_4 () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return CCPageHelper.getWorkQueueExecutors(true)
    }
    
    // 'parent' attribute on Page (id=ConsistencyChecks) at ConsistencyChecks.pcf: line 12, column 72
    static function parent_124 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    property get CCPageHelper () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return getVariableValue("CCPageHelper", 0) as gw.api.tools.ConsistencyChecksRunsPageHelper
    }
    
    property set CCPageHelper ($arg :  gw.api.tools.ConsistencyChecksRunsPageHelper) {
      setVariableValue("CCPageHelper", 0, $arg)
    }
    
    property get CheckPicker () : gw.api.tools.NameablePicker {
      return getVariableValue("CheckPicker", 0) as gw.api.tools.NameablePicker
    }
    
    property set CheckPicker ($arg :  gw.api.tools.NameablePicker) {
      setVariableValue("CheckPicker", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.ConsistencyChecks {
      return super.CurrentLocation as pcf.ConsistencyChecks
    }
    
    property get TableGroupPicker () : gw.api.tools.NameablePicker {
      return getVariableValue("TableGroupPicker", 0) as gw.api.tools.NameablePicker
    }
    
    property set TableGroupPicker ($arg :  gw.api.tools.NameablePicker) {
      setVariableValue("TableGroupPicker", 0, $arg)
    }
    
    property get TablePicker () : gw.api.tools.NameablePicker {
      return getVariableValue("TablePicker", 0) as gw.api.tools.NameablePicker
    }
    
    property set TablePicker ($arg :  gw.api.tools.NameablePicker) {
      setVariableValue("TablePicker", 0, $arg)
    }
    
    property get WorkQueueExecutors () : java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo> {
      return getVariableValue("WorkQueueExecutors", 0) as java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo>
    }
    
    property set WorkQueueExecutors ($arg :  java.util.List<gw.api.tools.ConsistencyChecksRunsPageHelper.WorkQueueExecutorInfo>) {
      setVariableValue("WorkQueueExecutors", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ConsistencyChecksScreenExpressionsImpl extends ConsistencyChecksExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=Reset) at ConsistencyChecks.pcf: line 430, column 101
    function action_100 () : void {
      CheckPicker.SearchString = ""
    }
    
    // 'action' attribute on ButtonInput (id=DownloadAllConsistencyChecks_Input) at ConsistencyChecks.pcf: line 489, column 94
    function action_113 () : void {
      CCViewHelper.downloadConsistencyChecks( null )
    }
    
    // 'action' attribute on ButtonInput (id=searchButton_Input) at ConsistencyChecks.pcf: line 514, column 94
    function action_117 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=ResetButton_Input) at ConsistencyChecks.pcf: line 521, column 99
    function action_118 () : void {
      tableSearch = ""
    }
    
    // 'action' attribute on ToolbarButton (id=Refresh) at ConsistencyChecks.pcf: line 96, column 108
    function action_14 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=SubmitBatchJobButton_Input) at ConsistencyChecks.pcf: line 111, column 96
    function action_21 () : void {
      CCPageHelper.submitBatch(TablePicker.ChosenNames, TableGroupPicker.ChosenPickers, CheckPicker.ChosenPickers)
    }
    
    // 'action' attribute on ButtonInput (id=PauseButton_Input) at ConsistencyChecks.pcf: line 118, column 131
    function action_25 () : void {
      CCPageHelper.pauseRun()
    }
    
    // 'action' attribute on ButtonInput (id=ResumeButton_Input) at ConsistencyChecks.pcf: line 125, column 132
    function action_28 () : void {
      CCPageHelper.resumeRun()
    }
    
    // 'action' attribute on ButtonInput (id=CancelButton_Input) at ConsistencyChecks.pcf: line 132, column 94
    function action_31 () : void {
      CCPageHelper.cancelRun()
    }
    
    // 'action' attribute on ButtonInput (id=NumThreads_Input) at ConsistencyChecks.pcf: line 152, column 123
    function action_39 () : void {
      ConsistencyChecksChangeNumOfWorkersPopup.push(CCPageHelper)
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at ConsistencyChecks.pcf: line 235, column 96
    function action_62 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=ResetButton) at ConsistencyChecks.pcf: line 239, column 101
    function action_63 () : void {
      TablePicker.SearchString = ""
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at ConsistencyChecks.pcf: line 426, column 96
    function action_99 () : void {
      
    }
    
    // 'action' attribute on ButtonInput (id=NumThreads_Input) at ConsistencyChecks.pcf: line 152, column 123
    function action_dest_40 () : pcf.api.Destination {
      return pcf.ConsistencyChecksChangeNumOfWorkersPopup.createDestination(CCPageHelper)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=downloadAll) at ConsistencyChecks.pcf: line 86, column 117
    function allCheckedRowsAction_11 (CheckedValues :  entity.DBConsistCheckRun[], CheckedValuesErrors :  java.util.Map) : void {
      CCPageHelper.downloadMultipleConsistencyCheckRuns(CheckedValues)
    }
    
    // 'available' attribute on ButtonInput (id=SubmitBatchJobButton_Input) at ConsistencyChecks.pcf: line 111, column 96
    function available_19 () : java.lang.Boolean {
      return CCPageHelper.WorkQueueStarted
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=DeleteChecked) at ConsistencyChecks.pcf: line 92, column 107
    function checkedRowAction_13 (element :  entity.DBConsistCheckRun, CheckedValue :  entity.DBConsistCheckRun) : void {
      if (CheckedValue.EndTime != null) { CCPageHelper.deleteDBConsistCheckRun(CheckedValue) }
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 187, column 59
    function checkedRowAction_51 (row :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      row.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 223, column 59
    function checkedRowAction_57 (row :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      row.Chosen = true
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 280, column 59
    function checkedRowAction_70 (ChosenTableGroup :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      ChosenTableGroup.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 319, column 59
    function checkedRowAction_76 (availableTableGroup :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      availableTableGroup.Chosen = true;
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 375, column 59
    function checkedRowAction_87 (selectedCheckType :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      selectedCheckType.Chosen = false
    }
    
    // 'checkedRowAction' attribute on CheckedValuesToolbarButton (id=useButton) at ConsistencyChecks.pcf: line 414, column 59
    function checkedRowAction_94 (availableCheckType :  gw.api.tools.PickerRow, CheckedValue :  gw.api.tools.PickerRow) : void {
      availableCheckType.Chosen = true
    }
    
    // 'confirmMessage' attribute on CheckedValuesToolbarButton (id=DeleteChecked) at ConsistencyChecks.pcf: line 92, column 107
    function confirmMessage_12 () : java.lang.String {
      return DisplayKey.get("Java.Web.ConsistencyCheck.DeleteConfirmation") 
    }
    
    // 'def' attribute on ListViewInput at ConsistencyChecks.pcf: line 78, column 41
    function def_onEnter_15 (def :  pcf.ConsistencyChecksRunsLV) : void {
      def.onEnter(CCPageHelper)
    }
    
    // 'def' attribute on ListViewInput at ConsistencyChecks.pcf: line 78, column 41
    function def_refreshVariables_16 (def :  pcf.ConsistencyChecksRunsLV) : void {
      def.refreshVariables(CCPageHelper)
    }
    
    // 'value' attribute on TextInput (id=TableNameSearchTextInput_Input) at ConsistencyChecks.pcf: line 507, column 45
    function defaultSetter_115 (__VALUE_TO_SET :  java.lang.Object) : void {
      tableSearch = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Descripton_Input) at ConsistencyChecks.pcf: line 143, column 61
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      CCPageHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 167, column 86
    function defaultSetter_45 (__VALUE_TO_SET :  java.lang.Object) : void {
      CCPageHelper.TableSelectMode = (__VALUE_TO_SET as gw.api.database.ConsistCheckRunTableSelectType)
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 229, column 46
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      TablePicker.SearchString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTypes_Input) at ConsistencyChecks.pcf: line 355, column 62
    function defaultSetter_84 (__VALUE_TO_SET :  java.lang.Object) : void {
      CCPageHelper.CheckAllTypes = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 420, column 46
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      CheckPicker.SearchString = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at ConsistencyChecks.pcf: line 40, column 62
    function initialValue_5 () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return new gw.api.tools.ConsistencyChecksRunsPageHelper( )
    }
    
    // 'label' attribute on AlertBar (id=OneServerAlert) at ConsistencyChecks.pcf: line 61, column 97
    function label_10 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.NumberOfWorkers.OneServer", BatchProcessType.TC_DBCONSISTENCYCHECK)
    }
    
    // 'label' attribute on ButtonInput (id=NumThreads_Input) at ConsistencyChecks.pcf: line 152, column 123
    function label_41 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.NumberOfWorkers", CCPageHelper.calcNumberOfThreads(WorkQueueExecutors))
    }
    
    // 'label' attribute on AlertBar (id=QueueStoppedAlert) at ConsistencyChecks.pcf: line 51, column 54
    function label_7 () : java.lang.Object {
      return DisplayKey.get("Web.InternalTools.DBConsistCheckRun.QueueStopped", BatchProcessType.TC_DBCONSISTENCYCHECK)
    }
    
    // 'percentage' attribute on ProgressInput (id=batchProgress_Input) at ConsistencyChecks.pcf: line 103, column 53
    function percentage_17 () : java.lang.Double {
      return CCPageHelper.StatusType == WorkItemSetState.TC_COMPLETED ? 100 : (CCPageHelper.Running ? CCPageHelper.ProgressPercentageIfRunning : -1)
    }
    
    // 'refreshOnProgressComplete' attribute on InputColumn at ConsistencyChecks.pcf: line 75, column 62
    function refreshOnProgressComplete_33 () : java.lang.Object {
      return CCPageHelper
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 448, column 75
    function sortValue_101 (availableCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return availableCheckType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ccTypeCode_Cell) at ConsistencyChecks.pcf: line 452, column 94
    function sortValue_102 (availableCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return CCPageHelper.getCheckTypeCode(availableCheckType)
    }
    
    // 'value' attribute on TextCell (id=conistCheckDescription_Cell) at ConsistencyChecks.pcf: line 457, column 48
    function sortValue_103 (availableCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return CCPageHelper.getCheckTypeDescription(availableCheckType)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 206, column 48
    function sortValue_52 (row :  gw.api.tools.PickerRow) : java.lang.Object {
      return row.DisplayName
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 258, column 48
    function sortValue_64 (row :  gw.api.tools.PickerRow) : java.lang.Object {
      return row.DisplayName
    }
    
    // 'value' attribute on TextCell (id=chosentablegroupname_Cell) at ConsistencyChecks.pcf: line 300, column 48
    function sortValue_71 (ChosenTableGroup :  gw.api.tools.PickerRow) : java.lang.Object {
      return ChosenTableGroup.DisplayName
    }
    
    // 'value' attribute on TextCell (id=tablegroupname_Cell) at ConsistencyChecks.pcf: line 339, column 48
    function sortValue_77 (availableTableGroup :  gw.api.tools.PickerRow) : java.lang.Object {
      return availableTableGroup.DisplayName
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 396, column 48
    function sortValue_88 (selectedCheckType :  gw.api.tools.PickerRow) : java.lang.Object {
      return selectedCheckType.DisplayName
    }
    
    // 'status' attribute on ProgressInput (id=batchProgress_Input) at ConsistencyChecks.pcf: line 103, column 53
    function status_18 () : java.lang.String {
      return CCPageHelper.Status
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 167, column 86
    function valueRange_47 () : java.lang.Object {
      return gw.api.database.ConsistCheckRunTableSelectType.values()
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 229, column 46
    function valueRoot_60 () : java.lang.Object {
      return TablePicker
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 420, column 46
    function valueRoot_97 () : java.lang.Object {
      return CheckPicker
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecks.pcf: line 443, column 68
    function value_111 () : gw.api.tools.PickerRow[] {
      return CheckPicker.getUnchosenPickersFilteredByName()
    }
    
    // 'value' attribute on TextInput (id=TableNameSearchTextInput_Input) at ConsistencyChecks.pcf: line 507, column 45
    function value_114 () : java.lang.String {
      return tableSearch
    }
    
    // 'value' attribute on TextInput (id=Descripton_Input) at ConsistencyChecks.pcf: line 143, column 61
    function value_34 () : java.lang.String {
      return CCPageHelper.Description
    }
    
    // 'value' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 167, column 86
    function value_44 () : gw.api.database.ConsistCheckRunTableSelectType {
      return CCPageHelper.TableSelectMode
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecks.pcf: line 200, column 68
    function value_56 () : gw.api.tools.PickerRow[] {
      return TablePicker.ChosenPickers
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 229, column 46
    function value_58 () : java.lang.String {
      return TablePicker.SearchString
    }
    
    // 'value' attribute on RowIterator at ConsistencyChecks.pcf: line 252, column 68
    function value_68 () : gw.api.tools.PickerRow[] {
      return TablePicker.getUnchosenPickersFilteredByName()
    }
    
    // 'value' attribute on RowIterator (id=ChosenTableGroupIterator) at ConsistencyChecks.pcf: line 294, column 68
    function value_75 () : gw.api.tools.PickerRow[] {
      return TableGroupPicker.ChosenPickers
    }
    
    // 'value' attribute on RowIterator (id=availableTableGroupsIterator) at ConsistencyChecks.pcf: line 333, column 68
    function value_81 () : gw.api.tools.PickerRow[] {
      return TableGroupPicker.UnchosenPickersFilteredByName
    }
    
    // 'value' attribute on BooleanRadioInput (id=AnalyzeAllTypes_Input) at ConsistencyChecks.pcf: line 355, column 62
    function value_83 () : java.lang.Boolean {
      return CCPageHelper.CheckAllTypes
    }
    
    // 'value' attribute on RowIterator (id=checkSelectLV) at ConsistencyChecks.pcf: line 389, column 68
    function value_93 () : gw.api.tools.PickerRow[] {
      return CheckPicker.ChosenPickers
    }
    
    // 'value' attribute on TextValue (id=searchString) at ConsistencyChecks.pcf: line 420, column 46
    function value_95 () : java.lang.String {
      return CheckPicker.SearchString
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 167, column 86
    function verifyValueRangeIsAllowedType_48 ($$arg :  gw.api.database.ConsistCheckRunTableSelectType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 167, column 86
    function verifyValueRangeIsAllowedType_48 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeRadioInput (id=tableSelectionType_Input) at ConsistencyChecks.pcf: line 167, column 86
    function verifyValueRange_49 () : void {
      var __valueRangeArg = gw.api.database.ConsistCheckRunTableSelectType.values()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_48(__valueRangeArg)
    }
    
    // 'visible' attribute on PanelRow at ConsistencyChecks.pcf: line 362, column 61
    function visible_112 () : java.lang.Boolean {
      return !CCPageHelper.CheckAllTypes
    }
    
    // 'visible' attribute on ButtonInput (id=SubmitBatchJobButton_Input) at ConsistencyChecks.pcf: line 111, column 96
    function visible_20 () : java.lang.Boolean {
      return !CCPageHelper.isRunning() and !CCPageHelper.isWriterRunning()
    }
    
    // 'visible' attribute on ButtonInput (id=PauseButton_Input) at ConsistencyChecks.pcf: line 118, column 131
    function visible_24 () : java.lang.Boolean {
      return CCPageHelper.isRunning() and not CCPageHelper.isCanceling() and CCPageHelper.areWorkersRunning()
    }
    
    // 'visible' attribute on ButtonInput (id=ResumeButton_Input) at ConsistencyChecks.pcf: line 125, column 132
    function visible_27 () : java.lang.Boolean {
      return CCPageHelper.isRunning() and not CCPageHelper.isCanceling() and !CCPageHelper.areWorkersRunning()
    }
    
    // 'visible' attribute on ButtonInput (id=CancelButton_Input) at ConsistencyChecks.pcf: line 132, column 94
    function visible_30 () : java.lang.Boolean {
      return CCPageHelper.isRunning() and not CCPageHelper.isCanceling()
    }
    
    // 'visible' attribute on AlertBar (id=QueueStoppedAlert) at ConsistencyChecks.pcf: line 51, column 54
    function visible_6 () : java.lang.Boolean {
      return not CCPageHelper.WorkQueueStarted
    }
    
    // 'visible' attribute on PanelRow at ConsistencyChecks.pcf: line 174, column 80
    function visible_69 () : java.lang.Boolean {
      return CCPageHelper.TableSelectMode == SPECIFY_TABLES
    }
    
    // 'visible' attribute on AlertBar (id=NoServerAlert) at ConsistencyChecks.pcf: line 56, column 91
    function visible_8 () : java.lang.Boolean {
      return CCPageHelper.WorkQueueStarted and not CCPageHelper.areWorkersRunning()
    }
    
    // 'visible' attribute on PanelRow at ConsistencyChecks.pcf: line 267, column 85
    function visible_82 () : java.lang.Boolean {
      return CCPageHelper.TableSelectMode == SPECIFY_TABLEGROUPS
    }
    
    // 'visible' attribute on AlertBar (id=OneServerAlert) at ConsistencyChecks.pcf: line 61, column 97
    function visible_9 () : java.lang.Boolean {
      return CCPageHelper.isOnlyOneServerInClusterProcessingWorkQueue(WorkQueueExecutors)
    }
    
    property get CCViewHelper () : gw.api.tools.ConsistencyChecksRunsPageHelper {
      return getVariableValue("CCViewHelper", 1) as gw.api.tools.ConsistencyChecksRunsPageHelper
    }
    
    property set CCViewHelper ($arg :  gw.api.tools.ConsistencyChecksRunsPageHelper) {
      setVariableValue("CCViewHelper", 1, $arg)
    }
    
    property get tableSearch () : String {
      return getVariableValue("tableSearch", 1) as String
    }
    
    property set tableSearch ($arg :  String) {
      setVariableValue("tableSearch", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 258, column 48
    function valueRoot_66 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 258, column 48
    function value_65 () : java.lang.String {
      return row.DisplayName
    }
    
    property get row () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=chosentablegroupname_Cell) at ConsistencyChecks.pcf: line 300, column 48
    function valueRoot_73 () : java.lang.Object {
      return ChosenTableGroup
    }
    
    // 'value' attribute on TextCell (id=chosentablegroupname_Cell) at ConsistencyChecks.pcf: line 300, column 48
    function value_72 () : java.lang.String {
      return ChosenTableGroup.DisplayName
    }
    
    property get ChosenTableGroup () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=tablegroupname_Cell) at ConsistencyChecks.pcf: line 339, column 48
    function valueRoot_79 () : java.lang.Object {
      return availableTableGroup
    }
    
    // 'value' attribute on TextCell (id=tablegroupname_Cell) at ConsistencyChecks.pcf: line 339, column 48
    function value_78 () : java.lang.String {
      return availableTableGroup.DisplayName
    }
    
    property get availableTableGroup () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'helpText' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 396, column 48
    function helpText_89 () : java.lang.String {
      return CCPageHelper.getCheckTypeCode(selectedCheckType)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 396, column 48
    function valueRoot_91 () : java.lang.Object {
      return selectedCheckType
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 396, column 48
    function value_90 () : java.lang.String {
      return selectedCheckType.DisplayName
    }
    
    property get selectedCheckType () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry6ExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 448, column 75
    function valueRoot_105 () : java.lang.Object {
      return availableCheckType
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 448, column 75
    function value_104 () : java.lang.String {
      return availableCheckType.DisplayName
    }
    
    // 'value' attribute on TextCell (id=ccTypeCode_Cell) at ConsistencyChecks.pcf: line 452, column 94
    function value_107 () : java.lang.String {
      return CCPageHelper.getCheckTypeCode(availableCheckType)
    }
    
    // 'value' attribute on TextCell (id=conistCheckDescription_Cell) at ConsistencyChecks.pcf: line 457, column 48
    function value_109 () : java.lang.String {
      return CCPageHelper.getCheckTypeDescription(availableCheckType)
    }
    
    property get availableCheckType () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 206, column 48
    function valueRoot_54 () : java.lang.Object {
      return row
    }
    
    // 'value' attribute on TextCell (id=row_Cell) at ConsistencyChecks.pcf: line 206, column 48
    function value_53 () : java.lang.String {
      return row.DisplayName
    }
    
    property get row () : gw.api.tools.PickerRow {
      return getIteratedValue(2) as gw.api.tools.PickerRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/ConsistencyChecks.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ListDetailPanelExpressionsImpl extends ConsistencyChecksScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at ConsistencyChecks.pcf: line 533, column 72
    function def_onEnter_119 (def :  pcf.ConsistencyChecksLV) : void {
      def.onEnter(CCViewHelper, tableSearch)
    }
    
    // 'def' attribute on PanelRef at ConsistencyChecks.pcf: line 533, column 72
    function def_refreshVariables_120 (def :  pcf.ConsistencyChecksLV) : void {
      def.refreshVariables(CCViewHelper, tableSearch)
    }
    
    // TemplatePanel at ConsistencyChecks.pcf: line 540, column 36
    function renderCall_121 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper) : void {
      pcfc.expressions.ConsistencyChecks_TemplatePanel1.render(__writer, __escaper, cCheck, __helper)
    }
    
    // TemplatePanel at ConsistencyChecks.pcf: line 552, column 36
    function renderCall_122 (__writer :  java.io.Writer, __escaper :  gw.lang.parser.template.StringEscaper, __helper :  gw.api.web.template.TemplatePanelHelper) : void {
      pcfc.expressions.ConsistencyChecks_TemplatePanel2.render(__writer, __escaper, cCheck, __helper)
    }
    
    // 'visible' attribute on Card (id=QueryToIdentifyRowsCard) at ConsistencyChecks.pcf: line 551, column 103
    function visible_123 () : java.lang.Boolean {
      return cCheck.QueryToIdentifyRows != null and cCheck.QueryToIdentifyRows != ''
    }
    
    property get cCheck () : gw.api.database.ConsistencyCheck {
      return getCurrentSelection(2) as gw.api.database.ConsistencyCheck
    }
    
    property set cCheck ($arg :  gw.api.database.ConsistencyCheck) {
      setCurrentSelection(2, $arg)
    }
    
    
  }
  
  
}