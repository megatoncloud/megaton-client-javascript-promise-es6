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
* The LoadDistributionEntrySpec model module.
* @module model/LoadDistributionEntrySpec
* @version 1.0.0
*/
export default class LoadDistributionEntrySpec {
    /**
    * Constructs a new <code>LoadDistributionEntrySpec</code>.
    * @alias module:model/LoadDistributionEntrySpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>LoadDistributionEntrySpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LoadDistributionEntrySpec} obj Optional instance to populate.
    * @return {module:model/LoadDistributionEntrySpec} The populated <code>LoadDistributionEntrySpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoadDistributionEntrySpec();

            
            
            

            if (data.hasOwnProperty('useCaseId')) {
                obj['useCaseId'] = ApiClient.convertToType(data['useCaseId'], 'Number');
            }
            if (data.hasOwnProperty('pointOfPresence')) {
                obj['pointOfPresence'] = ApiClient.convertToType(data['pointOfPresence'], 'String');
            }
            if (data.hasOwnProperty('vuCount')) {
                obj['vuCount'] = ApiClient.convertToType(data['vuCount'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} useCaseId
    */
    useCaseId = undefined;
    /**
    * @member {String} pointOfPresence
    */
    pointOfPresence = undefined;
    /**
    * @member {Number} vuCount
    */
    vuCount = undefined;








}

