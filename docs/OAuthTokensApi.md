# MegatonApi.OAuthTokensApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOAuthToken**](OAuthTokensApi.md#createOAuthToken) | **POST** /v1/oauth2/tokens | Create new token


<a name="createOAuthToken"></a>
# **createOAuthToken**
> OAuthToken createOAuthToken(grantType, username, password, scope)

Create new token

Create a new OAuth2 token with email and password authentication

### Example
```javascript
import MegatonApi from 'megaton_api';

let apiInstance = new MegatonApi.OAuthTokensApi();

let grantType = "grantType_example"; // String | 

let username = "username_example"; // String | 

let password = "password_example"; // String | 

let scope = "scope_example"; // String | 

apiInstance.createOAuthToken(grantType, username, password, scope).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**|  | 
 **username** | **String**|  | 
 **password** | **String**|  | 
 **scope** | **String**|  | 

### Return type

[**OAuthToken**](OAuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

