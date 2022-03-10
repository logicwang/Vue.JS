import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/view/goods'
import title1 from '@/view/title1'
import title2 from '@/view/title2'
import test from '@/view/test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/test',
            name: 'HelloWorld',
            component: test,
            children: [{
                    path: 'title1',
                    name: 'title1',
                    component: title1
                },
                {
                    path: 'title2',
                    name: 'title2',
                    component: title2
                },
                {
                    path: 'test',
                    name: 'test',
                    component: test
                }
            ]
        },
        {
            path: '/goods',
            name: '/goods',
            component: goods,
        }
    ]
})