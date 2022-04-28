package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBPPCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericCPBPPCovExcludeVandalismTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericCPBPPCovExcludeVandalismType {
  public GenericCPBPPCovExcludeVandalismTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBPPCov getCPBPPCov() {
    return (productmodel.CPBPPCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBPPCov getCoverage() {
    return (productmodel.CPBPPCov)getClause();
  }
  
  
}