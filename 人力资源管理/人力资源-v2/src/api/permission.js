import http from "../untils/httpRequest"

function permission() {
  return http({
    url: http("/sys/permission"),
    method: "GET"
  })
}
export { permission }
