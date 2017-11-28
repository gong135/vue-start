/* eslint-disable */
// last param for chunk name
const Index = r => require.ensure([], () => r(require('../view/Index.vue')), 'index');
const NotFound = r => require.ensure([], () => r(require('../view/404.vue')), 'NotFound');
const Login = r => require.ensure([], () => r(require('../view/login.vue')), 'Login');


const routers = [
  { path: '/', component: Index ,name: 'Index'},
  { path: '/home', component: Index ,name: 'Index'},
  { path: '/login', component: Login ,name: 'Login'},
  {
    path: '*',
    component: NotFound,
    name: 'NotFound'
  },
];
export default routers;
