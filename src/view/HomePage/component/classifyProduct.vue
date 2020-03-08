<template>
    <div class="wrapClassify">
        <p class="blockTitle">商品分类</p>
        <div class="wrapClassifyItem">
            <div class="productItem" v-for="(item,index) in productArr" :key="index">
                <a href="#">
                    <div class="hoverImg" :style="{background: 'url('+item.maskImg+')',backgroundSize:'cover',backgroundPosition: '50% 50%'}">
                        <span :style="{background: 'url('+item.hoverImg+')',backgroundSize:'cover',backgroundPosition: '50% 50%'}"></span>
                    </div>
                    <p>{{item.imgIntro}}<span class="line"></span></p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classifyProduct",
        data(){
            return{
                productArr:[
                    {
                        maskImg:require('@/assets/image/homePage/imgH1.jpg'),
                        hoverImg:require('@/assets/image/homePage/imgH2.jpg'),
                        imgIntro:'衣服'
                    },
                    {
                        maskImg:require('@/assets/image/homePage/imgH3.jpg'),
                        hoverImg:require('@/assets/image/homePage/imgH4.jpg'),
                        imgIntro:'裤子'
                    },
                    {
                        maskImg:require('@/assets/image/homePage/imgH5.jpg'),
                        hoverImg:require('@/assets/image/homePage/imgH6.jpg'),
                        imgIntro:'鞋子'
                    },
                    {
                        maskImg:require('@/assets/image/homePage/imgH7.jpg'),
                        hoverImg:require('@/assets/image/homePage/imgH8.jpg'),
                        imgIntro:'配件'
                    },
                    {
                        maskImg:require('@/assets/image/homePage/imgH1.jpg'),
                        hoverImg:require('@/assets/image/homePage/imgH2.jpg'),
                        imgIntro:'袜子'
                    },
                    {
                        maskImg:require('@/assets/image/homePage/imgH3.jpg'),
                        hoverImg:require('@/assets/image/homePage/imgH4.jpg'),
                        imgIntro:'帽子'
                    },
                ]
            }
        },
        mounted(){
            let imgArrow = require('@/assets/image/homePage/title-hover.png')
            $('.productItem').each((index,item) => {
                let targetItem = $(item).find('.hoverImg span')
                let targetFont = $(item).find('p')
                // $(item).delay(function () {
                //     $(this).addClass('itemActive')
                // },500)

                $(item).find('.hoverImg').hover(function () {
                    targetItem.addClass('activeShow')
                    targetFont.addClass('fontPos')
                    targetFont.find('.line').addClass('activeHover')
                },function () {
                    targetItem.removeClass('activeShow')
                    targetFont.removeClass('fontPos')
                    targetFont.find('.line').removeClass('activeHover')
                })
            });

            window.addEventListener('scroll',function () {
                if ($('.productItem')[0]){
                    let viewportH = $(window).height() + $(window).scrollTop();
                    let itemDis = $('.productItem').offset().top;
                    let itemHeight = $('.productItem')[0].clientHeight;
                    if (itemDis+itemHeight/2 < viewportH){
                        $('.productItem').each((index,item) => {
                            setTimeout(function () {
                                $(item).addClass('itemActive')
                            },index*200)
                        })
                    }else {
                        $('.productItem').each((index,item) => {
                            if ($(item).hasClass('itemActive')) {
                                $(item).removeClass('itemActive')
                            }
                        })
                    }
                }
            },true)

        }
    }
</script>

<style lang="scss" scoped>
.wrapClassify{
    margin-top: 10%;
    .blockTitle{
        width: 30%;
        height: 5vw;
        line-height: 5vw;
        text-align: center;
        color: rgb(102, 102, 102);
        font-size:2.667rem;
        font-family: Helvetica,Arial,sans-serif;
        margin: 4vw auto;
        padding: 1rem 2rem;
        font-weight: 400;
    }
    .wrapClassifyItem{
        display: flex;
        flex-wrap: wrap;
        /*margin-top: 10rem;*/
        .productItem{
            width: 33.3%;
            height: 20vw;
            opacity: 0;
            margin-top: 15px;
            transition: all .5s ease-in;
            &.itemActive{
                opacity: 1;
                margin-top: 0;
            }
            a{
                color: rgb(102, 102, 102);
                text-decoration: none;
            }
            p{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                font-size: 1.3rem;
                line-height: 4vw;
                font-weight: 700;
                text-align: center;
                transform: translateX(0);
                transition: all .25s ease-in;
                &.fontPos{
                    transform: translateX(-1.5rem);
                }
                .line{
                    width: 0;
                    height: 1px;
                    margin-left: 10px;
                    background: rgb(102, 102, 102);
                    transition: all .25s ease-in;
                    &.activeHover{
                        width: 4rem;
                    }
                }
            }

            .hoverImg{
                width: 100%;
                height: 15vw;
                overflow: hidden;
                perspective: 500px;
                cursor: url('../../../assets/image/homePage/title-hover.png') 60 12,auto;
                span{
                    display: block;
                    opacity: 0;
                    height: 15vw;
                    transform: scale(1);
                    transition: all .5s ease-out;
                    &.activeShow{
                        opacity: 1;
                        transform:scale(1.1);
                    }
                }
            }
        }
    }
}
</style>
