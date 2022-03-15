import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import UserEmailsSubscriptions from '../components/UserEmailsSubscriptions'
import UserProfilePreview from '../components/UserProfilePreview'
import UserProfile from '../components/UserProfile'
import UserSettings from '../components/UserSettings'


export const routes = [
    { path: '/', name: 'App', component: App },
    { path: '/UserEmailsSubscriptions', name: 'UserEmailsSubscriptions', component: UserEmailsSubscriptions },
    { path: '/UserProfilePreview', name: 'UserProfilePreview', component: UserProfilePreview },
    { path: '/UserProfile', name: 'UserProfile', component: UserProfile },
    { path: '/UserSettings', name: 'UserSettings', component: UserSettings },
]


router.push('/settings/emails')

export const router = new Router({
    router // (缩写) 相当于 routes: routes
});

Vue.use(Router);