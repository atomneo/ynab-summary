/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  ErrorResponse,
  HybridTransactionsResponse,
  PatchTransactionsWrapper,
  PostTransactionsWrapper,
  PutTransactionWrapper,
  SaveTransactionsResponse,
  TransactionResponse,
  TransactionsImportResponse,
  TransactionsResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Transactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns budget transactions
   *
   * @tags Transactions
   * @name GetTransactions
   * @summary List transactions
   * @request GET:/budgets/{budget_id}/transactions
   * @secure
   * @response `200` `TransactionsResponse` The list of requested transactions
   * @response `400` `ErrorResponse` An error occurred
   * @response `404` `ErrorResponse` No transactions were found
   */
  getTransactions = (
    budgetId: string,
    query?: {
      /**
       * If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
       * @format date
       */
      since_date?: string;
      /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
      type?: "uncategorized" | "unapproved";
      /**
       * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
       * @format int64
       */
      last_knowledge_of_server?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a single transaction or multiple transactions.  If you provide a body containing a `transaction` object, a single transaction will be created and if you provide a body containing a `transactions` array, multiple transactions will be created.  Scheduled transactions cannot be created on this endpoint.
   *
   * @tags Transactions
   * @name CreateTransaction
   * @summary Create a single transaction or multiple transactions
   * @request POST:/budgets/{budget_id}/transactions
   * @secure
   * @response `201` `SaveTransactionsResponse` The transaction or transactions were successfully created
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s).
   * @response `409` `ErrorResponse` A transaction on the same account with the same `import_id` already exists.
   */
  createTransaction = (budgetId: string, data: PostTransactionsWrapper, params: RequestParams = {}) =>
    this.request<SaveTransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Updates multiple transactions, by `id` or `import_id`.
   *
   * @tags Transactions
   * @name UpdateTransactions
   * @summary Update multiple transactions
   * @request PATCH:/budgets/{budget_id}/transactions
   * @secure
   * @response `209` `SaveTransactionsResponse` The transactions were successfully updated
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s).
   */
  updateTransactions = (budgetId: string, data: PatchTransactionsWrapper, params: RequestParams = {}) =>
    this.request<SaveTransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Imports available transactions on all linked accounts for the given budget.  Linked accounts allow transactions to be imported directly from a specified financial institution and this endpoint initiates that import.  Sending a request to this endpoint is the equivalent of clicking "Import" on each account in the web application or tapping the "New Transactions" banner in the mobile applications.  The response for this endpoint contains the transaction ids that have been imported.
   *
   * @tags Transactions
   * @name ImportTransactions
   * @summary Import transactions
   * @request POST:/budgets/{budget_id}/transactions/import
   * @secure
   * @response `200` `TransactionsImportResponse` The request was successful but there were no transactions to import
   * @response `201` `TransactionsImportResponse` One or more transactions were imported successfully
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s)
   */
  importTransactions = (budgetId: string, params: RequestParams = {}) =>
    this.request<TransactionsImportResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions/import`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single transaction
   *
   * @tags Transactions
   * @name GetTransactionById
   * @summary Single transaction
   * @request GET:/budgets/{budget_id}/transactions/{transaction_id}
   * @secure
   * @response `200` `TransactionResponse` The requested transaction
   * @response `404` `ErrorResponse` The transaction was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getTransactionById = (budgetId: string, transactionId: string, params: RequestParams = {}) =>
    this.request<TransactionResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions/${transactionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Updates a single transaction
   *
   * @tags Transactions
   * @name UpdateTransaction
   * @summary Updates an existing transaction
   * @request PUT:/budgets/{budget_id}/transactions/{transaction_id}
   * @secure
   * @response `200` `TransactionResponse` The transaction was successfully updated
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s)
   */
  updateTransaction = (
    budgetId: string,
    transactionId: string,
    data: PutTransactionWrapper,
    params: RequestParams = {},
  ) =>
    this.request<TransactionResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions/${transactionId}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Deletes a transaction
   *
   * @tags Transactions
   * @name DeleteTransaction
   * @summary Deletes an existing transaction
   * @request DELETE:/budgets/{budget_id}/transactions/{transaction_id}
   * @secure
   * @response `200` `TransactionResponse` The transaction was successfully deleted
   * @response `404` `ErrorResponse` The transaction was not found
   */
  deleteTransaction = (budgetId: string, transactionId: string, params: RequestParams = {}) =>
    this.request<TransactionResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions/${transactionId}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all transactions for a specified account
   *
   * @tags Transactions
   * @name GetTransactionsByAccount
   * @summary List account transactions
   * @request GET:/budgets/{budget_id}/accounts/{account_id}/transactions
   * @secure
   * @response `200` `TransactionsResponse` The list of requested transactions
   * @response `404` `ErrorResponse` No transactions were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getTransactionsByAccount = (
    budgetId: string,
    accountId: string,
    query?: {
      /**
       * If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
       * @format date
       */
      since_date?: string;
      /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
      type?: "uncategorized" | "unapproved";
      /**
       * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
       * @format int64
       */
      last_knowledge_of_server?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<TransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/accounts/${accountId}/transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all transactions for a specified category
   *
   * @tags Transactions
   * @name GetTransactionsByCategory
   * @summary List category transactions
   * @request GET:/budgets/{budget_id}/categories/{category_id}/transactions
   * @secure
   * @response `200` `HybridTransactionsResponse` The list of requested transactions
   * @response `404` `ErrorResponse` No transactions were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getTransactionsByCategory = (
    budgetId: string,
    categoryId: string,
    query?: {
      /**
       * If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
       * @format date
       */
      since_date?: string;
      /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
      type?: "uncategorized" | "unapproved";
      /**
       * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
       * @format int64
       */
      last_knowledge_of_server?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<HybridTransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/categories/${categoryId}/transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all transactions for a specified payee
   *
   * @tags Transactions
   * @name GetTransactionsByPayee
   * @summary List payee transactions
   * @request GET:/budgets/{budget_id}/payees/{payee_id}/transactions
   * @secure
   * @response `200` `HybridTransactionsResponse` The list of requested transactions
   * @response `404` `ErrorResponse` No transactions were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getTransactionsByPayee = (
    budgetId: string,
    payeeId: string,
    query?: {
      /**
       * If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30).
       * @format date
       */
      since_date?: string;
      /** If specified, only transactions of the specified type will be included. "uncategorized" and "unapproved" are currently supported. */
      type?: "uncategorized" | "unapproved";
      /**
       * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
       * @format int64
       */
      last_knowledge_of_server?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<HybridTransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/payees/${payeeId}/transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
}
