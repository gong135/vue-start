// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Routers from './router';
import store from './store';

import * as filters from './filters/';
import mixins from './utils/vueMixin';

// reg component

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

Vue.component('app-header', AppHeader);
Vue.component('app-footer', AppFooter);

/* 关闭生产模式下给出的提示 */
Vue.config.productionTip = false;
// 调用配置项
Vue.use(VueRouter);
/* eslint-disable no-new */

// 配置过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 注册方法到Vue（相当于扩展了父组件的各种属性方法）
mixins.forEach(k => Vue.mixin(k));

store.commit('INIT');

// 配置路由
const RouterConfing = {
  mode: 'history',
  routes: Routers,
};

const router = new VueRouter(RouterConfing);


// 刷新页面是前 、后路由触发
router.beforeEach((to, from, next) => {
  console.log('页面开始加载');
  next();
});

router.afterEach(() => {
  console.log('页面结束加载');
});

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
