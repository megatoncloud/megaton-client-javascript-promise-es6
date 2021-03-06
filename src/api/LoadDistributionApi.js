/**
 * Megaton API
 * JSON API for the Megaton Cloud Platform
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@megaton.cloud
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import LoadDistributionEntry from '../model/LoadDistributionEntry';
import LoadDistributionEntrySpec from '../model/LoadDistributionEntrySpec';

/**
* LoadDistribution service.
* @module api/LoadDistributionApi
* @version 1.0.0
*/
export default class LoadDistributionApi {

    /**
    * Constructs a new LoadDistributionApi. 
    * @alias module:api/LoadDistributionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get load distribution
     * Retrieve load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoadDistributionEntry>} and HTTP response
     */
    getLoadDistributionWithHttpInfo(testPlanId) {
      let postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling getLoadDistribution");
      }


      let pathParams = {
        'testPlanId': testPlanId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['password'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [LoadDistributionEntry];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}/load-distribution', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get load distribution
     * Retrieve load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoadDistributionEntry>}
     */
    getLoadDistribution(testPlanId) {
      return this.getLoadDistributionWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set load distribution
     * Set load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @param {Array.<module:model/LoadDistributionEntrySpec>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LoadDistributionEntry>} and HTTP response
     */
    setLoadDistributionWithHttpInfo(testPlanId, body) {
      let postBody = body;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling setLoadDistribution");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling setLoadDistribution");
      }


      let pathParams = {
        'testPlanId': testPlanId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['password'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [LoadDistributionEntry];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}/load-distribution', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set load distribution
     * Set load distribution for a specified test plan
     * @param {Number} testPlanId 
     * @param {Array.<module:model/LoadDistributionEntrySpec>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LoadDistributionEntry>}
     */
    setLoadDistribution(testPlanId, body) {
      return this.setLoadDistributionWithHttpInfo(testPlanId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
