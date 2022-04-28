package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class TabBarExpressions {
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 37, column 38
    function action_106 () : void {
      pcf.UsersAndSecurity.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 39, column 28
    function action_118 () : void {
      pcf.Rating.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 41, column 38
    function action_136 () : void {
      pcf.BusinessSettings.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 43, column 32
    function action_146 () : void {
      pcf.Monitoring.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 45, column 31
    function action_158 () : void {
      pcf.Utilities.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 37, column 38
    function action_dest_107 () : pcf.api.Destination {
      return pcf.UsersAndSecurity.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 39, column 28
    function action_dest_119 () : pcf.api.Destination {
      return pcf.Rating.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 41, column 38
    function action_dest_137 () : pcf.api.Destination {
      return pcf.BusinessSettings.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 43, column 32
    function action_dest_147 () : pcf.api.Destination {
      return pcf.Monitoring.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Admin.pcf: line 45, column 31
    function action_dest_159 () : pcf.api.Destination {
      return pcf.Utilities.createDestination()
    }
    
    property get affinityGroup () : AffinityGroup {
      return getVariableValue("affinityGroup", 1) as AffinityGroup
    }
    
    property set affinityGroup ($arg :  AffinityGroup) {
      setVariableValue("affinityGroup", 1, $arg)
    }
    
    property get group () : Group {
      return getVariableValue("group", 1) as Group
    }
    
    property set group ($arg :  Group) {
      setVariableValue("group", 1, $arg)
    }
    
    property get org () : Organization {
      return getVariableValue("org", 1) as Organization
    }
    
    property set org ($arg :  Organization) {
      setVariableValue("org", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DesktopTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 16, column 64
    function action_0 () : void {
      pcf.Underwriter_MySummary.go(User.util.CurrentUser)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 36, column 44
    function action_10 () : void {
      pcf.DesktopOtherWorkOrders.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 40, column 45
    function action_12 () : void {
      pcf.DesktopAssignableQueues.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 20, column 39
    function action_2 () : void {
      pcf.DesktopActivities.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 24, column 37
    function action_4 () : void {
      pcf.DesktopAccounts.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 28, column 40
    function action_6 () : void {
      pcf.DesktopSubmissions.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 32, column 37
    function action_8 () : void {
      pcf.DesktopRenewals.go()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 16, column 64
    function action_dest_1 () : pcf.api.Destination {
      return pcf.Underwriter_MySummary.createDestination(User.util.CurrentUser)
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 36, column 44
    function action_dest_11 () : pcf.api.Destination {
      return pcf.DesktopOtherWorkOrders.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 40, column 45
    function action_dest_13 () : pcf.api.Destination {
      return pcf.DesktopAssignableQueues.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 20, column 39
    function action_dest_3 () : pcf.api.Destination {
      return pcf.DesktopActivities.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 24, column 37
    function action_dest_5 () : pcf.api.Destination {
      return pcf.DesktopAccounts.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 28, column 40
    function action_dest_7 () : pcf.api.Destination {
      return pcf.DesktopSubmissions.createDestination()
    }
    
    // 'location' attribute on Tab (id=DesktopTab) at Desktop.pcf: line 32, column 37
    function action_dest_9 () : pcf.api.Destination {
      return pcf.DesktopRenewals.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry2ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=PolicyMenuPolicy) at TabBar.pcf: line 77, column 45
    function action_45 () : void {
      policySessionState.getDestination().go()
    }
    
    // 'label' attribute on MenuItem (id=PolicyMenuPolicy) at TabBar.pcf: line 77, column 45
    function label_46 () : java.lang.Object {
      return policySessionState.Label
    }
    
    property get policySessionState () : com.guidewire.pc.web.controller.SessionItem {
      return getIteratedValue(1) as com.guidewire.pc.web.controller.SessionItem
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry3ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=ContactMenuContact) at TabBar.pcf: line 109, column 46
    function action_56 () : void {
      ContactForward.go(contactSessionState.convertToContact())
    }
    
    // 'action' attribute on MenuItem (id=ContactMenuContact) at TabBar.pcf: line 109, column 46
    function action_dest_57 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination(contactSessionState.convertToContact())
    }
    
    // 'label' attribute on MenuItem (id=ContactMenuContact) at TabBar.pcf: line 109, column 46
    function label_58 () : java.lang.Object {
      return contactSessionState.Label
    }
    
    property get contactSessionState () : com.guidewire.pc.web.controller.ContactInfo {
      return getIteratedValue(1) as com.guidewire.pc.web.controller.ContactInfo
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry4ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=langs) at TabBar.pcf: line 159, column 29
    function action_163 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLanguage(lang)
    }
    
    // 'available' attribute on MenuItem (id=langs) at TabBar.pcf: line 159, column 29
    function available_162 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLanguage() != lang
    }
    
    // 'checked' attribute on MenuItem (id=langs) at TabBar.pcf: line 159, column 29
    function checked_165 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLanguageType() == lang
    }
    
    // 'label' attribute on MenuItem (id=langs) at TabBar.pcf: line 159, column 29
    function label_164 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLanguageLabel(lang)
    }
    
    property get lang () : typekey.LanguageType {
      return getIteratedValue(1) as typekey.LanguageType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntry5ExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=locales) at TabBar.pcf: line 177, column 29
    function action_169 () : void {
      gw.api.admin.BaseAdminUtil.setCurrentUsersLocale(locale)
    }
    
    // 'available' attribute on MenuItem (id=locales) at TabBar.pcf: line 177, column 29
    function available_168 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentUserLocale() != locale
    }
    
    // 'checked' attribute on MenuItem (id=locales) at TabBar.pcf: line 177, column 29
    function checked_171 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.getCurrentLocaleType() == locale
    }
    
    // 'label' attribute on MenuItem (id=locales) at TabBar.pcf: line 177, column 29
    function label_170 () : java.lang.Object {
      return gw.api.util.LocaleUtil.getLocaleLabel(locale)
    }
    
    property get locale () : typekey.LocaleType {
      return getIteratedValue(1) as typekey.LocaleType
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on MenuItem (id=accountItem) at TabBar.pcf: line 39, column 156
    function action_25 () : void {
      AccountFileDoRetrievalForward.go(accountSummary.AccountNumber)
    }
    
    // 'action' attribute on MenuItem (id=accountItem) at TabBar.pcf: line 39, column 156
    function action_dest_26 () : pcf.api.Destination {
      return pcf.AccountFileDoRetrievalForward.createDestination(accountSummary.AccountNumber)
    }
    
    // 'label' attribute on MenuItem (id=accountItem) at TabBar.pcf: line 39, column 156
    function label_27 () : java.lang.Object {
      return DisplayKey.get("Java.AccountTab.AccountItemLabel", accountSummary.AccountNumber, accountSummary.AbbreviatedAccountHolderName)
    }
    
    property get accountSummary () : entity.AccountSummary {
      return getIteratedValue(1) as entity.AccountSummary
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem2ExpressionsImpl extends LocationGroupMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem3ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 11, column 31
    function action_108 () : void {
      pcf.RateBooks.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 14, column 41
    function action_110 () : void {
      pcf.ImpactTestingWizard.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 17, column 42
    function action_112 () : void {
      pcf.RateTableDefinitions.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 20, column 34
    function action_114 () : void {
      pcf.RateRoutines.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 23, column 39
    function action_116 () : void {
      pcf.ParameterSetsPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 11, column 31
    function action_dest_109 () : pcf.api.Destination {
      return pcf.RateBooks.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 14, column 41
    function action_dest_111 () : pcf.api.Destination {
      return pcf.ImpactTestingWizard.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 17, column 42
    function action_dest_113 () : pcf.api.Destination {
      return pcf.RateTableDefinitions.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 20, column 34
    function action_dest_115 () : pcf.api.Destination {
      return pcf.RateRoutines.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Rating.pcf: line 23, column 39
    function action_dest_117 () : pcf.api.Destination {
      return pcf.ParameterSetsPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem4ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 9, column 38
    function action_120 () : void {
      pcf.ActivityPatterns.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 11, column 30
    function action_122 () : void {
      pcf.Holidays.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 13, column 30
    function action_130 () : void {
      pcf.BizRules.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 15, column 34
    function action_132 () : void {
      pcf.FormPatterns.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 17, column 33
    function action_134 () : void {
      pcf.PolicyHolds.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 9, column 38
    function action_dest_121 () : pcf.api.Destination {
      return pcf.ActivityPatterns.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 11, column 30
    function action_dest_123 () : pcf.api.Destination {
      return pcf.Holidays.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 13, column 30
    function action_dest_131 () : pcf.api.Destination {
      return pcf.BizRules.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 15, column 34
    function action_dest_133 () : pcf.api.Destination {
      return pcf.FormPatterns.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BusinessSettings.pcf: line 17, column 33
    function action_dest_135 () : pcf.api.Destination {
      return pcf.PolicyHolds.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem5ExpressionsImpl extends LocationGroupMenuItem4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem6ExpressionsImpl extends LocationGroupMenuItem4ExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 3)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 10, column 29
    function action_124 () : void {
      pcf.UWRules.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 12, column 50
    function action_126 () : void {
      pcf.PCBizRulesExportImportStatus.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 14, column 32
    function action_128 () : void {
      pcf.LookupPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 10, column 29
    function action_dest_125 () : pcf.api.Destination {
      return pcf.UWRules.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 12, column 50
    function action_dest_127 () : pcf.api.Destination {
      return pcf.PCBizRulesExportImportStatus.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at BizRules.pcf: line 14, column 32
    function action_dest_129 () : pcf.api.Destination {
      return pcf.LookupPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem7ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 9, column 35
    function action_138 () : void {
      pcf.MessageSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 11, column 53
    function action_140 () : void {
      pcf.MessagingDestinationControlList.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 13, column 36
    function action_142 () : void {
      pcf.WorkflowSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 15, column 35
    function action_144 () : void {
      pcf.WorkflowStats.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 9, column 35
    function action_dest_139 () : pcf.api.Destination {
      return pcf.MessageSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 11, column 53
    function action_dest_141 () : pcf.api.Destination {
      return pcf.MessagingDestinationControlList.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 13, column 36
    function action_dest_143 () : pcf.api.Destination {
      return pcf.WorkflowSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Monitoring.pcf: line 15, column 35
    function action_dest_145 () : pcf.api.Destination {
      return pcf.WorkflowStats.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItem8ExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 11, column 21
    function action_148 () : void {
      pcf.ImportWizard.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 13, column 32
    function action_150 () : void {
      pcf.ExportData.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 15, column 42
    function action_152 () : void {
      pcf.ScriptParametersPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 17, column 35
    function action_154 () : void {
      pcf.DataFlowMasks.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 19, column 36
    function action_156 () : void {
      pcf.DataChangePage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 11, column 21
    function action_dest_149 () : pcf.api.Destination {
      return pcf.ImportWizard.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 13, column 32
    function action_dest_151 () : pcf.api.Destination {
      return pcf.ExportData.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 15, column 42
    function action_dest_153 () : pcf.api.Destination {
      return pcf.ScriptParametersPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 17, column 35
    function action_dest_155 () : pcf.api.Destination {
      return pcf.DataFlowMasks.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at Utilities.pcf: line 19, column 36
    function action_dest_157 () : pcf.api.Destination {
      return pcf.DataChangePage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class LocationGroupMenuItemExpressionsImpl extends AdminTabMenuItemExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 21, column 41
    function action_100 () : void {
      pcf.UWAuthorityProfiles.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 23, column 32
    function action_102 () : void {
      pcf.Attributes.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 25, column 41
    function action_104 () : void {
      pcf.SearchAffinityGroup.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 9, column 41
    function action_88 () : void {
      pcf.AdminUserSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 11, column 42
    function action_90 () : void {
      pcf.AdminGroupSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 13, column 27
    function action_92 () : void {
      pcf.Roles.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 15, column 29
    function action_94 () : void {
      pcf.Regions.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 17, column 44
    function action_96 () : void {
      pcf.OrganizationSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 19, column 45
    function action_98 () : void {
      pcf.AdminProducerCodeSearch.go()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 21, column 41
    function action_dest_101 () : pcf.api.Destination {
      return pcf.UWAuthorityProfiles.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 23, column 32
    function action_dest_103 () : pcf.api.Destination {
      return pcf.Attributes.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 25, column 41
    function action_dest_105 () : pcf.api.Destination {
      return pcf.SearchAffinityGroup.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 9, column 41
    function action_dest_89 () : pcf.api.Destination {
      return pcf.AdminUserSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 11, column 42
    function action_dest_91 () : pcf.api.Destination {
      return pcf.AdminGroupSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 13, column 27
    function action_dest_93 () : pcf.api.Destination {
      return pcf.Roles.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 15, column 29
    function action_dest_95 () : pcf.api.Destination {
      return pcf.Regions.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 17, column 44
    function action_dest_97 () : pcf.api.Destination {
      return pcf.OrganizationSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=AdminTab) at UsersAndSecurity.pcf: line 19, column 45
    function action_dest_99 () : pcf.api.Destination {
      return pcf.AdminProducerCodeSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReinsuranceTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 12, column 41
    function action_62 () : void {
      pcf.AgreementSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 15, column 39
    function action_64 () : void {
      pcf.ProgramSearchPage.go()
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 12, column 41
    function action_dest_63 () : pcf.api.Destination {
      return pcf.AgreementSearchPage.createDestination()
    }
    
    // 'location' attribute on Tab (id=ReinsuranceTab) at Reinsurance.pcf: line 15, column 39
    function action_dest_65 () : pcf.api.Destination {
      return pcf.ProgramSearchPage.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ReportTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchTabMenuItemExpressionsImpl extends TabBarExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 13, column 34
    function action_69 () : void {
      pcf.PolicySearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 16, column 31
    function action_71 () : void {
      pcf.HVQSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 19, column 35
    function action_73 () : void {
      pcf.AccountSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 22, column 40
    function action_75 () : void {
      pcf.ProducerCodeSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 25, column 36
    function action_77 () : void {
      pcf.ActivitySearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 28, column 35
    function action_79 () : void {
      pcf.ContactSearch.go()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 13, column 34
    function action_dest_70 () : pcf.api.Destination {
      return pcf.PolicySearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 16, column 31
    function action_dest_72 () : pcf.api.Destination {
      return pcf.HVQSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 19, column 35
    function action_dest_74 () : pcf.api.Destination {
      return pcf.AccountSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 22, column 40
    function action_dest_76 () : pcf.api.Destination {
      return pcf.ProducerCodeSearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 25, column 36
    function action_dest_78 () : pcf.api.Destination {
      return pcf.ActivitySearch.createDestination()
    }
    
    // 'location' attribute on Tab (id=SearchTab) at Search.pcf: line 28, column 35
    function action_dest_80 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination()
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/TabBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class TabBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Tab (id=DesktopTab) at TabBar.pcf: line 12, column 21
    function action_14 () : void {
      Desktop.go()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 137, column 21
    function action_160 () : void {
      Admin.go()
    }
    
    // 'action' attribute on MenuItem (id=AccountTab_NewAccount) at TabBar.pcf: line 22, column 69
    function action_17 () : void {
      NewAccount.go()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 185, column 24
    function action_175 () : void {
      Help.push()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 193, column 61
    function action_177 () : void {
      UserPreferencesWorksheet.goInWorkspace()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 211, column 26
    function action_181 () : void {
      ProfilerPopup.push()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 215, column 26
    function action_183 () : void {
      InternalTools.go()
    }
    
    // 'action' attribute on Tab (id=AccountTab) at TabBar.pcf: line 17, column 20
    function action_29 () : void {
      AccountForward.go()
    }
    
    // 'action' attribute on MenuItem (id=PolicyTab_NewSubmission) at TabBar.pcf: line 51, column 49
    function action_32 () : void {
      NewSubmission.go()
    }
    
    // 'action' attribute on Tab (id=PolicyTab) at TabBar.pcf: line 46, column 20
    function action_48 () : void {
      PolicyForward.go()
    }
    
    // 'action' attribute on MenuItem (id=NewCompany) at TabBar.pcf: line 91, column 85
    function action_50 () : void {
      NewContact.go(TC_COMPANY)
    }
    
    // 'action' attribute on MenuItem (id=NewPerson) at TabBar.pcf: line 95, column 84
    function action_52 () : void {
      NewContact.go(TC_PERSON)
    }
    
    // 'action' attribute on MenuItem (id=Search) at TabBar.pcf: line 100, column 72
    function action_54 () : void {
      ContactSearch.go()
    }
    
    // 'action' attribute on Tab (id=ContactTab) at TabBar.pcf: line 84, column 20
    function action_60 () : void {
      ContactForward.go()
    }
    
    // 'action' attribute on Tab (id=ReinsuranceTab) at TabBar.pcf: line 117, column 64
    function action_67 () : void {
      Reinsurance.go()
    }
    
    // 'action' attribute on Tab (id=SearchTab) at TabBar.pcf: line 122, column 21
    function action_81 () : void {
      Search.go()
    }
    
    // 'action' attribute on Tab (id=TeamTab) at TabBar.pcf: line 127, column 21
    function action_83 () : void {
      TeamForward.go()
    }
    
    // 'action' attribute on Tab (id=ReportTab) at TabBar.pcf: line 132, column 159
    function action_86 () : void {
      Reports.go()
    }
    
    // 'action' attribute on Tab (id=DesktopTab) at TabBar.pcf: line 12, column 21
    function action_dest_15 () : pcf.api.Destination {
      return pcf.Desktop.createDestination()
    }
    
    // 'action' attribute on Tab (id=AdminTab) at TabBar.pcf: line 137, column 21
    function action_dest_161 () : pcf.api.Destination {
      return pcf.Admin.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=HelpTabBarLink) at TabBar.pcf: line 185, column 24
    function action_dest_176 () : pcf.api.Destination {
      return pcf.Help.createDestination()
    }
    
    // 'action' attribute on TabBarLink (id=PrefsTabBarLink) at TabBar.pcf: line 193, column 61
    function action_dest_178 () : pcf.api.Destination {
      return pcf.UserPreferencesWorksheet.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=AccountTab_NewAccount) at TabBar.pcf: line 22, column 69
    function action_dest_18 () : pcf.api.Destination {
      return pcf.NewAccount.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=ProfilerHiddenLink) at TabBar.pcf: line 211, column 26
    function action_dest_182 () : pcf.api.Destination {
      return pcf.ProfilerPopup.createDestination()
    }
    
    // 'action' attribute on HiddenLink (id=InternalToolsHiddenLink) at TabBar.pcf: line 215, column 26
    function action_dest_184 () : pcf.api.Destination {
      return pcf.InternalTools.createDestination()
    }
    
    // 'action' attribute on Tab (id=AccountTab) at TabBar.pcf: line 17, column 20
    function action_dest_30 () : pcf.api.Destination {
      return pcf.AccountForward.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=PolicyTab_NewSubmission) at TabBar.pcf: line 51, column 49
    function action_dest_33 () : pcf.api.Destination {
      return pcf.NewSubmission.createDestination()
    }
    
    // 'action' attribute on Tab (id=PolicyTab) at TabBar.pcf: line 46, column 20
    function action_dest_49 () : pcf.api.Destination {
      return pcf.PolicyForward.createDestination()
    }
    
    // 'action' attribute on MenuItem (id=NewCompany) at TabBar.pcf: line 91, column 85
    function action_dest_51 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(TC_COMPANY)
    }
    
    // 'action' attribute on MenuItem (id=NewPerson) at TabBar.pcf: line 95, column 84
    function action_dest_53 () : pcf.api.Destination {
      return pcf.NewContact.createDestination(TC_PERSON)
    }
    
    // 'action' attribute on MenuItem (id=Search) at TabBar.pcf: line 100, column 72
    function action_dest_55 () : pcf.api.Destination {
      return pcf.ContactSearch.createDestination()
    }
    
    // 'action' attribute on Tab (id=ContactTab) at TabBar.pcf: line 84, column 20
    function action_dest_61 () : pcf.api.Destination {
      return pcf.ContactForward.createDestination()
    }
    
    // 'action' attribute on Tab (id=ReinsuranceTab) at TabBar.pcf: line 117, column 64
    function action_dest_68 () : pcf.api.Destination {
      return pcf.Reinsurance.createDestination()
    }
    
    // 'action' attribute on Tab (id=SearchTab) at TabBar.pcf: line 122, column 21
    function action_dest_82 () : pcf.api.Destination {
      return pcf.Search.createDestination()
    }
    
    // 'action' attribute on Tab (id=TeamTab) at TabBar.pcf: line 127, column 21
    function action_dest_84 () : pcf.api.Destination {
      return pcf.TeamForward.createDestination()
    }
    
    // 'action' attribute on Tab (id=ReportTab) at TabBar.pcf: line 132, column 159
    function action_dest_87 () : pcf.api.Destination {
      return pcf.Reports.createDestination()
    }
    
    // 'afterFailure' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 31, column 44
    function afterFailure_20 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      (searchCriteria as gw.account.AccountSearchCriteria).AccountNumber = searchText
    }
    
    // 'afterFailure' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 60, column 47
    function afterFailure_35 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      if (searchCriteria typeis gw.policy.PolicyPeriodSearchCriteria) {searchCriteria.resetForSearchItems(Submission, searchText)}
    }
    
    // 'afterFailure' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 68, column 108
    function afterFailure_40 (searchCriteria :  java.lang.Object, searchText :  java.lang.String) : void {
      if (searchCriteria typeis gw.policy.PolicyPeriodSearchCriteria) searchCriteria.resetForSearchItems(Policy, searchText)
    }
    
    // 'available' attribute on MenuItem (id=AccountTab_NewAccount) at TabBar.pcf: line 22, column 69
    function available_16 () : java.lang.Boolean {
      return perm.Account.create
    }
    
    // 'label' attribute on TabBarLogout (id=LogoutTabBarLink) at TabBar.pcf: line 207, column 21
    function label_180 () : java.lang.Object {
      return DisplayKey.get("Web.TabBar.Logout", entity.User.util.CurrentUser)
    }
    
    // 'onFailure' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 31, column 44
    function onFailure_21 (searchText :  java.lang.String) : pcf.api.Location {
      return AccountSearch.go()
    }
    
    // 'onFailure' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 60, column 47
    function onFailure_36 (searchText :  java.lang.String) : pcf.api.Location {
      return PolicySearch.go()
    }
    
    // 'onResult' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 31, column 44
    function onResult_22 (result :  java.lang.Object) : void {
      AccountFileForward.go(result as Account)
    }
    
    // 'onResult' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 60, column 47
    function onResult_37 (result :  java.lang.Object) : void {
      JobForward.go(result as Job)
    }
    
    // 'onResult' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 68, column 108
    function onResult_42 (result :  java.lang.Object) : void {
      PolicyFileForward.go(result as PolicyPeriod, (result as PolicyPeriod).EditEffectiveDate)
    }
    
    // 'search' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 31, column 44
    function search_23 (searchText :  java.lang.String) : java.lang.Object {
      return gw.pcf.TabBarHelper.accountSearch(searchText)
    }
    
    // 'search' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 60, column 47
    function search_38 (searchText :  java.lang.String) : java.lang.Object {
      return gw.pcf.TabBarHelper.jobFinder(searchText)
    }
    
    // 'search' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 68, column 108
    function search_43 (searchText :  java.lang.String) : java.lang.Object {
      return gw.pcf.TabBarHelper.periodFinder(searchText)
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_onEnter_185 (def :  pcf.SystemAlertBar) : void {
      def.onEnter()
    }
    
    // 'systemAlertBar' attribute on TabBar (id=TabBar) at TabBar.pcf: line 7, column 39
    function systemAlertBar_refreshVariables_186 (def :  pcf.SystemAlertBar) : void {
      def.refreshVariables()
    }
    
    // 'validationError' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 31, column 44
    function validationError_24 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Account.AccountNumberSearch.Error", searchText)
    }
    
    // 'validationError' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 60, column 47
    function validationError_39 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Policy.SubmissionNumberSearchMenuItem.Error", searchText)
    }
    
    // 'validationError' attribute on SearchItem (id=PolicyTab_PolicyRetrievalItem_widget) at TabBar.pcf: line 68, column 108
    function validationError_44 (searchText :  java.lang.String) : java.lang.String {
      return DisplayKey.get("Web.TabBar.Policy.PolicyRetrieval.Error", searchText)
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 151, column 46
    function value_166 () : typekey.LanguageType[] {
      return gw.api.util.LocaleUtil.getAllLanguages()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 169, column 44
    function value_172 () : typekey.LocaleType[] {
      return gw.api.util.LocaleUtil.getAllLocales()?.toTypedArray()
    }
    
    // 'value' attribute on MenuItemIterator at TabBar.pcf: line 35, column 45
    function value_28 () : entity.AccountSummary[] {
      return gw.api.web.util.SessionUtil.getAccountHistory()
    }
    
    // 'value' attribute on MenuItemIterator (id=PolicyMenuIt) at TabBar.pcf: line 73, column 67
    function value_47 () : com.guidewire.pc.web.controller.SessionItem[] {
      return gw.api.web.util.SessionUtil.getPolicySessionState()
    }
    
    // 'value' attribute on MenuItemIterator (id=ContactMenuIt) at TabBar.pcf: line 105, column 67
    function value_59 () : com.guidewire.pc.web.controller.ContactInfo[] {
      return gw.api.web.util.SessionUtil.getContactSessionState()
    }
    
    // 'visible' attribute on MenuItem (id=languageSwitcher) at TabBar.pcf: line 147, column 62
    function visible_167 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage()
    }
    
    // 'visible' attribute on MenuItem (id=localeSwitcher) at TabBar.pcf: line 165, column 60
    function visible_173 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=LanguageTabBarLink) at TabBar.pcf: line 143, column 104
    function visible_174 () : java.lang.Boolean {
      return gw.api.util.LocaleUtil.canSwitchLanguage() || gw.api.util.LocaleUtil.canSwitchLocale()
    }
    
    // 'visible' attribute on TabBarLink (id=ReloadPCFTabBarLink) at TabBar.pcf: line 202, column 57
    function visible_179 () : java.lang.Boolean {
      return gw.api.tools.InternalTools.isEnabled()
    }
    
    // 'visible' attribute on SearchItem (id=AccountTab_AccountNumberSearchItem_widget) at TabBar.pcf: line 31, column 44
    function visible_19 () : java.lang.Boolean {
      return perm.System.viewaccount
    }
    
    // 'visible' attribute on MenuItem (id=PolicyTab_NewSubmission) at TabBar.pcf: line 51, column 49
    function visible_31 () : java.lang.Boolean {
      return perm.System.createsubmission
    }
    
    // 'visible' attribute on SearchItem (id=PolicyTab_SubmissionNumberSearchItem_widget) at TabBar.pcf: line 60, column 47
    function visible_34 () : java.lang.Boolean {
      return perm.System.viewsubmission
    }
    
    // 'visible' attribute on Tab (id=ReinsuranceTab) at TabBar.pcf: line 117, column 64
    function visible_66 () : java.lang.Boolean {
      return gw.api.system.PCConfigParameters.RIModuleOn()
    }
    
    // 'visible' attribute on Tab (id=ReportTab) at TabBar.pcf: line 132, column 159
    function visible_85 () : java.lang.Boolean {
      return perm.System.reporting_view and gw.api.system.PLDependenciesGateway.getPluginConfig().isStartablePluginStarted(gw.plugin.cognos.CognosPlugin)
    }
    
    
  }
  
  
}