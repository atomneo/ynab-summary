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

import { ErrorResponse, UserResponse } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns authenticated user information
   *
   * @tags User
   * @name GetUser
   * @summary User info
   * @request GET:/user
   * @secure
   * @response `200` `UserResponse` The user info
   * @response `default` `ErrorResponse` An error occurred
   */
  getUser = (params: RequestParams = {}) =>
    this.request<UserResponse, ErrorResponse>({
      path: `/user`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
