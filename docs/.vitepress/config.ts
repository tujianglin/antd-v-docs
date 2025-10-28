import tailwindcss from '@tailwindcss/vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { defineConfig, type DefaultTheme } from 'vitepress';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    // @ts-ignore 111
    plugins: [vueJsx(), tailwindcss()],
    server: {
      port: 1122,
      host: true,
    },
  },
  title: 'Antd-v',
  description: '基于 Vue3 高仿 React Antd 组件库',
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
        items: [{ text: 'Button 按钮', link: 'components/button' }],
      },
      {
        text: '布局',
        collapsed: false,
        items: [{ text: 'Splitter 分割面板', link: 'components/splitter' }],
      },
      {
        text: '导航',
        collapsed: false,
        items: [],
      },
      {
        text: '数据录入',
        collapsed: false,
        items: [
          { text: 'AutoComplate 自动输入', link: 'components/auto-complete' },
          { text: 'Cascader 级联选择器', link: 'components/cascader' },
          { text: 'Checkbox 复选框', link: 'components/checkbox' },
          { text: 'ColorPicker 颜色选择器', link: 'components/color-picker' },
          { text: 'DatePicker 日期选择器', link: 'components/date-picker' },
          { text: 'Input 输入框', link: 'components/input' },
          { text: 'InputNumber 数字输入框', link: 'components/input-number' },
          { text: 'Mentions 提及', link: 'components/mentions' },
          { text: 'Radio 单选', link: 'components/radio' },
          { text: 'Rate 评分', link: 'components/rate' },
        ],
      },
      {
        text: '反馈组件',
        collapsed: false,
        items: [],
      },
      // {
      //   text: '表单组件',
      //   collapsed: false,
      //   items: [{ text: 'Form 表单', link: 'components/form' }],
      // },
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
