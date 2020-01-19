import {HTTP} from '@/utils/http.js'

class Test extends HTTP{
    getInfo(data){
        return new Promise((resolve,reject) => {
            this.axiosGet({
                url:'/top250',
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

export default Test;