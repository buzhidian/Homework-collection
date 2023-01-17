import http from "../untils/httpRequest"
/*表格数据*/

function instance(data) {
  return http({
    url: http(`/user/process/instance/${data.page}/${data.pageSize}`),
    method: "PUT",
    data
  })
}

/*查看信息*/
function getAppinfo(data) {
  return http({
    url: http(`/user/process/instance/${data}`),
    method: "get"
  })
}
// 流程接口
function getApptask(data) {
  return http({
    url: http(`/user/process/instance/tasks/${data}`),
    method: "get"
  })
}
export { instance, getAppinfo, getApptask }
