import request from '../utils/request'
/**登录接口*/
export function login(data: object) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
/**社保列表接口*/
export function sblist(data: object) {
  return request({
    url: '/social_securitys/list',
    method: 'post',
    data
  })
}
/**社保部门列表接口*/
export function sblist1() {
  return request({
    url: '/company/department',
    method: 'get'
  })
}
/**权限设置列表接口*/
export function permissions(data: object) {
  return request({
    url: '/sys/permission',
    method: 'get',
    data
  })
}
