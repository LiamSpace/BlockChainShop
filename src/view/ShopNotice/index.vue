<template>
    <div class="wrapShopNotice">
        <div class="noticeTitle" :style="{background:'url('+titleBg+')'}">
            购物须知
        </div>
        <div class="warpNoticeContent">
            <div class="noticeItem" v-for="(item,index) in noticeArr" :key="index">
                <div class="itemLeft">
                    <div class="wrapItemImg">
                        <img :src="item.itemImg" alt="">
                    </div>
                    <div class="wrapItemContent">
                        <p>{{item.itemEnglishTitle}}</p>
                        <p>{{item.itemTitle}}</p>
                    </div>
                </div>
                <div class="itemRight">
                    {{item.itemDesc}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                noticeArr:[
                    {
                        itemTitle:'关于快递',
                        itemEnglishTitle:'EXPRESS DELIVERY',
                        itemImg:require('@/assets/image/noticeImg/express.png'),
                        itemDesc:'本店默认顺丰快递，如需其他快递，请可联系平台，进行更换快递。'
                    },
                    {
                        itemTitle:'关于库存',
                        itemEnglishTitle:'THE STOCK',
                        itemImg:require('@/assets/image/noticeImg/stock.png'),
                        itemDesc:'能拍下付钱有货物的，是灰色或者下架状态的是断货的，商品是付款减库存'
                    },
                    {
                        itemTitle:'关于尺寸',
                        itemEnglishTitle:'THE SIZE',
                        itemImg:require('@/assets/image/noticeImg/size.png'),
                        itemDesc:'因不同人的体型不一，而且每一个人对宽松修身标准也不一样，所以建议您参考尺寸再购买！'
                    },
                    {
                        itemTitle:'关于发货',
                        itemEnglishTitle:'THE SHPMENT',
                        itemImg:require('@/assets/image/noticeImg/clock.png'),
                        itemDesc:'所有订单均在付款后72小时内发货，如遇特殊情况会即时通知您'
                    },
                    {
                        itemTitle:'关于退换',
                        itemEnglishTitle:'RETURN OF GOODS',
                        itemImg:require('@/assets/image/noticeImg/recyle.png'),
                        itemDesc:'在包裹签收7天内，商品吊牌完整，未穿着、未洗涤、不影响二次销售的情况下可以退换'
                    },
                ],
                titleBg:require('@/assets/image/homePage/clothes1.jpg')
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapShopNotice{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .noticeTitle{
        width: 100%;
        height: 8vw;
        line-height: 8vw;
        text-align: center;
        color: #666666;
        font-size: 2.667rem;
        font-family: Helvetica,Arial,sans-serif;
        /*margin: 4vw auto;*/
        margin-bottom: 2vw;
        padding: 1rem 2rem;
        font-weight: 400;
        background: red;
    }
    .warpNoticeContent{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .noticeItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            height: 10rem;
            margin-bottom: 2rem;
            box-sizing: border-box;
            .itemLeft{
                display: flex;
                align-items: center;
                width: 60%;
                .wrapItemImg{
                    display: flex;
                    align-items: center;
                    width: 5rem;
                    img{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .wrapItemContent{
                    width: 100%;
                    height: 5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-left: 5%;
                    p{
                        color: #000;
                        &:first-child{
                            font-size: .6rem;
                            font-weight: 600;
                        }
                        &:last-child{
                            font-size: 1.5rem;
                            font-weight: 800;
                            line-height: 2.5rem;
                        }
                    }
                }
            }
            .itemRight{
                width: 60%;
                font-size: 1.2rem;
                font-weight: 500;
                line-height: 25px;
                letter-spacing: 1px;
                margin-top: .8rem;
            }
        }
    }
}

</style>
