import {HTTP} from '@/utils/http.js'

class CheckUserName extends HTTP{
    GocheckUserInfo(data){
        return new Promise((resolve,reject) => {
            this.axiosPost({
                url:'/checkUserName',
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

export default CheckUserName;
