import http from "../untils/httpRequest"

function login(data) {
  return http({
    url: http("/sys/login"),
    method: "POST",
    data
  })
}
export { login }
