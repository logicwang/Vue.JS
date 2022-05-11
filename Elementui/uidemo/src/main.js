import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
// import { Router } from './router/index'
import 'default-passive-events'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    // Router,
    render: h => h(App),
}).$mount('#app')