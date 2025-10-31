import tailwindcss from '@tailwindcss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';
import { defineConfig, type DefaultTheme } from 'vitepress';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    // @ts-ignore 111
    plugins: [vueJsx(), tailwindcss()],
    server: {
      port: 1122,
      host: true,
    },
    resolve: {
      alias: {
        'dayjs/plugin/advancedFormat': 'dayjs/plugin/advancedFormat.js',
      },
    },
  },
  title: 'Antd-v',
  description: '基于 Vue3 高仿 React Antd 组件库',
  base: '/ui-docs/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/get-started' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: [
      {
        text: '指南',
        collapsed: false,
        items: [{ text: '快速开始', link: '/get-started' }],
      },

      {
        text: '基础组件',
        collapsed: false,
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Typography 排版', link: '/components/typography' },
        ],
      },
      {
        text: '布局',
        collapsed: false,
        items: [
          { text: 'Divider 分割线', link: '/components/divider' },
          { text: 'Flex 弹性布局', link: '/components/flex' },
          { text: 'Grid 栅格布局', link: '/components/grid' },
          { text: 'Layout 布局', link: '/components/layout' },
          { text: 'Masonry 瀑布流', link: '/components/masonry' },
          { text: 'Space 间距', link: '/components/space' },
          { text: 'Splitter 分割面板', link: '/components/splitter' },
        ],
      },
      {
        text: '导航',
        collapsed: false,
        items: [
          { text: 'Anchor 锚点', link: '/components/anchor' },
          { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
          { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          { text: 'Menu 菜单', link: '/components/menu' },
          { text: 'Pagination 分页', link: '/components/pagination' },
          { text: 'Steps 步骤条', link: '/components/steps' },
          { text: 'Tabs 标签页', link: '/components/tabs' },
        ],
      },
      {
        text: '数据录入',
        collapsed: false,
        items: [
          { text: 'AutoComplate 自动输入', link: '/components/auto-complete' },
          { text: 'Cascader 级联选择器', link: '/components/cascader' },
          { text: 'Checkbox 复选框', link: '/components/checkbox' },
          { text: 'ColorPicker 颜色选择器', link: '/components/color-picker' },
          { text: 'DatePicker 日期选择器', link: '/components/date-picker' },
          { text: 'Input 输入框', link: '/components/input' },
          { text: 'InputNumber 数字输入框', link: '/components/input-number' },
          { text: 'Mentions 提及', link: '/components/mentions' },
          { text: 'Radio 单选', link: '/components/radio' },
          { text: 'Rate 评分', link: '/components/rate' },
          { text: 'Select 选择器', link: '/components/select' },
          { text: 'Slider 滑动输入条', link: '/components/slider' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'TimePicker 时间选择器', link: '/components/time-picker' },
          { text: 'Transfer 穿梭框', link: '/components/transfer' },
          { text: 'TreeSelect 树选择', link: '/components/tree-select' },
          { text: 'Upload 上传', link: '/components/upload' },
        ],
      },
      {
        text: '数据展示',
        collapsed: false,
        items: [
          { text: 'Avatar 头像', link: '/components/avatar' },
          { text: 'Badge 徽标数', link: '/components/badge' },
          { text: 'Calendar 日历', link: '/components/calendar' },
          { text: 'Card 卡片', link: '/components/card' },
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Descriptions 描述列表', link: '/components/descriptions' },
          { text: 'Empty 空状态', link: '/components/empty' },
          { text: 'Image 图片', link: '/components/image' },
          { text: 'Popover 气泡卡片', link: '/components/popover' },
          { text: 'QRCode 二维码', link: '/components/qrcode' },
          { text: 'Segmented 分段控制器', link: '/components/segmented' },
          { text: 'Statistic 统计数值', link: '/components/statistic' },
          { text: 'Tag 标签', link: '/components/tag' },
          { text: 'Timeline 时间轴', link: '/components/timeline' },
          { text: 'Tooltip 提示', link: '/components/tooltip' },
          { text: 'Tour 漫游试引导', link: '/components/tour' },
          { text: 'Tree 树形控件', link: '/components/tree' },
        ],
      },
      {
        text: '反馈',
        collapsed: false,
        items: [
          { text: 'Alert 警告提示', link: '/components/alert' },
          { text: 'Drawer 抽屉', link: '/components/drawer' },
          { text: 'Message 全局提示', link: '/components/message' },
          { text: 'Modal 对话框', link: '/components/modal' },
          { text: 'Notification 通知', link: '/components/notification' },
          { text: 'Popconfirm 气泡确认框', link: '/components/popconfirm' },
          { text: 'Progress 进度条', link: '/components/progress' },
          { text: 'Result 结果', link: '/components/result' },
          { text: 'Skeleton 骨架屏', link: '/components/skeleton' },
          { text: 'Spin 加载中', link: '/components/spin' },
          { text: 'Watermark 水印', link: '/components/watermark' },
        ],
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: 'Affix 固钉', link: '/components/affix' },
          { text: 'App 包裹组件', link: '/components/app' },
          { text: 'ConfigProvider 全局配置', link: '/components/config-provider' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    search: { options: searchOptions() },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        demoDir: resolve(__dirname, '../demo'),
        stackblitz: {
          show: true,
        },
        codesandbox: {
          show: true,
        },
      });
    },
    // 启用 Vue 组件在 markdown 中使用
    lineNumbers: false,
  },
  lang: 'zh-CN',
});

function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
  return {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        searchBox: {
          clearButtonTitle: '清除查询条件',
          clearButtonAriaLabel: '清除查询条件',
          closeButtonText: '关闭',
          closeButtonAriaLabel: '关闭',
          placeholderText: '搜索文档',
          placeholderTextAskAi: '向 AI 提问：',
          placeholderTextAskAiStreaming: '回答中...',
          searchInputLabel: '搜索',
          backToKeywordSearchButtonText: '返回关键字搜索',
          backToKeywordSearchButtonAriaLabel: '返回关键字搜索',
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除',
          recentConversationsTitle: '最近的对话',
          removeRecentConversationButtonTitle: '从历史记录中删除对话',
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接',
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈',
        },
        resultsScreen: {
          askAiPlaceholder: '向 AI 提问： ',
        },
        askAiScreen: {
          disclaimerText: '答案由 AI 生成，可能不准确，请自行验证。',
          relatedSourcesText: '相关来源',
          thinkingText: '思考中...',
          copyButtonText: '复制',
          copyButtonCopiedText: '已复制！',
          copyButtonTitle: '复制',
          likeButtonTitle: '赞',
          dislikeButtonTitle: '踩',
          thanksForFeedbackText: '感谢你的反馈！',
          preToolCallText: '搜索中...',
          duringToolCallText: '搜索 ',
          afterToolCallText: '已搜索',
          aggregatedToolCallText: '已搜索',
        },
        footer: {
          selectText: '选择',
          submitQuestionText: '提交问题',
          selectKeyAriaLabel: 'Enter 键',
          navigateText: '切换',
          navigateUpKeyAriaLabel: '向上箭头',
          navigateDownKeyAriaLabel: '向下箭头',
          closeText: '关闭',
          backToSearchText: '返回搜索',
          closeKeyAriaLabel: 'Esc 键',
          poweredByText: '搜索提供者',
        },
      },
    },
  };
}
