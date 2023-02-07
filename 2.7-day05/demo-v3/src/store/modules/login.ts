import http from '../../utils/http'
const state = {
  token: "",
}
const mutations = {
    
}
const actions = {
  login() {
    http({
        method:'post',
        url:"/sys/login",
        data:{
          mobile: "13800000002",
          password: "123456",
        }
    }).then(res=>{
        console.log(res.data);
        
    })
  }
}
//导出
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
