<template>
  <div class="school">
    <h2>School</h2>
    <h3>{{parMsg}}</h3>

    <!-- 需求:学校里面有好多豹学生,我们点击一个学生的名称,
    则单独展示一个学生的详细信息详细信息:姓名,年龄,学籍,性别 -->

        <ul>
            <li v-for="item in studentsList" :key="item.id">
                <span>{{item.id}}-{{item.name}} </span>
                <span>年龄：{{item.age}}</span>
            </li>
        </ul>

        <My-child ref="child"></My-child>
        <Child-a></Child-a>
        <Child-b></Child-b>
        <My-list></My-list>

        <!-- 让 A中的数据发送到 B中 -->

  </div>
</template>

<script>
import MyChild from "../components/MyChild.vue"
import ChildA from "../components/ChildA.vue"
import ChildB from "../components/ChildB.vue"
import MyList from "../components/MyList.vue"
export default {
    components:{
        MyChild,
        ChildA,
        ChildB,
        MyList,
    },
  data() {
    return {
        studentsList:[
            {
                id:1,
                name:"小明",
                age:15,
                status:0,  //0在籍，1注销
                sex:0,  //0男 ，1女
            },
            {
                id:2,
                name:"小白",
                age:16,
                status:1,
                sex:0,
            },
            {
                id:3,
                name:"小花",
                age:15,
                status:1,
                sex:1,
            },
            {
                id:4,
                name:"小蓝",
                age:14,
                status:0,
                sex:1,
            },
        ],
        parMsg:"",
    };
  },
  methods: {},
  created() {},
  mounted(){
    console.log(this.$refs.child.msg);
    this.parMsg = this.$refs.child.msg
  }
};
</script>

<style lang='scss' scoped>
li{
    list-style: none;
    cursor: pointer;
}
</style>
