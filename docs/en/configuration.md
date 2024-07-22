# Configuration

There are two configuration methods, `yml` and `Bean`, depending on which one you prefer. If it requires higher
security, it is recommended to use the `Bean` method to dynamically set the key, rather than writing it in `yml`.

## yml mode

> The following is the complete configuration of `yml` , some of which are optional, as explained in the comments.

```yml
secure-api:
  # Enable the SecureApi function, if false, the rest of the configuration items will not take effect
  enabled: true
  # Whether the generated key and ciphertext comply with the URL specification, enable by default, if enabled, when cooperating with the front end, the front end has to handle the url safe conversion of the ciphertext by itself. In the "Js Demo", there are code examples in the article
  url-safe: true
  # Turn on encryption and decryption log printing, and information such as interface name, encryption mode, algorithm, plaintext and ciphertext will be printed
  show-log: true
  # Encryption mode, common and session_key optional, session_key is session key mode, used for each request to use a different key, requires front-end cooperation
  mode: common
  # encryption algorithm
  cipher-algorithm: rsa_ecb_sha256
  # session_key mode configuration item, the session key type negotiated with the front end, this configuration does not take effect in common mode
  session-key-cipher-algorithm: aes_ecb_pkcs5
  # Base64 format, Symmetric algorithm is used to encrypt and decrypt the key. When the cipher-algorithm selects the symmetric encryption algorithm, it can also be empty, and the component will randomly generate one
  key: 5syQuHi5SMNekrADx5LEbFjEr0C0a9GigIVgDr3oT_c=
  # Base64 format, The offset of the symmetric algorithm used for encryption and decryption. When the cipher-algorithm selects the symmetric encryption algorithm, it can also be empty, and the component will randomly generate one
  iv: dUwxaVVQZE5md1hpZ0o1Yw==
  # Base64 format, The asymmetric algorithm is used to encrypt the public key. When the cipher-algorithm selects the RSA asymmetric encryption algorithm, it can also be empty. The component will randomly generate a pair
  public-key:
  # Base64 format, The asymmetric algorithm is used to encrypt the private key. When the cipher-algorithm selects the RSA asymmetric encryption algorithm, it can also be empty. The component will randomly generate a pair
  private-key:
  # The interface path matching that needs to be encrypted follows the regular rules of the spring boot interceptor. If left blank or not configured, it means that url matching is not used, and only the annotated interface is decrypted
  encrypt-url:
    # If this item is configured, the return value will be encrypted with or without annotations on the interface
    include-urls: /**
    # Annotations take precedence over this even if exclusions are configured
    exclude-urls:
  # The interface path matching that needs to be decrypted follows the regular rules of the spring boot interceptor. Leaving blank or not configuring means that url matching is not used, and only the interfaces, parameters, and fields of the annotation are decrypted
  decrypt-url:
    # If this item is configured, the interface, parameters, and fields will be decrypted with or without annotations
    include-urls: /**
    # Annotations take precedence over this even if exclusions are configured
    exclude-urls:
```

## Bean mode

> Note that once the `Bean` method is used to configure, the configuration items in `yml` will be invalid.

```java
import icu.xuyijie.secureapi.cipher.CipherAlgorithmEnum;
import icu.xuyijie.secureapi.cipher.CipherUtils;
import icu.xuyijie.secureapi.cipher.RsaKeyPair;
import icu.xuyijie.secureapi.model.SecureApiProperties;
import icu.xuyijie.secureapi.model.SecureApiPropertiesConfig;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.Arrays;

@SpringBootConfiguration
public class SecureApiConfig {
    /**
     * The bean configured here will cause the data of the yml configuration to be invalid
     * @return SecureApiPropertiesConfig
     */
    @Bean
    public SecureApiPropertiesConfig secureApiPropertiesConfig() {
        SecureApiPropertiesConfig secureApiPropertiesConfig = new SecureApiPropertiesConfig();
        secureApiPropertiesConfig.setEnabled(true);
        // The generated key and ciphertext are in line with the url specification, enable by default, if enable, when cooperating with the front end, the front end has to handle the url safe conversion of the ciphertext by itself. There are code examples in the "JS Demo" article
        secureApiPropertiesConfig.setUrlSafe(true);
        secureApiPropertiesConfig.setShowLog(true);
        secureApiPropertiesConfig.setMode(SecureApiProperties.Mode.COMMON);
        secureApiPropertiesConfig.setCipherAlgorithmEnum(CipherAlgorithmEnum.RSA_ECB_SHA256);
        
        // The key can not be set, the component will automatically generate one and print it on the console. If you need to generate it manually, you only need to use the CipherUtils provided by the component
        CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.RSA_ECB_SHA256);
        // Because we chose non-symmetric encryption RSA, a key pair is generated, and getRandomRsaKeyPair ("1") can be passed the seed parameter, which can be used to control the same key generated each time during testing
        RsaKeyPair randomRsaKeyPair = cipherUtils.getRandomRsaKeyPair();
        // Set the generated key pair to secureApiPropertiesConfig
        secureApiPropertiesConfig.setPublicKey(randomRsaKeyPair.getPublicKey());
        secureApiPropertiesConfig.setPrivateKey(randomRsaKeyPair.getPrivateKey());
        
        // You don't need to use the URL matching function to delete the following two lines, or pass in an empty array
        // secureApiPropertiesConfig.setEncryptUrl(new SecureApiProperties.UrlPattern(Arrays.asList("/**"), new ArrayList<>()));
        // secureApiPropertiesConfig.setDecryptUrl(new SecureApiProperties.UrlPattern(Arrays.asList("/**"), Arrays.asList("/secureApiTest/testForm")));
        return secureApiPropertiesConfig;
    }
}
```
