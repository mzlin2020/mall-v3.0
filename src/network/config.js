// 区分环境变量方式
export let baseURL = ''
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://47.106.182.193:8000/'
} else if (process.env.NODE_ENV === 'development') {
  baseURL = '/api'
} else {
  baseURL = '/api'
}
