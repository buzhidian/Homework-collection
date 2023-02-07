const { defineConfig } = require('@vue/cli-service')

let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? 'http://localhost:8090/' : process.env.VUE_APP_CONSOLE_URL
module.exports = defineConfig({
  transpileDependencies: true,
  // 根目录
  publicPath:'./',
  // 默认关闭生产环境的资源
  productionSourceMap: false,
  // 打包时文件夹名称
  outputDir:'bag',
  // 放置打包时静态资源文件生成存放位置
  assetsDir:'assets',
  // 本地环境代理位置
  devServer:{
    // 端口号
    port:'8080',
    // 运行时域名
    host:'localhost',
    // 启动时是否打开浏览器
    open:true,
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        changeOrigin:true,
        secure:false,
        target:target,
        pathRewrite:{
          ["^"+process.env.VUE_APP_BASE_API]:''
        }
      }
    }
  },
})

