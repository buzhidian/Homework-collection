## 1.什么是vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件的状态。通过vuex我们可以解决组件之间数据共享的问题，后期也方便我们管理以及维护。

## 2.vuex的五大组成部分

state: 用来存状态

actions:可以包含异步操作

mutations: 唯一可以修改state数据的场所 this.$store.commit()

getters: 类似于vue组件中的计算属性，对state数据进行计算（会被缓存）,可以通过this.$store.getters来获取存放在state里面的数据

modules：模块化管理store（仓库），每个模块拥有自己的 state、mutation、action、getter

## 3.modules

 当项目庞大，数据信息量特别大的时候，我们可以考虑分模块形式管理数据，比如user模块管理用 户信息数据，cart模块管理购物车数据，shop模块管理商品信息数据。 

```
import vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex);

const state= ()=>{ token:''}
const actions = {
   set_token({commit},val){
     commit("to_token",val)
  }
}
const mutations = {
   to_token(state,val){
    state.token=val;
  }
}
const getters = {}


//user模块
let user = {
  namespaced: true, //一定要开始命名空间。
  state: { userid: 1234 },
  actions: {
  },
  mutations: {
    SET_USERID(state, val) {
      state.userid = val;
    }
  },
  getters: {

  }
}

//购物车数据的模块
let cart = {
  namespaced: true,
  state: { userid: 567 },
  actions: {

  },
  mutations: {
  },
  getters: {

  }
}


const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user,
    cart
  },
  plugins: [createPersistedState({
    storage: sessionStorage,
    key: "token"
  })]//会自动保存创建的状态。刷新还在
})

export default store
```

在使用时：

```
获取user模块的`userid`
this.$store.state.user.userid
this.$store.commit("user/SET_USERID",12345)// 前面是指定模块user 中的SET_USERID 方法，
后面是传参 可以是对象、数组、字符串等
```

## 4.辅助函数

Vuex的辅助函数包括： mapState，mapActions，mapMutations，mapGetters 

辅助函数可以把vuex中的数据和方法映射到vue组件中，达到简化操作的目的。

如果要使用四大金刚时首先要在使用的页面中引入：

```
import { mapActions, mapGetters, mapMutations, mapState } from ‘vuex’
//使用哪个就引用哪个
```

 **有三种用法**

1. 对象

   ```
   computed:mapState({
   	//箭头函数
   	count:state=>state.count,
   	//在这里为了能够使用this获取局部变量localCount,必须使用常规函数
   	return state.count+this.localCount
   })
   ```

   ​	 如果使用箭头函数，当vuex的state和当前组件的state，含有相同的变量名称时，this获取的是vuex中的变量，而不是局部变量 

2. 数组

    当映射的计算属性的名称与state的子节点名称相同时，我们也可以给mapState传一个字符串数组。 

   ```
   computed:mapState([
   	'count'
   ])
   ```

3.  对象展开运算符 

    **mapState**函数返回的是一个对象。如果需要将它与局部计算属性混合使用，通常我们需要一个工具函数将多个对象合并为一个，使我们可以将最终对象传给computed属性。 

   ```
   computed:{
   	localComputed(){},
   	...mapState({})
   }
   ```

    **mapGetters**将store中的getter映射到局部计算属性 。

   ```
   computed:{
   	...mapGetters({
   		'oneGetter',
   		'anotherGetter'
   	})
   }
   ```

    使用**mapMutations**辅助函数将组件中的methods映射为store.commit调用 。

   ```
   methods:{
   	//将this,tips映射成this.$store.commit('tips')
   	...mapMutations(['tips'])
   }
   ```

    使用**mapActions**辅助函数将组件的methods映射成store.dispath调用 。

   ```
   methods:{
   	//将this,tips映射成this.$store.commit('tips')
   	...mapActions(['tips'])
   }
   ```

   

## 5.数据持久化

 	问题：存储在vuex中的状态，刷新页面，会丢失。 最简单的做法就是利用插件 vuex-persistedState。 为了解决刷新页面数据丢失，才有了数据持久化。 

1. **安装**

    cnpm install vuex-persistedState -S 

   ```
   -S 是--save的简写，意为：把插件安装到dependencies（生产环境依赖）中
   -D是--save-dev的简写，意为：把插件安装到devDependencies（开发环境依赖）中
   ```

2.  **使用** 

   ```
   import createPersistedState from 'vuex-persistedstate'
   const store = new Vuex.Store({
     state,
     mutations,
     actions,
     getters,
     plugins: [createPersistedState({
       storage: sessionStorage,
       key: "token"
     })]//会自动保存创建的状态。刷新还在
   })
   ```

   



































