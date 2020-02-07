<template>
    <div class="wrapHeader">
        <div class="container">
            <div class="wrapLogo">
                <router-link to="/">
                    <img src="../../assets/image/shopLogo.png" alt="">
                </router-link>
            </div>
            <div class="MenuContainer">
                <ul>
                    <li v-for="(item,index) in menuArr">
                        <router-link
                                class="headerMenuLink"
                                @mouseover="hoverMethod(index)"
                                @mouseout="hoverLeave"
                                :to="item.tagLink">
                            {{item.tagName}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TopHeader",
        data(){
            return{
                hoverIndex: null,
                menuArr:[
                    {
                        tagName:"首页",
                        tagLink:'/'
                    },
                    {
                        tagName:"商品集合",
                        tagLink:'/productCollection'
                    },
                    {
                        tagName:"购买须知",
                        tagLink:'/shopNotice'
                    },
                    {
                        tagName:"关于我们",
                        tagLink:'/aboutUs'
                    },
                ]
            }
        },
        mounted(){
            window.addEventListener('scroll',function () {
                let that = this;
                let scrollH = $(window).scrollTop()
                if (scrollH > 0){
                    $('.wrapHeader').addClass('bgChange')
                    $('.headerMenuLink').addClass('linkChange')

                } else {
                    if ($('.wrapHeader').hasClass('bgChange') && $('.headerMenuLink').hasClass('linkChange')){
                        $('.wrapHeader').removeClass('bgChange')
                        $('.headerMenuLink').removeClass('linkChange')
                    }
                }
            })
        },
        methods:{
            hoverMethod:function (num) {
                $('ul li').not(":eq("+num+")").find('a').stop().animate({
                    'opacity': '.5'
                })
            },
            hoverLeave:function () {
                $('ul li').find('a').stop().animate({
                    'opacity': '1'
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapHeader{
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    background: #1A1A1A;
    z-index: 100;
    &.bgChange{
        background: #FFFFFF;
    }
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 80%;
        height: 80px;
        .wrapLogo{
            width: 40px;
            height: 40px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .MenuContainer{
            width: 60%;
            ul{
                display: flex;
                justify-content: space-around;
                margin:0 auto;
                list-style: none;
                li{
                    line-height: 20px;
                    letter-spacing: 2px;
                    a{
                        color: #fff;
                        opacity: 1;
                        text-decoration: none;
                        font-family: "Arial Rounded MT Bold";
                        &.linkChange{
                            color: #000;
                        }
                    }
                }
            }
        }
    }

}
</style>
