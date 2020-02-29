import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('@/view/HomePage/index')
        },
        {
            path:'/login',
            name:'login',
            component: () => import('@/view/Login/index')
        },
        {
            path:'/productCollection',
            name:'productCollection',
            component: () => import('@/view/ProductCollection/index')
        },
        {
            path:'/shopNotice',
            name:'shopNotice',
            component: () => import('@/view/ShopNotice/index')
        },
        {
            path:'/aboutUs',
            name:'aboutUs',
            component: () => import('@/view/AboutUs/index')
        },
        {
            path:'/productDetail',
            name:'productDetail',
            component: () => import('@/view/ProductDetail/index')
        },
        {
            path:'/personCenter',
            name:'personCenter',
            component: () => import('@/view/PersonCenter/index')
        }
        // {
            //添加路由
            // path:'',
            // name:'login',
            // component: () => import('@/')
        // }
    ]
})
