import axios from 'axios'

export function request(config) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/hy66',
            timeout: 5000
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            res = res.data
            return res
        }, err => {
            console.log(err);
        })

        instance(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}