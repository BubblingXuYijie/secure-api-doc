import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: 'https://vuejs.press/images/hero.png' }]],
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
        navbar: ['/', '/开始使用', '/更新历史'],
        sidebar: [
          {
            text: '开始使用',
            prefix: '/',
            link: '/开始使用.md',
          },
          '安装',
          '配置',
          '体验',
          '注解介绍',
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
            // children: [
            //   {
            //     text: 'github',
            //     link: 'https://github.com',
            //     children: [],
            //   },
            // ],
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
