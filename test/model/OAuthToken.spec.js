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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MegatonApi);
  }
}(this, function(expect, MegatonApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MegatonApi.OAuthToken();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OAuthToken', function() {
    it('should create an instance of OAuthToken', function() {
      // uncomment below and update the code to test OAuthToken
      //var instane = new MegatonApi.OAuthToken();
      //expect(instance).to.be.a(MegatonApi.OAuthToken);
    });

    it('should have the property accessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property accessToken
      //var instane = new MegatonApi.OAuthToken();
      //expect(instance).to.be();
    });

    it('should have the property expiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property expiresIn
      //var instane = new MegatonApi.OAuthToken();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new MegatonApi.OAuthToken();
      //expect(instance).to.be();
    });

    it('should have the property tenantId (base name: "tenant_id")', function() {
      // uncomment below and update the code to test the property tenantId
      //var instane = new MegatonApi.OAuthToken();
      //expect(instance).to.be();
    });

  });

}));
