<template>
    <div class="wrapProductCollection">


        <div class="waterFlowShow">
            <!--@scrollReachBottom="getData"-->
            <vue-waterfall-easy :imgsArr="items" :imgWidth="420" :isRouterLink="true" :maxCols="4" @scrollReachBottom="loadMoreData">
                <div class="wrapAnimate" slot="waterfall-head">
                    <!--height: 304px; width: 438px;transform: matrix(1, 0, 0, 1, -3, 131.5)-->
                    <div class="wrapVideo">
                        <video loop="" muted="" playsinline="" autoplay="" preload="auto" src="../../../static/productAnimate.mp4"></video>
                        <img v-if="imgShow" src="@/assets/image/productCollection/shopAnimate.png" alt="">
                    </div>
                    <div class="filterProduct">
                        <div class="selectTime">
                            <select name="">
                                <option  v-for="(item,index) in timeArr" :value="item" :key="index">{{item}}</option>
                            </select>
                        </div>
                        <div class="classify">
                            <select name="">
                                <option  v-for="(item,index) in classfiyArr" :value="item" :key="index">{{item}}</option>
                            </select>
                        </div>
                        <div class="brand">
                            <select name="">
                                <option  v-for="(item,index) in brandArr" :value="item" :key="index">{{item}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="imgInfo" slot-scope="props">
                    <p class="titleInfo">第{{props.index+1}}张图片</p>
                    <p class="introInfo">{{props.value.imgDesc}}</p>
                </div>
                <!--瀑布流结束显示-->
                <div slot="waterfall-over">waterfall-over</div>
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
    import vueWaterfallEasy from 'vue-waterfall-easy'
    export default {
        name: "index",
        components:{
            vueWaterfallEasy
        },
        data(){
            return{
                imgShow:false, //ie浏览器显示图片,
                items:[
                    {
                        src:require('@/assets/image/homePage/clothes1.jpg'),
                        href:'/productDetail',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes2.jpg'),
                        href:'/shopNotice',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes3.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes4.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes5.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes10.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH1.png'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH2.png'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH3.png'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH4.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH5.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/1.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/4.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/3.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/5.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/6.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/7.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/8.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/9.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/10.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/15.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                ],
                timeArr:[
                    '2019-10-09',
                    '2015-08-09'
                ],
                classfiyArr:[
                    '鞋子',
                    '衣服'
                ],
                brandArr:[
                    'Nike',
                    'Adidas'
                ]

            }
        },
        mounted(){
            if (navigator.userAgent.indexOf("MSIE") >= -1 && navigator.userAgent.indexOf("Trident") >= -1){
                this.imgShow = false;
            } else{
                this.imgShow = true;
            }
        },
        methods:{
            loadMoreData(){
                console.log('111')
            }
        }
    }
</script>

<style lang="scss">
    .wrapProductCollection{
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        .waterFlowShow{
            width: 100%;
            height: 100vh;
            .ball-beat{
                display: none;
            }
            .vue-waterfall-easy-scroll{
                .wrapAnimate{
                    width: 100%;
                    .wrapVideo{
                        width: 30rem;
                        height: 25rem;
                        margin: 0 auto;
                        video{
                            width: 100%;
                        }
                        img{
                            position: absolute;
                            width: 100%;
                            left: 0;
                            top: 0;
                        }
                    }

                    .filterProduct{
                        width: 100%;
                        height: 6rem;
                        line-height: 6rem;
                        /*background: #1e1e1e;*/
                        display: flex;
                        justify-content: space-around;
                        div{
                            width: 10%;
                            text-align: center;
                            select{
                                /*border: none;*/
                                outline: none;
                                /*appearance:none;*/
                                /*-moz-appearance:none;*/
                                /*-webkit-appearance:none;*/
                                font-size: 2rem;
                                line-height: 2rem;
                                padding: 1rem;
                            }
                        }
                    }
                }
                .vue-waterfall-easy{
                    top: calc(80px + 25rem);
                }
                .img-box{
                    a.img-inner-box{
                        text-decoration: none;
                        .imgInfo{
                            text-align: center;
                            padding: 2rem 0;
                            color: #000;
                            .titleInfo{
                                margin-bottom: 10px;
                                font-size:1.5rem;
                                font-weight: 300;
                                line-height: 1.24;
                                color: #000;
                            }
                            .introInfo{
                                font-size:1rem;
                                font-weight: 700;
                                line-height: 1.24;
                                color: grey;
                            }
                            .vue-waterfall-slot{
                                img{
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
            }

        }
    }

</style>
