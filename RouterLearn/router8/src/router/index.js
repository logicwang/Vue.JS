import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import friend from '../components/friend'
import news from '../components/news'
import login from '../components/login'

export const routes = [
    { path: '/', name: 'index', component: index },
    { path: '/friend', name: 'friend', component: friend },
    { path: '/news', name: 'news', component: news },
    { path: '/index/login', name: 'login', component: login },
    // { path: '/user/:id', name: 'User', component: User },
    // { path: '*', name: 'NotFound', component: NotFound },
]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);