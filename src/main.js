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
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import PortalVue from 'portal-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(PortalVue);
Vue.use(VeeValidate, {
  inject: true,
  fieldsBagName: "veeFields",
  errorBagName: "veeErrors",
});
const dictionary = {
  pt_BR: {
    attributes: {
      password_confirmation: 'confirmação de password'
    }
  }
};
Validator.localize(dictionary);
Validator.localize("pt_BR", pt_BR);

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDHmIpprivykYwyzBjbvG7mmjA8gNwA4Y",
  authDomain: "fir-auth-8ce4a.firebaseapp.com",
  projectId: "fir-auth-8ce4a",
  storageBucket: "fir-auth-8ce4a.appspot.com",
  messagingSenderId: "670679713806",
  appId: "1:670679713806:web:f64d50a3be52218c14145f",
  measurementId: "G-1F1XW0LEQ0"
};
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
