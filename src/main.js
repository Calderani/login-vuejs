import Vue from 'vue'
import App from './App.vue'
import "./assets/css/main.css";
import { BootstrapVue } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.min.css";
import router from './router'
import VeeValidate, { Validator } from "vee-validate";
import pt_BR from "vee-validate/dist/locale/pt_BR.js";
import store from "./store";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});
Validator.localize("pt_BR", pt_BR);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
