import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home',
}]

const router = new VueRouter({
    routes,
    // mode: 'history',
    Home,
    About
})

export default router