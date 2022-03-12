import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/App'



export const routes = [
    { path: '/App', component: App },
]


export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);