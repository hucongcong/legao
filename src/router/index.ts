import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Index.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/Editor/Index.vue')
    },
    {
      path: '/detail/:id',
      name: 'template',
      component: () => import('@/views/Detail/Index.vue')
    }
  ]
})

export default router
