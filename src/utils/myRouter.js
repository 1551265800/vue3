import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter);

export const router = new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        {path: '/about', component: About}
    ]
});