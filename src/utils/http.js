import axios from 'axios'

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
    return config;
},error => {
    Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response =>{
    if(response.status === 200){
        return response.data
    }
},error => {
    Promise.reject(error)
})

class HTTP{
    axiosGet(options){
        service.get(options.url,{
            params:options.data
        }).then((res) => {
            options.success(res)
        }).catch((err) => {
            options.error(err)
        })
    }
}


export {HTTP};