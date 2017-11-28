<template>
  <div>
    <div>
      姓名：<input type="text" v-model="user">
    </div>
    <div>
      密码：<input type="password" v-model="password">
    </div>
    <div @click="login">登陆 </div>

    <div>
      获取id: <input type="text" v-model="userID">
    </div>
    <div >
      <div class="niub">
        姓名：{{name}}
      </div>
      <div class="niub">
        邮箱：{{email }}
      </div>
      <div class="niub">
        ID：{{userID}}
      </div>
    </div>
  </div>
</template>
<script>
import { Base64 } from 'js-base64';
import user from '../service/user';

export default {
  name: 'login',
  data() {
    return {
      user: 'acvo4i@163.com',
      password: 'nong40',
      userID: null,
      name: '',
      email: '',
    };
  },
  methods: {
    login() {
      user.login({
        Authorization: `H5 ${this.base64str}`,
      })
        .then((res) => {
          const token = res.result;
          this.$store.commit('STORE_TOKEN', token);
        })
        .catch((ex) => {
          console.log('err', ex);
        });
    },
    loginOut() {},
  },
  computed: {
    base64str() {
      const tobase64 = Base64.encode(`${this.user}:${this.password}`);
      return tobase64;
    },
  },
  mounted() {
    console.log(this.$store.getters);
    this.name = this.$store.getters.userName;
    this.email = this.$store.getters.userAccount;
    this.userID = this.$store.getters.userId;
  },
};
</script>
<style>
.niub {
  /* color: #6d47d9; */
  background: -webkit-linear-gradient(left, #6d47d9, #f93d66);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* position: relative; */
  display: inline-block;
  z-index: 3;
  /* color: #fff; */
  padding: 2px 5px;
}
</style>

