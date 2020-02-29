import {HTTP} from '@/utils/http.js'

class goodList extends HTTP{
    getProductList(data){
        return new Promise((resolve,reject) => {
            this.axiosGet({
                url:'/goodList',
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

export default goodList;
