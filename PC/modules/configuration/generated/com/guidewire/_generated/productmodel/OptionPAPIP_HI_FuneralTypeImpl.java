package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_HI.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionPAPIP_HI_FuneralTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionPAPIP_HI_FuneralType> implements productmodel.OptionPAPIP_HI_FuneralType {
  public OptionPAPIP_HI_FuneralTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAPIP_HI getCoverage() {
    return (productmodel.PAPIP_HI)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAPIP_HI getPAPIP_HI() {
    return (productmodel.PAPIP_HI)getClause();
  }
  
  
}