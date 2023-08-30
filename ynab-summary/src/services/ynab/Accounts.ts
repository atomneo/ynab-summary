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

import { AccountResponse, AccountsResponse, ErrorResponse, PostAccountWrapper } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Accounts<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all accounts
   *
   * @tags Accounts
   * @name GetAccounts
   * @summary Account list
   * @request GET:/budgets/{budget_id}/accounts
   * @secure
   * @response `200` `AccountsResponse` The list of requested accounts
   * @response `404` `ErrorResponse` No accounts were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getAccounts = (
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
    this.request<AccountsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/accounts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Creates a new account
   *
   * @tags Accounts
   * @name CreateAccount
   * @summary Create a new account
   * @request POST:/budgets/{budget_id}/accounts
   * @secure
   * @response `201` `AccountResponse` The account was successfully created
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s).
   */
  createAccount = (budgetId: string, data: PostAccountWrapper, params: RequestParams = {}) =>
    this.request<AccountResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/accounts`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single account
   *
   * @tags Accounts
   * @name GetAccountById
   * @summary Single account
   * @request GET:/budgets/{budget_id}/accounts/{account_id}
   * @secure
   * @response `200` `AccountResponse` The requested account
   * @response `404` `ErrorResponse` The requested account was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getAccountById = (budgetId: string, accountId: string, params: RequestParams = {}) =>
    this.request<AccountResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/accounts/${accountId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
