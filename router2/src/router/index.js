import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/history',
            component: () =>
                import ("@/components/history/HistoryApp")
        },
        {
            path: '/h_son1',
            name: 'son1',
            component: () =>
                import ('@/components/history/HistorySon1')
        },
        {
            path: '/h_son2',
            name: 'son2',
            component: () =>
                import ('@/components/history/HistorySon2')
        },
    ]
})



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}