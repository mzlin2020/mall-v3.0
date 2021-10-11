import axios from 'axios'

export function register(name, password) {
  axios({
    url: "http://47.106.182.193:8000/users",
    method:'POST',
    data:{
      name,
      password
    }
  })
}
