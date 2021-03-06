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
* The NameValuePair model module.
* @module model/NameValuePair
* @version 1.0.0
*/
export default class NameValuePair {
    /**
    * Constructs a new <code>NameValuePair</code>.
    * @alias module:model/NameValuePair
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>NameValuePair</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/NameValuePair} obj Optional instance to populate.
    * @return {module:model/NameValuePair} The populated <code>NameValuePair</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NameValuePair();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} value
    */
    value = undefined;








}


