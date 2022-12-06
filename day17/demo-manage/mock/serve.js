let express = require("express")
let Mock = require("mock.js")
const loginData = require('./common/login.json')
let app = express() //实例化express

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