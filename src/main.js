// main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整导入element-plus
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'


const app = createApp(App)

app.use(store)
app.use(router)

// 新增代码：注册特定组件
app.use(ElementPlus)

app.mount('#app')

