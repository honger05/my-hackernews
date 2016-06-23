require('bower/vux/dist/vux.css')

import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import NewsView from 'components/NewsView'
import ItemView from 'components/ItemView'
import UserView from 'components/UserView'

Vue.use(Router)

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

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/news/1'
})

router.start(App, '#app')
