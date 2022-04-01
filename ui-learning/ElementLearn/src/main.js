import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index'

new Vue({
    router, //注意这里也要加上
    render: h => h(App),
}).$mount('#app')


Vue.use(ElementUI);