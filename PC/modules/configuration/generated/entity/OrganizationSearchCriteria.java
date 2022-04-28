package entity;

/**
 * OrganizationSearchCriteria
 * 
 *       Defines a organization search criteria. The OrganizationSearchCriteria entity exists only for the purposes of a
 *       search. It is not stored in the database.
 *       
 *     
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OrganizationSearchCriteria.eti;OrganizationSearchCriteria.eix;OrganizationSearchCriteria.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "OrganizationSearchCriteria")
public class OrganizationSearchCriteria extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, entity.AddressAutofillable, java.io.Serializable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.OrganizationSearchCriteria> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.OrganizationSearchCriteria>("entity.OrganizationSearchCriteria");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACCOUNTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AccountNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE1KANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine1Kanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE2KANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine2Kanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ADDRESSLINE3_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AddressLine3");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BRANCHCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BranchCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEX_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEX");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEXBUREAU_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CEDEXBureau");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CARRIER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Carrier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "City");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CITYKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CityKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTACTCITY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ContactCity");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTACTCITYKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ContactCityKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONTACTCOUNTRY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ContactCountry");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTACTNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ContactName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONTACTPOSTAL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ContactPostal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CONTACTSTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ContactState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COUNTRY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Country");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COUNTY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "County");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAMEKANJI_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NameKanji");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POSTALCODEDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PostalCodeDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCERCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProducerCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRODUCERSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ProducerStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRODUCERSTATUSUSE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ProducerStatusUse");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCERSONLY_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProducersOnly");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "State");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TIER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Tier");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Type");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.OrganizationSearchCriteriaInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public OrganizationSearchCriteria()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public OrganizationSearchCriteria(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected OrganizationSearchCriteria(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.OrganizationSearchCriteriaInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.OrganizationSearchCriteriaInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public gw.api.database.QueryRestrictor asRestrictor(boolean ignoreUserSecurity) {
    return ((com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods")).asRestrictor(ignoreUserSecurity);
  }
  
  /**
   * Gets the value of the AccountNumber field.
   * The account number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine1 field.
   * First line of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine1Kanji field.
   * First line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine1Kanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2 field.
   * Second line of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine2Kanji field.
   * Second line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine2Kanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get());
  }
  
  /**
   * Gets the value of the AddressLine3 field.
   * Third line of mailing address.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAddressLine3() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE3_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BranchCode field.
   * The branch code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBranchCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BRANCHCODE_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEXBureau field.
   * CEDEX: Special business mail delivery bureau (used only for French addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCEDEXBureau() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CEDEXBUREAU_PROP.get());
  }
  
  /**
   * Gets the value of the City field.
   * City.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCity() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the CityKanji field.
   * City in kanji (used only for Japanese addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCityKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the ContactCity field.
   * The contact city for the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactCity() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTCITY_PROP.get());
  }
  
  /**
   * Gets the value of the ContactCityKanji field.
   * The contact city kanji for the organization. Used only for Japanese.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactCityKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTCITYKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the ContactCountry field.
   * The contact country for the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getContactCountry() {
    return (typekey.Country)__getInternalInterface().getFieldValue(CONTACTCOUNTRY_PROP.get());
  }
  
  /**
   * Gets the value of the ContactName field.
   * The contact name for the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTNAME_PROP.get());
  }
  
  /**
   * Gets the value of the ContactPostal field.
   * The contact zip code/postal code for the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getContactPostal() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTPOSTAL_PROP.get());
  }
  
  /**
   * Gets the value of the ContactState field.
   * The contact state for the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getContactState() {
    return (typekey.State)__getInternalInterface().getFieldValue(CONTACTSTATE_PROP.get());
  }
  
  /**
   * Gets the value of the Country field.
   * Country.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Country getCountry() {
    return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRY_PROP.get());
  }
  
  /**
   * Gets the value of the County field.
   * County.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCounty() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COUNTY_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Name field.
   * The name of the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * Gets the value of the NameKanji field.
   * The kanji name of the organization. Used only for Japanese.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNameKanji() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEKANJI_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyNumber field.
   * The policy number.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the PostalCode field.
   * Postal code; string to handle Zip+4 and international codes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPostalCodeDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerCode field.
   * The producer that contains this producer code.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProducerCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCERCODE_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerStatus field.
   * The status of the external producer organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProducerStatus getProducerStatus() {
    return (typekey.ProducerStatus)__getInternalInterface().getFieldValue(PRODUCERSTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerStatusUse field.
   * The use of the producer organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProducerStatusUse getProducerStatusUse() {
    return (typekey.ProducerStatusUse)__getInternalInterface().getFieldValue(PRODUCERSTATUSUSE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the State field.
   * State.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getState() {
    return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
  }
  
  /**
   * Gets the value of the Tier field.
   * The tier of the external producer organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Tier getTier() {
    return (typekey.Tier)__getInternalInterface().getFieldValue(TIER_PROP.get());
  }
  
  /**
   * Gets the value of the Type field.
   * The type of the organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BusinessType getType() {
    return (typekey.BusinessType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
  }
  
  /**
   * Gets the value of the CEDEX field.
   * CEDEX: Special business mail delivery flag (used only for French addresses and will be null otherwise)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCEDEX() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEX_PROP.get());
  }
  
  /**
   * Gets the value of the Carrier field.
   * Flag indicating whether the organization is a carrier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCarrier() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(CARRIER_PROP.get());
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Gets the value of the ProducersOnly field.
   * Flag indicating that only producers should be searched.  Implied by ProducerStatus or ProducerStatusUse.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isProducersOnly() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(PRODUCERSONLY_PROP.get());
  }
  
  public gw.api.database.IQueryBeanResult<entity.Organization> performSearch() {
    return ((com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods")).performSearch();
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1 field.
   */
  public void setAddressLine1(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine1Kanji field.
   */
  public void setAddressLine1Kanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2 field.
   */
  public void setAddressLine2(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine2Kanji field.
   */
  public void setAddressLine2Kanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AddressLine3 field.
   */
  public void setAddressLine3(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchCode field.
   */
  public void setBranchCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BRANCHCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEX field.
   */
  public void setCEDEX(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CEDEX_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CEDEXBureau field.
   */
  public void setCEDEXBureau(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CEDEXBUREAU_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Carrier field.
   */
  public void setCarrier(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(CARRIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityDenorm field.
   */
  private void setCityDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CityKanji field.
   */
  public void setCityKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CITYKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactCity field.
   */
  public void setContactCity(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONTACTCITY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactCityKanji field.
   */
  public void setContactCityKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONTACTCITYKANJI_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactCountry field.
   */
  public void setContactCountry(typekey.Country value) {
    __getInternalInterface().setFieldValue(CONTACTCOUNTRY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactName field.
   */
  public void setContactName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONTACTNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactPostal field.
   */
  public void setContactPostal(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONTACTPOSTAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ContactState field.
   */
  public void setContactState(typekey.State value) {
    __getInternalInterface().setFieldValue(CONTACTSTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Country field.
   */
  public void setCountry(typekey.Country value) {
    __getInternalInterface().setFieldValue(COUNTRY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the County field.
   */
  public void setCounty(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(COUNTY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NameKanji field.
   */
  public void setNameKanji(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAMEKANJI_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCode field.
   */
  public void setPostalCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PostalCodeDenorm field.
   */
  private void setPostalCodeDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerCode field.
   */
  public void setProducerCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCERCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerStatus field.
   */
  public void setProducerStatus(typekey.ProducerStatus value) {
    __getInternalInterface().setFieldValue(PRODUCERSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerStatusUse field.
   */
  public void setProducerStatusUse(typekey.ProducerStatusUse value) {
    __getInternalInterface().setFieldValue(PRODUCERSTATUSUSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducersOnly field.
   */
  public void setProducersOnly(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(PRODUCERSONLY_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.State value) {
    __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Tier field.
   */
  public void setTier(typekey.Tier value) {
    __getInternalInterface().setFieldValue(TIER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.BusinessType value) {
    __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.OrganizationSearchCriteriaInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.OrganizationSearchCriteria.this.__getDelegateManager();
    }
    
    public void addCriteria(com.guidewire.pl.system.database.TableObject org) {
      ((com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaInternalMethods")).addCriteria(org);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public gw.api.database.QueryRestrictor asRestrictor(boolean ignoreUserSecurity) {
      return ((com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods")).asRestrictor(ignoreUserSecurity);
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the AccountNumber field.
     * The account number.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAccountNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1 field.
     * First line of mailing address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine1Kanji field.
     * First line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine1Kanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2 field.
     * Second line of mailing address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine2Kanji field.
     * Second line of mailing address in kanji (used only for Japanese addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine2Kanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get());
    }
    
    /**
     * Gets the value of the AddressLine3 field.
     * Third line of mailing address.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAddressLine3() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ADDRESSLINE3_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the BranchCode field.
     * The branch code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBranchCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BRANCHCODE_PROP.get());
    }
    
    /**
     * Gets the value of the CEDEXBureau field.
     * CEDEX: Special business mail delivery bureau (used only for French addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCEDEXBureau() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CEDEXBUREAU_PROP.get());
    }
    
    /**
     * Gets the value of the City field.
     * City.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCity() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITY_PROP.get());
    }
    
    /**
     * Gets the value of the CityDenorm field.
     * denorm field for City
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the CityKanji field.
     * City in kanji (used only for Japanese addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCityKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CITYKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the ContactCity field.
     * The contact city for the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getContactCity() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTCITY_PROP.get());
    }
    
    /**
     * Gets the value of the ContactCityKanji field.
     * The contact city kanji for the organization. Used only for Japanese.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getContactCityKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTCITYKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the ContactCountry field.
     * The contact country for the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Country getContactCountry() {
      return (typekey.Country)__getInternalInterface().getFieldValue(CONTACTCOUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the ContactName field.
     * The contact name for the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getContactName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTNAME_PROP.get());
    }
    
    /**
     * Gets the value of the ContactPostal field.
     * The contact zip code/postal code for the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getContactPostal() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONTACTPOSTAL_PROP.get());
    }
    
    /**
     * Gets the value of the ContactState field.
     * The contact state for the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getContactState() {
      return (typekey.State)__getInternalInterface().getFieldValue(CONTACTSTATE_PROP.get());
    }
    
    /**
     * Gets the value of the Country field.
     * Country.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Country getCountry() {
      return (typekey.Country)__getInternalInterface().getFieldValue(COUNTRY_PROP.get());
    }
    
    /**
     * Gets the value of the County field.
     * County.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCounty() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(COUNTY_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the Name field.
     * The name of the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the NameKanji field.
     * The kanji name of the organization. Used only for Japanese.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNameKanji() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAMEKANJI_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyNumber field.
     * The policy number.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCode field.
     * Postal code; string to handle Zip+4 and international codes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODE_PROP.get());
    }
    
    /**
     * Gets the value of the PostalCodeDenorm field.
     * denorm field for PostalCode
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPostalCodeDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POSTALCODEDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerCode field.
     * The producer that contains this producer code.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProducerCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCERCODE_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerStatus field.
     * The status of the external producer organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ProducerStatus getProducerStatus() {
      return (typekey.ProducerStatus)__getInternalInterface().getFieldValue(PRODUCERSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerStatusUse field.
     * The use of the producer organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.ProducerStatusUse getProducerStatusUse() {
      return (typekey.ProducerStatusUse)__getInternalInterface().getFieldValue(PRODUCERSTATUSUSE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the State field.
     * State.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getState() {
      return (typekey.State)__getInternalInterface().getFieldValue(STATE_PROP.get());
    }
    
    /**
     * Gets the value of the Tier field.
     * The tier of the external producer organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Tier getTier() {
      return (typekey.Tier)__getInternalInterface().getFieldValue(TIER_PROP.get());
    }
    
    /**
     * Gets the value of the Type field.
     * The type of the organization.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BusinessType getType() {
      return (typekey.BusinessType)__getInternalInterface().getFieldValue(TYPE_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    public boolean isAgencyOrBrokerQuery() {
      return ((com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtInternalMethods")).isAgencyOrBrokerQuery();
    }
    
    public boolean isAnyCriteriaSet() {
      return ((com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaInternalMethods")).isAnyCriteriaSet();
    }
    
    /**
     * Gets the value of the CEDEX field.
     * CEDEX: Special business mail delivery flag (used only for French addresses and will be null otherwise)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCEDEX() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CEDEX_PROP.get());
    }
    
    /**
     * Gets the value of the Carrier field.
     * Flag indicating whether the organization is a carrier.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isCarrier() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(CARRIER_PROP.get());
    }
    
    /**
     * 
     * @return true if this bean is to be inserted into the database when the bundle is committed.
     */
    public boolean isNew() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
    }
    
    /**
     * 
     * @return True if the object was created by importation from an external system,
     *         False if it was created internally. Note that this refers to the currently
     *         instantiated object, not the data it represents
     */
    public boolean isNewlyImported() {
      return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
    }
    
    /**
     * Gets the value of the ProducersOnly field.
     * Flag indicating that only producers should be searched.  Implied by ProducerStatus or ProducerStatusUse.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isProducersOnly() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(PRODUCERSONLY_PROP.get());
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public gw.api.database.IQueryBeanResult<entity.Organization> performSearch() {
      return ((com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods")).performSearch();
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
    }
    
    /**
     * Refreshes this bean with the latest database version.
     * <p/>
     * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
     * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
     * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
     * updated.
     */
    public entity.KeyableBean refresh() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
    }
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
    }
    
    /**
     * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
     * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
     * <p>
     * WARNING: This method is designed for simple custom entities which are normally not
     * associated with other entities. Undesirable results may occur when used on out-of-box entities.
     */
    public void remove() {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AccountNumber field.
     */
    public void setAccountNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1 field.
     */
    public void setAddressLine1(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine1Kanji field.
     */
    public void setAddressLine1Kanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE1KANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2 field.
     */
    public void setAddressLine2(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine2Kanji field.
     */
    public void setAddressLine2Kanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE2KANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AddressLine3 field.
     */
    public void setAddressLine3(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ADDRESSLINE3_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchCode field.
     */
    public void setBranchCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BRANCHCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEX field.
     */
    public void setCEDEX(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CEDEX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CEDEXBureau field.
     */
    public void setCEDEXBureau(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CEDEXBUREAU_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Carrier field.
     */
    public void setCarrier(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(CARRIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the City field.
     */
    public void setCity(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityDenorm field.
     */
    public void setCityDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CityKanji field.
     */
    public void setCityKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CITYKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactCity field.
     */
    public void setContactCity(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONTACTCITY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactCityKanji field.
     */
    public void setContactCityKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONTACTCITYKANJI_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactCountry field.
     */
    public void setContactCountry(typekey.Country value) {
      __getInternalInterface().setFieldValue(CONTACTCOUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactName field.
     */
    public void setContactName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONTACTNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactPostal field.
     */
    public void setContactPostal(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONTACTPOSTAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ContactState field.
     */
    public void setContactState(typekey.State value) {
      __getInternalInterface().setFieldValue(CONTACTSTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Country field.
     */
    public void setCountry(typekey.Country value) {
      __getInternalInterface().setFieldValue(COUNTRY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the County field.
     */
    public void setCounty(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(COUNTY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NameKanji field.
     */
    public void setNameKanji(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAMEKANJI_PROP.get(), value);
    }
    
    /**
     * Set a flag denoting that the currently instantiated object has been newly imported from
     * an external source
     * @param newlyImported 
     */
    public void setNewlyImported(boolean newlyImported) {
      ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
    }
    
    /**
     * Sets the value of the PolicyNumber field.
     */
    public void setPolicyNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCode field.
     */
    public void setPostalCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PostalCodeDenorm field.
     */
    public void setPostalCodeDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POSTALCODEDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerCode field.
     */
    public void setProducerCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCERCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerStatus field.
     */
    public void setProducerStatus(typekey.ProducerStatus value) {
      __getInternalInterface().setFieldValue(PRODUCERSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerStatusUse field.
     */
    public void setProducerStatusUse(typekey.ProducerStatusUse value) {
      __getInternalInterface().setFieldValue(PRODUCERSTATUSUSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducersOnly field.
     */
    public void setProducersOnly(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(PRODUCERSONLY_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the State field.
     */
    public void setState(typekey.State value) {
      __getInternalInterface().setFieldValue(STATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Tier field.
     */
    public void setTier(typekey.Tier value) {
      __getInternalInterface().setFieldValue(TIER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Type field.
     */
    public void setType(typekey.BusinessType value) {
      __getInternalInterface().setFieldValue(TYPE_PROP.get(), value);
    }
    
    /**
     * Set's the version of the bean to the next value (i.e. the bean version original value+1)
     * Multiple calls to this method on the same bean will result in the same value being used
     * for the version (i.e. it is idempotent).
     * 
     * Calling this method will force the bean to be written to the database and participate fully
     * in the commit cycle e.g. pre-update rules will be run, etc.
     */
    public void touch() {
      ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtInternalMethods", "com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethodsImpl");
    config.put("com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethods", "com.guidewire.pc.domain.community.impl.OrganizationSearchCriteriaCoreExtMethodsImpl");
    config.put("com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaInternalMethods", "com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.address.AddressFillable", "com.guidewire.pl.domain.geodata.zone.impl.AddressAutofillableImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.io.Serializable", "com.guidewire.pl.domain.community.impl.OrganizationSearchCriteriaImpl");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.OrganizationSearchCriteria.class, config);
    com.guidewire._generated.entity.OrganizationSearchCriteriaInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.OrganizationSearchCriteria, com.guidewire._generated.entity.OrganizationSearchCriteriaInternal>() {
      public java.lang.Object getImplementation(entity.OrganizationSearchCriteria bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.OrganizationSearchCriteriaInternal getInternalInterface(entity.OrganizationSearchCriteria bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.OrganizationSearchCriteria newEmptyInstance() {
        return new entity.OrganizationSearchCriteria((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}