package gw.quoting.impl

uses gw.api.quoting.QuoteDataManagerException
uses gw.beantransfer.BeanExportHandler
uses gw.beantransfer.BeanImportHandler

/**
 * Handler for Transaction beans.
 *
 * This handler does not export Transaction beans. During importing, it recreates them based on the Costs.
 */
@Export
class TransactionHandler implements BeanExportHandler, BeanImportHandler {

  var _period : PolicyPeriod

  override function handleBeanExport(bean: KeyableBean): KeyableBean {
    if (bean typeis Transaction) {
      // Don't export Transaction entities. Since we always deal with Submissions only, we can always recreate them
      // without losing any information.
      return null
    }
    return bean
  }

  override function setIdOnBean(bean: KeyableBean, dbId : String) {
    if (bean typeis PolicyPeriod) {
      _period = bean
    }
  }

  override function handlePostImport() {
    if (_period == null) {
      throw new QuoteDataManagerException("No PolicyPeriod is defined in the quote XML.")
    }
    // Recreate the Transactions for the PolicyPeriod since they were not exported.
    _period.calculateTransactions()
  }
}