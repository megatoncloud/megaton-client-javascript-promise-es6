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
* The UseCaseSpec model module.
* @module model/UseCaseSpec
* @version 1.0.0
*/
export default class UseCaseSpec {
    /**
    * Constructs a new <code>UseCaseSpec</code>.
    * @alias module:model/UseCaseSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>UseCaseSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UseCaseSpec} obj Optional instance to populate.
    * @return {module:model/UseCaseSpec} The populated <code>UseCaseSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UseCaseSpec();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;








}

