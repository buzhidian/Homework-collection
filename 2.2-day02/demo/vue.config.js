const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  publicPath: './',
  productionSourceMap: false,
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port: 9999,
    host: '0.0.0.0',
    open: false,
    https: false,
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        changeOrigin: true,
        secure: false,
        target:
          process.env.VUE_APP_MOCK_ENABLE === 'true'
            ? 'http://localhost:8091'
            : process.env.VUE_APP_CONSOLE_URL,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }
  }
})
