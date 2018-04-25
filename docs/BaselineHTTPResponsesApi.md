# MegatonApi.BaselineHTTPResponsesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBaselineHttpResponseBody**](BaselineHTTPResponsesApi.md#getBaselineHttpResponseBody) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions/{executionId}/http-responses/{responseId}/body | Get baseline response body
[**getBaselineHttpResponseHeaders**](BaselineHTTPResponsesApi.md#getBaselineHttpResponseHeaders) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions/{executionId}/http-responses/{responseId}/headers | Get baseline response headers
[**getBaselineHttpResponses**](BaselineHTTPResponsesApi.md#getBaselineHttpResponses) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions/{executionId}/http-responses | Get baseline responses


<a name="getBaselineHttpResponseBody"></a>
# **getBaselineHttpResponseBody**
> getBaselineHttpResponseBody(useCaseId, executionId, responseId)

Get baseline response body

Retrieve body for a specified HTTP response and baseline exeuction

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.BaselineHTTPResponsesApi();

let useCaseId = 56; // Number | 

let executionId = 56; // Number | 

let responseId = 56; // Number | 

apiInstance.getBaselineHttpResponseBody(useCaseId, executionId, responseId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **executionId** | **Number**|  | 
 **responseId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getBaselineHttpResponseHeaders"></a>
# **getBaselineHttpResponseHeaders**
> [HTTPMessageHeader] getBaselineHttpResponseHeaders(useCaseId, executionId, responseId)

Get baseline response headers

Retrieve headers for a specified HTTP response and baseline exeuction

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.BaselineHTTPResponsesApi();

let useCaseId = 56; // Number | 

let executionId = 56; // Number | 

let responseId = 56; // Number | 

apiInstance.getBaselineHttpResponseHeaders(useCaseId, executionId, responseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **executionId** | **Number**|  | 
 **responseId** | **Number**|  | 

### Return type

[**[HTTPMessageHeader]**](HTTPMessageHeader.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getBaselineHttpResponses"></a>
# **getBaselineHttpResponses**
> [HTTPResponse] getBaselineHttpResponses(useCaseId, executionId)

Get baseline responses

Retrieve HTTP responses for a specified baseline exeuction

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.BaselineHTTPResponsesApi();

let useCaseId = 56; // Number | 

let executionId = 56; // Number | 

apiInstance.getBaselineHttpResponses(useCaseId, executionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **executionId** | **Number**|  | 

### Return type

[**[HTTPResponse]**](HTTPResponse.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

