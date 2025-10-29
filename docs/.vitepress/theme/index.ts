import DefaultTheme from 'vitepress/theme';
import { type App } from 'vue';
// @ts-ignore 类型声明问题
import './style/index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {},
};
