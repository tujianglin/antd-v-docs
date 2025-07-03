import { setupStore } from '#/store';
import '#/styles/index.css';
import { createApp } from 'vue';
import App from './App.vue';

const bootstrap = async () => {
  const app = createApp(App);

  await setupStore(app);
  app.mount('#app');
};

bootstrap();
