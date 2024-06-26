import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: 'https://vuejs.press/images/hero.png' }]],
  lang: 'zh-CN',
  title: 'SecureApi使用文档',
  description: '',
  base: './',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'SecureApi使用文档',
      description: '一款接口参数和返回值加解密工具，高性能、轻量化，无任何外部依赖；支持param、body参数（暂不支持path参数），springboot场景启动器设计，完全自动化，用户无需关心加密解密和密钥生成过程。配置灵活，配置文件支持yml和bean方式，支持注解、url正则进行接口匹配，支持AES、SM4、RSA、DM等多种加密方式，支持多种前后端密钥协商方式',
    },
    '/en/': {
      lang: 'en-US',
      title: 'SecureApi Document',
      description: 'Vue-powered Static Site Generator',
    },
  },

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: ['/', '/get-started'],
    docsRepo: 'https://github.com/BubblingXuYijie/secure-api-doc',
    locales: {
      '/': {
        selectLanguageText: 'Language',
        selectLanguageName: '简体中文',
        navbar: ['/', '/开始使用'],
        sidebar: [
          {
            text: '开始使用',
            prefix: '/',
            link: '/开始使用.md',
            // children: [
            //   {
            //     text: 'github',
            //     link: 'https://github.com',
            //     children: [],
            //   },
            // ],
          },
          {
            text: '安装',
            link: '/安装.md',
          }
        ],
      },
      '/en/': {
        selectLanguageText: '选择语言',
        selectLanguageName: 'English',
        navbar: ['/en/', '/en/get-started'],
        sidebar: [
          {
            text: 'start',
            prefix: '/en/',
            link: '/en/get-started.md',
            children: [
              {
                text: 'github',
                link: 'https://github.com',
                children: [],
              },
              {
                text: 'install',
                link: 'install.md',
              }
            ],
          },
          {
            text: 'install',
            link: '/en/install.md',
          }
        ],
      },
    },
    repo: 'https://github.com/BubblingXuYijie/secure-api-spring-boot',
  }),

  bundler: viteBundler(),
})
