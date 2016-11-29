// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)
import Page1 from './components/page1'
import Page2 from './components/page2'

Vue.use(VueRouter)

const routes = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
