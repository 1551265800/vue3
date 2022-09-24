import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios"
import NewApp from './NewAPP.vue'
import Home from './views/home.vue';
import About from './views/about.vue';
/* import './assets/main.css' */
//路由配置 放入页面配置
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    }];
//创建路由对象
import { createRouter, createWebHashHistory } from "vue-router"
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(NewApp)
app.config.globalProperties.axios = axios;
app.use(router);
app.mount('#app')