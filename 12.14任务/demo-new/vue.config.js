const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:"./",
  productionSourceMap:false,
  outputDir:"dist",
  assetsDir:"assets",
  devServer:{
    port:"8080",
    host:"localhost",
    open:true,
    https:false,
    proxy:{
      "/api":{
        changeOrigin:true,
        secure:false,
        target:"http://localhost:8080",
        pathRewrite:{
          "^/api":""
        }
      }
    }
  }
})
