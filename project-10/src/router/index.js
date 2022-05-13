import Vue from 'vue'
import {VueRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RandomView from '../views/RandomView.vue'
import WatchListView from '../views/WatchListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/random',
    name: 'random',
    component: RandomView
  },
  {
    path: '/watch-list',
    name: 'watch-list',
    component: WatchListView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  history: createWebHistory(),
  routes
})

export default router
