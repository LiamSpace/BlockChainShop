<template>
    <div class="wrapPersonCenter">
        <div class="menuList">
            <ul>
                <li v-for="(item,index) in list" :key="item.id" :class="{active:num==index}" @click="getNum(index)">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="tabCon">
            <div v-for='(item,index) in tabContents' v-show="index == num" :key="index">
                <div class="wrapUserInfo" v-show="!chooseTag">
                    <p>用户名:<span>{{item.userName}}</span></p>
                    <p>邮箱: <span>{{item.email}}</span></p>
                    <button @click="loginOut">登出</button>
                </div>
                <div class="wrapLookRecord" v-show="chooseTag">
                    <!--<p>324hahh</p>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import handle_cookie from "@/utils/user_cookie.js";
    import UserInfo from '@/model/getUserInfo'
    export default {
        name: "index",
        data(){
            return{
                num: 0,
                chooseTag:false,
                list: ["个人中心", "浏览记录"],
                tabContents: [
                ],
            }
        },
        created(){
            let cUsrId = handle_cookie.getInfo('useId');
            if (this.$route.query){
                let userId = this.$route.query.userId;
                // this.tabContents.push(userInfo);
                if (userId){
                    handle_cookie.setInfo('useId',userId);
                    this.getUsrInfoDetail(userId)
                }
            }
            if (cUsrId){
                this.getUsrInfoDetail(cUsrId)
            }
        },
        methods:{
            getNum(index) {
                this.num = index;
                // if (index){
                //     this.chooseTag = true;
                // } else{
                //     this.chooseTag = false;
                // }
                this.chooseTag = index > 0 ? true : false;
            },
            getUsrInfoDetail:function (uId) {
                let cVal = new UserInfo();
                cVal.getUsrInfo({
                    userId:uId
                }).then(res => {
                    if (res.code === 200){
                        this.tabContents.push(res.user[0]);
                    }
                    console.log(res)
                }).catch(err => {
                    console.log(err)
                })
            },
            //登出
            loginOut:function () {
                handle_cookie.removeInfo('useId');
                this.$router.push({
                    path:'/login'
                })
                this.$store.commit('isLoginOutMethod')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapPersonCenter{
        display: flex;
        margin-top: 80px;
        padding: 3rem;
    }
    .menuList {
        width: 30%;
        height: 60px;
        margin: 0 auto;
    }

    .active {
        color: #fff;
        background: #e74c3c;
    }
    ul {
        width: 100%;
        display: block;
        list-style: none;
        padding: 0;
        margin: 0;
        color: #717181;
        background-color: #33344a;
        font-size: 16px;
        line-height: 60px;

    }

    ul li {
        flex: 1;
        text-align: center;
        cursor: pointer;
    }

    .tabCon {
        width: 70%;
        margin: 0 auto;
        padding: 0 20px;
        color: #999;
        /*border: 1px solid red;*/
        font-size: 14px;
        background-color: lightgray;
        .wrapUserInfo{
            p{
                width: 100%;
                height: 5rem;
                line-height: 5rem;
                padding-left: 2rem;
                font-size: 1.5rem;
                /*border: 1px solid orange;*/
                span{
                    width: 40%;
                    /*border: 1px solid green;*/
                    margin-left: 5rem;
                }
                &:last-child{
                    span{
                        padding-left: 1rem;
                    }
                }
            }
            button{
                width: 10rem;
                height: 4rem;
                line-height: 4rem;
                font-weight: 300;
                font-size: 1.3rem;
                /*margin-left: 2rem;*/
                margin: 2rem 0 2rem 2rem;
                background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
            }
        }
    }
</style>
