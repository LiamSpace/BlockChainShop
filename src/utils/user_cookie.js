import Cookies from 'js-cookie'

class Token_handle{
    constructor(){
        // this.TokenKey='default_token'
    }
    getInfo(info){
        return  Cookies.get(info)
    }
    setInfo(info,rewrite){
        return  Cookies.set(info, rewrite)
    }
    removeInfo(info){
        return  Cookies.remove(info)
    }

}
export default new Token_handle()
