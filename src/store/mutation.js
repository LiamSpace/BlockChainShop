export default {
    openLoading:function (state) {
        state.loaddingState = true;
    },
    closeLoading:function (state) {
        state.loaddingState = false;
    },
    isLoginMethod:function (state) {
        state.isLogin = true;
    },
    isLoginOutMethod:function (state) {
        state.isLogin = false;
    }
}
