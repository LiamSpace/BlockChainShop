import {HTTP} from '@/utils/http.js'

class registeUser extends HTTP{
    goRegiste(data){
        return new Promise((resolve,reject) => {
            this.axiosPost({
                url:'/register',
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

export default registeUser;
