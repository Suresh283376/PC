package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/UWRuleDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class UWRuleDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (head :  RuleHead, version :  RuleVersion) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.UWRuleDetail, {head, version}, 0)
  }
  
  static function drilldown (head :  RuleHead, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UWRuleDetail, {head, version}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (head :  RuleHead, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UWRuleDetail, {head, version}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (head :  RuleHead, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UWRuleDetail, {head, version}, 0).goInMain()
  }
  
  static function printPage (head :  RuleHead, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UWRuleDetail, {head, version}, 0).printPage()
  }
  
  static function push (head :  RuleHead, version :  RuleVersion) : pcf.api.Location {
    return __newDestinationForLocation(pcf.UWRuleDetail, {head, version}, 0).push()
  }
  
  
}