const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.106.182.193:8000/',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}
