import Vue from 'vue'
import App from './App.vue'
import ServerList from './ServerList.vue';

Vue.component('server-list', ServerList);

new Vue({
  el: '#app',
  render: h => h(App)
})
