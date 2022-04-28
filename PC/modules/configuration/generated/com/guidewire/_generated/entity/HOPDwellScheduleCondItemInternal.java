package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellScheduleCondItem.eti;HOPDwellScheduleCondItem.eix;HOPDwellScheduleCondItem.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface HOPDwellScheduleCondItemInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.HOPScheduledItemInternal, com.guidewire._generated.entity.ScheduledItemInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher, gw.api.productmodel.ScheduledItemAdapter {
  /**
   * Adds the given element to the ScheduledItemClauseArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToScheduledItemClauseArray(entity.HOPDwellSchCondItemCond element);
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellScheduleCondItem getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellScheduleCondItem getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the Schedule field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellingScheduleCond getSchedule();
  
  
  public gw.pl.persistence.core.Key getScheduleID();
  
  
  /**
   * Gets the value of the ScheduledItemClause field.
   * The condition that applies to this scheduled item
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchCondItemCond getScheduledItemClause();
  
  
  /**
   * Gets the value of the ScheduledItemClauseArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.HOPDwellSchCondItemCond[] getScheduledItemClauseArray();
  
  
  public gw.pl.persistence.core.Key getScheduledItemClauseID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.HOPDwellScheduleCondItem getSubtype();
  
  
  /**
   * Removes the given element from the ScheduledItemClauseArray array. This is achieved by marking the element for removal.
   */
  public void removeFromScheduledItemClauseArray(entity.HOPDwellSchCondItemCond element);
  
  
  /**
   * Removes the given element from the ScheduledItemClauseArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromScheduledItemClauseArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.HOPDwellScheduleCondItem value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.HOPDwellScheduleCondItem value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Schedule field.
   */
  public void setSchedule(entity.HOPDwellingScheduleCond value);
  
  
  public void setScheduleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ScheduledItemClause field.
   */
  public void setScheduledItemClause(entity.HOPDwellSchCondItemCond value);
  
  
  /**
   * Sets the value of the ScheduledItemClauseArray field.
   */
  public void setScheduledItemClauseArray(entity.HOPDwellSchCondItemCond[] value);
  
  
  public void setScheduledItemClauseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.HOPDwellScheduleCondItem value);
  
  
  
}