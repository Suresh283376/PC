package gw.lob.hop

uses entity.PolicyLine
uses gw.api.contact.AdditionalInterestContainer
uses gw.api.domain.CoverableAdapter
uses gw.api.domain.ModifiableAdapter

/**
 * This class exists to aggregate the implementations of {@link CoverableAdapter}, {@link ModifiableAdapter} and
 * {@link AdditionalInterestContainer} for HOPDwelling. These interfaces have overlapping methods, so they must be
 * implemented via a single class.
 */
@Export
class HOPDwellingAdditionalInterestContainerCoverableModifiableAdapter implements CoverableAdapter, ModifiableAdapter, AdditionalInterestContainer {

  delegate _coverableAdapter represents CoverableAdapter
  delegate _modifiableAdapter represents ModifiableAdapter
  delegate _additionalInterestContainer represents AdditionalInterestContainer

  construct(owner: HOPDwelling) {
    _coverableAdapter = new HOPDwellingCoverableAdapter(owner)
    _modifiableAdapter = new HOPDwellingModifiableAdapter(owner)
    _additionalInterestContainer = new HOPDwellingAdditionalInterestContainer(owner)
  }

  override property get PolicyLine() : PolicyLine {
    return _coverableAdapter.PolicyLine
  }

  override property get State() : Jurisdiction {
    return _coverableAdapter.State
  }

  override property get ReferenceDateInternal() : Date {
    return _coverableAdapter.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(d: Date) {
    _coverableAdapter.ReferenceDateInternal = d
  }

  override property get PolicyPeriod() : PolicyPeriod {
    return _modifiableAdapter.PolicyPeriod
  }
}