package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_UT.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPUT_MEDICALTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPUT_MEDICALType> implements productmodel.OptionPAPIPUT_MEDICALType {
  public OptionPAPIPUT_MEDICALTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_UT getCoverage() {
    return (productmodel.PAPIP_UT)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_UT getPAPIP_UT() {
    return (productmodel.PAPIP_UT)getClause();
  }
  
  
}