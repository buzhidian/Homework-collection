<template>
	<div class="about">
		<h1>This is an about page</h1>

		<p>
			事件一： 解决开头波浪： 在package.json里面添加 "requireConfigFile": false
			即可。
		</p>
		<p>事件二：添加文件：.prettierrc 和 .prettierignore</p>
	</div>
</template>
<script>
export default {
	data() {
		return {
			msg: '解决问题',
			username: '大大王',
			password: 'dwada',
			address: '河南',
			home: '人工岛'
		}
	}
}
</script>
