import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/work/WorkList.vue'),
      children:[
        {
          path: 'F2E',
          name: 'F2E',
          component: () => import('../views/work/F2E.vue'),
        },
      ]
    },
    // 404頁面
    {
      path:'/:pathMacth(.*)*',
      component: () => import ('../views/work.vue')
    },
  ]
})

export default router
