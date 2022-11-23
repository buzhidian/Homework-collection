<template>
  <div class="adminSet">
    <h2>管理员信息</h2>
    <div class="box">
      <ul>
        <li>姓名：</li>
        <li>注册时间：</li>
        <li>管理员权限：</li>
        <li>管理员ID：</li>
        <li>
          <span>更换头像：</span><br>
          <img src="https://elm.cangdu.org/img/default.jpg" alt="" />
        </li>
        
      </ul>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>
  
  <style lang='scss' scoped>
.adminSet {
  color: #666666;
  width: 64%;
  margin: auto;
  // border: 1px solid #ccc;
  h2 {
    text-align: center;
  }
  ul {
    background: #f9fafc;
    li {
      padding: 20px;
      margin-bottom: 15px;
    }

    img {
      width: 120px;
      cursor: pointer;
    }
  }
}
</style>
  