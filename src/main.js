import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Container, Button, Select, Menu, Header, Footer, Aside, Main, MenuItem, Submenu, Radio, RadioGroup, MenuItemGroup, RadioButton } from 'element-ui'
Vue.use(Container)
Vue.use(Button)
Vue.use(Select)
Vue.use(Menu)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(MenuItemGroup)
Vue.use(RadioButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
