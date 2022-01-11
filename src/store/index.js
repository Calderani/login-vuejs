import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router/index'

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    userToken: null,
    drugList: []
  },

  getters: {
    getDrugList(state) {
      return state.drugList;
    }
  },

  actions: {
    login(context, payload) {
      axios.post('https://djbnrrib9e.execute-api.us-east-2.amazonaws.com/v1/login', payload)
        .then((response) => {
          context.commit("authUser", response.data);
          localStorage.setItem('token', response.data.token);
          router.push({ path: '/home' });
        }).catch(error => console.log(error))
    },

    getMedications(context) {
      axios.get('https://djbnrrib9e.execute-api.us-east-2.amazonaws.com/v1/medications', {
        headers: { Authorization: 'Bearer ' + this.state.userToken }
      }).then((response) => {
        // console.log(response.data);
        context.commit("setDrugList", response.data);
      }).catch(error => console.log(error))
    }
  },

  mutations: {
    authUser(state, userData) {
      state.userToken = userData.token;
    },

    setDrugList(state, itemList) {
      console.log(itemList);
      state.drugList = itemList.data;
    }
  },
});
