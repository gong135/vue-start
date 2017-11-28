import axios from 'axios';
// import * as types from '../mutation-types';

const state = {
  token: null,
  authorization: null,
  user: null,
};

const setAccessToken = () => {
  axios.defaults.headers.common.Authorization = state.token.accessToken;
};

const getters = {
  isLogin() {
    return state.token !== null;
  },
  userName() {
    return state.token ? state.token.user_name : null;
  },
  userAccount() {
    return state.token ? state.token.email : null;
  },
  userId() {
    return state.token ? state.token.user_id : null;
  },
  userRole() {
    return state.token ? state.token.role_names : null;
  },
  loginType() {
    return state.token ? state.token.login_type : null;
  },
};

const mutations = {
  INIT() {
    if (window.localStorage.getItem('token')) {
      state.token = JSON.parse(window.localStorage.getItem('token'));
      setAccessToken();
    }
  },
  STORE_TOKEN(_, token) {
    window.localStorage.setItem('token', JSON.stringify(token));
    state.token = token;
    setAccessToken();
  },
  LOGOUT() {
    state.token = null;
    state.info = null;
    state.security = null;
    window.localStorage.removeItem('token');
    window.location.href = '/';
  },
};

const actions = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
