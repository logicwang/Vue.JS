import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
    el: '#app',
    render: h => h(App)
});