import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import Good from '../components/Good'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import User from '../components/User'
import GameRouter from '../components/GameRouter'
import Fotter from '../components/Fotter'



export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/good', name: 'Good', component: Good },
    { path: '/user/:id', name: 'User', component: User },
    { path: '*', name: 'NotFound', component: NotFound },
    { path: '/GameRouter', component: GameRouter },
    { path: '/Fotter', component: Fotter },
]

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

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});


Vue.use(Router)



const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}