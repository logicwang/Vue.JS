import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import page1 from './page1.vue';
import page2 from './page2.vue';
import user from './user.vue'

const routes = [
    { path: '/page1', component: page1 },
    { path: "/page2", component: page2 },
    //可以配置重定向
    { path: '', redirect: "page1" },
    //或者重新写个路径为空的路由
    { path: "", component: page1 }
]

const router = new VueRouter({
    routes
});

export default router