import Vue from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const { data } = store.state.global

  if (!data) {
    store.dispatch('load')
      .then(() => {
        next()
      })
  } else {
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
