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

import { BudgetDetailResponse, BudgetSettingsResponse, BudgetSummaryResponse, ErrorResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Budgets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns budgets list with summary information
   *
   * @tags Budgets
   * @name GetBudgets
   * @summary List budgets
   * @request GET:/budgets
   * @secure
   * @response `200` `BudgetSummaryResponse` The list of budgets
   * @response `404` `ErrorResponse` No budgets were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getBudgets = (
    query?: {
      /** Whether to include the list of budget accounts */
      include_accounts?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<BudgetSummaryResponse, ErrorResponse>({
      path: `/budgets`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single budget with all related entities.  This resource is effectively a full budget export.
   *
   * @tags Budgets
   * @name GetBudgetById
   * @summary Single budget
   * @request GET:/budgets/{budget_id}
   * @secure
   * @response `200` `BudgetDetailResponse` The requested budget
   * @response `404` `ErrorResponse` The specified budget was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getBudgetById = (
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
    this.request<BudgetDetailResponse, ErrorResponse>({
      path: `/budgets/${budgetId}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns settings for a budget
   *
   * @tags Budgets
   * @name GetBudgetSettingsById
   * @summary Budget Settings
   * @request GET:/budgets/{budget_id}/settings
   * @secure
   * @response `200` `BudgetSettingsResponse` The requested budget settings
   * @response `404` `ErrorResponse` The specified Budget was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getBudgetSettingsById = (budgetId: string, params: RequestParams = {}) =>
    this.request<BudgetSettingsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/settings`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
