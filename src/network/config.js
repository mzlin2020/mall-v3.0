// 区分环境变量方式
export let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = '/api'
} else if (process.env.NODE_ENV === 'development') {
  baseURL = ""
} else {
  baseURL = '/api'
}
