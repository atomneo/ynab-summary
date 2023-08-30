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

import { ErrorResponse, PayeeResponse, PayeesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Payees<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all payees
   *
   * @tags Payees
   * @name GetPayees
   * @summary List payees
   * @request GET:/budgets/{budget_id}/payees
   * @secure
   * @response `200` `PayeesResponse` The requested list of payees
   * @response `404` `ErrorResponse` No payees were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getPayees = (
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
    this.request<PayeesResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/payees`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single payee
   *
   * @tags Payees
   * @name GetPayeeById
   * @summary Single payee
   * @request GET:/budgets/{budget_id}/payees/{payee_id}
   * @secure
   * @response `200` `PayeeResponse` The requested payee
   * @response `404` `ErrorResponse` The payee was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getPayeeById = (budgetId: string, payeeId: string, params: RequestParams = {}) =>
    this.request<PayeeResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/payees/${payeeId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
