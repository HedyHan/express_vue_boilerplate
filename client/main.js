import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Hello from './components/Hello.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { name: 'home', path: '/'},
        { name: 'hello', path: '/hello', component: Hello }
    ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
