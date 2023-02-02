import http from '../untils/request'
export function login(data) {
  return http({
    url: http.apis('/sys/login'),
    method: 'POST',
    data
  })
}
export function myMessage() {
  return http({
    url: http.apis('/sys/profile'),
    method: 'POST'
  })
}

export function myMessageId() {
  return http({
    url: http.apis('/sys/user/1063705989926227968?id=1063705989926227968'),
    method: 'GET'
  })
}
export function startProcess(data) {
  return http({
    url: http.apis('/user/process/startProcess'),
    method: 'POST',
    data
  })
}
