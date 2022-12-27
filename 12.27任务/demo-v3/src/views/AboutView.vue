<template>
  <div class="">
    <ul>
      <li>
        setup的用户名：<span>{{ username }}</span>
      </li>
      <li>
        年龄：<span>{{ age }}</span>
      </li>
      <li>
        工作：<span>{{ person.job }}</span>
      </li>
      <li>
        薪资：<span>{{ person.salary }}K</span>
      </li>
      <li>
        类型：<span>{{ person1.type }}</span>
      </li>
      <li>
        预期工资：<span>{{ person1.salary }}K</span>
      </li>
      <li>
        爱好<span>{{ person1.hobbies }}</span>
      </li>
      <li>
        深层<span>{{ person1.a.b.c }}</span>
      </li>
    </ul>
    <button @click="addAge">年龄++</button>
    <button @click="person.salary++">薪资++</button>
    <button @click="setInfo">深层修改</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  data() {
    return {
      username:"张三"
    }
  },
  created(){
    console.log("created");
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  beforeMounte(){
    console.log("beforeMounte");
  },
  mounted(){
    console.log("mounted");
  },


  setup(props, ctx) {
    console.log("setup");
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({});
    // let username = "李四"
    // let age = 12
    const username = ref("王五")
    const age = ref(11)
    const person = ref({
      job:"全栈开发",
      salary:20
    })
    const person1 = reactive({
      type:"frontend developer",
      salary:30,
      hobbies:["上课","睡觉","打游戏"],
      a:{
        b:{
          c:666
        }
      }
    })


    const addAge = ()=>{
      age.value++
      console.log(age);
    }
    const setInfo = ()=>{
      person1.type = "change"
      person1.salary = 40
      person1.hobbies = ["学习"]
      person1.a.b.c = 777
    }

    return { ...toRefs(data),username,age,addAge,person,person1,setInfo };
  },
};
</script>

<style lang='scss' scoped>
</style>
