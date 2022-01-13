import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    getUser(state) {
      return state.user;
    }
  },

  actions: {
    fetchUser(context, user) {
      context.commit("setLoggedIn", user !== null);
      if (user) {
        context.commit("setUser", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        context.commit("setUser", null);
      }
    }
  },

  mutations: {
    setUser(state, data) {
      state.user.data = data;
    },

    setLoggedIn(state, value) {
      state.user.loggedIn = value;
    } 
  },
});
