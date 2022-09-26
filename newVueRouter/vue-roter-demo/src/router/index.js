import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //记录滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 200, left: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      //路由独享导航守卫
      beforeEnter(to, from, next) {
        next();
      },
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/detail/:name',
      name: 'detail',
      component: () => import('../views/Detlis.vue'),
      meta: {
        //判断用户是否需要认证
        req: true
      }
    },

  ]
})
//全局前置导航守卫
router.beforeEach((to, from, next) => {
  let token = false;
  //判断是否需要用户登陆
  if (to.meta.req) {//需要验证用户登陆的页面
    if (token) { next() } //如果用户已经登陆
    else { next({ path: "/" }); /*用户没登陆*/ }
  }
  else {//不需要验证的页面
    next();
  }
});



export default router
