import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
    auth,
  },
});

