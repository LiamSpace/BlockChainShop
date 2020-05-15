<template>
    <div class="wrapProductCollection">


        <div class="waterFlowShow">
            <div class="wrapVideo">
                <video loop="" muted="" playsinline="" autoplay="" preload="auto" src="../../../static/productAnimate.mp4"></video>
                <img v-if="imgShow" src="@/assets/image/productCollection/shopAnimate.png" alt="">
            </div>
            <div class="filterProduct">
                <div class="select dowebok">
                    <span class="placeholder">{{chooseTime ? chooseTime : '请选择时间'}}</span>
                    <ul>
                        <li v-for="(item,index) in timeArr" :key="index" @click="chooseTimeMethod(item)">{{item}}</li>
                    </ul>
                </div>

                <div class="select dowebok">
                    <span class="placeholder">{{chooseClassfiy ? chooseClassfiy:'请选择种类'}}</span>
                    <ul>
                        <li v-for="(item,index) in classfiyArr" :key="index" @click="chooseClassfiyMethod(item)">{{item}}</li>
                    </ul>
                </div>

                <div class="select dowebok">
                    <span class="placeholder">{{chooseBrand ? chooseBrand:'请选择品牌'}}</span>
                    <ul>
                        <li v-for="(item,index) in brandArr" :key="index" @click="chooseBrandMethod(item)">{{item}}</li>
                    </ul>
                </div>
            </div>
            <WaterFall v-if="isFlag" :list="productList" @loadMoreData="moreDataMethod" @itemClick="goToItemDetail"/>
            <div class="noData" v-if="!isFlag">
                <img src="@/assets/image/write.gif" alt="">
                <p>没有数据啦～</p>
            </div>
        </div>
    </div>
</template>

<script>
    import GoodProductList from '@/model/goodList'
    export default {
        name: "index",
        components:{
            "WaterFall": () => import('./component/waterFall')
        },
        data(){
            return{
                imgShow:false, //ie浏览器显示图片,
                timeArr:['ALL'],
                classfiyArr:['ALL'],
                brandArr:['ALL'],
                chooseTime:'', //选择时间
                chooseClassfiy:'', //选择种类
                chooseBrand:'', //选择品牌
                productList:[],
                listNum:8,
                listPage:1,
                isFlag: true,
                isFilterTag: true, //选择标志位

            }
        },
        created(){
            if(this.$route.query){
                this.chooseClassfiy = this.$route.query.data;
                this.queryFindList();
            }
        },
        mounted(){
            //判断是否为IE浏览器
            if (navigator.userAgent.indexOf("MSIE") >= -1 && navigator.userAgent.indexOf("Trident") >= -1){
                this.imgShow = false;
            } else{
                this.imgShow = true;
            }

            //获得筛选条件
            this.getFilterInfo();
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

            let ot = $('.filterProduct').offset().top;
            document.addEventListener('scroll',function () {

                let st = document.body.scrollTop || document.documentElement.scrollTop;
                if (st >= ot){
                    $('.filterProduct').addClass('dataFixed')
                } else {
                    $('.filterProduct').removeClass('dataFixed')
                }

            })


        },
        methods:{
            //筛选条件
            chooseTimeMethod(target){
                this.chooseTime = target;
                if (target === 'ALL'){
                    this.chooseTime = '';
                }
                this.isFilterTag = false;
                console.log(this.chooseTime)
                this.queryFindList()
            },
            chooseClassfiyMethod(target){
                this.chooseClassfiy = target;
                if (target === 'ALL'){
                    this.chooseClassfiy = '';
                }
                this.isFilterTag = false;
                console.log(this.chooseClassfiy)
                this.queryFindList();
            },
            chooseBrandMethod(target){
                this.chooseBrand = target;
                if (target === 'ALL'){
                    this.chooseBrand = '';
                }
                this.isFilterTag = false;
                this.queryFindList();
                console.log(this.chooseBrand)
            },

            // 请求查询列表
            queryFindList(){
                    let that = this;
                    let loadList = new GoodProductList();
                    loadList.findListResult({
                        filterTime: that.chooseTime,
                        filterKind: that.chooseClassfiy,
                        filterBrand: that.chooseBrand
                    }).then(res => {
                        if (res.code === 200){
                            if (res.filterResults.length > 0){
                                that.isFlag = true;
                                that.productList = res.filterResults;
                            } else {
                                that.isFlag = false;
                            }
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            },

            // 获取查询条件信息
            getFilterInfo(){
                let that = this;
                let loadList = new GoodProductList();
                loadList.getFilterCondition({}).then(res => {
                    if (res.code === 200){
                        let {openDate,productKind,productBrand} = res.filterArr;
                        if (openDate.length > 0){
                            let timeArr = []
                            openDate.forEach((item,index) => {
                                timeArr.push(item.openDate)
                            })
                            that.timeArr = that.timeArr.concat(timeArr);
                        }
                        if (productKind.length > 0){
                            let classfiyArr = [];
                            productKind.forEach((item,index) => {
                                classfiyArr.push(item.productKind)
                            })
                            that.classfiyArr = that.classfiyArr.concat(classfiyArr)
                        }
                        if (productBrand.length > 0){
                            let brandArr = []
                            productBrand.forEach((item,index) => {
                                brandArr.push(item.productBrand)
                            })
                            that.brandArr = that.brandArr.concat(brandArr);
                        }
                    }
                }).catch(err => {
                    console.log(err)
                })
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
                            that.isFlag = false;
                        }

                    }
                }).catch(err => {
                    console.log(err)
                })
            },


            //加载更多数据
            moreDataMethod:function () {
                if (this.isFlag && this.isFilterTag){
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
                        /*&[data-fixed="fixed"]{*/
                            /*position: fixed;*/
                            /*top:0;*/
                            /*left: 0;*/
                            /*margin: 0;*/
                            /*z-index: 10000;*/
                        /*}*/
                        &.dataFixed{
                            position: fixed;
                            top:0;
                            left: 0;
                            margin: 0;
                            z-index: 10000;
                        }
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
            .noData{
                /*position: absolute;*/
                width: 10%;
                margin: 4% auto 0;
                text-align: center;
                img{
                    width: 100%;
                    height: auto;
                }
            }
        }
    }

</style>
