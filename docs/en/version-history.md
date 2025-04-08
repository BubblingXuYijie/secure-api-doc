# Version History

> The current 2.x (spring boot 2) and 3.x (spring boot 3) versions will be sync up and updated, with the same functions. Maybe 2.x will be stopped later, after all, it will be 2024.

## :) 3.1.4

feature：

- Fix the error when the parameter analyzer parses the JSON of a map
- We will no longer check if the parameters in the request header are empty. If they are, we will directly throw an exception indicating a validation failure
- Add an X-signature in the example
- Adjust the granularity of ObjectMapper configuration, and try not to override the original default configuration as much as much as possible
- When processing front-end requestBody, it is defaulted to handle it according to the UTF8 character set


## :) 2.2.1

feature：

- Fix the error when the parameter analyzer parses the JSON of a map
- We will no longer check if the parameters in the request header are empty. If they are, we will directly throw an exception indicating a validation failure
- Add an X-signature in the example
- Adjust the granularity of ObjectMapper configuration, and try not to override the original default configuration as much as much as possible
- When processing front-end requestBody, it is defaulted to handle it according to the UTF8 character set

## :) 3.1.3

feature：

- Support interface data digital signature verification


## :) 2.2.0

feature：

- Support interface data digital signature verification

## :) 3.1.2

feature：

- Better deserialization of List strings
- Param parameter decryption uses asynchronous orchestration to improve performance
- Add test HTTP file
- Upgrade spring boot to 3.3.6

fix：

- Handle parameter decryption of immutable array types such as String [], Long []

## :) 2.1.9

feature：

- Better deserialization of List strings
- Param parameter decryption uses asynchronous orchestration to improve performance
- Add test HTTP file

fix：

- Handle parameter decryption of immutable array types such as String [], Long []

## :) 3.1.1

fix：

- Quotation Processing of JSON String Decryption

## :) 2.1.8

fix：

- Quotation Processing of JSON String Decryption

## :) 3.1.0

fix：

- Space loss after date array parameter is deciphered

## :) 2.1.7

fix：

- Space loss after date array parameter is deciphered

## :) 3.0.9

fix：

- Date formatting problem, add various types of date formatting configuration

## :) 2.1.6

fix：

- Date formatting problem, add various types of date formatting configuration

## :) 3.0.8

fix：

- The plaintext is too long when RSA is encrypted, and the encryption fails

## :) 2.1.5

fix：

- The plaintext is too long when RSA is encrypted, and the encryption fails

## :) 3.0.7

fix：

- The Missing Field Value of Entity Class Parameters in Param Form

## :) 2.1.4

fix：

- The Missing Field Value of Entity Class Parameters in Param Form

## :) 3.0.6

feature：

- Support SM4 encryption algorithm

modify：

- The default value of the enabled configuration item for the component is changed to false

## :) 2.1.3

feature：

- Support SM4 encryption algorithm

modify：

- The default value of the enabled configuration item for the component is changed to false

## :) 3.0.5

feature：

- From this version onwards, if the encryption function is turned off in the configuration file, the @DecryptParam annotation also loses the parameter processing function, which means that adding this annotation is the same as not adding it
- Add param/formData parameter to decipher log printing

fix：

- The entity class receives the param/formData parameter for decipher. When the final field or basic type is passed with a field value of null, the field value of the entity class is empty

## :) 2.1.2

feature：

- From this version onwards, if the encryption function is turned off in the configuration file, the @DecryptParam annotation also loses the parameter processing function, which means that adding this annotation is the same as not adding it
- Add param/formData parameter to decipher log printing

fix：

- The entity class receives the param/formData parameter for decipher. When the final field or basic type is passed with a field value of null, the field value of the entity class is empty

## :) 3.0.4

fix：

- Fix the issue that the encryption algorithm and session key algorithm enumeration class configuration in the yml configuration file do not take effect

## :) 2.1.1

fix：

- Fix the issue that the encryption algorithm and session key algorithm enumeration class configuration in the yml configuration file do not take effect

## :) 3.0.3

fix：

- @DecryptParam annotation parsed List is immutable array caused by add and other method exceptions

## :) 2.1.0

fix：

- @DecryptParam annotation parsed List is immutable array caused by add and other method exceptions

## :) 2.0.9

fix：

- Compatibility issues with spring boot version 2.7 and below

## :) 3.0.2

feature:

- Add the configuration item: url-safe to determine whether the generated key and ciphertext comply with the url specification, so that you can transfer it in the url address

## :) 2.0.8

feature:

- Add the configuration item: url-safe to determine whether the generated key and ciphertext comply with the url specification, so that you can transfer it in the url address

## :) 3.0.1

feature:

- The session key supports all symmetric algorithms

## :) 2.0.7

feature:

- The session key supports all symmetric algorithms

## :) 3.0.0

Support stable versions of spring boot 3 and above!!!

## :) 2.0.6

The first stable version with no problems with each function!!! Support spring boot 2

## ❌ 2.0.5（Deprecated）

Problem:

- The provided DH key agreement algorithm is not url safe

## ❌ 2.0.4（Deprecated）

Problem:

- SecureApi enable set to false still deciphers param and form-data parameters
- CipherUtils method name outdated

## ❌ 2.0.3（Deprecated）

Problem:

- Param and form-data parameter decipher not fully supported
- Complex type conversion problems after param and form-data parameters are deciphered

## ❌ 2.0.2（Deprecated）

Problem:

- The download jar package is incomplete

## ❌ 2.0.1（Deprecated）

Problem:

- Unable to download

## ❌ 2.0.0（Deprecated）

Problem:

- Unable to download
