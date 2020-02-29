import {HTTP} from '@/utils/http.js'

class goodDetail extends HTTP{
    getProductDetail(data){
        return new Promise((resolve,reject) => {
            this.axiosGet({
                url:'/goodDetail',
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

export default goodDetail;
