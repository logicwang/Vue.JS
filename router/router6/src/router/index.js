import Vue from "vue";
import Router from "vue-router";
import NewsApp from "@/components/NewsApp";


const UserApp = () =>
    import ("@/components/UserApp")

const HomeApp = () =>
    import ("@/components/HomeApp")


export default new Router({
    routes: [{
            path: "/UserApp/:id",
            name: "UserApp",
            component: UserApp,
            props: 111
        },
        {
            path: "/HomeApp/:id",
            name: "HomeApp",
            component: HomeApp,
            props: 222
        },
        { path: '/NewsApp', name: 'NewsApp', component: NewsApp },

    ]
});



export const router = new Router({
    Router // (缩写) 相当于 routes: routes
});

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}