import Vue from 'vue'
import Router from 'vue-router'



export const routes = [

    // {
    //     path: '/Foo',
    //     name: '/Foo',
    //     component: Foo
    // },
    // {
    //     path: '/Baz',
    //     name: '/Baz',
    //     component: Baz
    // },
    // {
    //     path: '/Bar',
    //     name: '/Bar',
    //     component: Bar
    // },
]


export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router)