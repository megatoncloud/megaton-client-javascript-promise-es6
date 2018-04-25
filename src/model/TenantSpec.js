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
* The TenantSpec model module.
* @module model/TenantSpec
* @version 1.0.0
*/
export default class TenantSpec {
    /**
    * Constructs a new <code>TenantSpec</code>.
    * @alias module:model/TenantSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TenantSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TenantSpec} obj Optional instance to populate.
    * @return {module:model/TenantSpec} The populated <code>TenantSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TenantSpec();

            
            
            

            if (data.hasOwnProperty('nickname')) {
                obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} nickname
    */
    nickname = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} password
    */
    password = undefined;








}


