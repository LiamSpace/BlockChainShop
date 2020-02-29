<template>
    <div class="wrapLogin">
        <div class="dowebok">
            <div class="form sign-in">
                <h2>欢迎回来</h2>
                <svg viewBox="0 0 320 320">
                    <defs>
                        <linearGradient inkscape:collect="always" id="linearGradient1" x1="13" y1="193.49992" x2="307"
                                        y2="193.49992" gradientUnits="userSpaceOnUse">
                            <stop style="stop-color:#ff00ff;" offset="0" id="stop876" />
                            <stop style="stop-color:#ff0000;" offset="1" id="stop878" />
                        </linearGradient>
                    </defs>
                    <path class="loginPath" d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
                </svg>
                <div class="wrapFillContent">
                    <label>
                        <span>邮箱</span>
                        <input type="email" id="email" v-model="loginEmail"/>
                    </label>
                    <label>
                        <span>密码</span>
                        <input type="password" id="password" v-model="loginPassword"/>
                    </label>
                    <!--<p class="forgot-pass"></p>-->
                    <button type="button" class="submit" id="submit" @click="loginBtn">登 录</button>
                    <!--<button type="button" class="fb-btn">使用 <span>facebook</span> 帐号登录</button>-->
                    <p class="forgot-pass"><a href="javascript:">忘记密码？</a></p>
                </div>
            </div>
            <div class="sub-cont">
                <div class="img">
                    <div class="img__text m--up">
                        <h2>还未注册？</h2>
                        <p>立即注册，发现大量机会！</p>
                    </div>
                    <div class="img__text m--in">
                        <h2>已有帐号？</h2>
                        <p>有帐号就登录吧，好久不见了！</p>
                    </div>
                    <div class="img__btn">
                        <span class="m--up">注 册</span>
                        <span class="m--in">登 录</span>
                    </div>
                </div>
                <div class="form sign-up">
                    <h2>立即注册</h2>
                    <div class="wrapFillContent">
                        <label>
                            <span>用户名</span>
                            <input type="text" v-model="registeUserName" id="userName" @blur="goCheckUser"/>
                            <span class="userNameWarning" v-if="userTag">当前用户名已被占用</span>
                        </label>
                        <label>
                            <span>邮箱</span>
                            <input type="email" v-model="registeUserEmail" id="registeEmail"/>
                        </label>
                        <label>
                            <span>密码</span>
                            <input type="password" v-model="registePassword"  id="registePassword"/>
                        </label>
                        <button type="button" class="submit" id="submitButton" @click="goToRegiste">注 册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import anime from "animejs";
    import RegisteUser from '@/model/registeUser'
    import checkUserInfo from '@/model/checkUserName'
    import Login from '@/model/login'
    export default {
        name: "index",
        data() {
            return{
                current:null,
                registeUserName:null,
                registeUserEmail:null,
                registePassword:null,
                userTag:false, //用户名占用
                loginEmail:null,
                loginPassword:null,
            }
        },
        mounted() {
            // let test1 = new Test1()
            // test1.getInfo().then(res => {
            //     console.log(res)
            // }).catch(err => error(err) )



            document.querySelector('.img__btn').addEventListener('click',function () {
                $('.dowebok').toggleClass('s--signup')
            });
            let current = null;
            document.querySelector('#email').addEventListener('focus', function(e) {
                if (current) current.pause();
                current = anime({
                    targets: 'path',
                    strokeDashoffset: {
                        value: 0,
                        duration: 700,
                        easing: 'easeOutQuart'
                    },
                    strokeDasharray: {
                        value: '240 1386',
                        duration: 700,
                        easing: 'easeOutQuart'
                    }
                });
            });
            document.querySelector('#password').addEventListener('focus', function(e) {
                if (current) current.pause();
                current = anime({
                    targets: 'path',
                    strokeDashoffset: {
                        value: -336,
                        duration: 700,
                        easing: 'easeOutQuart'
                    },
                    strokeDasharray: {
                        value: '240 1386',
                        duration: 700,
                        easing: 'easeOutQuart'
                    }
                });
            });
            document.querySelector('#submit').addEventListener('focus', function(e) {
                if (current) current.pause();
                current = anime({
                    targets: 'path',
                    strokeDashoffset: {
                        value: -730,
                        duration: 700,
                        easing: 'easeOutQuart'
                    },
                    strokeDasharray: {
                        value: '530 1386',
                        duration: 700,
                        easing: 'easeOutQuart'
                    }
                });
            });
        },
        methods:{
            //检查用户姓名
            goCheckUser:function(){
                let checkUserVal = new checkUserInfo();
                let that = this;
                if (that.registeUserName) {
                    checkUserVal.GocheckUserInfo({
                        userName:that.registeUserName,
                    }).then(res => {
                        if (res.code == 200){
                            that.userTag = false;
                        } else{
                            that.userTag = true;
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            },
            //注册
            goToRegiste:function () {
                let registeUserInfo = new RegisteUser();
                let that = this;
                if (that.registeUserName && that.registeUserEmail && that.registePassword) {
                    if (!that.userTag) {
                        registeUserInfo.goRegiste({
                            email:that.registeUserEmail,
                            userName:that.registeUserName,
                            password:that.registePassword
                        }).then(res => {
                            if (res.code == 200){
                                //戳登陆接口 进行自动登陆
                                that.loginMethod(that.registeUserName,that.registeUserEmail,that.registePassword);
                                console.log(res);
                                that.registeUserName = null;
                                that.registeUserEmail = null;
                                that.registePassword = null;
                            }

                        }).catch(err => console.log(err));
                    }
                }
            },

            //登陆按钮
            loginBtn:function(){
              if (this.loginPassword && this.loginEmail){
                  this.loginMethod('',this.loginEmail,this.loginPassword);
                  this.loginEmail = null;
                  this.loginPassword = null;
              }

            },

            //登陆
            loginMethod:function (name,email,passTag) {
                let wrapLogin = new Login();
                let that = this;
                if (name || (email && passTag)){
                    wrapLogin.getLoginInfo({
                        email:email,
                        userName:name,
                        password:passTag
                    }).then(res => {
                        if (res.code == 200){
                            that.$store.commit('isLoginMethod');
                            //登陆成功
                            that.$router.push({
                                name:'personCenter',
                                query:{
                                    userId:res.user[0].userId
                                }
                            });
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapLogin{
    width: 100vw;
    height: 75vh;
    background: #ededed;
    input, button {
        border: none;
        outline: none;
        background: none;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    }
    input {
        background: transparent;
        border: 0;
        color: #fff;
        outline: none !important;
        width: 100%;
    }
    input::-moz-focus-inner {
        border: 0;
    }

    .tip {
        font-size: 20px;
        margin: 40px auto 50px;
        text-align: center;
    }

    svg {
        position: absolute;
        width: 320px;
        top: 10vw;
    }
    path {
        fill: none;
        stroke-width: 4;
        stroke-dasharray: 240,1386;
        &.loginPath{
            stroke: url(#linearGradient1);
        }
        &.registePath{
            stroke: url(#linearGradient2);
        }
    }

    .dowebok {
        position: absolute;
        width: 80vw;
        height: 40vw;
        border-radius: 5px;
        /*box-shadow:0 0 25px 3px #548E7F;*/
        box-shadow:0 0 25px 3px #486685;
        /*#486685*/
        left: 50%;
        top: 50%;
        margin-left: -40vw;
        margin-top: -20vw;
        background: #474a59;
        overflow: hidden;
        .form {
            position: relative;
            width: 60vw;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10vw;
            background: #474a59;
            transition: transform 0.6s ease-in-out;
            .wrapFillContent{
                position: absolute;
                margin-top: 3.8rem;

            }
        }
        .sub-cont {
            position: absolute;
            width: 80vw;
            height: 100%;
            left: 60vw;
            top: 0;
            padding-left: 20vw;
            background: #fff;
            overflow: hidden;
            transition: transform 0.6s ease-in-out;
        }
    }

    .dowebok.s--signup .sub-cont {
        transform: translate3d(-60vw, 0, 0);
    }
    button {
        display: block;
        width: 17rem;
        height: 3rem;
        margin: 0 auto;
        border-radius: 30px;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
    }
    .img {
        position: absolute;
        left: 0;
        top: 0;
        width: 20vw;
        height: 40vw;
        padding-top: 25rem;
        overflow: hidden;
        z-index: 2;
    }

    .img:before {
        content: '';
        position: absolute;
        width: 80vw;
        height: 40vw;
        right: 0;
        top: 0;
        background-image: url('../../assets/image/homePage/imgH4.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        transition: transform 0.6s ease-in-out;
    }

    .img:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 80vw;
        height: 40vw;
        background: rgba(0, 0, 0, 0.6);
    }
    .dowebok.s--signup .img:before {
        transform: translate3d(60vw, 0, 0);
    }
    .img__text {
        z-index: 2;
        position: absolute;
        left: 0;
        top: 3rem;
        width: 100%;
        text-align: center;
        color: #fff;
        transition: transform 0.6s ease-in-out;
        h2{
            margin-bottom: 10px;
            font-weight: normal;
        }
        p{
            font-size: 1rem;
            line-height: 1.5;
        }
    }

    .dowebok.s--signup .img__text.m--up {
        transform: translateX(520px);
    }
    .img__text.m--in {
        transform: translateX(-520px);
    }

    .dowebok.s--signup .img__text.m--in {
        transform: translateX(0);
    }

    .img__btn {
        overflow: hidden;
        z-index: 2;
        position: relative;
        width: 8rem;
        height: 3rem;
        margin: 0 auto;
        text-align: center;
        background: transparent;
        color: #fff;
        text-transform: uppercase;
        font-size: 15px;
        cursor: pointer;
    }
    .img__btn:after {
        content: '';
        position: absolute;
        width: 98%;
        height: 96%;
        text-align: center;
        border: 1px solid #fff;
        border-radius: 30px;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .img__btn span {
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: transform 0.6s, -webkit-transform 0.6s;
    }

    .img__btn span.m--in {
        transform: translateY(-72px);
    }

    .dowebok.s--signup .img__btn span.m--in {
        transform: translateY(0);
    }

    .dowebok.s--signup .img__btn span.m--up {
        transform: translateY(72px);
    }

    h2 {
        width: 100%;
        font-size: 1.6rem;
        text-align: center;
        color: #c2c2c5;
    }

    label {
        display: block;
        width: 17rem;
        margin: 25px auto 0;
        text-align: center;
    }

    label span {
        font-size: .8rem;
        color: #c2c2c5;
        text-transform: uppercase;
        &.userNameWarning{
            color: red;
            line-height: 2rem;
        }
    }

    input {
        display: block;
        width: 100%;
        margin-top: 5px;
        padding-bottom: 5px;
        font-size: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
        text-align: center;
    }

    .forgot-pass {
        display: none;
        margin-top: 2.2rem;
        text-align: center;
        font-size: .6rem;
        color: #cfcfcf;
    }

    .forgot-pass a {
        color: #cfcfcf;
    }

    .submit {
        margin-top: 2.2rem;
        margin-bottom: 1.5rem;
        outline: none;
        /*background: #fff;*/
        color: #c2c2c5;
        text-transform: uppercase;
        transition: color 300ms;
        &#submitButton{
            width: 70%;
            border: 1px solid #c2c2c5;
            border-radius: 30px;
        }
        &:focus {
            color: #f2f2f2;
        }
        &:active {
            color: #d0d0d2;
        }
    }

    .fb-btn {
        border: 2px solid #d3dae9;
        color: #8fa1c7;
    }
    .fb-btn span {
        font-weight: bold;
        color: #455a81;
    }

    .sign-in {
        transition-timing-function: ease-out;
    }
    .dowebok.s--signup .sign-in {
        transition-timing-function: ease-in-out;
        transition-duration: 0.6s;
        transform: translate3d(60vw, 0, 0);
    }

    .sign-up {
        transition-timing-function: ease-out;
        transform: translate3d(-80vw, 0, 0);
    }
    .dowebok.s--signup .sign-up {
        transform: translate3d(0, 0, 0);
    }












}
</style>
