<template>
    <div class="wrapMoreDate">
        <div class="moreDateTitle">
            更多款式
        </div>
        <div class="wrapMoreDateItem">
            <div class="dataItem" v-for="(item,index) in moreDataArr" :key="index">
                <div class="frontShow"  >
                    <div class="frontContent">
                        <span class="date"><strong>10.05</strong>/2019</span>
                        <span class="title">{{item.rotateTitle}}</span>
                        <span class="place">{{item.rotatePlace}}</span>
                    </div>
                </div>
                <div class="backHidden">
                    <img :src="item.rotateImg" alt="">
                    <div class="backContent">
                        <router-link to="/">see</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "moreDate",
        data(){
            return{
                moreDataArr:[
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show2.jpg'),
                    },
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show3.jpg'),
                    },
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show4.jpg'),
                    },
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show1.jpg'),
                    },
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show3.jpg'),
                    },
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show4.jpg'),
                    },
                    {
                        rotateTitle:'Loic Nottet at Frannz Club Berlin',
                        rotatePlace:'四川成都；北京朝阳；',
                        rotateImg:require('@/assets/image/homePage/show1.jpg'),
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapMoreDate{
    width: 100%;
    .moreDateTitle{
        width: 50%;
        margin: 2rem auto;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 500;
    }
    .wrapMoreDateItem{
        width: 100vw;
        margin: 0 auto;
        .dataItem{
            position: relative;
            width: 20vw;
            height: 20vw;
            border: 1px solid #000;
            box-sizing: border-box;
            float: left;
            .frontShow{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: rgb(249, 164, 64);
                transform: perspective(800px) rotateY(0deg);
                backface-visibility: hidden;
                transition: .8s;
                .frontContent{
                    width: 70%;
                    height: 70%;
                    /*border: 1px solid red;*/
                    .date{
                        display: block;
                        font-weight: 400;
                        font-size: 2rem;
                        /*line-height: 100%;*/
                        color: #fff;
                        strong{
                            padding-right: 1rem;
                            font-size: 4rem;
                            font-weight: 900;
                        }

                    }
                    .title{
                        display: block;
                        width: 70%;
                        color: #000000;
                        font-size: 2rem;
                        font-weight: 900;
                        margin: 10% auto;
                        line-height: normal;
                        }
                    .place{
                        display: block;
                        width: 70%;
                        margin: 0 auto;
                        /*margin-top: 17px;*/
                        font-weight: 900;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: #fff;
                    }
                }
            }
            .backHidden{
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: green;
                transform: perspective(800px) rotateY(180deg);
                backface-visibility: hidden;
                transition: .8s;
                .backContent{
                    position: absolute;
                    width: 95%;
                    height: 95%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 5px solid #fff;
                    a{
                        display: block;
                        width: 25%;
                        height:8%;
                        color: #fff;
                        font-size: 2rem;
                        line-height: 2rem;
                        text-align: center;
                        font-weight: 600;
                        letter-spacing: .5rem;
                        text-decoration: none;
                        border: 5px solid #fff;
                    }
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            &:hover .frontShow{
                transform: perspective(800px) rotateY(-180deg);
            }
            &:hover .backHidden{
                transform: perspective(800px) rotateY(0deg);
            }
        }
    }
}
</style>
