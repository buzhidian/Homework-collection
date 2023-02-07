import axios from 'axios'
import {
    getToken
} from "./auth";

const http = axios.create({
    baseURL: '/api',
    timeout: 1000 * 10,
    headers: {"Content-Type":"application/json; charset=utf-8"},
    // 是否开启凭证
    withCredentials: false,
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {


    config.headers['Authorization'] = 'Bearer ' + getToken()
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // TODO:
    return response;
}, function (error) {
    
    return Promise.reject(error);
});

export default http