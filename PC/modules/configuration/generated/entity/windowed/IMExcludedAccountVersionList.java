package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMExcludedAccount.eti;IMExcludedAccount.eix;IMExcludedAccount.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMExcludedAccountVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMExcludedAccount AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMExcludedAccount> getAllVersions();
  
  
  
}