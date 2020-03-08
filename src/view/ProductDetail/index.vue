<template>
    <div class="wrapProductDetail">
        <div class="topHead">
            <LeftImg v-if="goodInfo" :imageUrl="goodInfo.productImg"/>
            <RightIntro :productInfo="goodInfo"/>
        </div>
        <div class="footBottom">
            <MoreDate/>
        </div>
    </div>
</template>

<script>
    import productInfo from  '@/model/goodDetail'
    export default {
        name: "index",
        components:{
            "LeftImg": () => import('./component/LeftImg'),
            "RightIntro": () => import('./component/rightIntro'),
            "MoreDate": () => import('./component/moreDate')
        },
        data(){
            return{
                goodId:'',
                goodInfo:null
            }
        },
        mounted() {
            if (this.$route.query){
                this.goodId = this.$route.query.productId;
                this.getProductInfo();
            }
        },
        methods:{
            getProductInfo:function () {
                let goodInfo = new productInfo();
                let that = this;
                goodInfo.getProductDetail({
                    productId: that.goodId
                }).then(res => {
                    if (res.code === 200){
                        that.goodInfo = res.goodDetail
                    }
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapProductDetail{
    width: 100%;
    margin: 80px auto 0;
    .topHead{
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 60vw;
    }
}
</style>
