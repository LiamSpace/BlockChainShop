import {HTTP} from '@/utils/http.js'

class UserInfo extends HTTP{
    getUsrInfo(data){
        return new Promise((resolve,reject) => {
            this.axiosPost({
                url:'/getUserInfo',
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

export default UserInfo;
