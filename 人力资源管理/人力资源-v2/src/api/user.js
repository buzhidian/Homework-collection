import http from "../untils/httpRequest"

function myMessage() {
  return http({
    url: http("/sys/profile"),
    method: "POST"
  })
}

function myMessageId() {
  return http({
    url: http("/sys/user/1063705989926227968?id=1063705989926227968"),
    method: "GET"
  })
}
export { myMessage, myMessageId }
