package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericCPBldgCovExcludeVandalismTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericCPBldgCovExcludeVandalismType {
  public GenericCPBldgCovExcludeVandalismTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgCov getCPBldgCov() {
    return (productmodel.CPBldgCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgCov getCoverage() {
    return (productmodel.CPBldgCov)getClause();
  }
  
  
}