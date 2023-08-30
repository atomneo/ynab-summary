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

import { ErrorResponse, PayeeLocationResponse, PayeeLocationsResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class PayeeLocations<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns all payee locations
   *
   * @tags Payee Locations
   * @name GetPayeeLocations
   * @summary List payee locations
   * @request GET:/budgets/{budget_id}/payee_locations
   * @secure
   * @response `200` `PayeeLocationsResponse` The list of payee locations
   * @response `404` `ErrorResponse` No payees locations were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getPayeeLocations = (budgetId: string, params: RequestParams = {}) =>
    this.request<PayeeLocationsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/payee_locations`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single payee location
   *
   * @tags Payee Locations
   * @name GetPayeeLocationById
   * @summary Single payee location
   * @request GET:/budgets/{budget_id}/payee_locations/{payee_location_id}
   * @secure
   * @response `200` `PayeeLocationResponse` The payee location
   * @response `404` `ErrorResponse` The payee location was not found
   * @response `default` `ErrorResponse` An error occurred
   */
  getPayeeLocationById = (budgetId: string, payeeLocationId: string, params: RequestParams = {}) =>
    this.request<PayeeLocationResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/payee_locations/${payeeLocationId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns all payee locations for a specified payee
   *
   * @tags Payee Locations
   * @name GetPayeeLocationsByPayee
   * @summary List locations for a payee
   * @request GET:/budgets/{budget_id}/payees/{payee_id}/payee_locations
   * @secure
   * @response `200` `PayeeLocationsResponse` The list of requested payee locations
   * @response `404` `ErrorResponse` No payees locations were found
   * @response `default` `ErrorResponse` An error occurred
   */
  getPayeeLocationsByPayee = (budgetId: string, payeeId: string, params: RequestParams = {}) =>
    this.request<PayeeLocationsResponse, ErrorResponse>({
      path: `/budgets/${budgetId}/payees/${payeeId}/payee_locations`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
