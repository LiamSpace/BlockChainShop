<template>
    <div class="wrapLeftImg">
        <img :src="imageUrl" alt="">
    </div>
</template>

<script>
    export default {
        name: "leftImg",
        props:{
           imageUrl:String
        }
    }
</script>

<style lang="scss" scoped>
.wrapLeftImg{
    /*position: absolute;*/
    width: 60vw;
    height: 60vw;
    /*border: 1px solid red;*/
    /*top: 0;*/
    /*left: 0;*/
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
