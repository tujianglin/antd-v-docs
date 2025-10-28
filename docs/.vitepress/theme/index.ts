import DefaultTheme from 'vitepress/theme';
import { type App } from 'vue';
// @ts-ignore 类型声明问题
import Code from '../components/Code.vue';
import './style/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 注册全局 Code 组件
    app.component('Code', Code);
  },
};
