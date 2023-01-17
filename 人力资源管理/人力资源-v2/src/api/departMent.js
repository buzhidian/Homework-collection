import http from "../untils/httpRequest"
/**表格数据 */
function getList(data) {
  return http({
    url: http("/social_securitys/list"),
    method: "POST",
    data
  })
}
/**部门数据 */
function section() {
  return http({
    url: http("/company/department"),
    method: "GET"
  })
}
/**社保公积金 */
function city() {
  return http({
    url: http("sys/city"),
    method: "GET"
  })
}
/**社保报表金额 */
function securitys() {
  return http({
    url: http("/social_securitys/historys/2020/list"),
    method: "GET"
  })
}
/**社保报表 */
function month(data) {
  return http({
    url: http(`/social_securitys/historys/202002?month=${data.month}&opType=${data.opType}`),
    method: "GET"
  })
}

/*获取详情数据*/
function getDetail() {
  return http({
    url: http("/social_securitys/payment_item/1084825908823904256"),
    method: "get"
  })
}

/*获取详情数据*/
function getDetailinfo(data) {
  return http({
    url: http(`/social_securitys/${data}`),
    method: "get"
  })
}
export { getList, section, city, securitys, getDetail, getDetailinfo, month }
