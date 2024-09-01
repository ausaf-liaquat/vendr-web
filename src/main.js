import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import './assets/main.css'
import 'preline/preline';

createApp(App).use(router).mount('#app');