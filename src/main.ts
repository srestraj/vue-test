import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useEmailsStore } from '../store/emails'
import { createPinia } from 'pinia'

import './style.scss'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
