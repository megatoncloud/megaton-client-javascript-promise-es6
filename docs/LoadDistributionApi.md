# MegatonApi.LoadDistributionApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLoadDistribution**](LoadDistributionApi.md#getLoadDistribution) | **GET** /v1/tenants/me/test-plans/{testPlanId}/load-distribution | Get load distribution
[**setLoadDistribution**](LoadDistributionApi.md#setLoadDistribution) | **PUT** /v1/tenants/me/test-plans/{testPlanId}/load-distribution | Set load distribution


<a name="getLoadDistribution"></a>
# **getLoadDistribution**
> [LoadDistributionEntry] getLoadDistribution(testPlanId)

Get load distribution

Retrieve load distribution for a specified test plan

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.LoadDistributionApi();

let testPlanId = 56; // Number | 

apiInstance.getLoadDistribution(testPlanId).then((data) => {
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

[**[LoadDistributionEntry]**](LoadDistributionEntry.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setLoadDistribution"></a>
# **setLoadDistribution**
> [LoadDistributionEntry] setLoadDistribution(testPlanId, body)

Set load distribution

Set load distribution for a specified test plan

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.LoadDistributionApi();

let testPlanId = 56; // Number | 

let body = [new MegatonApi.LoadDistributionEntrySpec()]; // [LoadDistributionEntrySpec] | 

apiInstance.setLoadDistribution(testPlanId, body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testPlanId** | **Number**|  | 
 **body** | [**[LoadDistributionEntrySpec]**](LoadDistributionEntrySpec.md)|  | 

### Return type

[**[LoadDistributionEntry]**](LoadDistributionEntry.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

