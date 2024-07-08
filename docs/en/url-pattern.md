# Url Pattern

In addition to using annotations, URLs can also be configured to match interfaces that require encryption and decryption

The URL path follows the regular rules of the spring boot interceptor. If left blank or not configured, it means that URL matching is not used, and only the interfaces, parameters, and fields of the annotations are decrypted.

> Please see the specific configuration code [Configuration]

::: warning
*Attention*：

1.The priority of the annotation is higher than that of the URL match. Even if the interface is not matched, the interface, parameters, and fields specified by the annotation will be encrypted and decrypted.

2.For the interface to which the decrypted URL matches, all parameters and fields of the interface will be decrypted, unless the parameter annotation of spring boot such as `@RequestParam` is used on the interface parameter.
:::

[Configuration]: configuration
