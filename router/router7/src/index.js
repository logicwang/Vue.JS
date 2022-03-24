import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Manage from './views/manage/Manage'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/manage',
            name: 'Manage',
            component: Manage
        }
    ]
})