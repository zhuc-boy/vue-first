import Vue from 'vue'
import Router from 'vue-router'
import stroe from '../store'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import page3 from '@/components/page3'
import store from '../store';
import perinf from '@/components/perinf'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/page3',
      name: 'page3',
      component: page3,
      meta:{
        requireAuther:false,
      }
    },
    {
      path: '/perinf',
      name: 'perinf',
      component: perinf
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuther)) {//修改
    if (store.state.token) {//修改这里的判断
      next()
    } else {
      //防止无限循环
      if (to.name === 'login') {
        next();
        return
      }
      next({
        path: '/login',
        //query: { redirect: to.fullPath }
      });
    }
  } else {
    next()//若点击的是不需要验证的页面,则进行正常的路由跳转
  }
})

export default router;