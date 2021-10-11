import axios from 'axios'

export function login(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL:'http://47.106.182.193:8000/login',
      timeout: 5000,
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
