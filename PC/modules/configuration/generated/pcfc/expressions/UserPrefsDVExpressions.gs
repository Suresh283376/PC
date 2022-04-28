package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class UserPrefsDVExpressions {
  @javax.annotation.Generated("config/web/pcf/user/UserPrefsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class UserPrefsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 28, column 50
    function def_onEnter_17 (def :  pcf.UserPreferencesInputSet) : void {
      def.onEnter(userBase)
    }
    
    // 'def' attribute on InputSetRef at UserPrefsDV.pcf: line 28, column 50
    function def_refreshVariables_18 (def :  pcf.UserPreferencesInputSet) : void {
      def.refreshVariables(userBase)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SendEmailOnActivityAssign_Input) at UserPrefsDV.pcf: line 18, column 51
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.EmailOnActAssign = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 36, column 42
    function defaultSetter_20 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.StartupPage = (__VALUE_TO_SET as typekey.StartupPage)
    }
    
    // 'value' attribute on TextInput (id=MaxRecentAccounts_Input) at UserPrefsDV.pcf: line 42, column 40
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.MaxRecentAccounts = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MaxRecentPoliciesAndJobs_Input) at UserPrefsDV.pcf: line 48, column 40
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.MaxRecentPoliciesAndJobs  = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=MaxRecentContacts_Input) at UserPrefsDV.pcf: line 54, column 40
    function defaultSetter_35 (__VALUE_TO_SET :  java.lang.Object) : void {
      userPreferences.MaxRecentContacts = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 47
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      userBase.Credential.Password = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 36, column 42
    function valueRange_22 () : java.lang.Object {
      return getPossibleStartupPages(userBase)
    }
    
    // 'value' attribute on BooleanRadioInput (id=SendEmailOnActivityAssign_Input) at UserPrefsDV.pcf: line 18, column 51
    function valueRoot_2 () : java.lang.Object {
      return userPreferences
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 47
    function valueRoot_6 () : java.lang.Object {
      return userBase.Credential
    }
    
    // 'value' attribute on BooleanRadioInput (id=SendEmailOnActivityAssign_Input) at UserPrefsDV.pcf: line 18, column 51
    function value_0 () : java.lang.Boolean {
      return userPreferences.EmailOnActAssign
    }
    
    // 'value' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 36, column 42
    function value_19 () : typekey.StartupPage {
      return userPreferences.StartupPage
    }
    
    // 'value' attribute on TextInput (id=MaxRecentAccounts_Input) at UserPrefsDV.pcf: line 42, column 40
    function value_26 () : java.lang.Integer {
      return userPreferences.MaxRecentAccounts
    }
    
    // 'value' attribute on TextInput (id=MaxRecentPoliciesAndJobs_Input) at UserPrefsDV.pcf: line 48, column 40
    function value_30 () : java.lang.Integer {
      return userPreferences.MaxRecentPoliciesAndJobs 
    }
    
    // 'value' attribute on TextInput (id=MaxRecentContacts_Input) at UserPrefsDV.pcf: line 54, column 40
    function value_34 () : java.lang.Integer {
      return userPreferences.MaxRecentContacts
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 47
    function value_4 () : java.lang.String {
      return userBase.Credential.Password
    }
    
    // 'value' attribute on ConfirmPasswordInput (id=Password_Input) at UserPrefsDV.pcf: line 26, column 47
    function value_7 () : java.lang.Object {
      return userBase.Credential.Password
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 36, column 42
    function verifyValueRangeIsAllowedType_23 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 36, column 42
    function verifyValueRangeIsAllowedType_23 ($$arg :  typekey.StartupPage[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=StartupPage_Input) at UserPrefsDV.pcf: line 36, column 42
    function verifyValueRange_24 () : void {
      var __valueRangeArg = getPossibleStartupPages(userBase)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_23(__valueRangeArg)
    }
    
    property get userBase () : User {
      return getRequireValue("userBase", 0) as User
    }
    
    property set userBase ($arg :  User) {
      setRequireValue("userBase", 0, $arg)
    }
    
    property get userPreferences () : gw.api.web.userpreference.UserPreferencesOfCurrentUser {
      return getRequireValue("userPreferences", 0) as gw.api.web.userpreference.UserPreferencesOfCurrentUser
    }
    
    property set userPreferences ($arg :  gw.api.web.userpreference.UserPreferencesOfCurrentUser) {
      setRequireValue("userPreferences", 0, $arg)
    }
    
    function getPossibleStartupPages(user : User) : java.util.List
          {
            var list : java.util.List = new java.util.ArrayList(StartupPage.getTypeKeys(false))
    
            if(not(perm.Organization.search
                or perm.System.orgviewagency
                or perm.System.orgviewbasic
                or perm.System.orgviewextmgt
                or perm.System.prodcodeviewbasic
                or perm.System.prodcodeviewprefuw
              ))
            {
              list.remove( StartupPage.TC_ADMIN )
            }
    
            return list
          }
    
    
  }
  
  
}