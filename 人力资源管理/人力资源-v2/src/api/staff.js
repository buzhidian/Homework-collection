import http from "../untils/httpRequest"

function user(data) {
  return http({
    url: http(`/sys/user?page=${data.page}&size=${data.size}&total=${data.total}`),
    method: "GET"
  })
}
function userInfo(data) {
  return http({
    url: http(`/sys/user/${data}`),
    method: "GET"
  })
}
function job(data) {
  return http({
    url: http(`/employees/${data}/jobs`),
    method: "GET"
  })
}

export { user, userInfo, job }
