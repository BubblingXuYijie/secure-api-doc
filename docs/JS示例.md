# JS示例

很多同学不知道如何与前端js进行配合，现在提供一下示例，示例采用 `crypto-js` 工具来进行

## 安装 crypto-js

```bash
npm install crypto-js
```

使用 ts 的项目还需要安装 @types/crypto-js，不然导入时会报红色

```bash
npm install @types/crypto-js
```

## 使用

### 导入 crypto-js

```javascript
import CryptoJS from 'crypto-js'
```

### 生成 AES 随机密钥

```javascript
// 对于 AES-256 使用 32，我们的 SecureApi 组件就是使用的 AES-256
const key = CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Base64);
// AES 的 IV 通常是 16 字节
const iv = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Base64);
console.log(key, iv)
```

### 使用 AES 加密

```javascript
const content = 'hello,您好！《》\\/'
const encryptData = encrypt(content, key, iv)
console.log('加密后：' + encryptData)
const decryptData = decrypt(encryptData, key, iv)
console.log('解密后：' + encryptData)

/**
 * 解密数据
 * @param data 要解密的数据（base64）
 * @param AES_KEY 密钥（base64）
 * @param IV 偏移量（base64）
 * @return 解密结果（UTF8字符串）
 */
function decrypt(data: string, AES_KEY: string, IV: string) {
    let decrypt
    // base64 形式的 key 和 iv 需要转换成 CryptoJS.lib.WordArray
    const key = CryptoJS.enc.Base64.parse(AES_KEY);
    // 传入 iv 的话走 CBC 模式，否则走 ECB 模式
    if (IV) {
        const iv = CryptoJS.enc.Base64.parse(IV);
        decrypt = CryptoJS.AES.decrypt(data, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
    } else {
        decrypt = CryptoJS.AES.decrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
    }
    return decrypt.toString(CryptoJS.enc.Utf8);
}

/**
 * 加密数据
 * @param data 要加密的数据，必须是 String 类型，普通类型抓换为 String 使用 String(data)，对象使用 JSON.stringify(data)
 * @param AES_KEY 密钥（base64）
 * @param IV 偏移量（base64）
 * @return 加密结果（base64）
 */
function encrypt(data: string, AES_KEY: string, IV: string) {
    let encrypted
    const key = CryptoJS.enc.Base64.parse(AES_KEY);
    if (IV) {
        const iv = CryptoJS.enc.Base64.parse(IV);
        encrypted = CryptoJS.AES.encrypt(data, key, {
            iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
    } else {
        encrypted = CryptoJS.AES.encrypt(data, key, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        });
    }
    // 加密默认返回的数据格式就是 base64
    return encrypted.toString();
}
```

## 注意事项

::: warning
后端 `SecureApi` 默认配置是 url safe 形式，而 `CryptoJS` 只能生成和处理普通 base64，所以你在前端生成的 key 、密文等都需要转换成 url safe 形式再发往后端，后端传来的 url safe 形式的 base64 你也要先还原成普通 base64 再给 `CryptoJS` 解密，当然，如果你关闭了 `SecureApi` 的 url safe 配置就不需要这些处理了
:::

我会提供两个js方法示例来相互转换

```javascript
// 生成的随机key
const key = CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Base64);
console.log(key)
// 编码为url safe base64
const urlSafeBase64 = urlSafeBase64Encode(key)
console.log(urlSafeBase64)
// 还原为普通base64
const originBase64 = urlSafeBase64Decode(urlSafeBase64)
console.log(originBase64)

/**
 * 把 url safe 的 base64 还原为普通 base64
 * @param url safe 的 base64
 * @return 普通 base64
 */
function urlSafeBase64Decode(base64Str) {
  if (!base64Str) return '';
  let safeStr = base64Str.replace(/-/g, '+').replace(/_/g, '/');
  let num = safeStr.length % 4;
  return safeStr + '===='.substring(0, num);
}

/**
 * 把普通 base64 编码为 url safe 的 base64
 * @param 普通 base64
 * @return url safe 的 base64
 */
function urlSafeBase64Encode(base64Str) {
  if (!base64Str) return '';
  return base64Str.replace(/\+/g, '-').replace(/\//g, '_')
}
```

上面的代码会打印下面结果，可以看到 “/” 和 “-” 已经替换为了符合 url 编码的字符，并且成功还原

```bash
YJA8eYYXFlUlNk/w+b/dY7aLofP2SYYszrwItDiHU1M=
YJA8eYYXFlUlNk_w-b_dY7aLofP2SYYszrwItDiHU1M=
YJA8eYYXFlUlNk/w+b/dY7aLofP2SYYszrwItDiHU1M=
```
