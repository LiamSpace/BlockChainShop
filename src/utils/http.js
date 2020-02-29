import axios from 'axios'
import qs from "qs"; //序列化
import store from '@/store/index'


let baseUrl = '';
const env = process.env.NODE_ENV;
if (env === 'development') {
  baseUrl = "api"
} else if (env === 'production') {
  baseUrl = ``
} else if (env === 'test') {
  baseUrl = ``
}

const service = axios.create({
    baseURL: baseUrl,
    timeout: 25000 //超时时间
})

//请求拦截器
service.interceptors.request.use(config =>{
    //可设置相应loading
    store.commit('openLoading');
    return config;
},error => {
    Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response =>{
    if(response.status === 200){
        store.commit('closeLoading');
        return response.data
    }
},error => {
    Promise.reject(error)
})

class HTTP {
    axiosGet(options) {
        service.get(options.url, {
            params: options.data
        }).then((res) => {
            options.success(res)
        }).catch((err) => {
            options.error(err)
        })
    }

    axiosPost(options) {
        service.post(options.url, qs.stringify(options.data), {'Content-Type': 'application/x-www-form-urlencoded'}
        ).then((res) => {
            options.success(res)
        }).catch((res) => {
            options.error(res)
        })
    }


    axiosPut(options) {
        let datas = qs.stringify(options.data)

        service.put(`${options.url}?${datas}`, options.data).then((res) => {
            options.success(res)
        }).catch((res) => {
            options.error(res)
        })
    }

    axiosPostUpload(options) {
        service.post(options.url, options.data, { headers: { 'Content-Type': 'multipart/form-data' } }).then((res) => {
            options.success(res)
        }).catch((res) => {
            options.error(res)
        })

    }

    axiosDelete(options) {
        service.delete(options.url, {
            data: options.data
        }).then((res) => {
            options.success(res)
        }).catch((err) => {
            options.error(err)
        })

    }
}
export {HTTP};
