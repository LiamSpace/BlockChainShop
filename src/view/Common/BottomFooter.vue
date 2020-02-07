<template>
    <div class="wrapFooter">
        <div class="footerContent">
            <div class="leftContent">
                <div class="copyright">
                    ©  2020 liam
                </div>
                <div class="power">
                    Powered by Vue.js
                </div>
            </div>
            <div class="rightContent">
                Created by Liam
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "BottomFooter"
    }
</script>

<style lang="scss" scoped>
.wrapFooter{
    width: 100%;
    display: flex;
    justify-content: center;
    .footerContent{
        width: 80%;
        height: 10vw;
        line-height: 10vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        font-family: acumin-pro, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, sans-serif;
        letter-spacing: -0.015em;
        text-align: left;
        margin-top: 5vw;
        .leftContent{
            display: flex;
            align-items: center;
            .copyright{
                font-weight: 700;
                line-height: 1.5;
            }
            .power{
                color: rgb(109, 109, 109);
                padding-left: 2rem;
            }
        }

    }
}
</style>
