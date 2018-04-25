# MegatonApi.BaselineExecutionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeBaseline**](BaselineExecutionsApi.md#executeBaseline) | **POST** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions | Execute baseline
[**getBaselineExecutions**](BaselineExecutionsApi.md#getBaselineExecutions) | **GET** /v1/tenants/me/use-cases/{useCaseId}/baseline-executions | Get baseline executions


<a name="executeBaseline"></a>
# **executeBaseline**
> BaselineExecution executeBaseline(useCaseId, body)

Execute baseline

Executes a baseline for a specified use-case

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.BaselineExecutionsApi();

let useCaseId = 56; // Number | 

let body = new MegatonApi.BaselineExecutionSpec(); // BaselineExecutionSpec | 

apiInstance.executeBaseline(useCaseId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 
 **body** | [**BaselineExecutionSpec**](BaselineExecutionSpec.md)|  | 

### Return type

[**BaselineExecution**](BaselineExecution.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBaselineExecutions"></a>
# **getBaselineExecutions**
> [BaselineExecution] getBaselineExecutions(useCaseId)

Get baseline executions

Retrieve all executed baselines for a specified use-case

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.BaselineExecutionsApi();

let useCaseId = 56; // Number | 

apiInstance.getBaselineExecutions(useCaseId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 

### Return type

[**[BaselineExecution]**](BaselineExecution.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

