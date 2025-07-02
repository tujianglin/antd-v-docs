import '#/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';

const bootstrap = async () => {
  const app = createApp(App);

  app.mount('#app');
};

bootstrap();
