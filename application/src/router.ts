import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { Simple } from 'my-library'  // the library build with rollup
// import { Simple2 } from 'my-library-no-vue-class'
// import { Simple3 } from 'library-no-ts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    // {
    //   path: '/simple2',
    //   name: 'simple2',
    //   component: Simple2
    // },
    // {
    //   path: '/simple3',
    //   name: 'simple3',
    //   component: Simple3
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
