import axios from 'axios'


/**
 * Axios配置
 */
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API
    // timeout: 5000
})

/**
 * 请求拦截器
 *
 * 每次发送请求，都从localStorage中获取token
 * 通过后端拦截器校验Token是否失效
 * 如果Token失效，跳转到首页，给登录失效提示
 */
service.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['token'] = token
        }
        return config
    }
)

/**
 * 响应拦截器
 * 后端响应状态码不是200，进入到catch逻辑
 */
service.interceptors.response.use(
    response => {
        if (response.data.code !== 200) {
            return Promise.reject(response)
        } else {
            return response
        }
    },
    error => {
        return Promise.reject(error)
    }
)

export default service
