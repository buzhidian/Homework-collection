import http from "../untils/httpRequest"
/**获取角色 */
function role(data) {
  return http({
    url: http(`/sys/role?page=${data.page}&pagesize=${data.pagesize}&total=${data.total}`),
    method: "GET",
    data
  })
}
function del(data) {
  return http({
    url: http(`/sys/role/${data.id}`),
    method: "DELETE",
    data
  })
}
/**添加或者修改 */
function addOrEdit(data) {
  return http({
    url: http("/sys/role"),
    method: "POST",
    data
  })
}
/**树状数据 */
function treeList() {
  return http({
    url: http("/sys/permission"),
    method: "GET"
  })
}
//
/**分配权限 */
function assignPrem(data) {
  return http({
    url: http("/sys/role/assignPrem"),
    method: "PUT",
    data
  })
}
/**角色信息 */
//
function roleInfo() {
  return http({
    url: http("/company/1"),
    method: "GET"
  })
}
export { role, del, addOrEdit, treeList, assignPrem, roleInfo }
