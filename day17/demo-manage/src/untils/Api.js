import http from './httpRequest.js'

// 登录接口
async function toLogin(params) {
    let {data} = await http.post("login",params)
    return data
}

// 左侧菜单接口
async function getMenus(params) {
    let {data} = await http.get("menus")
    return data
}

// 用户列表接口
async function getUsers(params) {
    let {data} = await http.get(`users?pagenum=${params.pagenum}&pagesize=${params.pagesize}`)
    return data
}

export { toLogin,getMenus,getUsers, }