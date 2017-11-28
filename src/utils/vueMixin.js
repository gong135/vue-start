const mixin = {
  methods: {
    showLoading() {
      this.$store.commit('toggleLoading', true);
    },
    closeLoading() {
      this.$store.commit('toggleLoading', false);
    },
    promiseLoading(promise) {
      this.showLoading();
      if (promise.then) {
        promise.finally(() => {
          this.closeLoading();
        });
      }
    },
  },
};

export default [mixin];   // esl
