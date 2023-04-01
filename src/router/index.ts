import HomeView from '@/views/HomeView.vue'
import Login from '@/views/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        isAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isAuth: false
      }
    },
    {
      path: '/form-brand',
      name: 'form-brand',
      component: () => import('@/views/brand/Form.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/brands',
      name: 'brands',
      component: () => import('@/views/brand/ListBrand.vue'),
      meta: {
        isAuth: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard.vue'),
      meta: {
        isAuth: false
      }
    }
  ]
})

export default router
