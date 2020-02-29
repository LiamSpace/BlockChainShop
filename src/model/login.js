import {HTTP} from '@/utils/http.js'

class Login extends HTTP{
    getLoginInfo(data){
        return new Promise((resolve,reject) => {
            this.axiosPost({
                url:'/login',
                data:data,
                success:function(data){
                    resolve(data)
                },
                error:function(err){
                    reject(err)
                }
            })
        })
    }
}

export default Login;
