import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import HelloWorld from '../components/HelloWorld.vue'
import Detail from '../components/Detail.vue'
import NotFound from '../components/NotFound.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/404', 
      name: 'notFound', 
      component: NotFound 
    },
    { 
      path: '/', 
      name: 'home', 
      component: HelloWorld 
    },
    { 
      path: '/detail/:id', 
      name: 'detail', 
      component: Detail,
      beforeEnter: (to, from, next) => {
        const { data } = store.state.global
        const post = data.find(post => post.id === parseInt(to.params.id))
        if (!post) {
          next('/404')
        } else {
          next()
        }
      }
    }
  ]
})

export default router