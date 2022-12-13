import http from '../../../untils/http'
/**获取用户列表*/
const getUser = (params) => {
	return http.apiPost('/users', params).then(res => {
		return res
	})
}
/**添加接口*/
const addUser = (params) => {
	return http.apiPost('/users', params, 'post').then(res => {
		return res
	})
}
/**编辑接口*/
const editUser = (params, id) => {
	return http.apiPost('/users/' + id, params, 'put').then(res => {
		return res
	})
}
/**删除接口*/
const delUser = (id) => {
	return http.apiPost('/users/' + id, 'delete').then(res => {
		return res
	})
}
/**查询接口*/
const searchUser = (id) => {
	return http.apiPost('/users/' + id, 'get').then(res => {
		return res
	})
}


export {
	getUser,
	addUser,
	editUser,
	delUser,
	searchUser
}
