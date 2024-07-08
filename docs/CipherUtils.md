# CipherUtils

## 介绍

`CipherUtils` 是 SecureApi 提供的加解密工具类，你可以在代码中使用它，来达到更个性化的加解密方式

## 开始

初始化CipherUtils，参数你想使用的加密算法

> 你可以采用单例模式等初始化一次全局使用

> 注意，如果你将它注册为Bean请不要取名 cipherUtils ，SecureApi 内部已经注册了一个名为 cipherUtils 的 Bean ，会导致冲突，当然你也可以直接注入 SecureApi 提供的 cipherUtils ，但不要在 SecureApi 的配置文件中注入，此时 cipherUtils 还未初始化完成，注入的 `cipherUtils` 加密算法和 SecureApi 配置的加密算法相同

```java
CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.AES_CBC_PKCS5);
// CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.RSA_ECB_SHA256);
```

## 对称算法

### 生成密钥

> 上面我们选择的是 `AES_CBC_PKCS5` 对称算法，cipherUtils 会为我们生成对应算法的key，你可以指定 `seed` 来保证每次运行都生成相同的 key

```java
// 生成 key
String key = cipherUtils.getRandomSecreteKey();
// 生成偏移量（CBC模式需要，ECB模式不需要）
String iv = cipherUtils.getRandomIv();
```

### 加密和解密

```java
String content = "hello,您好！《》\\/";
String encryptString = cipherUtils.encrypt(content, key, iv);
String decryptString = cipherUtils.decrypt(encryptString, key, iv);
```

## 非对称算法

### 生成密钥

> 如果你选择的是 `RSA_ECB_SHA256` 非对称加密，那么我们需要生成密钥对

```java
// 生成密钥对，RSA非对称加密只有ECB模式，所以不需要偏移量
RsaKeyPair rsaKeyPair = cipherUtils.getRandomRsaKeyPair();
// 用于加密
String publicKey = rsaKeyPair.getPublicKey();
// 用于解密
String privateKey = rsaKeyPair.getPrivateKey();
```

### 加密和解密

```java
String content = "hello,您好！《》\\/";
String encryptString = cipherUtils.encrypt(content, publicKey);
String decryptString = cipherUtils.decrypt(encryptString, privateKey);
```
