import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: 'https://qiniuoss.xuyijie.icu/SecureApiDoc/img/logo/favicon.png' }]],
  lang: 'zh-CN',
  title: 'SecureApi使用文档',
  description: '',
  // 部署github page时这里要和page的路径匹配
  base: '/secure-api-doc',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'SecureApi使用文档',
      description: '一款spring boot接口参数和返回值加解密工具',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SecureApi Document',
      description: 'A spring boot interface parameters and return value encryption and decryption tool',
    },
  },

  theme: defaultTheme({
    logo: 'https://qiniuoss.xuyijie.icu/SecureApiDoc/img/logo/logo.png',
    navbar: ['/', '/get-started'],
    docsRepo: 'https://github.com/BubblingXuYijie/secure-api-doc',
    locales: {
      '/': {
        selectLanguageText: 'Language',
        selectLanguageName: '简体中文',
        navbar: ['/', '/开始使用', '/版本历史'],
        sidebar: [
          {
            text: '快速开始',
            prefix: '/',
            children: [
              {
                text: '开始使用',
                link: '/开始使用.md',
              },
              '安装',
              '配置',
              '试一下',
            ]
          },
          {
            text: '指南',
            prefix: '/',
            children: [
              '注解',
              'URL匹配',
              '异常处理',
              '加密算法',
              'CipherUtils',
              '两种模式',
              'DH密钥协商',
            ]
          },
        ],
      },
      '/en/': {
        selectLanguageText: '切换语言',
        selectLanguageName: 'English',
        navbar: ['/en/', '/en/get-started', '/en/version-history'],
        sidebar: [
          {
            text: 'Start',
            prefix: '/en/',
            link: '/en/get-started.md',
          },
          '/en/install.md',
          '/en/configuration.md',
          '/en/try-it.md',
          '/en/annotation.md',
          '/en/url-pattern.md',
          '/en/exception-handle.md',
          '/en/encryption-algorithm',
          '/en/CipherUtils',
          '/en/two-modes',
          '/en/DH-key-agreement',
        ],
      },
    },
    repo: 'https://github.com/BubblingXuYijie/secure-api-spring-boot',
  }),

  bundler: viteBundler(),
})
