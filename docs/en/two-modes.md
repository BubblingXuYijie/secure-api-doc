# Two Modes

## Introduce

In the encryption modes introduced in the previous chapter, there are `common` and `session-key`. Let's start with the conclusion that `common` is more convenient and `session-key` is more secure.

## common mode

`commom` mode, both the front and back ends need to save the same key or key pair for deciphering.(Interface encryption is not limited to the front and back ends, but can also be used to communicate between two servers. Here is an example of the front and back ends.)

> Example:
>
> - SecureApi sets the encryption algorithm to `AES`, generates a key, you can wait for the component to automatically generate or use `CipherUtils` to generate, or you can use the online website to generate, and then save it in the `key` field of the `SecureApiPropertiesConfig`, the front end also saves this key, the front end sends the data encrypted with the key to the back end, and the backend uses the key to decipher after receiving it.
>
> Disadvantage:
>
> - There is a risk of leakage on the front end of the key (the client end is hacked and debugged by F12)
> - The key cannot be dynamically generated, and the front and back ends need to discuss their respective hardcode/hard coding (plaintext keys are more dangerous to transmit in the network than to store in the front end, and services that require interface encryption will never allow you to transmit plaintext keys in the network)
>
> Advantage:
>
> - Simple implementation, no need to worry about key agreement
> - High performance, a copy of the key is kept on the front and back ends, no additional network communication is required to negotiate the key

## session-key mode

The `session-key` mode requires both the `RSA` and `symmetric encryption algorithm` to cooperate with the implementation. The front end generates a new `symmetric encryption key` for each request (the key can also be updated every once in a while), and then uses this key to encrypt the data, and then uses the `RSA` public key to encrypt the key. The encrypted data and key are transmitted to the backend. The backend uses the `RSA` private key decipher to get the `session key`. Using the `session key` decipher data, the return value is relatively simple. Just use the `session key` to encrypt the return value to the front end. The front end uses `session key` decipher on it.

> Example：
>
> - Backend Use SecureApi to set the encryption mode to `session-key`, specify the encryption algorithm to `RSA`, specify the session key encryption algorithm to `AES`, generate an `RSA` key pair, saved in the `publicKey` and `privateKey` fields of `SecureApiPropertiesConfig`
> - The first communication: the front end requests the `RSA` public key of the back end
> - Second communication: The front end uses the backend `RSA` public key to encrypt any data, and transmits the encrypted data to the backend. The backend uses its own `RSA` private key decipher. If the decryption is successful, tell the front end that the verification is successful. If the decipher fails, in addition to the code reason, it means that the first communication public key was tampered with during transmission, and the `RSA` key pair needs to be regenerated for re-verification
> - After the verification is successful, the subsequent interface encryption method is: the front end generates a `session key` for the request, encrypts the data with the `session key`, and then uses the backend `RSA` public key to encrypt the `session key`, and transmits the encrypted data and key to the backend. The backend can write an interception device and save the `session key` to the `key` field of the SecureApiPropertiesConfig (no need to decipher by itself). SecureApi will automatically use the `RSA` private key decipher to get the `session key`. Subsequent SecureApi will also automatically use the `session key` decipher and encryption Data
> - You can generate a different session key for each request, and you can update the key regularly. The RSA key pair on the backend can also be updated periodically to enhance security
>
> Disadvantage：
>
> - As you can see, the process is more complicated
> - Generating a new key per request and decrypting the key with the `RSA` private key in the backend will obviously result in more performance loss
>
> Advantage：
>
> - Safe, safe, and the fuck safe

With the help of SecureApi implementation of the `session-key` mode, only the following two simple files are required:

```java title="SecureApi config file"
@Bean
public SecureApiPropertiesConfig secureApiPropertiesConfig() {
    SecureApiPropertiesConfig secureApiPropertiesConfig = new SecureApiPropertiesConfig();
    secureApiPropertiesConfig.setEnabled(true);
    // Set mode as session-key
    secureApiPropertiesConfig.setMode(SecureApiProperties.Mode.SESSION_KEY);
    // Set session key cipher algorithm
    secureApiPropertiesConfig.setSessionKeyCipherAlgorithm(CipherAlgorithmEnum.AES_ECB_PKCS5);
    // Session-key mode The encryption algorithm must be set to RSA
    secureApiPropertiesConfig.setCipherAlgorithmEnum(CipherAlgorithmEnum.RSA_ECB_SHA256);

    // The key can not be set, the component will automatically generate one and print it on the console. If you need to generate it manually, you only need to use the CipherUtils provided by the component
    CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.RSA_ECB_SHA256);
    // The seed parameter can be passed in getRandomRsaKeyPair("1"), which can be used to control the same key generated each time during testing
    RsaKeyPair randomRsaKeyPair = cipherUtils.getRandomRsaKeyPair();
    // Set the generated key pair to secureApiPropertiesConfig
    secureApiPropertiesConfig.setPublicKey(randomRsaKeyPair.getPublicKey());
    secureApiPropertiesConfig.setPrivateKey(randomRsaKeyPair.getPrivateKey());

    return secureApiPropertiesConfig;
}
```

In the interception, set the session key of each request to the `key` value of the `secureApiPropertiesConfig`, and all subsequent operations are automatically completed by SecureApi.

```java title="SessionKey interceptor"
@Component
public class SecureKeyInterceptor implements HandlerInterceptor {
    private static final Logger log = LoggerFactory.getLogger(SecureKeyInterceptor.class);
    
    @Autowired
    private SecureApiPropertiesConfig secureApiPropertiesConfig;

    @Override
    public boolean preHandle(HttpServletRequest request, @NonNull HttpServletResponse response, @NonNull Object handler) {
        // Here you only need to modify the key value of the secureApiPropertiesConfig in the interception, and the subsequent operations are all done automatically by SecureApi
        String sessionKey = request.getHeader("sessionKey");
        log.info("session key transmitted from the front: {}", sessionKey);
        secureApiPropertiesConfig.setKey(sessionKey);
        return true;
    }
}
```
