import axios from 'axios'
import { baseURL } from './config'

export function register(name, password) {
  axios({
    url: baseURL + "users",
    method:'POST',
    data:{
      name,
      password
    }
  })
}
