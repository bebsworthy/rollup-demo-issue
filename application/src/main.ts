import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin( {
  beforeCreate() {
    // @ts-ignore
    this.$myMixinProp = "Mixing 'beforeCreate' was called";
  }
} );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
