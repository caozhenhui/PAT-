import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home'
import Cart from '@/components/pages/cart'
import User from '@/components/pages/user'
import Detail from '@/components/pages/detail'

Vue.use(Router)

export default new Router({
    routes: [
        { path:'',redirect:'/home'},
        { path: '/home', name: 'Home', component: Home },
        { path: '/cart', name: 'Cart', component: Cart },
        { path: '/user', name: 'User', component: User },
        { path: '/detail/', name: 'Detail', component: Detail, props:true },
        { path:'/*', redirect:'/home' }
    ]
})
