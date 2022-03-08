import Vue from 'vue'
import Router from 'vue-router'
import history_son1 from '../components/history/history_son1'
import history_son2 from '../components/history/history_son2'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/history',
            component: () =>
                import ("@/components/history/history")
        },
        {
            path: '/h_son1',
            name: 'son1',
            component: () =>
                import ('@/components/history/history_son1')
        },
        {
            path: '/h_son2',
            name: 'son2',
            component: () =>
                import ('@/components/history/history_son2')
        },
        { path: '/history_son1', component: history_son1 },
        { path: '/history_son2', component: history_son2 },
    ]
})



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}