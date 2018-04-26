import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './components/Store/Store';

import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
