import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/**
 * A useless Vue Mixing to demonstrate
 * that is gets called properly when the
 * library component is imported.
 * 
 * Fun Fact: it won't get called if you have
 * The "double node_modules" issue due to 
 * `yarn link` or `yarn add` the `library` directory
 * instead of the `library/publish` directory.
 */
Vue.mixin( {
  beforeCreate() {
    // @ts-ignore
    this.$myMixinProp = "Mixin 'beforeCreate' was called. All is good.";
  }
} );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
