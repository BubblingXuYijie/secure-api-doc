---
lang: en-US
title: Get Start
description: Introduction and development background
---

# Get Start

## Introduction

SecureApi is an interface parameter and return value encryption and decryption tool, high performance, lightweight, without any external dependencies.

Spring boot scene launcher design (supports spring boot2 and 3), fully automated, supports param, body parameters (path parameters are not supported for the time being), and users do not need to care about encryption, decryption and key matching processes.

Flexible configuration, the configuration file supports yml and bean methods, supports annotation, URL regularization for interface matching, supports AES, SM4, RSA and other encryption methods, and supports DH front-end and back-end key negotiation methods.

## Development background

Although the use of HTTPS has basically guaranteed the security of transmission data, many state-owned enterprises, medical care, stock projects, etc. still require self-encryption of interface data. The author has recently encountered that when Alipay connects to the national medical insurance interface, the medical insurance interface requires interface encryption.

Therefore, in view of the existence of this demand, the author also looked for some of the current interface encryption components and found that they had stopped updating 3.4 years ago, and did not accept PR or reply to issues. They were also simple and complex to use, so they developed a new set of components.

The author does not know much about the various requirements of interface encryption. If there are functions missing in use, please come to [Github] submit [issue] or `pr` ❤️。

## Usage increment trends

It's been a year or two since this component was released, and it took so many users to reorganize the naming, repository, and documentation.

![maven downloads of this component.jpg](../assets/img/组件maven下载量.jpg)

[Github]: https://github.com/BubblingXuYijie/secure-api-spring-boot
[issue]: https://github.com/BubblingXuYijie/secure-api-spring-boot/issues?q=
