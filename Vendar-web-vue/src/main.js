import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'preline';

createApp(App).use(router).mount('#app');