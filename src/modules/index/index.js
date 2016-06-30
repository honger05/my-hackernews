require('bower/vux/dist/vux.css')

import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import NewsView from './components/NewsView'
import ItemView from './components/ItemView'
import UserView from './components/UserView'

import { domain, fromNow } from 'filters'

Vue.use(Router)

Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

const router = new Router()

router.map({
  '/news/:page': {
    component: NewsView
  },
  '/user/:id': {
    component: UserView
  },
  '/item/:id': {
    component: ItemView
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/news/1'
})

router.start(App, '#app')
