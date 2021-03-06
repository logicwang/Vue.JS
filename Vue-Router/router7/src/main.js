import Vue from 'vue'
import App from './App'
import router from './index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount("#app")