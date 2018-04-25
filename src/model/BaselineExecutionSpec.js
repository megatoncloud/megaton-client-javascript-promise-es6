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
* The BaselineExecutionSpec model module.
* @module model/BaselineExecutionSpec
* @version 1.0.0
*/
export default class BaselineExecutionSpec {
    /**
    * Constructs a new <code>BaselineExecutionSpec</code>.
    * @alias module:model/BaselineExecutionSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>BaselineExecutionSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/BaselineExecutionSpec} obj Optional instance to populate.
    * @return {module:model/BaselineExecutionSpec} The populated <code>BaselineExecutionSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaselineExecutionSpec();

            
            
            

            if (data.hasOwnProperty('pointOfPresence')) {
                obj['pointOfPresence'] = ApiClient.convertToType(data['pointOfPresence'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} pointOfPresence
    */
    pointOfPresence = undefined;








}

