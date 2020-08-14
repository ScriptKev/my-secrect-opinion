import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Propuestas from '@/views/Propuestas.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/propuestas',
    name: 'Propuestas',
    component: Propuestas
  },
  {
    path: '/theme/:id',
    name: 'ThemeDetail',
    // route level code-splitting
    // this generates a separate chunk (ThemeDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ThemeDetail" */ '../views/ThemeDetail.vue')
  },
  {
    path: '/propuesta/:id',
    name: 'PropuestaDetail',
    // route level code-splitting
    // this generates a separate chunk (PropuestaDetail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PropuestaDetail" */ '../views/PropuestaDetail.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
