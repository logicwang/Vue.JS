import Vue from 'vue'
import App from './App.vue'
import user from './user.vue'

//引用router.js
import router from './router.js'

import router from './router'
Vue.config.productionTip = false
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    //一定要注入到vue的实例对象上
    router,
    components: { App },
    template: '<App/>'
})