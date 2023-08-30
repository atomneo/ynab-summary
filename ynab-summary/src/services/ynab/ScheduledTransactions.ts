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

import { ErrorResponse, ScheduledTransactionResponse, ScheduledTransactionsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class ScheduledTransactions<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all scheduled transactions
   *
   * @tags Scheduled Transactions
   * @name GetScheduledTransactions
   * @summary List scheduled transactions
   * @request GET:/budgets/{budget_id}/scheduled_transactions
   * @secure
   * @response `200` `ScheduledTransactionsResponse` The list of requested scheduled transactions
   * @response `404` `ErrorResponse` No scheduled transactions were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getScheduledTransactions = (
    budgetId: string,
    query?: {
      /**
       * The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included.
       * @format int64
       */
      last_knowledge_of_server?: number;
    },
    params: RequestParams = {},
  ) =>
    this.request<ScheduledTransactionsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/scheduled_transactions`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single scheduled transaction
   *
   * @tags Scheduled Transactions
   * @name GetScheduledTransactionById
   * @summary Single scheduled transaction
   * @request GET:/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}
   * @secure
   * @response `200` `ScheduledTransactionResponse` The requested Scheduled Transaction
   * @response `404` `ErrorResponse` The scheduled transaction was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getScheduledTransactionById = (budgetId: string, scheduledTransactionId: string, params: RequestParams = {}) =>
    this.request<ScheduledTransactionResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/scheduled_transactions/${scheduledTransactionId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
