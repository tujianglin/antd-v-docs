import { ElementPlusContainer } from '@vitepress-demo-preview/component';
// @ts-ignore 111
import '@vitepress-demo-preview/component/dist/style.css';
import { defineClientComponentConfig } from '@vitepress-demo-preview/core';
import DefaultTheme from 'vitepress/theme';
import { type App } from 'vue';
// @ts-ignore 类型声明问题
import Code from '../components/Code.vue';
import './style/index.css';

defineClientComponentConfig({
  // 保持向后兼容
  copySuccessText: '代码已复制到剪贴板！',
  // 国际化配置
  i18n: {
    zh: {
      copySuccessText: '代码已复制到剪贴板！',
      copyCode: '复制代码',
      foldCode: '折叠代码',
      expandCode: '展开代码',
      hideSourceCode: '隐藏源代码',
    },
    en: {
      copySuccessText: 'Code copied to clipboard!',
      copyCode: 'Copy code',
      foldCode: 'Fold code',
      expandCode: 'Expand code',
      hideSourceCode: 'Hide source code',
    },
  },
  // 设置默认语言为中文
  defaultLanguage: 'zh',
});

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer);
    // 注册全局 Code 组件
    app.component('Code', Code);
  },
};
