import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'inbox' },
    meta: {
      title: 'Inbox'
    }
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Home,
    meta: {
      title: 'Inbox'
    }
  },
  {
    path: '/archive',
    name: 'archive',
    component: Home,
    meta: {
      title: 'Archive'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})

export default router