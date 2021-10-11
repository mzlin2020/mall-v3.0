import axios from 'axios'
import { baseURL } from './config'

export function login(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL,
      timeout: 5000,
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
