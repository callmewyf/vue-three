import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Gantt from '@/components/gantt/index'
import Chart from '@/components/chart/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      component: HelloWorld
    },
    {
      path: '/',
      component: Chart
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/gantt',
      component: Gantt
    }
  ]
})
