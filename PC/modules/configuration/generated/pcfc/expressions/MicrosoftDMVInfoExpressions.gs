package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/tools/infopages/MicrosoftDMVInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MicrosoftDMVInfoExpressions {
  @javax.annotation.Generated("config/web/pcf/tools/infopages/MicrosoftDMVInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends MicrosoftDMVInfoExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CheckBoxCell (id=IntervalSelected_Cell) at MicrosoftDMVInfo.pcf: line 108, column 46
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      rowInterval.Selected = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxCell (id=IntervalSelected_Cell) at MicrosoftDMVInfo.pcf: line 108, column 46
    function valueRoot_23 () : java.lang.Object {
      return rowInterval
    }
    
    // 'value' attribute on CheckBoxCell (id=IntervalSelected_Cell) at MicrosoftDMVInfo.pcf: line 108, column 46
    function value_21 () : java.lang.Boolean {
      return rowInterval.Selected
    }
    
    // 'value' attribute on TextCell (id=IntervalID_Cell) at MicrosoftDMVInfo.pcf: line 115, column 56
    function value_25 () : java.lang.String {
      return Long.toString(rowInterval.ID)
    }
    
    // 'value' attribute on DateCell (id=IntervalStart_Cell) at MicrosoftDMVInfo.pcf: line 121, column 56
    function value_27 () : java.util.Date {
      return rowInterval.StartIntervalTime
    }
    
    // 'value' attribute on DateCell (id=IntervalEnd_Cell) at MicrosoftDMVInfo.pcf: line 127, column 54
    function value_30 () : java.util.Date {
      return rowInterval.EndIntervalTime
    }
    
    property get rowInterval () : gw.api.tools.QueryStoreRuntimeStatsIntervalRow {
      return getIteratedValue(1) as gw.api.tools.QueryStoreRuntimeStatsIntervalRow
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/tools/infopages/MicrosoftDMVInfo.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MicrosoftDMVInfoExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex () : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ToolbarButton) at MicrosoftDMVInfo.pcf: line 34, column 112
    function action_1 () : void {
      
    }
    
    // 'action' attribute on ToolbarButton (id=RefreshIntervals) at MicrosoftDMVInfo.pcf: line 93, column 65
    function action_17 () : void {
      PageHelper.reloadIntervals()
    }
    
    // 'action' attribute on ButtonInput (id=SubmitBatch_Input) at MicrosoftDMVInfo.pcf: line 59, column 110
    function action_7 () : void {
      PageHelper.submitBatch()
    }
    
    // 'available' attribute on ButtonInput (id=SubmitBatch_Input) at MicrosoftDMVInfo.pcf: line 59, column 110
    function available_6 () : java.lang.Boolean {
      return PageHelper.isReadyToDownload() and !PageHelper.BatchRunning
    }
    
    // 'canVisit' attribute on Page (id=MicrosoftDMVInfo) at MicrosoftDMVInfo.pcf: line 13, column 83
    static function canVisit_35 () : java.lang.Boolean {
      return gw.api.tools.MicrosoftDMVPageHelper.supportsDMV()
    }
    
    // 'def' attribute on ListViewInput at MicrosoftDMVInfo.pcf: line 29, column 33
    function def_onEnter_2 (def :  pcf.PerfDownloadLV) : void {
      def.onEnter(PageHelper)
    }
    
    // 'def' attribute on ListViewInput at MicrosoftDMVInfo.pcf: line 29, column 33
    function def_refreshVariables_3 (def :  pcf.PerfDownloadLV) : void {
      def.refreshVariables(PageHelper)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeDatabaseStatistics_Input) at MicrosoftDMVInfo.pcf: line 73, column 63
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.IncludeDatabaseStatistics = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=FetchQueryStoreRows_Input) at MicrosoftDMVInfo.pcf: line 78, column 56
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      PageHelper.FetchQueryStoreRows = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'initialValue' attribute on Variable at MicrosoftDMVInfo.pcf: line 17, column 51
    function initialValue_0 () : gw.api.tools.MicrosoftDMVPageHelper {
      return new gw.api.tools.MicrosoftDMVPageHelper()
    }
    
    // 'parent' attribute on Page (id=MicrosoftDMVInfo) at MicrosoftDMVInfo.pcf: line 13, column 83
    static function parent_36 () : pcf.api.Destination {
      return pcf.InfoPages.createDestination()
    }
    
    // 'percentage' attribute on ProgressInput (id=batchProgress_Input) at MicrosoftDMVInfo.pcf: line 41, column 147
    function percentage_4 () : java.lang.Double {
      return PageHelper.BatchRunning ? -1 : 100
    }
    
    // 'value' attribute on TextCell (id=IntervalID_Cell) at MicrosoftDMVInfo.pcf: line 115, column 56
    function sortValue_18 (rowInterval :  gw.api.tools.QueryStoreRuntimeStatsIntervalRow) : java.lang.Object {
      return Long.toString(rowInterval.ID)
    }
    
    // 'value' attribute on DateCell (id=IntervalStart_Cell) at MicrosoftDMVInfo.pcf: line 121, column 56
    function sortValue_19 (rowInterval :  gw.api.tools.QueryStoreRuntimeStatsIntervalRow) : java.lang.Object {
      return rowInterval.StartIntervalTime
    }
    
    // 'value' attribute on DateCell (id=IntervalEnd_Cell) at MicrosoftDMVInfo.pcf: line 127, column 54
    function sortValue_20 (rowInterval :  gw.api.tools.QueryStoreRuntimeStatsIntervalRow) : java.lang.Object {
      return rowInterval.EndIntervalTime
    }
    
    // 'status' attribute on ProgressInput (id=batchProgress_Input) at MicrosoftDMVInfo.pcf: line 41, column 147
    function status_5 () : java.lang.String {
      return PageHelper.BatchRunning ? DisplayKey.get("Web.InternalTools.InfoPages.PerfDownload.RunningBatchProcess") : null
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeDatabaseStatistics_Input) at MicrosoftDMVInfo.pcf: line 73, column 63
    function valueRoot_11 () : java.lang.Object {
      return PageHelper
    }
    
    // 'value' attribute on CheckBoxInput (id=FetchQueryStoreRows_Input) at MicrosoftDMVInfo.pcf: line 78, column 56
    function value_13 () : java.lang.Boolean {
      return PageHelper.FetchQueryStoreRows
    }
    
    // 'value' attribute on RowIterator at MicrosoftDMVInfo.pcf: line 103, column 74
    function value_33 () : gw.api.tools.QueryStoreRuntimeStatsIntervalRow[] {
      return PageHelper.QueryStoreRuntimeStatsIntervalInfos
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeDatabaseStatistics_Input) at MicrosoftDMVInfo.pcf: line 73, column 63
    function value_9 () : java.lang.Boolean {
      return PageHelper.IncludeDatabaseStatistics
    }
    
    override property get CurrentLocation () : pcf.MicrosoftDMVInfo {
      return super.CurrentLocation as pcf.MicrosoftDMVInfo
    }
    
    property get PageHelper () : gw.api.tools.MicrosoftDMVPageHelper {
      return getVariableValue("PageHelper", 0) as gw.api.tools.MicrosoftDMVPageHelper
    }
    
    property set PageHelper ($arg :  gw.api.tools.MicrosoftDMVPageHelper) {
      setVariableValue("PageHelper", 0, $arg)
    }
    
    
  }
  
  
}