<template>
    <div class="wrapProductCollection">


        <div class="waterFlowShow">
            <!--@scrollReachBottom="getData"-->
            <!--<vue-waterfall-easy :imgsArr="items" :imgWidth="420" :isRouterLink="true" :maxCols="4" @scrollReachBottom="loadMoreData">-->
                <!--<div class="wrapAnimate" slot="waterfall-head">-->
                    <!--height: 304px; width: 438px;transform: matrix(1, 0, 0, 1, -3, 131.5)-->
                    <!--<div class="filterProduct">-->
                        <!--<div class="selectTime">-->
                            <!--<select name="">-->
                                <!--<option  v-for="(item,index) in timeArr" :value="item" :key="index">{{item}}</option>-->
                            <!--</select>-->
                        <!--</div>-->
                        <!--<div class="classify">-->
                            <!--<select name="">-->
                                <!--<option  v-for="(item,index) in classfiyArr" :value="item" :key="index">{{item}}</option>-->
                            <!--</select>-->
                        <!--</div>-->
                        <!--<div class="brand">-->
                            <!--<select name="">-->
                                <!--<option  v-for="(item,index) in brandArr" :value="item" :key="index">{{item}}</option>-->
                            <!--</select>-->
                        <!--</div>-->

                        <!--<div class="select dowebok">-->
                            <!--<span class="placeholder">{{chooseTime}}</span>-->
                            <!--<ul>-->
                                <!--<li v-for="(item,index) in timeArr" :key="index" @click="chooseTimeMethod(item)">{{item}}</li>-->
                            <!--</ul>-->
                        <!--</div>-->

                        <!--<div class="select dowebok">-->
                            <!--<span class="placeholder">{{chooseClassfiy}}</span>-->
                            <!--<ul>-->
                                <!--<li v-for="(item,index) in classfiyArr" :key="index" @click="chooseClassfiyMethod(item)">{{item}}</li>-->
                            <!--</ul>-->
                        <!--</div>-->

                        <!--<div class="select dowebok">-->
                            <!--<span class="placeholder">{{chooseBrand}}</span>-->
                            <!--<ul>-->
                                <!--<li v-for="(item,index) in brandArr" :key="index" @click="chooseBrandMethod(item)">{{item}}</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="imgInfo" slot-scope="props">-->
                    <!--<p class="titleInfo">第{{props.index+1}}张图片</p>-->
                    <!--<p class="introInfo">{{props.value.imgDesc}}</p>-->
                <!--</div>-->
                <!--瀑布流结束显示-->
                <!--<div slot="waterfall-over">waterfall-over</div>-->
            <!--</vue-waterfall-easy>-->



            <div class="wrapVideo">
                <video loop="" muted="" playsinline="" autoplay="" preload="auto" src="../../../static/productAnimate.mp4"></video>
                <img v-if="imgShow" src="@/assets/image/productCollection/shopAnimate.png" alt="">
            </div>
            <div class="filterProduct">
                <div class="select dowebok">
                    <span class="placeholder">{{chooseTime}}</span>
                    <ul>
                        <li v-for="(item,index) in timeArr" :key="index" @click="chooseTimeMethod(item)">{{item}}</li>
                    </ul>
                </div>

                <div class="select dowebok">
                    <span class="placeholder">{{chooseClassfiy}}</span>
                    <ul>
                        <li v-for="(item,index) in classfiyArr" :key="index" @click="chooseClassfiyMethod(item)">{{item}}</li>
                    </ul>
                </div>

                <div class="select dowebok">
                    <span class="placeholder">{{chooseBrand}}</span>
                    <ul>
                        <li v-for="(item,index) in brandArr" :key="index" @click="chooseBrandMethod(item)">{{item}}</li>
                    </ul>
                </div>
            </div>
            <WaterFall :list="productList" @loadMoreData="moreDataMethod" @itemClick="goToItemDetail"/>
        </div>
    </div>
</template>

<script>
    import WaterFall from './component/waterFall'
    import GoodProductList from '@/model/goodList'
    export default {
        name: "index",
        components:{
            WaterFall
        },
        data(){
            return{
                imgShow:false, //ie浏览器显示图片,
                items:[
                    {
                        src:require('@/assets/image/homePage/clothes1.jpg'),
                        href:'/productDetail',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes2.jpg'),
                        href:'/shopNotice',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes3.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes4.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes5.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/clothes10.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH1.png'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH2.png'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH3.png'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH4.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/homePage/imgH5.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/1.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/4.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/3.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/5.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/6.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/7.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/8.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/9.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/10.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                    {
                        src:require('@/assets/image/productCollection/15.jpg'),
                        href:'#',
                        imgDesc:'nice good pic'
                    },
                ],
                timeArr:[
                    '2019-10-09',
                    '2015-08-09'
                ],
                classfiyArr:[
                    '鞋子',
                    '衣服'
                ],
                brandArr:[
                    'Nike',
                    'Adidas'
                ],
                chooseTime:'请选择', //选择时间
                chooseClassfiy:'请选择', //选择种类
                chooseBrand:'请选择', //选择品牌
                productList:[],
                listNum:8,
                listPage:1,
                isFlag: true
            }
        },
        mounted(){
            //判断是否为IE浏览器
            if (navigator.userAgent.indexOf("MSIE") >= -1 && navigator.userAgent.indexOf("Trident") >= -1){
                this.imgShow = false;
            } else{
                this.imgShow = true;
            }

            //加载图片列表
            this.loadProductList(this.listPage,this.listNum);

    $('.select').on('click', '.placeholder', function(e) {
                var parent = $(this).closest('.select');
                if (!parent.hasClass('is-open')) {
                    parent.addClass('is-open');
                    $('.select.is-open').not(parent).removeClass('is-open');
                } else {
                    parent.removeClass('is-open');
                }
                e.stopPropagation();
            }).on('click', 'ul>li', function() {
                var parent = $(this).closest('.select');
                // parent.removeClass('is-open').find('.placeholder').text($(this).text());
            });

            $('body').on('click', function() {
                $('.select.is-open').removeClass('is-open');
            });
        },
        methods:{
            //筛选条件
            chooseTimeMethod(target){
                this.chooseTime = target;
                console.log(this.chooseTime)
            },
            chooseClassfiyMethod(target){
                this.chooseClassfiy = target;
                console.log(this.chooseClassfiy)
            },
            chooseBrandMethod(target){
                this.chooseBrand = target;
                console.log(this.chooseBrand)
            },

            //加载列表数据
            loadProductList:function(number,pageNum){
                let  loadList = new GoodProductList();
                let that = this;
                loadList.getProductList({
                    num:number,
                    page:pageNum
                }).then(res => {
                    if (res.code === 200){
                        if (res.goodList.length > 0){
                            that.productList = that.productList.concat(res.goodList)
                        } else {
                            that.isFlag = false
                        }

                    }
                }).catch(err => {
                    console.log(err)
                })
            },


            //加载更多数据
            moreDataMethod:function () {
                if (this.isFlag){
                    let currentVal = this.listPage;
                    currentVal++;
                    this.loadProductList(this.listNum,currentVal)
                }

            },
            //进入到产品详情
            goToItemDetail:function (goodInfo) {
                if (goodInfo) {
                    this.$router.push({
                        path:'/productDetail',
                        query:{
                            productId:goodInfo.productID
                        }
                    })
                }

            }
        }
    }
</script>

<style lang="scss">
    .wrapProductCollection{
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        .waterFlowShow{
            width: 100%;
            .ball-beat{
                display: none;
            }
                    .wrapVideo{
                        width: 30rem;
                        height: 25rem;
                        margin: 0 auto;
                        video{
                            width: 100%;
                        }
                        img{
                            position: absolute;
                            width: 100%;
                            left: 0;
                            top: 0;
                        }
                    }

                    .filterProduct{
                        width: 100%;
                        height: 3rem;
                        line-height: 3rem;
                        /*background: #1e1e1e;*/
                        display: flex;
                        justify-content: space-around;
                        .select {
                            position: relative;
                            display: block;
                            margin: 0 auto;
                            width: 100%;
                            height: 5rem;
                            color: #cccccc;
                            vertical-align: middle;
                            text-align: left;
                            user-select: none;
                            -webkit-touch-callout: none;
                        }
                        .select .placeholder {
                            position: relative;
                            display: block;
                            background-color: #393d41;
                            z-index: 1;
                            padding: 1em;
                            border-radius: 2px;
                            cursor: pointer;
                        }
                        .select .placeholder:hover {
                            background: #34383c;
                        }
                        .select .placeholder:after {
                            position: absolute;
                            right: 1em;
                            top: 50%;
                            transform: translateY(-50%);
                            font-family: 'FontAwesome';
                            content: '\f078';
                            z-index: 10;
                        }
                        .select.is-open .placeholder:after {
                            content: '\f077';
                        }
                        .select.is-open ul {
                            display: block;
                        }
                        .select.select--white .placeholder {
                            background: #fff;
                            color: #999;
                        }
                        .select.select--white .placeholder:hover {
                            background: #fafafa;
                        }
                        .select ul {
                            display: none;
                            position: absolute;
                            overflow: hidden;
                            width: 100%;
                            background: #fff;
                            border-radius: 2px;
                            top: 100%;
                            left: 0;
                            list-style: none;
                            margin: 5px 0 0 0;
                            padding: 0;
                            z-index: 100;
                        }
                        .select ul li {
                            display: block;
                            text-align: left;
                            padding: 0.8em 1em 0.8em 1em;
                            color: #999;
                            cursor: pointer;
                        }
                        .select ul li:hover {
                            background: #4ebbf0;
                            color: #fff;
                        }




                        div{
                            width: 10%;
                            text-align: center;
                            select{
                                /*border: none;*/
                                outline: none;
                                /*appearance:none;*/
                                /*-moz-appearance:none;*/
                                /*-webkit-appearance:none;*/
                                font-size: 2rem;
                                line-height: 2rem;
                                padding: 1rem;
                            }
                        }
                    }
                .img-box{
                    a.img-inner-box{
                        text-decoration: none;
                        .imgInfo{
                            text-align: center;
                            padding: 2rem 0;
                            color: #000;
                            .titleInfo{
                                margin-bottom: 10px;
                                font-size:1.5rem;
                                font-weight: 300;
                                line-height: 1.24;
                                color: #000;
                            }
                            .introInfo{
                                font-size:1rem;
                                font-weight: 700;
                                line-height: 1.24;
                                color: grey;
                            }
                            .vue-waterfall-slot{
                                img{
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                }
        }
    }

</style>
