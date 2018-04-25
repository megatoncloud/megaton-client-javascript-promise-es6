# MegatonApi.UseCasesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUseCase**](UseCasesApi.md#createUseCase) | **POST** /v1/tenants/me/use-cases | Create use-case
[**deleteUseCase**](UseCasesApi.md#deleteUseCase) | **DELETE** /v1/tenants/me/use-cases/{useCaseId} | Delete use-case
[**getUseCase**](UseCasesApi.md#getUseCase) | **GET** /v1/tenants/me/use-cases/{useCaseId} | Get use-case
[**getUseCases**](UseCasesApi.md#getUseCases) | **GET** /v1/tenants/me/use-cases | Get use-cases


<a name="createUseCase"></a>
# **createUseCase**
> UseCase createUseCase(body)

Create use-case

Executes a new use-case for a specified tenant

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.UseCasesApi();

let body = new MegatonApi.UseCaseSpec(); // UseCaseSpec | 

apiInstance.createUseCase(body).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UseCaseSpec**](UseCaseSpec.md)|  | 

### Return type

[**UseCase**](UseCase.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUseCase"></a>
# **deleteUseCase**
> deleteUseCase(useCaseId)

Delete use-case

Deletes a specified use-case

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.UseCasesApi();

let useCaseId = 56; // Number | 

apiInstance.deleteUseCase(useCaseId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **useCaseId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUseCase"></a>
# **getUseCase**
> UseCase getUseCase(useCaseId)

Get use-case

Retrieve a specified use-case

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.UseCasesApi();

let useCaseId = 56; // Number | 

apiInstance.getUseCase(useCaseId).then((data) => {
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

[**UseCase**](UseCase.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUseCases"></a>
# **getUseCases**
> [UseCase] getUseCases()

Get use-cases

Retrieve all use-cases for a specified tenant

### Example
```javascript
import MegatonApi from 'megaton_api';
let defaultClient = MegatonApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: password
let password = defaultClient.authentications['password'];
password.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MegatonApi.UseCasesApi();
apiInstance.getUseCases().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[UseCase]**](UseCase.md)

### Authorization

[password](../README.md#password)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

