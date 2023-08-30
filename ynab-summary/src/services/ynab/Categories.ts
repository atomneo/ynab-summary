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
  CategoriesResponse,
  CategoryResponse,
  ErrorResponse,
  PatchMonthCategoryWrapper,
  SaveCategoryResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Categories<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all categories grouped by category group.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
   *
   * @tags Categories
   * @name GetCategories
   * @summary List categories
   * @request GET:/budgets/{budget_id}/categories
   * @secure
   * @response `200` `CategoriesResponse` The categories grouped by category group
   * @response `404` `ErrorResponse` No categories were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getCategories = (
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
    this.request<CategoriesResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/categories`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single category.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
   *
   * @tags Categories
   * @name GetCategoryById
   * @summary Single category
   * @request GET:/budgets/{budget_id}/categories/{category_id}
   * @secure
   * @response `200` `CategoryResponse` The requested category
   * @response `404` `ErrorResponse` The category not was found
   * @response `default` `ErrorResponse` An error occurred
   */
  getCategoryById = (budgetId: string, categoryId: string, params: RequestParams = {}) =>
    this.request<CategoryResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/categories/${categoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single category for a specific budget month.  Amounts (budgeted, activity, balance, etc.) are specific to the current budget month (UTC).
   *
   * @tags Categories
   * @name GetMonthCategoryById
   * @summary Single category for a specific budget month
   * @request GET:/budgets/{budget_id}/months/{month}/categories/{category_id}
   * @secure
   * @response `200` `CategoryResponse` The requested month category
   * @response `404` `ErrorResponse` The month category was not was found
   * @response `default` `ErrorResponse` An error occurred
   */
  getMonthCategoryById = (budgetId: string, month: string, categoryId: string, params: RequestParams = {}) =>
    this.request<CategoryResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/months/${month}/categories/${categoryId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update a category for a specific month.  Only `budgeted` amount can be updated.
   *
   * @tags Categories
   * @name UpdateMonthCategory
   * @summary Update a category for a specific month
   * @request PATCH:/budgets/{budget_id}/months/{month}/categories/{category_id}
   * @secure
   * @response `200` `SaveCategoryResponse` The month category was successfully updated
   * @response `400` `ErrorResponse` The request could not be understood due to malformed syntax or validation error(s)
   */
  updateMonthCategory = (
    budgetId: string,
    month: string,
    categoryId: string,
    data: PatchMonthCategoryWrapper,
    params: RequestParams = {},
  ) =>
    this.request<SaveCategoryResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/months/${month}/categories/${categoryId}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
