import http from '../../../untils/http'
/**获取权限列表*/
const getRoles = (params) => {
	return http.apiPost('/roles', params).then(res => {
		return res
	})
}
/**添加接口*/
const addRoles = (params) => {
	return http.apiPost('/roles', params, 'post').then(res => {
		return res
	})
}
/**编辑接口*/
const editRoles = (params, id) => {
	return http.apiPost('/roles/' + id, params, 'put').then(res => {
		return res
	})
}
/**删除接口*/
const delRoles = (id) => {
	return http.apiPost('/roles/' + id, 'delete').then(res => {
		return res
	})
}

export {
	getRoles,
	addRoles,
	editRoles,
	delRoles
}
