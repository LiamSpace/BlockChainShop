<template>
    <div class="wrapRightIntro">
        <div class="innerRightIntro">
            <div class="clothTitle">
                <h1>Loic Nottet au Pleyel </h1>
            </div>
            <div class="openDate detailItem">
                <div class="label">Date /</div>
                <div class="dateTime detailInfo">{{goodsArr.openTime}}</div>
            </div>
            <div class="place detailItem">
                <div class="label">Place /</div>
                <div class="wherePlace detailInfo">{{goodsArr.openPlace}}</div>
            </div>
            <div class="price detailItem">
                <div class="label">Price /</div>
                <div class="muchPrice detailInfo">{{goodsArr.openPrice}}</div>
            </div>
            <div class="size detailItem">
                <div class="label">Size /</div>
                <div class="muchSize detailInfo">{{goodsArr.openSize}}</div>
            </div>
            <!--<div class="buy detailItem">-->
                <!--<div class="label">Buy /</div>-->
                <!--<div class="much detailInfo"></div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "rightIntro",
        data(){
            return {
                goodsArr:{
                    openTime:'2020-05-02 09:00~12:00',
                    openPlace:'四川成都；北京朝阳；',
                    openPrice:'$12000.00',
                    openSize:'S \\ M \\ L \\ XL'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapRightIntro{
    width: 40vw;
    height: 60vw;
    background: #1f1f1f;
    /*border: 1px solid green;*/
    .innerRightIntro{
        width: 80%;
        margin: 2rem auto;
        .clothTitle{
            h1{
                color: #FFFFFF;
                font-size: 48px;
                font-weight: 900;
                line-height: 51px;
            }
        }
        .detailItem{
            height: 5rem;
            line-height: 5rem;
            margin-top: 1.5rem;
            padding: .5rem;
            /*border: 1px solid red;*/
            .label{
                width: 20%;
                font-size: 1.3rem;
                font-weight: 900;
                color: #6f6f6f;
                float: left;
            }
            .detailInfo{
                color: #e1e1e1;
            }

        }
        .price{

        }
        .buy{

        }


    }

}
</style>
