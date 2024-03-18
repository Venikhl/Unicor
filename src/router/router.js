import { createRouter, createWebHistory } from 'vue-router';
import Main from "@/pages/MainPage.vue"
import About from "@/pages/AboutPage.vue"

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL), 
})

export default router
