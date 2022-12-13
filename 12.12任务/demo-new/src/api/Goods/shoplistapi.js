import http from '../../../untils/http'
/**获取商品列表*/
const getShop = (params) => {
	return http.apiPost('/goods', params).then(res => {
		return res
	})
}
/**添加接口*/
const addShop = (params) => {
	return http.apiPost('/goods', params, 'post').then(res => {
		return res
	})
}
/**编辑接口*/
const editShop = (params, id) => {
	return http.apiPost('/goods/' + id, params, 'put').then(res => {
		return res
	})
}
/**删除接口*/
const delShop = (id) => {
	return http.apiPost('/goods/' + id, 'delete').then(res => {
		return res
	})
}
/**搜索接口*/
const searchShop = (id) => {
	return http.apiPost('/goods/' + id).then(res => {
		return res
	})
}

export {
	getShop,
	addShop,
	editShop,
	delShop,
	searchShop
}
