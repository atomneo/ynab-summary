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

import { BulkResponse, BulkTransactions, ErrorResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Deprecated<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Creates multiple transactions.  Although this endpoint is still supported, it is recommended to use 'POST /budgets/{budget_id}/transactions' to create multiple transactions.
   *
   * @tags Deprecated
   * @name BulkCreateTransactions
   * @summary Bulk create transactions
   * @request POST:/budgets/{budget_id}/transactions/bulk
   * @secure
   * @response `201` `BulkResponse` The bulk request was processed successfully
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s)
   */
  bulkCreateTransactions = (budgetId: string, data: BulkTransactions, params: RequestParams = {}) =>
    this.request<BulkResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/transactions/bulk`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
