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
import TestPlan from '../model/TestPlan';
import TestPlanPatchOperation from '../model/TestPlanPatchOperation';
import TestPlanSpec from '../model/TestPlanSpec';

/**
* TestPlans service.
* @module api/TestPlansApi
* @version 1.0.0
*/
export default class TestPlansApi {

    /**
    * Constructs a new TestPlansApi. 
    * @alias module:api/TestPlansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create test plan
     * Executes a new test plan for a specified tenant
     * @param {module:model/TestPlanSpec} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlan} and HTTP response
     */
    createTestPlanWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTestPlan");
      }


      let pathParams = {
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
      let returnType = TestPlan;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create test plan
     * Executes a new test plan for a specified tenant
     * @param {module:model/TestPlanSpec} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlan}
     */
    createTestPlan(body) {
      return this.createTestPlanWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete test plan
     * Deletes a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTestPlanWithHttpInfo(testPlanId) {
      let postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling deleteTestPlan");
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
      let returnType = null;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete test plan
     * Deletes a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTestPlan(testPlanId) {
      return this.deleteTestPlanWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get test plan
     * Retrieve a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlan} and HTTP response
     */
    getTestPlanWithHttpInfo(testPlanId) {
      let postBody = null;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling getTestPlan");
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
      let returnType = TestPlan;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get test plan
     * Retrieve a specified test plan
     * @param {Number} testPlanId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlan}
     */
    getTestPlan(testPlanId) {
      return this.getTestPlanWithHttpInfo(testPlanId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get test plans
     * Retrieve all test plans for a specified tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlan>} and HTTP response
     */
    getTestPlansWithHttpInfo() {
      let postBody = null;


      let pathParams = {
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
      let returnType = [TestPlan];

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get test plans
     * Retrieve all test plans for a specified tenant
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlan>}
     */
    getTestPlans() {
      return this.getTestPlansWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update test plan
     * Updates an existing new test plan for a specified tenant
     * @param {Number} testPlanId 
     * @param {Array.<module:model/TestPlanPatchOperation>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlan} and HTTP response
     */
    updateTestPlanWithHttpInfo(testPlanId, body) {
      let postBody = body;

      // verify the required parameter 'testPlanId' is set
      if (testPlanId === undefined || testPlanId === null) {
        throw new Error("Missing the required parameter 'testPlanId' when calling updateTestPlan");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTestPlan");
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
      let returnType = TestPlan;

      return this.apiClient.callApi(
        '/v1/tenants/me/test-plans/{testPlanId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update test plan
     * Updates an existing new test plan for a specified tenant
     * @param {Number} testPlanId 
     * @param {Array.<module:model/TestPlanPatchOperation>} body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlan}
     */
    updateTestPlan(testPlanId, body) {
      return this.updateTestPlanWithHttpInfo(testPlanId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
