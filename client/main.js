import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App.vue'
import Hello from './components/Hello.vue'
import TodoList from './components/TodoList.vue'
import AxiosDemo from './components/AxiosDemo.vue'
import iView from 'iview';

Vue.use(VueRouter);
Vue.use(iView);

const routerConfigs = {
    routes: [
        { name: 'home', path: ''},
        { name: 'hello', path: '/hello', component: Hello },
        { name: 'todo', path: '/todo', component: TodoList },
        { name: 'axios', path: '/axios', component: AxiosDemo }
    ]
};

const router = new VueRouter(routerConfigs);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

Vue.prototype.$ajax = axios;