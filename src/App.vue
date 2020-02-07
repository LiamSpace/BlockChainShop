<template>
    <div id="HomePage">
        <TopHeader class="headTop"/>
        <div class="wrapContent">
            <router-view></router-view>
        </div>
        <BottomFooter/>
    </div>
</template>

<script>
    import TopHeader from '@/view/Common/TopHeader'
    import BottomFooter from '@/view/Common/BottomFooter'
    export default {
        components:{
            TopHeader,
            BottomFooter
        },
        data(){
            return{
                topDis: 0,
            }
        },
        mounted(){
            window.addEventListener('scroll',this.handleScorll,true)
        },
        methods:{
            handleScorll(){
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop ||
                    document.body.scrollTop;
                let isUp = scrollTop - this.topDis;
                this.topDis = scrollTop;
                //向上滑动
                if (isUp > 0){
                    $('.headTop').stop().addClass('activePos')
                }else{
                    if ($('.headTop').hasClass('activePos')) {
                        $('.headTop').stop().removeClass('activePos')
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
#HomePage{
    width: 100%;
    .headTop{
        top: 0;
        transition: top .5s ease;
        &.activePos{
            top: -80px;
        }
    }

    .wrapContent{

    }
}
</style>
