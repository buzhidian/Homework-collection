let express = require('express')
let Mock = require('mockjs')
const loginData = require('./common/login.json') //登录
const menusData = require('./common/menus.json') //导航栏
const usersData = require('./common/users.json') //用户列表
const rolesData = require('./common/roles.json') //角色列表
const rightsData = require('./common/rights.json') //权限列表
const shoplistData = require('./common/shoplist.json') //商品列表
const shopclassData = require('./common/shopclass.json') //商品分类
const ordersData = require('./common/orders.json') //订单管理
const shopaddData = require('./common/shopadd.json') //商品添加
const treeData = require('./common/tree.json') //树状图
const userrolesData = require('./common/userroles.json') //树状图

let app = express()

app.use("/login", function (req, res) {
	res.json(
		Mock.mock({
			...loginData
		})
	)
})
app.use("/menus", function (req, res) {
	res.json(
		Mock.mock({
			...menusData
		})
	)
})
app.use("/users", function (req, res) {
	res.json(
		Mock.mock({
			...usersData
		})
	)
})
app.use("/userroles", function (req, res) {
	res.json(
		Mock.mock({
			...userrolesData
		})
	)
})
app.use("/roles", function (req, res) {
	res.json(
		Mock.mock({
			...rolesData
		})
	)
})
app.use("/rights", function (req, res) {
	res.json(
		Mock.mock({
			...rightsData
		})
	)
})
app.use("/goods", function (req, res) {
	res.json(
		Mock.mock({
			...shoplistData
		})
	)
})
app.use("/categories", function (req, res) {
	res.json(
		Mock.mock({
			...shopaddData
		})
	)
})
app.use("/categories", function (req, res) {
	res.json(
		Mock.mock({
			...shopclassData
		})
	)
})
app.use("/orders", function (req, res) {
	res.json(
		Mock.mock({
			...ordersData
		})
	)
})
app.use("/tree", function (req, res) {
	res.json(
		Mock.mock({
			...treeData
		})
	)
})
app.listen('8090', () => {
	console.log('监听端口 8090');
})
