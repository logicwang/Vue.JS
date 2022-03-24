import Vue from 'vue'
import App from './App.vue'
import { router } from './index'


new Vue({
    // el: '#app',
    router,
    render(h) {
        return h(App);
    }
}).$mount('#app')