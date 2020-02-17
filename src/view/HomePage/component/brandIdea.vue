<template>
    <div class="wrapBrandIdea">
        <div class="blockTitle">
            <p>品牌理念</p>
        </div>
        <div class="brandIdeaIntro" :style="{background: 'url('+ bgImg+')'}">
            <div class="bigFont">
                <h1>
                    <i>中国精神</i>
                    <i>中国制造</i>
                    <i>MADE IN CHINA</i>
                </h1>
            </div>
            <div class="smallFont">
                <h3>
                    <i>“cokage” is the shade made by trees.</i>
                    <i>We created this brand as a way to make use of forest products in our daily lives, </i>
                    <i>with the aim of expanding the bountiful and diverse forest of broad-leaved trees.</i>
                    <i>From the forests of Japan,we bring you our Biosphere model products. </i>
                </h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "brandIdea",
        data() {
            return{
                bgImg:require('@/assets/image/homePage/brandBg.jpg')
            }
        },
        mounted() {
            window.addEventListener('scroll',function () {
                if ( $('.brandIdeaIntro')[0]){
                    let viewportH = $(window).height()+$(window).scrollTop();
                    let brandItem = $('.brandIdeaIntro').offset().top;
                    if (brandItem < viewportH){
                        $('.brandIdeaIntro').addClass('leftScrollWidth')
                        $('i').stop().each((index,item) => {
                            setTimeout(function () {
                                $(item).addClass('oneByoneShow')
                            },(index+2)*150)
                        })
                    }
                }

            },true)
        }
    }
</script>

<style lang="scss" scoped>
.wrapBrandIdea{
    .blockTitle{
        p{
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
    }
    .brandIdeaIntro{
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 0;
        height: 40vw;
        left: 0;
        /*background: url("../../../assets/image/homePage/brandBg.jpg")  no-repeat;*/
        background-size: cover;
        background-position: 50% 85%;
        transition: all .5s linear;
        &.leftScrollWidth{
            width: 100vw;
            background-position: 50% 85%;
        }
        .bigFont{
            width: 100%;
            font-family: "Al Bayan";
            font-style: normal;
            font-size: .9rem;
            letter-spacing: .1rem;
            line-height: 3rem;
            text-transform: none;
            color: #fff;
            text-align: center;
            white-space: pre-wrap;
            text-rendering: optimizeLegibility;
            i{
                font-weight: 200;
            }
        }
        .smallFont{
            text-align: center;
            white-space: pre-wrap;
            color: #fff;
            font-family: "Times New Roman",Times,serif;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            letter-spacing: .12em;
            line-height: 2em;
            text-transform: none;
            text-rendering: optimizeLegibility;
            margin-top: 5vw;
        }
        i{
            display: block;
            margin-top: -30px;
            opacity: 0;
            transition: all .5s ease;
            &.oneByoneShow{
                margin-top: 0;
                opacity: 1;
            }
        }
    }
}
</style>
