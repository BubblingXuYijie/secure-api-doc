# DiffieHellman密钥协商

## 介绍

> 客户端和服务端各自生成自己的 `RSA` 密钥对对并交换公钥，采用 `DiffieHellman` 算法使用自己的私钥和对方的公钥，客户端和服务端会生成相同的 `AES` 对称加密密钥，
> 后续，客户端和服务器就使用这个 `AES` 密钥来加解密，因为这个密钥从未在网络上暴露过，因此是安全的。

## 协商流程

> 

```java
public static void main(String[] args) {
    // 服务端生成DH密钥对，并把公钥发送给客户端
    KeyPair serverKeyPair = getDhKeyPairs();
    // 客户端生成密钥对，并把公钥发送给服务端，本来应该是根据服务端公钥携带的信息进行运算，但是信息中p和g是rfc3526定死的，大家都用固定的p和g，算出来的共享密钥就是一样的，所以这里不需要获取服务端公钥参数也可以
    //DHParameterSpec dhParams = ((DHPublicKey) serverKeyPair.getPublic()).getParams()
    //keyPairGen.initialize(dhParams)
    KeyPair clientKeyPair = getDhKeyPairs();
    
    // 服务端使用自己的私钥创建并初始化Key协议对象
    String serverSharedSecretString = createSharedSecret(serverKeyPair.getPrivate(), clientKeyPair.getPublic());
    // 客户端根据自己的私钥和服务端公钥生成共享密钥
    String clientSharedSecretString = createSharedSecret(clientKeyPair.getPrivate(), serverKeyPair.getPublic());
    System.out.println("服务端共享密钥：" + serverSharedSecretString);
    System.out.println("客户端共享密钥：" + clientSharedSecretString);
    System.out.println("是否相同：" + clientSharedSecretString.equals(serverSharedSecretString));
    
    // 使用共享密钥加密
    String content = "Hello, 你 好/、\\！";
    CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.AES_ECB_PKCS5);
    String encrypt = cipherUtils.encrypt(content, serverSharedSecretString);
    System.out.println("加密后：" + encrypt);
    System.out.println("解密后：" + encrypt);
}
```
