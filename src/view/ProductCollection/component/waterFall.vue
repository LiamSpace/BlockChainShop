<template>
    <div class="wrapWaterFall">
        <Stick
                :list="list"
                @onScrollEnd="loadMore"
        >
            <template slot-scope="scope">
                <div class="card" @click="clickItem(scope)">
                    <img v-if="scope.data.productImg" v-lazy="scope.data.productImg"/>
                    <h2>{{scope.data.productName}}</h2>
                    <p>{{scope.data.productDes}}</p>
                </div>
            </template>
        </Stick>
    </div>
</template>

<script>
    var Stick = require('vue-stick')
    export default {
        components:{
            Stick: Stick.component
        },
        props:{
            'list':Array
        },
        data(){
            return{
                isNoData:false //有无数据
            }
        },
        mounted(){
        },
        methods:{
            loadMore: function () {
                this.$emit('loadMoreData')
            },
            //点击元素
            clickItem:function (target) {
                this.$emit('itemClick',target.data)
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapWaterFall{
    position: relative;
    background: #dee3e7;
    padding: 3rem;
    /*width: 100vw;*/
    /*margin: 5rem;*/
    .card{
        overflow: hidden;
        background: #fff;
        transition-delay: .1s;
        /*transform: scale(1);*/
        transition: all .3s ease-out;
        cursor: pointer;
        padding: 1rem;
        &:hover{
            box-shadow: 5px 10px 10px -5px rgba(0,0,0,.2);
        }
        img{
            display: block;
            width: 100%;
            background: #aaa;
        }
        h2{
            font-size: 1.2rem;
            font-weight: 500;
            padding: 1rem 0;
        }
        p{
            font-size: .8rem;
            margin-bottom: 2rem;
        }
    }
}
</style>
