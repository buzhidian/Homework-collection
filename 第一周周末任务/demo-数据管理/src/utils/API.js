import http from './http.js'

async function getNum1(params){
    let {data} = await http.get("statis/user/"+ params.year +"-"+params.month+"-"+params.date +"/count")
    return data
}
async function getNum2(params){
    let {data} = await http.get("statis/order/"+ params.year +"-"+params.month+"-"+params.date +"/count")
    return data
}
async function getNum3(params){
    let {data} = await http.get("statis/admin/"+ params.year +"-"+params.month+"-"+params.date +"/count")
    return data
}
async function getNum4(params){
    let {data} = await http.get("v1/users/count")
    return data
}
async function getNum5(params){
    let {data} = await http.get("bos/orders/count")
    return data
}
// 请求管理员总数
async function getNum6(params){
    let {data} = await http.get("admin/count")
    return data
}
// 请求用户列表
async function getUserList(params){
    let {data} = await http.get("v1/users/list?offset="+ params +"&limit=20")
    return data
}

// 请求所在城市
async function getAddress(){
    let {data} = await http.get("v1/cities?type=guess")
    return data
}
// 请求商家总数
async function getShopTotal(){
    let {data} = await http.get("shopping/restaurants/count")
    return data
}
// 请求商家列表
/* async function getShopList(params){
    let {data} = await http.get("shopping/restaurants?latitude="+ params.latitude +"&longitude="+ params.longitude +"&offset=0&limit=20")
    return data
} */
async function getShopList(params){
    let {data} = await http.get("shopping/restaurants?latitude=34.74725&longitude=113.624931&offset="+ params +"&limit=20")
    return data
}


// 请求食品总数
async function getGoodTotal(){
    let {data} = await http.get("shopping/v2/foods/count?restaurant_id=undefined")
    return data
}
// 请求食品列表
async function getGoodList(params){
    let {data} = await http.get("shopping/v2/foods?offset="+ params +"&limit=20&restaurant_id=undefined")
    return data
}
// 请求餐馆信息
async function getRestaurantMsg(params){
    let {data} = await http.get("shopping/restaurant/"+params)
    return data
}
// 请求食品信息
async function getGoodMsg(params){
    let {data} = await http.get("shopping/v2/menu/"+params)
    return data
}





// 请求订单总数
async function getOrderTotal(){
    let {data} = await http.get("bos/orders/count?restaurant_id=undefined")
    return data
}
// 请求订单列表
async function getOrderList(params){
    let {data} = await http.get("bos/orders?offset="+ params +"&limit=20&restaurant_id=undefined")
    return data
}



// 请求管理员列表
async function getAdminList(params){
    let {data} = await http.get("admin/all?offset="+ params +"&limit=20")
    return data
}



// 请求用户分布
async function getCity(){
    let {data} = await http.get("v1/user/city/count")
    return data
}




export {getNum1,getNum2,getNum3,getNum4,getNum5,getNum6,getUserList,getAddress,getShopTotal,getShopList,getGoodTotal,getGoodList,getOrderTotal,getOrderList,getAdminList,getRestaurantMsg,getGoodMsg}