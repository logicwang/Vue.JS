  // src/main.js
  import Vue from 'vue'
  import { Button } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css'
  import App from './App'
  import Antd from 'ant-design-vue'
  import 'ant-design-vue/lib/button/style/css'


  Vue.component(Button.name, Button)
  Vue.use(Antd)
  Vue.component(Button.name, Button)
  Vue.config.productionTip = false

  new Vue({
      render: h => h(App)
  }).$mount("#app");