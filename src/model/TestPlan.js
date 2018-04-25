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


import ApiClient from '../ApiClient';





/**
* The TestPlan model module.
* @module model/TestPlan
* @version 1.0.0
*/
export default class TestPlan {
    /**
    * Constructs a new <code>TestPlan</code>.
    * @alias module:model/TestPlan
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TestPlan</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TestPlan} obj Optional instance to populate.
    * @return {module:model/TestPlan} The populated <code>TestPlan</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TestPlan();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], 'String');
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} profile
    */
    profile = undefined;
    /**
    * @member {String} duration
    */
    duration = undefined;








}


