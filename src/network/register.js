import axios from 'axios'

export function register(name, password) {
  axios({
    url: "api/users",
    method:'POST',
    data:{
      name,
      password
    }
  })
}