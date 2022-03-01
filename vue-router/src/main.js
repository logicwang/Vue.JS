import Vue from 'vue'
// import Router from 'vue-router'
import App from './components/App'
// import About from './components/About'
// import Good from './components/Good'
// import Home from './components/Home'
// import NotFound from './components/NotFound'
// import User from './components/User'
import { router } from './router/index'

// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/good', component: Good },
//     { path: '/user/:id', component: User },
//     {
//         path: '*',
//         component: NotFound
//     }
// ]

// // 3. 创建 router 实例，然后传 `routes` 配置
// // 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new Router({
//     routes // (缩写) 相当于 routes: routes
// });

// Vue.use(Router);
// Vue.config.productionTip = false;

// new Vue({
//     router
// }).$mount('#app')

new Vue({
    // el: '#app',
    router,
    render(h) {
        return h(App);
    }
}).$mount('#app')