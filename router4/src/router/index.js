import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import UserEmailsSubscriptions from '@/components/UserEmailsSubscriptions'
import UserProfilePreview from '@/components/UserProfilePreview'
import UserProfile from '@/components/UserProfile'
import UserSettings from '@/components/UserSettings'


export const routes = [{
    path: '/settings',
    // 你也可以在顶级路由就配置命名视图
    component: UserSettings,
    UserProfilePreview,
    App,
    children: [{
        path: 'emails',
        component: UserEmailsSubscriptions
    }, {
        path: 'profile',
        components: {
            default: UserProfile,
            helper: UserProfilePreview
        },
    }]
}]


router.push('/settings/emails')

export const router = new Router({
    router // (缩写) 相当于 routes: routes
});

Vue.use(Router);