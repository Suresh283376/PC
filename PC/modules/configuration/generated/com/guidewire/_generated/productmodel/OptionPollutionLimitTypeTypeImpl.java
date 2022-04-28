package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/PollutionBroadLimited.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPollutionLimitTypeTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPollutionLimitTypeType> implements productmodel.OptionPollutionLimitTypeType {
  public OptionPollutionLimitTypeTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PollutionBroadLimited getCoverage() {
    return (productmodel.PollutionBroadLimited)getClause();
  }
  
  @java.lang.Override
  public productmodel.PollutionBroadLimited getPollutionBroadLimited() {
    return (productmodel.PollutionBroadLimited)getClause();
  }
  
  
}