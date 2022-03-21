import Vue from 'vue'
import App from './components/App'
import { router } from './index'

new Vue({
    // el: '#app',
    router,
    render(h) {
        return h(App);
    }
}).$mount('#app')