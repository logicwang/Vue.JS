import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'



export const routes = [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
]


export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}