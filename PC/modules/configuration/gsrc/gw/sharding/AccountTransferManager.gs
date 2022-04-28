package gw.sharding

uses gw.api.sharding.AccountTransferRepresentation

/**
 * This interface defines the API for transfering an Account entity out of one system and into another.
 */
@Export
interface AccountTransferManager {

  /**
   * Create a representation of the account for transfer.
   * @param account the account which should have its representation created.
   * @return the representation of the account.
   */
  function createAccountTransferRepresentation(account: Account) : AccountTransferRepresentation

  /**
   * Import a representation of the account into this system.
   * @param accountTransferRepresentation the representation of the account to import.
   * @return the account that has been created from the passed in representation.
   */
  function importAccountTransferRepresentation(accountTransferRepresentation: AccountTransferRepresentation) : Account
}