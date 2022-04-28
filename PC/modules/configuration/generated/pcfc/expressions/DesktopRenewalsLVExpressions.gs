package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DesktopRenewalsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopRenewalsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.pcf: line 20, column 69
    function filters_0 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.filters()
    }
    
    // 'filters' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.pcf: line 23, column 66
    function filters_1 () : gw.api.filters.IFilter[] {
      return gw.api.web.desktop.DesktopJobFilters.producerFilters()
    }
    
    // 'sortBy' attribute on IteratorSort at DesktopRenewalsLV.pcf: line 27, column 24
    function sortBy_3 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.pcf: line 33, column 47
    function sortValue_4 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.PrimaryInsuredName
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.pcf: line 39, column 25
    function sortValue_5 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'sortBy' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.pcf: line 62, column 25
    function sortValue_6 (renewal :  entity.Renewal) : java.lang.Object {
      return renewal.Policy.ProductCode
    }
    
    // 'value' attribute on RowIterator at DesktopRenewalsLV.pcf: line 16, column 74
    function value_44 () : gw.api.database.IQueryBeanResult<entity.Renewal> {
      return renewals
    }
    
    // 'visible' attribute on ToolbarFilterOptionGroup at DesktopRenewalsLV.pcf: line 23, column 66
    function visible_2 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.pcf: line 69, column 67
    function visible_7 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    property get renewals () : gw.api.database.IQueryBeanResult<Renewal> {
      return getRequireValue("renewals", 0) as gw.api.database.IQueryBeanResult<Renewal>
    }
    
    property set renewals ($arg :  gw.api.database.IQueryBeanResult<Renewal>) {
      setRequireValue("renewals", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/desktop/DesktopRenewalsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends DesktopRenewalsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.pcf: line 47, column 25
    function action_16 () : void {
      JobForward.go(renewal)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.pcf: line 62, column 25
    function action_26 () : void {
      JobForward.go(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.pcf: line 69, column 67
    function action_32 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.pcf: line 76, column 66
    function action_38 () : void {
      pcf.UserSearchPopup.push()
    }
    
    // 'action' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.pcf: line 47, column 25
    function action_dest_17 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // 'action' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.pcf: line 62, column 25
    function action_dest_27 () : pcf.api.Destination {
      return pcf.JobForward.createDestination(renewal)
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.pcf: line 69, column 67
    function action_dest_33 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // MenuItem (id=UserBrowseMenuItem) at DesktopRenewalsLV.pcf: line 76, column 66
    function action_dest_39 () : pcf.api.Destination {
      return pcf.UserSearchPopup.createDestination()
    }
    
    // 'available' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.pcf: line 47, column 25
    function available_15 () : java.lang.Boolean {
      return renewal.Viewable
    }
    
    // 'available' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.pcf: line 62, column 25
    function available_25 () : java.lang.Boolean {
      return perm.Renewal.view(renewal)
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.pcf: line 33, column 47
    function valueRoot_10 () : java.lang.Object {
      return renewal
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.pcf: line 39, column 25
    function valueRoot_13 () : java.lang.Object {
      return renewal.SelectedVersion
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.pcf: line 62, column 25
    function valueRoot_29 () : java.lang.Object {
      return renewal.Policy
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.pcf: line 69, column 67
    function valueRoot_35 () : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole( TC_PRODUCER )
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopRenewalsLV.pcf: line 76, column 66
    function valueRoot_41 () : java.lang.Object {
      return renewal.getUserRoleAssignmentByRole( TC_UNDERWRITER )
    }
    
    // 'value' attribute on DateCell (id=EffectiveDate_Cell) at DesktopRenewalsLV.pcf: line 39, column 25
    function value_12 () : java.util.Date {
      return renewal.SelectedVersion.EditEffectiveDate
    }
    
    // 'value' attribute on TextCell (id=JobNumber_Cell) at DesktopRenewalsLV.pcf: line 47, column 25
    function value_18 () : java.lang.String {
      return renewal.JobNumber
    }
    
    // 'value' attribute on TextCell (id=Status_Cell) at DesktopRenewalsLV.pcf: line 53, column 25
    function value_22 () : java.lang.String {
      return renewal.DisplayStatus
    }
    
    // 'value' attribute on TextCell (id=Product_Cell) at DesktopRenewalsLV.pcf: line 62, column 25
    function value_28 () : gw.api.productmodel.Product {
      return renewal.Policy.Product
    }
    
    // 'value' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.pcf: line 69, column 67
    function value_34 () : entity.User {
      return renewal.getUserRoleAssignmentByRole( TC_PRODUCER ).AssignedUser
    }
    
    // 'value' attribute on AltUserCell (id=Underwriter_Cell) at DesktopRenewalsLV.pcf: line 76, column 66
    function value_40 () : entity.User {
      return renewal.getUserRoleAssignmentByRole( TC_UNDERWRITER ).AssignedUser
    }
    
    // 'value' attribute on TextCell (id=Insured_Cell) at DesktopRenewalsLV.pcf: line 33, column 47
    function value_9 () : java.lang.String {
      return renewal.PrimaryInsuredName
    }
    
    // 'visible' attribute on AltUserCell (id=Producer_Cell) at DesktopRenewalsLV.pcf: line 69, column 67
    function visible_36 () : java.lang.Boolean {
      return !perm.System.viewproducerstyledesktopdetails
    }
    
    // 'visible' attribute on AltUserCell (id=Underwriter_Cell) at DesktopRenewalsLV.pcf: line 76, column 66
    function visible_42 () : java.lang.Boolean {
      return perm.System.viewproducerstyledesktopdetails
    }
    
    property get renewal () : entity.Renewal {
      return getIteratedValue(1) as entity.Renewal
    }
    
    
  }
  
  
}