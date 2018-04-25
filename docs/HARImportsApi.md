# MegatonApi.HARImportsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importHar**](HARImportsApi.md#importHar) | **POST** /v1/tenants/me/use-cases/{useCaseId}/har-imports | Import HAR


<a name="importHar"></a>
# **importHar**
> [HTTPScriptEntry] importHar(useCaseId, body)

Import HAR

Sets the HTTP script for a use-case using an HTTP Archive

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.HARImportsApi();

let useCaseId = 56; // Number | 

let body = new MegatonApi.HAR(); // HAR | 

apiInstance.importHar(useCaseId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **body** | [**HAR**](HAR.md)|  | 

### Return type

[**[HTTPScriptEntry]**](HTTPScriptEntry.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

