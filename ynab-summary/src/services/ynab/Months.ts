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

import { ErrorResponse, MonthDetailResponse, MonthSummariesResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Months<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all budget months
   *
   * @tags Months
   * @name GetBudgetMonths
   * @summary List budget months
   * @request GET:/budgets/{budget_id}/months
   * @secure
   * @response `200` `MonthSummariesResponse` The list of budget months
   * @response `404` `ErrorResponse` No budget months were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getBudgetMonths = (
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
    this.request<MonthSummariesResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/months`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single budget month
   *
   * @tags Months
   * @name GetBudgetMonth
   * @summary Single budget month
   * @request GET:/budgets/{budget_id}/months/{month}
   * @secure
   * @response `200` `MonthDetailResponse` The budget month detail
   * @response `404` `ErrorResponse` The budget month was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getBudgetMonth = (budgetId: string, month: string, params: RequestParams = {}) =>
    this.request<MonthDetailResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/months/${month}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
