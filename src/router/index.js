import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode:"history",
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('@/view/HomePage/index'),
            meta:{
                title:'首页'
            }
        },
        {
            path:'/login',
            name:'login',
            component: () => import('@/view/Login/index'),
            meta:{
                title:'登陆注册'
            }
        },
        {
            path:'/productCollection',
            name:'productCollection',
            component: () => import('@/view/ProductCollection/index'),
            meta:{
                title:'商品列表'
            }
        },
        {
            path:'/shopNotice',
            name:'shopNotice',
            component: () => import('@/view/ShopNotice/index'),
            meta:{
                title:'注意事项'
            }
        },
        {
            path:'/aboutUs',
            name:'aboutUs',
            component: () => import('@/view/AboutUs/index'),
            meta:{
                title:'关于我们'
            }
        },
        {
            path:'/productDetail',
            name:'productDetail',
            component: () => import('@/view/ProductDetail/index'),
            meta:{
                title:'商品详情'
            }
        },
        {
            path:'/personCenter',
            name:'personCenter',
            component: () => import('@/view/PersonCenter/index'),
            meta:{
                title:'个人中心'
            }
        }
        // {
            //添加路由
            // path:'',
            // name:'login',
            // component: () => import('@/')
        // }
    ]
})
