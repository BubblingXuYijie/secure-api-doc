# Microservice Invocation

- Microservices generally use `Dubbo` or `OpenFeign` for remote calls, as shown below, right? You can directly call the Interface method to call other microservices modules.

![Microservice invocation interface](../assets/img/微服务调用interface.png)

- At present, SecureApi cannot automatically encrypt the parameters on the interface method. The caller needs to manually encrypt the parameters and send a request, that is, @Autowired injects the `CipherUtils` manually encrypted str provided by SecureApi, and then calls the "feign" method to pass the encrypted "str" in.

- Then the caller also introduces SecureApi. Each module of microservices sets the *same* encryption mode and key. There is no need for manual operation on the caller's side. Parameter decipher and return value encryption will be automated.

::: warning
That is to say, the caller currently needs to manually encrypt parameters, and subsequent versions will add support for automatic encryption parameters for microservices calls. Coming soon...
:::
