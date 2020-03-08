<template>
    <div id="HomePage">
        <TopHeader class="headTop"/>
        <div class="wrapContent">
            <router-view></router-view>
        </div>
        <BottomFooter/>
        <loadding v-if="loaddingState"/>
    </div>
</template>

<script>
    import TopHeader from '@/view/Common/TopHeader'
    import BottomFooter from '@/view/Common/BottomFooter'
    import loadding from 'components/loading'
    import {mapState} from 'vuex'
    export default {
        components:{
            TopHeader,
            BottomFooter,
            loadding
        },
        data(){
            return{
                topDis: 0,
            }
        },
        created(){},
        mounted(){
            document.onreadystatechange = function(){
                if (document.readyState == "complete") {
                    $('#loading').fadeOut();
                    $('html').css({'overflow-y': 'auto'});
                }
            }
            window.addEventListener('scroll',this.handleScorll,true)
        },
        computed:{
            ...mapState([
                'loaddingState'
            ])
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

<style lang="scss">
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
        width: 100%;
    }
}
img[lazy=loading]{
    /*transform: scale(.5);*/
    /*zoom:0.5;*/
}
img[lazy=loaded]{
    zoom:0.5;
    transition: all .5s ease-in;
    /*transform: scale(.5);*/
    /*zoom:1;*/
}
</style>
