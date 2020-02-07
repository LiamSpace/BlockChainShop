<template>
    <div class="wrapFashionShow">
        <div class='fashionItem' v-for="(item,index) in fashionArr" :key="index">
            <div class="leftImg">
                <img :src="item.imgUrl" alt="">
            </div>
            <div class="rightText">
                {{item.introText}}
                <div class="wrapBtn">
                    <a href="#" class="linkBtn">View case study</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "fashionShow",
        data(){
            return{
                fashionArr:[
                    {
                        imgUrl:require('@/assets/image/homePage/clothes10.jpg'),
                        introText:'What if you could wear the future?'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/itemShow1.jpg'),
                        introText:'#WeTheNorth'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/itemShow2.jpg'),
                        introText:'i-MMD as explained by three fans'
                    },
                    {
                        imgUrl:require('@/assets/image/homePage/itemShow3.jpg'),
                        introText:'What if you could wear the future?'
                    },
                ]
            }
        },
        mounted(){
            window.addEventListener('scroll',function () {
                let viewportH = $(window).height() +$(window).scrollTop()
                $('.fashionItem').each((index,item) => {
                    let eleH = $(item).offset().top;
                    let itemHeight = $('.fashionItem')[0].clientHeight;
                    if (eleH + itemHeight/2 < viewportH) {
                        $(item).addClass('changePos')
                    } else{
                        if ($(item).hasClass('changePos')) {
                            $(item).removeClass('changePos')
                        }
                    }
                })
            },true)
        }
    }
</script>

<style lang="scss" scoped>
.wrapFashionShow{
    width: 100%;
    margin-top: 10%;
    .fashionItem{
        position: relative;
        width: 100%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 4%;
        transition: all .8s ease-out;
        &:nth-of-type(odd){
            left: -200%;
        }
        &:nth-of-type(even){
            left: 200%;
            .leftImg{
                order: 5;
            }
            .rightText{
                order: 2;
            }
        }
        &.changePos{
            left: 0;
        }
        .leftImg{
            width: 50%;
            img{
                display: block;
                width: 100%;
                height: 100%;
            }
        }
        .rightText{
            width: 40%;
            font-family: visuelt,helvetica,arial,sans-serif;
            font-size: 2.6rem;
            font-weight: 400;
            line-height: 1.2;
            .wrapBtn{
                .linkBtn{
                    position: relative;
                    font-size: 18px;
                    background-color: transparent;
                    border: 0;
                    border-radius: 0;
                    color: currentColor;
                    cursor: pointer;
                    display: inline;
                    line-height: 1rem;
                    outline: none;
                    overflow: visible;
                    padding: 0;
                    text-decoration: none;
                    user-select: none;
                    &::after{
                        content: "";
                        position: absolute;
                        display: block;
                        width: 100%;
                        height: 2px;
                        transform: scaleX(0);
                        background-color: #666666;
                        bottom: -5px;
                        left: 0;
                        -webkit-transition: transform .25s ease-out;
                        transition: transform .25s ease-out;
                        z-index: 1;
                    }
                    &:hover::after{
                        transform: scaleX(1);
                    }
                }
            }

        }
    }
}
</style>
