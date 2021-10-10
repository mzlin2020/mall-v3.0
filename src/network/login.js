import axios from 'axios'

export function login(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL:'api/login',
      timeout: 5000,
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
