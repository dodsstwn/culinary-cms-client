import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Homepage from '../views/Homepage.vue'
import FoodPage from '../views/FoodPage.vue'
import BeveragePage from '../views/BeveragePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/content',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/food',
    name: 'FoodPage',
    component: FoodPage
  },
  {
    path: '/beverage',
    name: 'BeveragePage',
    component: BeveragePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
