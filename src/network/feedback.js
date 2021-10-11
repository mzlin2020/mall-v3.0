import axios from 'axios' 
import localCache from '../common/cache'

const token = localCache.getCache("token")

export function sendFeedback (content) {
  return new Promise((resolve, reject) => {
    // 创建实例
    const instance = axios.create({
      baseURL: "http://47.106.182.193:8000/moment",
      timeout: 5000,
    })

    // 请求拦截
    instance.interceptors.request.use((config) => {
      if(token) {
        config.headers.Authorization = token
      }
      return config
    })

    instance(content).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}


