import Vue from 'vue'
import App from './app'
import store from './store'
import router from './router'
import './permission' //设置权限

new Vue({
    store,
    router,
    render:h => h(App)
}).$mount('#app')