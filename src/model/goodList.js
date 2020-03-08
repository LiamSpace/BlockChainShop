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
    //获得筛选条件
    getFilterCondition(data){
        return new Promise((resolve,reject) => {
            this.axiosGet({
                url:'/getFilterList',
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

    // 筛选结果
    findListResult(data){
        return new Promise((resolve,reject) => {
            this.axiosPost({
                url:'/filterGood',
                data:data,
                success:function (data) {
                    resolve(data)
                },
                error:function (err) {
                    reject(err)
                }
            })
        })
    }
}

export default goodList;
