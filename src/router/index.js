import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载引用组件
const goods = (resolve) => {
  import('components/goods/goods').then((module) => {
    resolve(module)
  })
}

const ratings = (resolve) => {
  import('components/ratings/ratings').then((module) => {
    resolve(module)
  })
}

const seller = (resolve) => {
  import('components/seller/seller').then((module) => {
    resolve(module)
  })
}

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
