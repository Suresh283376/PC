package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ClaimsMadeExtendedSpecificRpting.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExtRptngProductDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericExtRptngProductDateType {
  public GenericExtRptngProductDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ClaimsMadeExtendedSpecificRpting getClaimsMadeExtendedSpecificRpting() {
    return (productmodel.ClaimsMadeExtendedSpecificRpting)getClause();
  }
  
  @java.lang.Override
  public productmodel.ClaimsMadeExtendedSpecificRpting getCondition() {
    return (productmodel.ClaimsMadeExtendedSpecificRpting)getClause();
  }
  
  
}