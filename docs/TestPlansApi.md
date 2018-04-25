# MegatonApi.TestPlansApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTestPlan**](TestPlansApi.md#createTestPlan) | **POST** /v1/tenants/me/test-plans | Create test plan
[**deleteTestPlan**](TestPlansApi.md#deleteTestPlan) | **DELETE** /v1/tenants/me/test-plans/{testPlanId} | Delete test plan
[**getTestPlan**](TestPlansApi.md#getTestPlan) | **GET** /v1/tenants/me/test-plans/{testPlanId} | Get test plan
[**getTestPlans**](TestPlansApi.md#getTestPlans) | **GET** /v1/tenants/me/test-plans | Get test plans
[**updateTestPlan**](TestPlansApi.md#updateTestPlan) | **PATCH** /v1/tenants/me/test-plans/{testPlanId} | Update test plan


<a name="createTestPlan"></a>
# **createTestPlan**
> TestPlan createTestPlan(body)

Create test plan

Executes a new test plan for a specified tenant

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.TestPlansApi();

let body = new MegatonApi.TestPlanSpec(); // TestPlanSpec | 

apiInstance.createTestPlan(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TestPlanSpec**](TestPlanSpec.md)|  | 

### Return type

[**TestPlan**](TestPlan.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTestPlan"></a>
# **deleteTestPlan**
> deleteTestPlan(testPlanId)

Delete test plan

Deletes a specified test plan

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.TestPlansApi();

let testPlanId = 56; // Number | 

apiInstance.deleteTestPlan(testPlanId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTestPlan"></a>
# **getTestPlan**
> TestPlan getTestPlan(testPlanId)

Get test plan

Retrieve a specified test plan

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.TestPlansApi();

let testPlanId = 56; // Number | 

apiInstance.getTestPlan(testPlanId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 

### Return type

[**TestPlan**](TestPlan.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTestPlans"></a>
# **getTestPlans**
> [TestPlan] getTestPlans()

Get test plans

Retrieve all test plans for a specified tenant

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.TestPlansApi();
apiInstance.getTestPlans().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TestPlan]**](TestPlan.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTestPlan"></a>
# **updateTestPlan**
> TestPlan updateTestPlan(testPlanId, body)

Update test plan

Updates an existing new test plan for a specified tenant

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.TestPlansApi();

let testPlanId = 56; // Number | 

let body = [new MegatonApi.TestPlanPatchOperation()]; // [TestPlanPatchOperation] | 

apiInstance.updateTestPlan(testPlanId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 
 **body** | [**[TestPlanPatchOperation]**](TestPlanPatchOperation.md)|  | 

### Return type

[**TestPlan**](TestPlan.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

