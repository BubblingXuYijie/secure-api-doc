# DH密钥协商

## 介绍

客户端和服务端各自生成自己的 `RSA` 密钥对对并交换公钥，采用 `DiffieHellman`
算法使用自己的私钥和对方的公钥，客户端和服务端会生成相同的 `AES` 对称加密密钥，
后续，客户端和服务器验证这个协商密钥，验证成功就使用这个 `AES` 密钥来加解密，因为这个密钥从未在网络上暴露过，因此是安全的。

## 协商流程

使用DH密钥协商需要后端使用 SecureApi 设置加密模式为 `common`，指定加密算法为 `AES`，不能是其他算法，因为 DH
协商出来的密钥是 `AES` 的密钥

> - 后端使用 `CipherUtils` 或者在线网站生成 `RSA` 密钥对保存在服务器，等待前端协商信号
> - 第一次通信：前端生成 `RSA`
    密钥对，然后向后端发送协商密钥的请求，并把公钥发送给前端（公钥在网络传输无妨，后面会校验），后端接收到请求后，使用自己的私钥和前端传来的公钥生成一个`协商密钥`
    保存在 `SecureApiPropertiesConfig` 的 `key` 
    字段中，然后把自己的公钥返回给前端，前端拿到后端公钥后，同样使用此公钥和自己的私钥生成`协商密钥`
> - 第二次通信：前端使用`协商密钥`加密一个任意数据，发送给后端，后端看看是否能使用`协商密钥`
    成功解密，如果成功，则协商成功，后续前后端使用`协商密钥`进行加解密，如果解密失败，除了代码原因，就可能是`公钥`
    传输过程中被篡改，此时要重新协商
> - 协商成功后，前后端就各自拥有了一个相同的对称密钥，后续使用这个密钥加解密就可以了，这个密钥从未在网络上暴露过，因此是安全的。你也可以定期重新协商来增强安全性

## 优点

- 安全，虽然相较于 `session-key` 模式还是差了点，但是协商流程要比 `session-key` 更简单
- 相较于 `session-key` 模式，每次请求少了一次 `RSA` 私钥解密会话密钥的计算，性能更高（不要小看私钥解密的性能消耗）

## DiffieHellmanUtils

SecureApi 提供了 DH 密钥协商的工具类：`DiffieHellmanUtils`，下面介绍工具类的方法。

```java
public static void main(String[] args) {
    // 后端生成DH密钥对，并把公钥发送给前端
    KeyPair serverKeyPair = DiffieHellmanUtils.getDhKeyPairs();
    
    // 前端生成密钥对，并把公钥发送给后端
    KeyPair clientKeyPair = DiffieHellmanUtils.getDhKeyPairs();
    
    // 后端根据自己的私钥和前端公钥生成协商密钥
    String serverSharedSecretString = DiffieHellmanUtils.createSharedSecret(serverKeyPair.getPrivate(), clientKeyPair.getPublic());
    // 前端根据自己的私钥和后端公钥生成协商密钥
    String clientSharedSecretString = DiffieHellmanUtils.createSharedSecret(clientKeyPair.getPrivate(), serverKeyPair.getPublic());
    
    System.out.println("服务端共享密钥：" + serverSharedSecretString);
    System.out.println("客户端共享密钥：" + clientSharedSecretString);
    System.out.println("是否相同：" + clientSharedSecretString.equals(serverSharedSecretString));
    
    // 使用共享密钥加密
    String content = "Hello, 你 好/、\\！";
    CipherUtils cipherUtils = new CipherUtils(CipherAlgorithmEnum.AES_ECB_PKCS5);
    String encrypt = cipherUtils.encrypt(content, serverSharedSecretString);
    System.out.println("加密后：" + encrypt);
    // 使用共享密钥解密
    System.out.println("解密后：" + cipherUtils.decrypt(encrypt, serverSharedSecretString));
}
```

![运行结果](assets/img/DH密钥协商工具类示例输出.png)

## 说明

DH密钥协商本质是还是前后端各自保存一份密钥，只是增强了灵活性，SecureApi 还是使用 `common` 模式，配置 SecureApi 的时候把协商后的密钥设置到  `SecureApiPropertiesConfig` 的 `key` 字段就可以了。
