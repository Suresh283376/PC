package entity;

/**
 * MVROrder
 * Motor Vehicle Record Order
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "MVROrder.eti;MVROrder.eix;MVROrder.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "MVROrder")
public class MVROrder extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, gw.api.motorvehiclerecord.IMVROrder {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.MVROrder> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.MVROrder>("entity.MVROrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEOFBIRTHSC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateOfBirthSC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameSC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTNAMESCDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstNameSCDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INTERNALREQUESTID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InternalRequestID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameSC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTNAMESCDENORM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastNameSCDenorm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LICENSENUMBERSC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LicenseNumberSC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> LICENSESTATESC_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "LicenseStateSC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> MVRENTITIES_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "MVREntities");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> MVRRESPONSE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "MVRResponse");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MIDDLENAMESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MiddleNameSC");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ORDERSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OrderStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PROVIDERREQUESTID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProviderRequestID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REPORTREQUESTEDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReportRequestedDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STATUSDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StatusDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.MVROrderInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public MVROrder()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public MVROrder(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected MVROrder(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.MVROrderInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.MVROrderInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the MVREntities array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMVREntities(entity.MVR element) {
    __getInternalInterface().addArrayElement(MVRENTITIES_PROP.get(), element);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * Gets the value of the DateOfBirthSC field.
   * Driver's date of birth used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfBirthSC() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTHSC_PROP.get());
  }
  
  /**
   * Gets the value of the FirstNameSC field.
   * Driver's first name used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameSC() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMESC_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getFirstNameSCDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMESCDENORM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the InternalRequestID field.
   * Internal Request unique identifier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInternalRequestID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INTERNALREQUESTID_PROP.get());
  }
  
  /**
   * Gets the value of the LastNameSC field.
   * Driver's last name used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameSC() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMESC_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLastNameSCDenorm() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMESCDENORM_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseNumberSC field.
   * Driver's license number used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLicenseNumberSC() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSENUMBERSC_PROP.get());
  }
  
  /**
   * Gets the value of the LicenseStateSC field.
   * Driver's license state used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.State getLicenseStateSC() {
    return (typekey.State)__getInternalInterface().getFieldValue(LICENSESTATESC_PROP.get());
  }
  
  public gw.api.motorvehiclerecord.IMVRData[] getMVRData() {
    return ((gw.api.motorvehiclerecord.IMVROrder)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVROrder")).getMVRData();
  }
  
  /**
   * Gets the value of the MVREntities field.
   * MVR report received for this order.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.MVR[] getMVREntities() {
    return (entity.MVR[])__getInternalInterface().getFieldValue(MVRENTITIES_PROP.get());
  }
  
  /**
   * Gets the value of the MVRResponse field.
   * MVR Response sent by the Provider (Clear, Hit, No Hit, Delay, etc)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRResponse getMVRResponse() {
    return (typekey.MVRResponse)__getInternalInterface().getFieldValue(MVRRESPONSE_PROP.get());
  }
  
  /**
   * Gets the value of the MiddleNameSC field.
   * Driver's middle name or initial used to request the MVR.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getMiddleNameSC() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MIDDLENAMESC_PROP.get());
  }
  
  /**
   * Gets the value of the OrderStatus field.
   * Order status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVRStatus getOrderStatus() {
    return (typekey.MVRStatus)__getInternalInterface().getFieldValue(ORDERSTATUS_PROP.get());
  }
  
  /**
   * Gets the value of the ProviderRequestID field.
   * Provider Request/order identifier.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProviderRequestID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PROVIDERREQUESTID_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReportRequestedDate field.
   * Date when the report was requested.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReportRequestedDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REPORTREQUESTEDDATE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the StatusDate field.
   * Date of the last status change.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getStatusDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(STATUSDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.MVROrder getSubtype() {
    return (typekey.MVROrder)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
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
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
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
   * Removes the given element from the MVREntities array. This is achieved by marking the element for removal.
   */
  public void removeFromMVREntities(entity.MVR element) {
    __getInternalInterface().removeArrayElement(MVRENTITIES_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the MVREntities array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMVREntities(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(MVRENTITIES_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateOfBirthSC field.
   */
  public void setDateOfBirthSC(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEOFBIRTHSC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameSC field.
   */
  public void setFirstNameSC(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstNameSCDenorm field.
   */
  private void setFirstNameSCDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(FIRSTNAMESCDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InternalRequestID field.
   */
  public void setInternalRequestID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INTERNALREQUESTID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameSC field.
   */
  public void setLastNameSC(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastNameSCDenorm field.
   */
  private void setLastNameSCDenorm(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LASTNAMESCDENORM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseNumberSC field.
   */
  public void setLicenseNumberSC(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(LICENSENUMBERSC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LicenseStateSC field.
   */
  public void setLicenseStateSC(typekey.State value) {
    __getInternalInterface().setFieldValue(LICENSESTATESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MVREntities field.
   */
  public void setMVREntities(entity.MVR[] value) {
    __getInternalInterface().setFieldValue(MVRENTITIES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MVRResponse field.
   */
  public void setMVRResponse(typekey.MVRResponse value) {
    __getInternalInterface().setFieldValue(MVRRESPONSE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MiddleNameSC field.
   */
  public void setMiddleNameSC(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(MIDDLENAMESC_PROP.get(), value);
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
   * Sets the value of the OrderStatus field.
   */
  public void setOrderStatus(typekey.MVRStatus value) {
    __getInternalInterface().setFieldValue(ORDERSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProviderRequestID field.
   */
  public void setProviderRequestID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PROVIDERREQUESTID_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReportRequestedDate field.
   */
  public void setReportRequestedDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(REPORTREQUESTEDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StatusDate field.
   */
  public void setStatusDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(STATUSDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.MVROrder value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.MVROrderInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.MVROrder.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the MVREntities array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToMVREntities(entity.MVR element) {
      __getInternalInterface().addArrayElement(MVRENTITIES_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CreateTime field.
     * Timestamp when the object was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCreateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the CreateUser field.
     * User who created the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getCreateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the DateOfBirthSC field.
     * Driver's date of birth used to request the MVR.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateOfBirthSC() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEOFBIRTHSC_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameSC field.
     * Driver's first name used to request the MVR.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstNameSC() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMESC_PROP.get());
    }
    
    /**
     * Gets the value of the FirstNameSCDenorm field.
     * denorm field for FirstNameSC
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getFirstNameSCDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(FIRSTNAMESCDENORM_PROP.get());
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
     * Gets the value of the InternalRequestID field.
     * Internal Request unique identifier.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInternalRequestID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INTERNALREQUESTID_PROP.get());
    }
    
    /**
     * Gets the value of the LastNameSC field.
     * Driver's last name used to request the MVR.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastNameSC() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMESC_PROP.get());
    }
    
    /**
     * Gets the value of the LastNameSCDenorm field.
     * denorm field for LastNameSC
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLastNameSCDenorm() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LASTNAMESCDENORM_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseNumberSC field.
     * Driver's license number used to request the MVR.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getLicenseNumberSC() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(LICENSENUMBERSC_PROP.get());
    }
    
    /**
     * Gets the value of the LicenseStateSC field.
     * Driver's license state used to request the MVR.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.State getLicenseStateSC() {
      return (typekey.State)__getInternalInterface().getFieldValue(LICENSESTATESC_PROP.get());
    }
    
    public gw.api.motorvehiclerecord.IMVRData[] getMVRData() {
      return ((gw.api.motorvehiclerecord.IMVROrder)__getDelegateManager().getImplementation("gw.api.motorvehiclerecord.IMVROrder")).getMVRData();
    }
    
    /**
     * Gets the value of the MVREntities field.
     * MVR report received for this order.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.MVR[] getMVREntities() {
      return (entity.MVR[])__getInternalInterface().getFieldValue(MVRENTITIES_PROP.get());
    }
    
    /**
     * Gets the value of the MVRResponse field.
     * MVR Response sent by the Provider (Clear, Hit, No Hit, Delay, etc)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVRResponse getMVRResponse() {
      return (typekey.MVRResponse)__getInternalInterface().getFieldValue(MVRRESPONSE_PROP.get());
    }
    
    /**
     * Gets the value of the MiddleNameSC field.
     * Driver's middle name or initial used to request the MVR.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getMiddleNameSC() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(MIDDLENAMESC_PROP.get());
    }
    
    /**
     * Gets the value of the OrderStatus field.
     * Order status
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVRStatus getOrderStatus() {
      return (typekey.MVRStatus)__getInternalInterface().getFieldValue(ORDERSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the ProviderRequestID field.
     * Provider Request/order identifier.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProviderRequestID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PROVIDERREQUESTID_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the ReportRequestedDate field.
     * Date when the report was requested.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReportRequestedDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REPORTREQUESTEDDATE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the StatusDate field.
     * Date of the last status change.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getStatusDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(STATUSDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.MVROrder getSubtype() {
      return (typekey.MVROrder)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateTime field.
     * Timestamp when the object was last updated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getUpdateTime() {
      return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
    }
    
    /**
     * Gets the value of the UpdateUser field.
     * User who last updated the object
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.User getUpdateUser() {
      return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
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
    
    /**
     * Removes the given element from the MVREntities array. This is achieved by marking the element for removal.
     */
    public void removeFromMVREntities(entity.MVR element) {
      __getInternalInterface().removeArrayElement(MVRENTITIES_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the MVREntities array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromMVREntities(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(MVRENTITIES_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateOfBirthSC field.
     */
    public void setDateOfBirthSC(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEOFBIRTHSC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameSC field.
     */
    public void setFirstNameSC(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAMESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstNameSCDenorm field.
     */
    public void setFirstNameSCDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(FIRSTNAMESCDENORM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InternalRequestID field.
     */
    public void setInternalRequestID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INTERNALREQUESTID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameSC field.
     */
    public void setLastNameSC(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAMESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastNameSCDenorm field.
     */
    public void setLastNameSCDenorm(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LASTNAMESCDENORM_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the LicenseNumberSC field.
     */
    public void setLicenseNumberSC(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(LICENSENUMBERSC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LicenseStateSC field.
     */
    public void setLicenseStateSC(typekey.State value) {
      __getInternalInterface().setFieldValue(LICENSESTATESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MVREntities field.
     */
    public void setMVREntities(entity.MVR[] value) {
      __getInternalInterface().setFieldValue(MVRENTITIES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MVRResponse field.
     */
    public void setMVRResponse(typekey.MVRResponse value) {
      __getInternalInterface().setFieldValue(MVRRESPONSE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the MiddleNameSC field.
     */
    public void setMiddleNameSC(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(MIDDLENAMESC_PROP.get(), value);
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
     * Sets the value of the OrderStatus field.
     */
    public void setOrderStatus(typekey.MVRStatus value) {
      __getInternalInterface().setFieldValue(ORDERSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProviderRequestID field.
     */
    public void setProviderRequestID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PROVIDERREQUESTID_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReportRequestedDate field.
     */
    public void setReportRequestedDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(REPORTREQUESTEDDATE_PROP.get(), value);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the StatusDate field.
     */
    public void setStatusDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(STATUSDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.MVROrder value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.motorvehiclerecord.MVROrderPublicMethods", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVROrderImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.api.motorvehiclerecord.IMVROrder", "com.guidewire.pc.domain.motorvehiclerecord.impl.MVROrderImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.MVROrder.class, config);
    com.guidewire._generated.entity.MVROrderInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.MVROrder, com.guidewire._generated.entity.MVROrderInternal>() {
      public java.lang.Object getImplementation(entity.MVROrder bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.MVROrderInternal getInternalInterface(entity.MVROrder bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.MVROrder newEmptyInstance() {
        return new entity.MVROrder((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}