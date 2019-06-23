import Vue from 'vue'
import Router from 'vue-router'
import JsDemo from '@/components/JsDemo'
import CssDemo from '@/components/CssDemo'
import Lazy from '@/components/Lazy'
import Rank from '@/components/Rank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CssDemo',
      component: CssDemo
    },
    {
      path: '/css',
      name: 'CssDemo',
      component: CssDemo
    },
    {
      path: '/js',
      name: 'JsDemo',
      component: JsDemo
    },
    {
      path: '/lazy',
      name: 'Lazy',
      component: Lazy
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
  ]
})
