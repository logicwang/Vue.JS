import Vue from 'vue'
import Router from 'vue-rotuer'
import HellowWorld from '@/components/HellowWorld'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/test',
        name: 'HellowWorld',
        component: Test,
        children: [{
                path: 'Title1',
                name: 'Title1',
                component: Title1,
            },
            {
                path: 'Title2',
                name: 'Title2',
                component: Title2,
            },
            {
                path: '/goods',
                name: 'goods',
                component: Goods,
            },
        ]
    }]
})