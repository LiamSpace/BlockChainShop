<template>
    <div class="wrapAboutUs">
        <div class="aboutUsTitle" :style="{background:'url('+titleBg+')',backgroundPosition: '0% 15%'}">
            关于我们
        </div>
        <div class="aboutContent">
            <div class="contentTitle">
                团队成员
            </div>
            <div class="wrapContentItem">
                <div class="wrapPersonImg" v-for="(item,index) in teamMember" :key="index">
                    <div class="personImg">
                        <img :src="item.personImg" alt="">
                    </div>
                    <div class="personDesc">
                        <p>{{item.personName}}</p>
                    </div>
                </div>
            </div>
            <div class="contentTitle">
                公益项目
            </div>
            <div class="wrapContentItem">
                <div class="wrapEarth">
                    <img :src="earthImg" alt="">
                </div>
                <div class="wrapEarthIntro">
                    <p>每卖一件商品，商品的千分之一用于绿洲计划。</p>
                    <p>社会责任是我们创造重要事物的使命的一部分。
                        我们以我们的价值观为基础，相信我们有能力为
                        我们的社区和社会做好事。为此，我们也鼓励我们
                        的客户和合作伙伴尽自己的责任。我们乐观地展望未
                        来，尽管我们还有很长的路要走，但我们正在改进，并朝
                        着正确的方向采取步骤，共同努力。
                    </p>
                </div>
            </div>
            <div class="moreSentence">
                <h3>公平、公正的买卖，区块链线上商城值得你拥有～</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import members from '@/model/teamMember'
    export default {
        name: "index",
        data(){
            return{
                titleBg:require('@/assets/image/homePage/clothes1.jpg'),
                earthImg:require('@/assets/image/aboutUS/earth.gif'),
                teamMember:[]
            }
        },
        mounted(){
            let team = new members();
            let that = this;
            team.getMember({}).then(res => {
                console.log(res)
                if (res.code === 200){
                    that.teamMember = res.pArr
                }
            }).catch(err => {
                console.log(err)
            });
        }
    }
</script>

<style lang="scss" scoped>
.wrapAboutUs{
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .aboutUsTitle{
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
        background-position: 50% 50%;
    }
    .aboutContent{
        .contentTitle{
            font-size: 2.667rem;
            display: block;
            font-family: visuelt,helvetica,arial,sans-serif;
            font-weight: 400;
            line-height: 1.2;
            color: #000;
            margin: 0 0 1em;
            padding-left: 5vw;
        }
        .wrapContentItem{
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            .wrapEarth{
                width: 35%;
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .wrapEarthIntro{
                width: 50%;
                height: 20rem;
                padding-top: 3%;
                padding-left: 15%;
                p{
                    &:first-child{
                        width: 80%;
                        color: #000;
                        font-family: visuelt,helvetica,arial,sans-serif;
                        font-size: calc(22px + 1vw);
                        font-weight: 400;
                        line-height: 1.4;
                        text-indent: 2vw;
                    }
                    &:last-child{
                        width: 80%;
                        font-family: visuelt,helvetica,arial,sans-serif;
                        font-size: 18px;
                        font-weight: 300;
                        line-height: 1.6;
                        letter-spacing: 2px;
                        text-indent: .8vw;
                        padding-top: 3%;
                    }
                }
            }
            .wrapPersonImg{
                width: 25%;
                margin-bottom: 55px;
                overflow: hidden;
                transition: all .25s ease-out;
                &:hover{
                    transform: scale(1.1);
                }
                .personImg{
                    width: 100%;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
                .personDesc{
                    font-size: 1.5rem;
                    font-weight: 300;
                    margin-bottom: 0;
                    white-space: normal;
                    margin-top: 10px;


                }
            }
        }
        .moreSentence{
            width: 80%;
            margin: 0 auto;
            text-align: center;
            padding-top: 10rem;
            h3{
                color: #000;
                font-size: 2.2rem;
                font-weight: 380;
                letter-spacing: 2px;
            }
        }
    }
}
</style>
