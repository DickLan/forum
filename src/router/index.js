import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // 每一次進入routes 都會載入 component HomeView
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 只有進入 /about 時，才會載入 AboutView
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, {
    path: '*', // * 表示任意路徑
    name: 'not-found',
    component: NotFound
  }

]

const router = new VueRouter({
  routes
})

export default router
