import '@ant-design-vue/pro-layout/dist/style.css';
import 'ant-design-vue/dist/antd.variable.min.css';

import { createApp } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ConfigProvider)
  .use(ProLayout)
  .use(PageContainer)
  .mount('#app');
