import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import 'normalize.css'

import ElementPlus from 'element-plus'
import '@/assets/css/index.less'

import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(createPinia())
app.mount('#app')
