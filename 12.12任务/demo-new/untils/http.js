import axios from 'axios'
// import router from 'vue-router'
import {
	MessageBox
} from 'element-ui'
import {
	getToken,
	// removeToken
} from './auth'
const http = axios.create({
	// 基本路径
	baseURL: '/',
	// 设置超时时间
	timeout: 1000 * 30,
	// 是否开启凭证
	withCredentials: true,
	//请求头部
	headers: {
		"Content-Type": "application/json; charset=utf-8"
	}
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	config.headers['Authorization'] = getToken()
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {

	// if (response.data && response.data.status === 2) {
	// 	removeToken()
	// 	router.push({
	// 		name: "Login"
	// 	})
	// }
	// 对响应数据做点什么
	return response;
}, function (error) {
	console.log(error);
	let title = ""
	let message = ""
	if (error && error.response) {
		message = error.response.statusText
		switch (
			error.response.status
		) {
			case 400:
				title = "错误请求"
				break
			case 401:
				title = "资源未授权"
				break
			case 403:
				title = "禁止访问"
				break
			case 404:
				title = "未找到所请求资源"
				break
			case 405:
				title = "不允许使用改方法"
				break
			case 408:
				title = "请求超时"
				break
			case 500:
				title = "内部服务器错误"
				break
			case 501:
				title = "未实现"
				break
			case 502:
				title = "网关错误"
				break
			case 503:
				title = "HTTP版本不受支持"
				break
			default:
				title = error.response.status
		}
		return MessageBox.alert(message, title, {
			type: "warning"
		})
	} else {
		// 对响应错误做点什么
		return MessageBox.alert("请联系系统管理员，或稍后再试", "未知错误", {
			type: "error"
		})
	}
});
// actionName  请求的动态接口
http.addUrl = (actionName) => {
	return process.env.VUE_APP_BASE_API + actionName
}

// 封装一个post请求
http.apiPost = (url, data = {}, method = "get", content = "json") =>
	http({
		method,
		url: http.addUrl(url),
		data,
		headers: {
			"Content-Type": content == "json" ? "application/json; charset=utf-8" : " multipart/form-data; boundary=something"
		}
	})

export default http
