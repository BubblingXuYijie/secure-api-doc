import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: 'https://qiniuoss.xuyijie.icu/SecureApiDoc/img/logo/favicon.png' }]],
  lang: 'zh-CN',
  title: 'SecureApi使用文档',
  description: '',
  // 部署github page时这里要和page的路径匹配
  base: '/secure-api-doc/',
  plugins: [
    mdEnhancePlugin({
      // 选项卡
      tabs: true,
      // 启用图片 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    }),
  ],
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
    //repo: 'https://github.com/BubblingXuYijie/secure-api-spring-boot',
    docsRepo: 'https://github.com/BubblingXuYijie/secure-api-doc',
    docsDir: 'docs',
    locales: {
      '/': {
        selectLanguageText: 'Language',
        selectLanguageName: '简体中文',
        navbar: [
            '/',
          '/开始使用',
          '/版本历史',
          {
            text: '文档加速',
            children: [
              {
                text: '中国大陆',
                link: 'https://doc.xuyijie.icu/secure-api-doc/',
              },
              {
                text: '国际',
                link: 'https://bubblingxuyijie.github.io/secure-api-doc/',
              },
            ],
          },
        ],
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
          '黑金刚',
        ],
        editLinkText: '在 Github 上编辑',
        lastUpdatedText: '最近更新',
        contributorsText: '编著者',
      },
      '/en/': {
        selectLanguageText: '切换语言',
        selectLanguageName: 'English',
        navbar: [
            '/en/',
          '/en/get-started',
          '/en/version-history',
          {
            text: 'Doc Accelerate',
            children: [
              {
                text: 'China Mainland',
                link: 'https://doc.xuyijie.icu/secure-api-doc/',
              },
              {
                text: 'International',
                link: 'https://bubblingxuyijie.github.io/secure-api-doc/',
              },
            ],
          },
        ],
        sidebar: [
          {
            text: 'Start',
            prefix: '/en/',
            link: '/en/get-started.md',
          },
          {
            text: 'Guide',
            prefix: '/en/',
            children: [
              'install.md',
              'configuration.md',
              'try-it.md',
              'annotation.md',
              'url-pattern.md',
              'exception-handle.md',
              'encryption-algorithm',
              'CipherUtils',
              'two-modes',
              'DH-key-agreement',
            ]
          },
          '/en/black-king-kong',
        ],
        editLinkText: 'Edit on GitHub',
      },
    },
  }),

  bundler: viteBundler(),
})
