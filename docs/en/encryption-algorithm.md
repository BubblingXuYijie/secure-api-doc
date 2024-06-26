# Encryption Algorithm

> SecureApi provides 15 encryption algorithms, which are stored in the `CipherAlgorithmEnum` enum class

- `AES_CBC_NO_PADDING`
- `AES_CBC_PKCS5`
- `AES_ECB_NO_PADDING`
- `AES_ECB_PKCS5`
- `DES_CBC_NO_PADDING`
- `DES_CBC_PKCS5`
- `DES_ECB_NO_PADDING`
- `DES_ECB_PKCS5`
- `DES_EDE_CBC_NO_PADDING`
- `DES_EDE_CBC_PKCS5`
- `DES_EDE_ECB_NO_PADDING`
- `DES_EDE_ECB_PKCS5`
- `RSA_ECB_PKCS1`
- `RSA_ECB_SHA1`
- `RSA_ECB_SHA256`

> Algorithms with the words `CBC` and deciphers need to use both key and iv, and `ECB` only needs key. Each algorithm requires a different array length of key and iv characters. It is recommended to use [CipherUtils] introduced in the next chapter to generate key and iv.

> Algorithms with the words `NO_PADDING` need to fill the plaintext character array with an integer multiple of the length of 16 by themselves. After deciphering, remove the filled characters by yourself to get the original character string. It is not recommended to use

> Except for the non-symmetric encryption at the beginning of `RSA`, the rest are symmetric encryption, security: `RSA` > `AES` > `DES_EDE` > `DES`

[CipherUtils]: CipherUtils
