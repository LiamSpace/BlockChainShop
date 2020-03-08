<template>
    <div class="wrapHomePage">
        <!--banner开始-->
        <swiper :options="swiperOption" class="wrapSwiper">
            <swiper-slide v-for="(item, index) in swiperSlides" :key="index" class="slideItem">
                <img :src="item.imgUrl" alt="">
                <div class="wrapText">

                    <div class="mask">

                    </div>
                    <div class="fontShow">
                        {{item.text}}
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!--banner结束-->
        <div class="mainContent">
            <div class="wrapTitle">
                <h3>We believe in the power of creativity to propel the world towards the right direction.</h3>
            </div>
            <FashionIntro/>
            <ClassifyProduct/>
            <BrandIdea/>
            <Partner/>
        </div>
    </div>
</template>

<script>
    import { swiper , swiperSlide } from 'vue-awesome-swiper'
    export default {
        components:{
            swiper,
            swiperSlide,
            "FashionIntro" : () => import('./component/fashionShow'),
            "ClassifyProduct" : () => import('./component/classifyProduct'),
            "BrandIdea" : () => import('./component/brandIdea'),
            "Partner" : () => import('./component/partner')
        },
        data(){
            return{
                swiperOption: {
                    loop:true,
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                swiperSlides: [
                    {
                        imgUrl:require('@/assets/image/homePage/clothes1.jpg'),
                        text:'国潮时代，自己做主'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/clothes2.jpg'),
                        text:'自己做主，潮流开道'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/clothes3.jpg'),
                        text:'国潮时代，自己做主'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/clothes4.jpg'),
                        text:'国潮时代，自己做主'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/clothes5.jpg'),
                        text:'国潮时代，自己做主'
                    },
                ]
            }
        },
        mounted() {
            window.addEventListener('scroll',function () {
                let that = this;
                if($('.wrapTitle')[0]){
                    let viewportH = $(window).height() + $(window).scrollTop();
                    let itemOffDis = $('.wrapTitle').offset().top;
                    if (itemOffDis+450 < viewportH){
                        $('.wrapHomePage').addClass('bgChangeColor');
                        $('.wrapTitle').addClass('fontChangeColor');
                    } else {
                        if ($('.wrapHomePage').hasClass('bgChangeColor') && $('.wrapTitle').hasClass('fontChangeColor')) {
                            $('.wrapHomePage').removeClass('bgChangeColor');
                            $('.wrapTitle').removeClass('fontChangeColor');
                        }
                    }
                }
            },true)
        }
    }
</script>

<style lang="scss" scoped>
    body{
        .wrapHomePage{
            width: 100%;
            background-color: #1A1A1A;
            transition: background-color .9s linear;
            &.bgChangeColor{
                background-color: #fff;
            }
            .wrapSwiper{
                margin-top: 80px;
                .slideItem{
                    position: relative;
                    .wrapText{
                        position: absolute;
                        width: 50%;
                        height: 100%;
                        line-height: 8rem;
                        margin: auto;
                        top: 0;
                        right: 0;
                        font-size: 3rem;
                        background: rgba(255, 255, 255, .3);
                        box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, .3);
                        overflow: hidden;
                        .mask{
                            position: absolute;
                            width: 100%;
                            height: 5rem;
                            top: 35%;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            background: lightseagreen;
                            filter: blur(20px);
                            z-index: 5;
                        }
                        .fontShow{
                            position: absolute;
                            width: 100%;
                            height: 5rem;
                            top: 35%;
                            line-height: 5rem;
                            z-index: 10;
                        }
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .mainContent{
                width: 80%;
                margin: 0 auto;
                .wrapTitle{
                    color: #fff;
                    font-size: 2.667rem;
                    padding: 0 14.28%;
                    &.fontChangeColor{
                        color: #1A1A1A;
                    }
                    h3{
                        width: 100%;
                        text-align: center;
                        margin: 4vw auto;
                        padding: 1rem 2rem;
                    }
                }
            }
        }
    }
</style>
