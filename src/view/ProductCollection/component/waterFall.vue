<template>
    <div class="wrapWaterFall">
        <Stick
                :list="list"
                @onScrollEnd="loadMore"
        >
            <template slot-scope="scope">
                <div class="card" @click="clickItem(scope)">
                    <img v-if="scope.data.productImg" :src="scope.data.productImg"/>
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
            }
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
    padding: 3rem;
    /*width: 100vw;*/
    /*margin: 5rem;*/
    .card{
        /*padding: 10px;*/
        overflow: hidden;
        /*transform: scale(1);*/
        transition: all .5s ease-out;
        cursor: pointer;
        /*&:hover{*/
            /*transform: scale(1.2);*/
        /*}*/
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
