package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSectionIDeductibles.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPSectionIDeductiblesWindstormTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPSectionIDeductiblesWindstormType> implements productmodel.OptionHOPSectionIDeductiblesWindstormType {
  public OptionHOPSectionIDeductiblesWindstormTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPSectionIDeductibles getCoverage() {
    return (productmodel.HOPSectionIDeductibles)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPSectionIDeductibles getHOPSectionIDeductibles() {
    return (productmodel.HOPSectionIDeductibles)getClause();
  }
  
  
}