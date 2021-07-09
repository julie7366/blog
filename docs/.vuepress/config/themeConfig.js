const nav = require('./themeConfig/nav.js');
const htmlModules = require('./themeConfig/htmlModules.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: '/julie7366/my-blog', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'Ni Ni', // 必需
    link: 'https://github.com/julie7366', // 可选的
  },
  footer: {
    // 页脚信息
    createYear: 2020, // 博客创建年份
    copyrightInfo:
      'Ni Ni | <a href="https://github.com/julie7366/my-blog" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  },
  htmlModules // 插入hmtl(广告)模块
}
