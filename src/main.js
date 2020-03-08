import Vue from 'vue'
import App from './app'
import store from './store'
import router from './router'
import './permission' //设置权限
import './styles/index.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import vueLazy from 'vue-lazyload'


Vue.config.productionTip = false; //控制台信息
Vue.use(VueAwesomeSwiper);
Vue.use(vueLazy, {
    preLoad: .5,
    error: require('@/assets/image/imgError.png'),
    loading: require('@/assets/image/imgLoadding.gif'),
    attempt: 2
});

new Vue({
    store,
    router,
    render:h => h(App)
}).$mount('#app')
