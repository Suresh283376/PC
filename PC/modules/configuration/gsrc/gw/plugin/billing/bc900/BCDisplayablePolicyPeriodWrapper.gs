package gw.plugin.billing.bc900

uses gw.api.database.Query
uses gw.pl.currency.MonetaryAmount
uses gw.plugin.billing.BillingInvoiceInfo
uses gw.plugin.billing.BillingPeriodInfo
uses gw.plugin.billing.BillingTermInfo
uses wsi.remote.gw.webservice.bc.bc900.billingsummaryapi.types.complex.DisplayablePolicyPeriod

uses java.lang.IllegalStateException
uses java.lang.Integer
uses java.lang.UnsupportedOperationException
uses java.util.Date

@Export
@Deprecated(:value="900 inter-app integration packages will be removed in PC11.", :version="PC 10.0.0")
class BCDisplayablePolicyPeriodWrapper implements BillingPeriodInfo {
  var _period : DisplayablePolicyPeriod

  construct(soapObject : DisplayablePolicyPeriod) {
    _period = soapObject
  }

  override property get BillingMethod() : BillingMethod {
    return typekey.BillingMethod.get(_period.BillingStatus.BillingMethodCode)
  }

  override property get CurrentOutstanding() : MonetaryAmount {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get Delinquent() : Boolean {
    return _period.BillingStatus.Delinquent
  }

  override property get DepositRequirement() : MonetaryAmount {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get EffectiveDate() : Date {
    return _period.EffectiveDate
  }

  override property get ExpirationDate() : Date {
    return _period.ExpirationDate
  }

  override property get Invoices() : BillingInvoiceInfo[] {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get Paid() : MonetaryAmount {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get PastDue() : MonetaryAmount {
    return _period.BillingStatus.PastDue
  }

  override property get PaymentPlanName() : String {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get PolicyTermInfos() : BillingTermInfo[] {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get PolicyNumber() : String {
    return _period.PolicyNumber
  }

  override property get Product() : String {
    return _period.Product
  }

  override property get TermNumber() : Integer {
    return _period.TermNumber
  }

  override property get TotalBilled() : MonetaryAmount {
    return _period.BillingStatus.TotalBilled
  }

  override property get TotalCharges() : MonetaryAmount {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override property get Unbilled() : MonetaryAmount {
    return _period.BillingStatus.Unbilled
  }

  override property get WrittenOff() : MonetaryAmount {
    throw new IllegalStateException("This field is not applicable for this soap object.")
  }

  override function findPolicyPeriod() : PolicyPeriod{
    if (this.PCPolicyPublicID != null) {
      var query = Query.make(PolicyPeriod)
      query.compare(PolicyPeriod#TermNumber.PropertyInfo.Name, Equals, this.TermNumber)
      var policyTable = query.join(PolicyPeriod#Policy.PropertyInfo.Name)
      policyTable.compare(Policy#PublicID.PropertyInfo.Name, Equals, this.PCPolicyPublicID)
      return query.select().FirstResult
    } else {
      return PolicyPeriod.finder
          .findByPolicyNumberAndTerm(this.PolicyNumber, this.TermNumber)
          .FirstResult
    }
  }

  override property get AltBillingAccount() : String {
    return _period.AltBillingAccount
  }

  override property get InvoiceStream() : String {
    return _period.InvoiceStream
  }

  override property get OwningAccount() : String {
    return _period.OwningAccount
  }

  override property get PCPolicyPublicID(): String {
    return _period.PCPolicyPublicID
  }

  override property get Archived() : Boolean {
    throw new UnsupportedOperationException("This field is not applicable for this soap object.")
  }

  override property get Retrieved() : Boolean {
    throw new UnsupportedOperationException("This field is not applicable for this soap object.")
  }
}
