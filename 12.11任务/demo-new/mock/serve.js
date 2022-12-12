
/**引入express服务 */
let express = require("express")
/* 引入mockjs */
let Mock = require("mock.js")
/* 引入mock json数据 */
const loginData = require('./common/login.json')
/* 实例化express 服务 */
let app = express() //

/**登录接口 */
app.use("login",function (req,res) {
    console.log(req,"req");
    res.json(
        Mock.mock({ 
            loginData
        })
    )
})

app.listen("8090",()=>{
    console.log("监听端口  8090");
})