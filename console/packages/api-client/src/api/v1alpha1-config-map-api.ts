/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from "axios";
import globalAxios from "axios";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { ConfigMap } from "../models";
// @ts-ignore
import { ConfigMapList } from "../models";
/**
 * V1alpha1ConfigMapApi - axios parameter creator
 * @export
 */
export const V1alpha1ConfigMapApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Create v1alpha1/ConfigMap
     * @param {ConfigMap} [configMap] Fresh configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1ConfigMap: async (
      configMap?: ConfigMap,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/configmaps`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        configMap,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Delete v1alpha1/ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1ConfigMap: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("deletev1alpha1ConfigMap", "name", name);
      const localVarPath = `/api/v1alpha1/configmaps/{name}`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get v1alpha1/ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1ConfigMap: async (
      name: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("getv1alpha1ConfigMap", "name", name);
      const localVarPath = `/api/v1alpha1/configmaps/{name}`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * List v1alpha1/ConfigMap
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1ConfigMap: async (
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/api/v1alpha1/configmaps`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (page !== undefined) {
        localVarQueryParameter["page"] = page;
      }

      if (size !== undefined) {
        localVarQueryParameter["size"] = size;
      }

      if (labelSelector) {
        localVarQueryParameter["labelSelector"] = labelSelector;
      }

      if (fieldSelector) {
        localVarQueryParameter["fieldSelector"] = fieldSelector;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Update v1alpha1/ConfigMap
     * @param {string} name Name of configmap
     * @param {ConfigMap} [configMap] Updated configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1ConfigMap: async (
      name: string,
      configMap?: ConfigMap,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'name' is not null or undefined
      assertParamExists("updatev1alpha1ConfigMap", "name", name);
      const localVarPath = `/api/v1alpha1/configmaps/{name}`.replace(
        `{${"name"}}`,
        encodeURIComponent(String(name))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication BasicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication BearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        configMap,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * V1alpha1ConfigMapApi - functional programming interface
 * @export
 */
export const V1alpha1ConfigMapApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    V1alpha1ConfigMapApiAxiosParamCreator(configuration);
  return {
    /**
     * Create v1alpha1/ConfigMap
     * @param {ConfigMap} [configMap] Fresh configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createv1alpha1ConfigMap(
      configMap?: ConfigMap,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createv1alpha1ConfigMap(
          configMap,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Delete v1alpha1/ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deletev1alpha1ConfigMap(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deletev1alpha1ConfigMap(name, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get v1alpha1/ConfigMap
     * @param {string} name Name of configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getv1alpha1ConfigMap(
      name: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getv1alpha1ConfigMap(name, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * List v1alpha1/ConfigMap
     * @param {number} [page] The page number. Zero indicates no page.
     * @param {number} [size] Size of one page. Zero indicates no limit.
     * @param {Array<string>} [labelSelector] Label selector for filtering.
     * @param {Array<string>} [fieldSelector] Field selector for filtering.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listv1alpha1ConfigMap(
      page?: number,
      size?: number,
      labelSelector?: Array<string>,
      fieldSelector?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMapList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listv1alpha1ConfigMap(
          page,
          size,
          labelSelector,
          fieldSelector,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Update v1alpha1/ConfigMap
     * @param {string} name Name of configmap
     * @param {ConfigMap} [configMap] Updated configmap
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updatev1alpha1ConfigMap(
      name: string,
      configMap?: ConfigMap,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ConfigMap>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updatev1alpha1ConfigMap(
          name,
          configMap,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * V1alpha1ConfigMapApi - factory interface
 * @export
 */
export const V1alpha1ConfigMapApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = V1alpha1ConfigMapApiFp(configuration);
  return {
    /**
     * Create v1alpha1/ConfigMap
     * @param {V1alpha1ConfigMapApiCreatev1alpha1ConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createv1alpha1ConfigMap(
      requestParameters: V1alpha1ConfigMapApiCreatev1alpha1ConfigMapRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ConfigMap> {
      return localVarFp
        .createv1alpha1ConfigMap(requestParameters.configMap, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Delete v1alpha1/ConfigMap
     * @param {V1alpha1ConfigMapApiDeletev1alpha1ConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deletev1alpha1ConfigMap(
      requestParameters: V1alpha1ConfigMapApiDeletev1alpha1ConfigMapRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<void> {
      return localVarFp
        .deletev1alpha1ConfigMap(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get v1alpha1/ConfigMap
     * @param {V1alpha1ConfigMapApiGetv1alpha1ConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getv1alpha1ConfigMap(
      requestParameters: V1alpha1ConfigMapApiGetv1alpha1ConfigMapRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ConfigMap> {
      return localVarFp
        .getv1alpha1ConfigMap(requestParameters.name, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * List v1alpha1/ConfigMap
     * @param {V1alpha1ConfigMapApiListv1alpha1ConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listv1alpha1ConfigMap(
      requestParameters: V1alpha1ConfigMapApiListv1alpha1ConfigMapRequest = {},
      options?: AxiosRequestConfig
    ): AxiosPromise<ConfigMapList> {
      return localVarFp
        .listv1alpha1ConfigMap(
          requestParameters.page,
          requestParameters.size,
          requestParameters.labelSelector,
          requestParameters.fieldSelector,
          options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     * Update v1alpha1/ConfigMap
     * @param {V1alpha1ConfigMapApiUpdatev1alpha1ConfigMapRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updatev1alpha1ConfigMap(
      requestParameters: V1alpha1ConfigMapApiUpdatev1alpha1ConfigMapRequest,
      options?: AxiosRequestConfig
    ): AxiosPromise<ConfigMap> {
      return localVarFp
        .updatev1alpha1ConfigMap(
          requestParameters.name,
          requestParameters.configMap,
          options
        )
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for createv1alpha1ConfigMap operation in V1alpha1ConfigMapApi.
 * @export
 * @interface V1alpha1ConfigMapApiCreatev1alpha1ConfigMapRequest
 */
export interface V1alpha1ConfigMapApiCreatev1alpha1ConfigMapRequest {
  /**
   * Fresh configmap
   * @type {ConfigMap}
   * @memberof V1alpha1ConfigMapApiCreatev1alpha1ConfigMap
   */
  readonly configMap?: ConfigMap;
}

/**
 * Request parameters for deletev1alpha1ConfigMap operation in V1alpha1ConfigMapApi.
 * @export
 * @interface V1alpha1ConfigMapApiDeletev1alpha1ConfigMapRequest
 */
export interface V1alpha1ConfigMapApiDeletev1alpha1ConfigMapRequest {
  /**
   * Name of configmap
   * @type {string}
   * @memberof V1alpha1ConfigMapApiDeletev1alpha1ConfigMap
   */
  readonly name: string;
}

/**
 * Request parameters for getv1alpha1ConfigMap operation in V1alpha1ConfigMapApi.
 * @export
 * @interface V1alpha1ConfigMapApiGetv1alpha1ConfigMapRequest
 */
export interface V1alpha1ConfigMapApiGetv1alpha1ConfigMapRequest {
  /**
   * Name of configmap
   * @type {string}
   * @memberof V1alpha1ConfigMapApiGetv1alpha1ConfigMap
   */
  readonly name: string;
}

/**
 * Request parameters for listv1alpha1ConfigMap operation in V1alpha1ConfigMapApi.
 * @export
 * @interface V1alpha1ConfigMapApiListv1alpha1ConfigMapRequest
 */
export interface V1alpha1ConfigMapApiListv1alpha1ConfigMapRequest {
  /**
   * The page number. Zero indicates no page.
   * @type {number}
   * @memberof V1alpha1ConfigMapApiListv1alpha1ConfigMap
   */
  readonly page?: number;

  /**
   * Size of one page. Zero indicates no limit.
   * @type {number}
   * @memberof V1alpha1ConfigMapApiListv1alpha1ConfigMap
   */
  readonly size?: number;

  /**
   * Label selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1ConfigMapApiListv1alpha1ConfigMap
   */
  readonly labelSelector?: Array<string>;

  /**
   * Field selector for filtering.
   * @type {Array<string>}
   * @memberof V1alpha1ConfigMapApiListv1alpha1ConfigMap
   */
  readonly fieldSelector?: Array<string>;
}

/**
 * Request parameters for updatev1alpha1ConfigMap operation in V1alpha1ConfigMapApi.
 * @export
 * @interface V1alpha1ConfigMapApiUpdatev1alpha1ConfigMapRequest
 */
export interface V1alpha1ConfigMapApiUpdatev1alpha1ConfigMapRequest {
  /**
   * Name of configmap
   * @type {string}
   * @memberof V1alpha1ConfigMapApiUpdatev1alpha1ConfigMap
   */
  readonly name: string;

  /**
   * Updated configmap
   * @type {ConfigMap}
   * @memberof V1alpha1ConfigMapApiUpdatev1alpha1ConfigMap
   */
  readonly configMap?: ConfigMap;
}

/**
 * V1alpha1ConfigMapApi - object-oriented interface
 * @export
 * @class V1alpha1ConfigMapApi
 * @extends {BaseAPI}
 */
export class V1alpha1ConfigMapApi extends BaseAPI {
  /**
   * Create v1alpha1/ConfigMap
   * @param {V1alpha1ConfigMapApiCreatev1alpha1ConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1ConfigMapApi
   */
  public createv1alpha1ConfigMap(
    requestParameters: V1alpha1ConfigMapApiCreatev1alpha1ConfigMapRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1ConfigMapApiFp(this.configuration)
      .createv1alpha1ConfigMap(requestParameters.configMap, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Delete v1alpha1/ConfigMap
   * @param {V1alpha1ConfigMapApiDeletev1alpha1ConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1ConfigMapApi
   */
  public deletev1alpha1ConfigMap(
    requestParameters: V1alpha1ConfigMapApiDeletev1alpha1ConfigMapRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1ConfigMapApiFp(this.configuration)
      .deletev1alpha1ConfigMap(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get v1alpha1/ConfigMap
   * @param {V1alpha1ConfigMapApiGetv1alpha1ConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1ConfigMapApi
   */
  public getv1alpha1ConfigMap(
    requestParameters: V1alpha1ConfigMapApiGetv1alpha1ConfigMapRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1ConfigMapApiFp(this.configuration)
      .getv1alpha1ConfigMap(requestParameters.name, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * List v1alpha1/ConfigMap
   * @param {V1alpha1ConfigMapApiListv1alpha1ConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1ConfigMapApi
   */
  public listv1alpha1ConfigMap(
    requestParameters: V1alpha1ConfigMapApiListv1alpha1ConfigMapRequest = {},
    options?: AxiosRequestConfig
  ) {
    return V1alpha1ConfigMapApiFp(this.configuration)
      .listv1alpha1ConfigMap(
        requestParameters.page,
        requestParameters.size,
        requestParameters.labelSelector,
        requestParameters.fieldSelector,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Update v1alpha1/ConfigMap
   * @param {V1alpha1ConfigMapApiUpdatev1alpha1ConfigMapRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof V1alpha1ConfigMapApi
   */
  public updatev1alpha1ConfigMap(
    requestParameters: V1alpha1ConfigMapApiUpdatev1alpha1ConfigMapRequest,
    options?: AxiosRequestConfig
  ) {
    return V1alpha1ConfigMapApiFp(this.configuration)
      .updatev1alpha1ConfigMap(
        requestParameters.name,
        requestParameters.configMap,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}