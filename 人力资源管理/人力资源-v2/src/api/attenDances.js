import http from "../untils/httpRequest"

/*考勤头部数据*/
function Attendancetop() {
  return http({
    url: http("/company/department"),
    method: "get"
  })
}

/*考勤表格数据*/
function Attendancetable(data) {
  return http({
    url: http(`/attendances?page=${data.page}&pagesize=${data.pageSize}&total=${data.total}`),
    method: "get"
  })
}

/*考勤报表数据*/
function Atrtgetreport() {
  return http({
    url: http("/attendances/reports"),
    method: "get"
  })
}

/*考勤设置数据*/
function Attgetsetup(data) {
  return http({
    url: http("/cfg/atte/item"),
    method: "post",
    data
  })
}

export { Attendancetop, Attendancetable, Atrtgetreport, Attgetsetup }
