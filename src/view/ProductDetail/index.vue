<template>
    <div class="wrapProductDetail">
        <div class="topHead">
            <LeftImg :imageUrl="detailInfo.imgUrl"/>
            <RightIntro/>
        </div>
        <div class="footBottom">
            <MoreDate/>
        </div>
    </div>
</template>

<script>
    import LeftImg from './component/leftImg'
    import RightIntro from './component/rightIntro'
    import MoreDate from './component/moreDate'
    export default {
        name: "index",
        components:{
            LeftImg,
            RightIntro,
            MoreDate
        },
        data(){
            return{
                detailInfo: {
                    imgUrl:require('@/assets/image/homePage/show1.jpg')
                }
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
