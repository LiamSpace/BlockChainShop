<template>
    <div class="wrapPartner">
        <div class="blockTitle">
            <p>合作伙伴</p>
        </div>
        <div class="partnerLogo">
            <div class="partnerItem" v-for="(item,index) in brandLogoArr" :key="index">
                <div class="wrapLogo" >
                    <img class="greyImg" :src="item.logoUrl" alt="">
                    <img class="animateImg" :src="item.animateUrl" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "partner",
        data(){
            return{
                brandLogoArr:[
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/omron.png'),
                        logoName:'omron',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/easyoga.png'),
                        logoName:'easyoga',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/lifesense.png'),
                        logoName:'lifesense',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/puma.png'),
                        logoName:'puma',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/skechers.png'),
                        logoName:'skechers',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/behance.png'),
                        animateUrl:'http://tvax3.sinaimg.cn/large/7e84681dgy1gdonf7fdueg20m80go4ej.gif',
                        logoName:'aliyun',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/Facebook.png'),
                        animateUrl:'http://tva3.sinaimg.cn/large/7e84681dgy1gdonf82fzng20m80go4qp.gif',
                        logoName:'baidu',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/gmail.png'),
                        animateUrl:'http://tvax1.sinaimg.cn/large/7e84681dgy1gdonf8ghlbg20m80goav3.gif',
                        logoName:'aliyun',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/google.png'),
                        animateUrl:'http://tva3.sinaimg.cn/large/7e84681dgy1gdonf8qt7qg20m80gogtq.gif',
                        logoName:'baidu',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/Instagram.png'),
                        animateUrl:'http://tvax3.sinaimg.cn/large/7e84681dgy1gdonf90sxtg20m80gon4l.gif',
                        logoName:'aliyun',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/linkin.png'),
                        animateUrl:'http://tva3.sinaimg.cn/large/7e84681dgy1gdonf9d669g20m80gotuy.gif',
                        logoName:'aliyun',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/telegram.png'),
                        animateUrl:'http://tvax4.sinaimg.cn/large/7e84681dgy1gdonf9nrd0g20m80go487.gif',
                        logoName:'baidu',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/twitter.png'),
                        animateUrl:'http://tva4.sinaimg.cn/large/7e84681dgy1gdonf9xq7jg20m80gojwz.gif',
                        logoName:'aliyun',
                    },
                    {
                        logoUrl:require('@/assets/image/homePage/brandLogo/youtube.png'),
                        animateUrl:'http://tva1.sinaimg.cn/large/7e84681dgy1gdonfaeelsg20m80go1kx.gif',
                        logoName:'baidu',
                    },

                ]
            }
        },
        mounted(){
            $('.partnerItem').hover(function () {
                $(this).find('.greyImg').addClass('colorImg')
                $(this).find('.animateImg').addClass('animateImgShow')
            },function () {
                $(this).find('.greyImg').removeClass('colorImg')
                $(this).find('.animateImg').removeClass('animateImgShow')
            })
        }
    }
</script>

<style lang="scss" scoped>
.wrapPartner{
    margin-top: 48vw;
    .blockTitle{
        p{
            width: 30%;
            height: 5vw;
            line-height: 5vw;
            text-align: center;
            color: rgb(102, 102, 102);
            font-size:2.667rem;
            font-family: Helvetica,Arial,sans-serif;
            margin: 0 auto;
            padding: 1rem 2rem;
            font-weight: 400;
        }
    }
    .partnerLogo{
        display: flex;
        flex-wrap: wrap;
        .partnerItem{
            display: flex;
            width: 15vw;
            justify-content: center;
            align-items: center;
            margin-top: 3vw;
            .wrapLogo{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 60%;
                overflow: hidden;
                img{
                    display: block;
                    width: 65%;
                    height: auto;
                    transition: all .25s ease-in;
                    &.greyImg{
                        filter: grayscale(100%);
                        opacity: 1;
                    }
                    &.colorImg{
                        /*opacity: 0;*/
                        filter: grayscale(0);
                    }
                    &.animateImg{
                        position: absolute;
                        opacity: 0;
                        z-index: 10;
                    }
                    &.animateImgShow{
                        width: 10vw;
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>
