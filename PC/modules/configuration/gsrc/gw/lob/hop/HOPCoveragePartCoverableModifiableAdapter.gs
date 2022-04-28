package gw.lob.hop

uses entity.PolicyLine

/**
 * This class exists to aggregate the implementations of gw.api.domain.CoverableAdapter and
 * gw.api.domain.ModifiableAdapter for HOPCoveragePart. These interfaces have overlapping methods, so they must be
 * implemented via a single class.
 */
@Export
class HOPCoveragePartCoverableModifiableAdapter implements gw.api.domain.CoverableAdapter, gw.api.domain.ModifiableAdapter {

  delegate _coverableAdapter represents gw.api.domain.CoverableAdapter
  delegate _modifiableAdapter represents gw.api.domain.ModifiableAdapter

  construct(owner: HOPCoveragePart) {
    _coverableAdapter = new HOPCoveragePartCoverableAdapter(owner)
    _modifiableAdapter = new HOPCoveragePartModifiableAdapter(owner)
  }

  override property get PolicyLine(): PolicyLine {
    return _coverableAdapter.PolicyLine
  }

  override property get State(): Jurisdiction {
    return _coverableAdapter.State
  }

  override property get ReferenceDateInternal(): Date {
    return _coverableAdapter.ReferenceDateInternal
  }

  override property set ReferenceDateInternal(d: Date) {
    _coverableAdapter.ReferenceDateInternal = d
  }

}