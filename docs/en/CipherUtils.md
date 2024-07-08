# CipherUtils

## Introduce

`CipherUtils` is an encryption and decryption tool class provided by SecureApi. You can use it in your code to achieve more personalized encryption and decryption methods.

## Start

Initialize CipherUtils with the encryption algorithm you want to use.

> You can use singleton mode to initialize a global use.

> Note that if you register it as a bean, please do not name it cipherUtils. SecureApi has registered a bean named cipherUtils internally, which will cause conflicts. Of course, you can also directly inject cipherUtils provided by SecureApi, but do not inject it in the SecureApi configuration file. At this time, cipherUtils has not been initialized, the injected cipherUtils encryption algorithm is the same as the encryption algorithm configured by SecureApi.

```java
CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.AES_CBC_PKCS5);
// CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.RSA_ECB_SHA256);
```

## Symmetric algorithm

### Generate key

> Above we chose the "AES_CBC_PKCS5" symmetric algorithm, cipherUtils will generate the key of the corresponding algorithm for us, you can specify "seed" to ensure that the same key is generated every time you run it.

```java
// Generate key
String key = cipherUtils.getRandomSecreteKey();
// Generate offsets (required for CBC model, not required for ECB mode)
String iv = cipherUtils.getRandomIv();
```

### Encrypt and decrypt

```java
String content = "hello,您好！《》\\/";
String encryptString = cipherUtils.encrypt(content, key, iv);
String decryptString = cipherUtils.decrypt(encryptString, key, iv);
```

## Asymmetric algorithm

### Generate key

> If you choose RSA_ECB_SHA256 asymmetric encryption, then we need to generate a key pair

```java
// Generate key pairs, RSA asymmetric encryption only has ECB mode, so no offsets are required
RsaKeyPair rsaKeyPair = cipherUtils.getRandomRsaKeyPair();
// For encrypt
String publicKey = rsaKeyPair.getPublicKey();
// For decrypt
String privateKey = rsaKeyPair.getPrivateKey();
```

### Encrypt and decrypt

```java
String content = "hello,您好！《》\\/";
String encryptString = cipherUtils.encrypt(content, publicKey);
String decryptString = cipherUtils.decrypt(encryptString, privateKey);
```
