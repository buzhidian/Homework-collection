import axios from "axios"
import { getToken } from "./auth"
import { MessageBox } from "element-ui"

const http = axios.create({
  baseURL: "/api",  
    timeout: 1000 * 5,
    /* 跨域是否开凭证 */  
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
})

// 请求拦截器：
http.interceptors.request.use(function (config) {
  
  return config;
}, function (error) {
  
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  
  return response;
}, function (error) {
  
  return Promise.reject(error);
});
export default http
