import {HTTP} from '@/utils/http.js'

class teamMember extends HTTP{
    getMember(data){
        return new Promise((resolve,reject) => {
            this.axiosGet({
                url:'/aboutUs',
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

export default teamMember;
