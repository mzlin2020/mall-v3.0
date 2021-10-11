import axios from 'axios' 
import localCache from '../common/cache'
import { baseURL } from './config'

const token = localCache.getCache("token")

export function sendFeedback (content) {
  return new Promise((resolve, reject) => {
    // 创建实例
    const instance = axios.create({
      baseURL: baseURL + "/moment",
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


