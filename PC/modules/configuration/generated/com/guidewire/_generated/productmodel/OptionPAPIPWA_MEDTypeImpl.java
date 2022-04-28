package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_WA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIPWA_MEDTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIPWA_MEDType> implements productmodel.OptionPAPIPWA_MEDType {
  public OptionPAPIPWA_MEDTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_WA getCoverage() {
    return (productmodel.PAPIP_WA)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_WA getPAPIP_WA() {
    return (productmodel.PAPIP_WA)getClause();
  }
  
  
}