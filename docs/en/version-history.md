# Version History

> The current 2.x (spring boot 2) and 3.x (spring boot 3) versions will be sync up and updated, with the same functions. Maybe 2.x will be stopped later, after all, it will be 2024.

## :) 3.0.5

feature：

- Add param/formData parameter to decipher log printing

fix：

- Exception when there is a final field in an entity class parameter

## :) 2.1.2

feature：

- Add param/formData parameter to decipher log printing

fix：

- Exception when there is a final field in an entity class parameter

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
