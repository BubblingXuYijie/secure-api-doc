# Annotation

The component has a total of 3 annotations: `@EncryptApi` `@DecryptApi` `@DecryptParam`，If URL matching is configured,
then the matching interface can be encrypted and decrypted without using the following annotations.

::: warning
*Please be very careful！！！*, Do not use @RequestParam for parameters that need to be decrypted, which will cause the
decryption function to fail (even if the URL match is configured). @DecryptParam provides the same capabilities as
@RequestParam, just use @DecryptParam.
:::

The "interfaces" mentioned below are all methods marked by @RestController, not interface methods. Please make it clear
to avoid ambiguity.

## `@EncryptApi`

|       Annotations function        |                       Use position                        |  Field   |                                                                 Notes                                                                  |
|:---------------------------------:|:---------------------------------------------------------:|:--------:|:--------------------------------------------------------------------------------------------------------------------------------------:|
| Encryption interface return value | The interface or the class where the interface is located | Not have | The priority is higher than the url match. Even if the interface does not match, adding this annotation will encrypt the return value. |

## `@DecryptApi`

|                                      Annotations function                                      |                       Use position                        |  Field   |                                                                Notes                                                                 |
|:----------------------------------------------------------------------------------------------:|:---------------------------------------------------------:|:--------:|:------------------------------------------------------------------------------------------------------------------------------------:|
| Decrypt the interface json parameter value (that is, the parameter marked with `@RequestBody`) | The interface or the class where the interface is located | Not have | The priority is higher than the url match. Even if the interface is not matched, adding this annotation will decrypt the parameters. |

## `@DecryptParam`

::: warning
*Remind again!!! Please be very careful!!!*, Do not use @RequestParam for parameters that need to be decrypted, which
will cause the decryption function to fail (even if the URL match is configured). @DecryptParam provides the same
capabilities as @RequestParam, just use @DecryptParam.
:::

::: warning
MultipartFile decryption is not supported for the time being, and will be developed in the future.
:::

|                  Annotations function                  |                                  Use position                                  |          Field          |                                                                                                                                                                                                Notes                                                                                                                                                                                                |
|:------------------------------------------------------:|:------------------------------------------------------------------------------:|:-----------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Decrypt interface param and form-data parameter values | Interface non-entity class parameter or interface entity class parameter field | Same as `@RequestParam` | The priority is higher than the URL match, even if the interface does not match, adding this annotation will decrypt the parameters; in addition, this annotation cannot be used with `@RequestParam` at the same time, which will cause the decryption function to fail. This annotation has replaced the `@RequestParam` function, and the internal field function is the same as `@RequestParam` |

## `@DecryptIgnore`

| Annotations function |          Use position           | Field | Notes |
|:--------------------:|:-------------------------------:|:-----:|:-----:|
|  Ignore decryption   | Class, method, parameter, field |  No   |  No   |

## `@EncryptIgnore`

| Annotations function |          Use position           | Field | Notes |
|:--------------------:|:-------------------------------:|:-----:|:-----:|
|  Ignore encryption   | Class, method, parameter, field |  No   |  No   |
