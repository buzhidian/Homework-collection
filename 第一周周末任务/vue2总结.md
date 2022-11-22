# 一.生命周期

什么是生命周期函数？

生命周期函数 又叫钩子函数 是到了某一个时间点会自动触发
我们讨论的是 vue 实例的钩子函数 从 vue 实例创建到销毁的过程中 到了一定的时间节点就会触发

## 1.1 生命周期函数有哪些

创建阶段

- beforeCreate
  实例创建之前 这个时候什么都没有 data methods 都不能用 也没有 this

- created
  创建之后 也是最早的可以使用 data 和 methods 的钩子函数 这个时候有 this 了
- beforeMount
  组件挂载之前

- mounted
  组件挂载之后
  这个时候能拿到 dom 节点使用

运行阶段 只要修改 data 就会触发

- beforeUpdate
  数据变了 视图还没变
- updated
  数据变了 视图也变了

销毁阶段

- beforeDestory
  组件销毁之前 是最后一个能使用 data 和 methods 的钩子函数
- destoryed
  组件销毁之后

除了这八个 还有 三个
如果用 keep-alive 缓存了组件 就会有 actived deactived 这两个钩子函数
activated 组件激活
deactivated 组件停用
errorCaptured 子组件出错的时候会触发这个钩子函数

## 1.2 项目开发中 在生命周期里都做过什么功能

在写效果的过程中 会在 created 或者 mounted 中发送 http 请求

created 和 mounted 的区别 就是 created 比 mounted 执行的时间更早所以会更多的在 created 中请求
mounted 的特点是可以操作 dom 节点

还会用 created 钩子函数 获取 本地存储的数据

## 1.3 ⻚⾯第⼀次加载时⽗⼦组件⽣命周期执⾏的顺序是什么?

页面—beforeCreate

页面—created

页面—beforeMount

组件—beforeCreate

组件—created

组件—beforeMount

组件—mounted

页面—mounted

# 二.vuex 的理解

vuex 是 vue 的状态管理工具 管理项目中的公共数据 能够在所有的组件中使用
一共有五大核心
state 存放公共数据的地方 通过 this.$store.state.xxx调用
mutations 修改 state 的地方 只有这里能修改 通过this.$store.commit 调用
getters 相当于是之前的计算属性 通过 this.$store.getters 调用
actions 执行异步操作的地方 通过 this.$store.dispatch 调用
modules 模块化

vuex 缺点就是刷新数据会丢失 我们可以保存本地存储 或者 安装 vuex 持久化插件 vuex-persist 去实现自动本地存储

## 2.1vuex 的执行机制

在项⽬当中如果要改变 state 的状态,我们⼀般是在组件⾥⾯调⽤ this.$store.dispatch ⽅式来触发 actions ⾥⾯的⽅法,在 actions⾥⾯的⽅法通过 commit 来调⽤ mutations ⾥⾯定义的⽅法来改变 state,同时这也是 vuex 的执⾏机制

## 2.2 怎么开启严格模式

strict: true, 跟 state 同级的地方设置这个属性
开启完严格模式后 如果不是通过 mutation 修改的 state 就会报错
strict 严格模式只适合开启在开发环境下

## 2.3 modules

把仓库里的数据分模块管理

每个模块里又有四个核心 state mutations getters actions

然后引入仓库 并且在 modules 下注册模块
在定义的 modules 里开启一个命名
namespaced:true

```js
export default {
  computed: {
    arr() {
      return this.$store.state.a.arr;
      //使用 模块a里的state数据arr
    },
  },
  methods: {
    add() {
      this.$store.commit("a/add");
      //调用a下面的add方法
    },
  },
};
```

# 三.路由

vue的路由模式⼀共有两种,分别是哈希和history. 他们的区别是hash模式不

会包含在http请求当中,并且hash不会重新加载⻚⾯,⽽使⽤history模式的话,如果前端的url和后端发起请求的url不⼀致的话,会 

报404错误,所以使⽤history模块的话我们需要和后端进⾏配合.

history的原理就是利⽤html5新增的两个特性⽅法,分别是pushState和replaceState来完成的. 以上就是我对vue路由模式的理解.

# 四.导航守卫

路由的导航守卫 又叫做路由的钩子函数（生命周期函数）
就是在跳转页面的 时候把 路由拦下来 做一些操作 再放行
一共有三种

第一种是全局守卫
beforeEach 路由进入之前
afterEach 路由进入之后

第二种 组件内守卫
beforeRouteEnter 路由进入之前
beforeRouteUpdate 路由更新之前
beforeRouteLeave 路由离开之前

第三种
独享守卫
beforeEnter 路由进入之前

有三个参数
to from next
next 这个参数 在路由 3.x 版本的时候 是必须的
但是到了路由 4.x 版本的时候 next 参数变成可选的了

一般来说 vue2 搭配 3.x 的路由
vue3 搭配 4.x 的路由

比如说 购物车页面只有登陆的才能访问 我们可以用组件级守卫守卫购物车页面
如果已经登陆存的有 token 的话 就继续访问这个页面 如果没有登陆的话就会跳转到登陆页面

```js
  beforeRouteEnter(to, from, next) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next("/login");
    }
```

next 参数 除了括号里可以是空和路径之外 还可以是一个回调函数（回调函数就是一个被作为参数传递的函数）
比如说 token 被存进 vuex 里就能这么写：

```js
  beforeRouteEnter(to, from, next) {
    // if (localStorage.getItem("token")) {
    //   next();
    // } else {
    //   next("/login");
    // }
    next((vm) => {
      // vm就是 这个组件实例 就是this
      if (vm.$store.state.token) {
        next();
      } else {
        next("/login");
      }
    });
  },

```

# 五.methods computed watch

methods 就是方法 我们写的点击事件等各种事件都放在 methods 里

计算属性 computed 计算属性 有缓存功能就是当跟他有关的值发生变化的时候才会重新计算 还有一个特点就是必须要有 return 值 return 就是把计算的结果 return 出去

watch watch 可以监听 数据和路由的变化

watch 监听路由的变化
监听路由的话就是监听 $router

```js
  watch: {
    $route: {
      handler(newval, oldval) {
        console.log(newval, oldval);
      },
    },
  },
```

watch 监听 数据的变化
watch 有三个参数 deep immediate handler
当我们不需要 deep 和 immediate 的时候 就可以简写为一个函数 这个函数就是 handler

```js
 watch: {
    num: {
      deep: true, //深度监听
      immediate: true, //进入页面立刻监听
      handler(newval) {
        console.log(newval);
      },
      //执行函数 参数是newval 和 oldval
    },

    // num() {},
    // 之前写的只有一个函数的情况 是handler的简写 不需要 deep 和 immediate的时候可以简写
  },
```

# 六.组件传值的八种方式

1. 父传子

- 首先在使用子组件的标签上 通过自定义属性传递变量 在子组件中 通过 props 接受
  在接收的时候有两种接收方式 数组形式 和 对象形式 对象形式可以规定传来的变量的数据类型（type）默认值（default）以及是否必填（required）

2. 子传父

首先在使用子组件的标签上定义一个自定义事件 在子组件里通过 this.$emit 去调用这个自定义事件 $emit 方法的第一个参数是自定义事件的名字 第二个参数是就是子组件要传递给父组件的变量 最后在父组件接收使用就可以了

3. 兄弟组件

- 利用中央事件总线 eventbus
  在 main.js 中 把一个空的 vue 实例挂载在 vue 的原型上起名叫$bus
  传数据的时候用this.$bus.$emit传 
  在要接受数据的子组件 在 created钩子函数中 用$on 方法接收

4. 利用 vuex 进行组件通信 把公共的数据存在 vuex 里就可以实现组件之间都能使用这个数据了

5. 其实 v-model 也能实现组件通信 因为 v-model 就是 :value 和 @input 事件的合写 如果在一个子组件上使用 v-model 也能实现父子组件之间的通信

6. $attr+$listener
   如果父组件 A 下面有子组件 B 子组件 B 下面又有子组件 C 如果 a 组件的变量和方法想要传给组件 C 的时候 就用到这个方法 适用于多级组件传值
   在 B 组件中给 C 组件绑定 v-bind="$attrs" v-on="$listeners" 然后在 C 组件中就可以直接使用 a 传来的属性和方法了
   （简单来说：$attrs与$listeners 是两个对象，$attrs 里存放的是父组件中绑定的非 Props 属性，$listeners 里存放的是父组件中绑定的非原生事件。）

7. provide 和 inject
   父组件通过通过 provide 提供变量 子组件中通过 inject 注入变量，不论嵌套了几层子组件 都能通过 inject 来调用 provide 的数据

这种写法传的数据是不响应的

8. $parent和$children
   在子组件内可以直接通过$parent对父组件进行操作，在父组件内可以直接通过$children 对子组件进行操作
   在父组件调用子组件时候要加下标也就是$children 是一个数组 因为可以有很多个子组件

9. 也能用本地存储 来 完成组件通信

# 七.nextTick

在 dom 更新之后执行的延迟回调
因为 vue 的 dom 更新是异步的 所以 当 dom 还未更新的时候我们无法拿到最新的 dom 来用
放在 nextTick 里的代码 就会在 dom 更新之后执行 就能拿到最新的 dom 来用了

# 八.常用的修饰符

.trim 去除⾸尾多余的空格
.stop 阻⽌事件冒泡
.once 只渲染⼀次
.self 事件只作⽤在元素本身
.number 将值转化为 number 类型
.capture 组件之间捕获
.prevent 阻⽌元素的默认⾏为
.native 事件穿透,让我们可以在⾃定义组件上触发原生的事件

# 九.keep-alive

keep-alive 是 vue 内置的⼀个组件，⽽这个组件的作⽤就是能够缓存不活动的组件，我们能够知道，⼀般情况下，组件进⾏切
换的时候，默认会进⾏销毁，如果有需求，某个组件切换后不进⾏销毁，⽽是保存之前的状态，⽐如说刚刚填好的表单数
据。那么就可以利⽤ keep-alive 来实现
被缓存的组件 切换的时候不会触发创建和销毁的钩子函数 而是会触发跟 keep-alive 相关的 activated（激活） deactivated（停用）这两个钩子函数

keep-alive 标签 有 include 属性和 exclude 属性
include 属性 定义了要缓存谁
exclude 属性 定义了不缓存谁
还可以利用 路由的 meta 信息去规定缓存谁不缓存谁

我在写项目的过程中 可以使用 keep-alive 缓存刚刚填好的表单数据 还可以记录页面滚动条的距离，离开再回来滚动条还在这个位置

# 十.过滤器 filter

所谓的 vue 过滤器就是将数据进⾏⼆次处理,得到我们想要的结果数据
vue 的过滤器分为两种,第⼀种是全局过滤器,通过 vue.filter 来进⾏定义,第⼆种是局部过滤器,需要定义在组件内部，用 filters 过滤
项⽬中我们通过过滤器将后台返回的状态 0 和 1 转化为⽀付或者未⽀付 还有对时间格式进行过滤

vue3 中没有过滤器了

# 十一.插槽

所谓的插槽就是⼀个占位符,将⾃定义组件的内容展示出来.我们知道⾃定义的组件⾥⾯如果写内容的话,⻚⾯是不会显
示出来的,如果我们想让⾃定义组件⾥⾯的内容显示出来,我们就需要使⽤ slot 的插槽.
⽽插槽分别具名插槽和匿名插槽、以及作⽤域插槽. 我们⽤的⽐较多的具名插槽和匿名插槽,具名插槽需要所有 slot 标签上指定
name 属性,⽽在对应标签上添加# 属性指定名字.
在项⽬中我们⼀般在进⾏组件封装的时候会使⽤插槽,以上就是我对插槽的理解.

作用域插槽
是把子组件里的数据传到父组件的插槽里使用

# 十二.跨域

什么是跨域
跨域是浏览器的跨域 不符合 域名 协议 端口号一样（同源策略） 的请求都会出现跨域的问题
跨域的解决方法
最多的情况是后端处理跨域
前端的跨域
服务器代理
jsonp
vue 中是 proxy 代理实现跨域

vue 的跨域
用 proxy 实现

# 十三.axios 封装

1. 先创建 utils 文件夹
2. 创建 request.js
3. 引入 axios
4. 配置 基本路径和超时时间
5. 配置请求拦截和响应拦截
6. 在请求拦截里可以放 loading 和 token
7. 在响应拦截中 可以 清除 loading 还有处理错误编码字典
8. 最后把我们封装的 axios 实例 导出

# 十四.axios 拦截器

拦截器有两种 一个是请求拦截一个是响应拦截
拦截器不需要手动调用而是每次发送 http 请求的时候都会自动触发
我们一般在请求拦截中 放全局的 loading 和 token
在响应拦截中关闭全局的 loading 和对 token 进行过期处理 还可以处理错误编码字典

# 十五.vue 和 jquery 的区别

⾸先呢 jquery 他是⽤ js 封装的⼀个类库,主要是为了⽅便操作 dom 元素,⽽ vue 他是⼀个框架,并且呢,他会从真实 dom 构建出⼀个
虚拟的 dom 树,通过 di!算法渲染只发⽣改变的 dom 元素,其他的相同的 dom 元素不⽤在重新渲染. ⽽使⽤ jquery 去改变 dom 元素
的时候,即使有相同的 dom 元素也会重新渲染, jq 重点操作 dom，而 vue 重点操作数据。以上就是我对 vue 和 jquery 区别的理解.

# 十六.vue 中 data 发⽣变化,视图不更新如何解决?

在 vue2 中 vue 实例的 data 数据是响应式 的 就是数据变了 视图也会跟着变，如果给某一个 data 新添加了一个字段 这个新添加的字段因为 js 的限制不响应，需要使用 this.$set 方法代替原本的普通添加方法 就能实现响应，这个方法的三个参数 是给谁添加 添加的字段 初始值 如果不是在组件中 用这个方法 那么就用 Vue.set

在 vue3 中数据响应的原理从 definedproperty 变成了 proxy 所以不会存在数据变了视图不变的问题

# 十七.mvvm 代表框架是 vue mvc 代表框架是 jq 和 react

1. 说⼀下什么是 mvvm 模式?(70%)
   MVVM 是把 MVC 的 Controller 和 MVP 的 Presenter 改成了 ViewModel 。
   View 的变化会⾃动更新到 ViewModel ， ViewModel 的变化也会⾃动同步到 View 上显示。这种⾃动
   同步是因为 ViewModel 中的属性实现了 Observer ，当属性变更时都能触发对应的操作

2. MVVM模式的优点以及与MVC模式的区别?

   MVVM 模式的优点：
   1、低耦合： 视图（View）可以独⽴于 Model 变化和修改，⼀个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model
   可以不变，当 Model 变化的时候 View 也可以不变。
   2、可重⽤性： 你可以把⼀些视图逻辑放在⼀个 ViewModel ⾥⾯，让很多 view 重⽤这段视图逻辑。
   3、独⽴开发： 开发⼈员可以专注于业务逻辑和数据的开发（ViewModel），设计⼈员可以专注于⻚⾯设计。
   4、可测试： 界⾯素来是⽐较难于测试的，⽽现在测试可以针对 ViewModel 来写。
   MVVM 和 MVC 的区别：
   mvc 和 mvvm 其实区别并不⼤。都是⼀种设计思想。
   主要区别
   mvc 中 Controller 演变成 mvvm 中的 viewModel，
   mvvm 通过数据来显示视图层⽽不是节点操作。
   mvvm 主要解决了:
   mvc 中⼤量的 DOM 操作使⻚⾯渲染性能降低，加载速度变慢，影响⽤户体验。

# 十八.虚拟 dom

虚拟 dom 是利用 js 描述元素与元素的关系，用 js 对象来表示真实的 DOM 树结构，创建一个虚拟 DOM 对象
由于在浏览器中操作 DOM 是很昂贵的。频繁的操作 DOM，会产⽣⼀定的性能问题.
在组件渲染的时候会调用 render 函数，这个函数会生成一个虚拟 dom，再根据这个虚拟 dom 生成真实的 dom，然后这个真实的 dom 会挂载到我们的页面中。
如果只是渲染一个页面后期不改动的话 那么虚拟 dom 其实成本更高 因为 都要渲染成真实的 dom
如果组件内有响应的数据，数据发生改变的时候 render 函数会生成一个新的虚拟 dom 新的虚拟 dom 树和旧的虚拟 dom 树进行对比，找到要要修改的虚拟 dom 的部分，去修改相对应部分的真实 dom

# 十九.diff 算法

diff 算法就是对虚拟 dom 进行对比，并返回一个 patch 对象，这个对象的作用是存储两个节点不同的地方，最后用 patch 里记录的信息去局部更新真实的 dom

diff 算法的步骤
1.js 对象表示真实的 dom 结构，就是我们说的生成一个虚拟 dom，再用虚拟 dom 构建一个真的 dom 树，放到页面中。 2.状态改变的时候生成一个新的虚拟 dom 跟旧的进行对比，这个对比的过程就是 diff 算法，通过 patch 对象记录差异 3.把记录的差异用在第一个虚拟 dom 构建的真实的 dom 上，视图就更新了

Vue 的 diff 算法是平级⽐较，不考虑跨级⽐较的情况。内部采⽤深度递归的⽅式+双指针⽅式⽐较

# 二十.组件写 name 有啥好处？

增加 name 属性，可以实现组件递归调⽤自身，调用的时候用的就是 name 名字
可以表示组件的具体名称，⽅便调试和查找对应的组件 比如说 keep-alive 的 include 和 exclude 就是通过组件的 name 属性区分谁缓存谁不缓存的

# 二十一. Vue.use 是⼲什么的？

vue.use 是用来安装 Vue.js 插件。这个插件可以是一个组件也可以是一个函数，插件里要有一个 install 方法，install 方法调用时，他的第一个参数就是 Vue 在调用 vue.use 方法的时候就会执行 Vue.install 方法

该方法需要在调用 new Vue() 之前被调用。

# 二十二.mixin 混入 

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”，出现冲突的时候以组件优先
比如，生命周期函数就会合并 但是如果组件和混入有相同的变量的时候 会以组件的优先

全局混入
混入也可以进行全局注册。使用时格外小心！一旦使用全局混入，所有的实例都会触发

# 二十三.Vue.extend

使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
可以理解为创建子组件的 可以用 mount 或者 el 指定这个子组件挂载到哪里

# 二十四. 路由导航守卫扩展

导航守卫 就是一座房子的保安 只有保安允许了才能访问页面

之前说三种六个 还有一个用的不是很多的全局守卫 叫做全局解析守卫 beforeResolve

导航守卫一共有三种
全局的守卫 守卫所有的页面
beforeEach 路由前置守卫
beforeResolve 路由解析之前
afterEach 路由离开

全局守卫 beforeEach 和 beforeResolve  
他们两个都会在路由跳转前就执行 参数都是 to from next
他们两个的区别 执行的时机不一样 beforeEach 是在路由规则被循环之前执行
beforResolve 是在组件被解析之后调用 beforeEach 要比 beforResolve 先执行

组件守卫 守卫单个组件
beforeRouteEnter 路由进入
beforeRouteUpdate 路由更新
beforeRouteLeave 路由离开

独享守卫 守卫单个页面
beforeEnter 路由进入之前

**三种守卫全局 组件 独享守卫的区别：**

1. 作用范围不同 全局作用于所有页面 组件作用于单个组件 独享也是守卫单个页面
2. 代码写的位置不一样 全局守卫写在 router/index.js 中 组件守卫写在组件里 跟 data 同级 独享守卫写在路由规则里
3. 执行顺序有区别 执行的顺序要记下来
   beforeEach 前置守卫
   beforeEnter 独享守卫
   beforeRouteEnter 组件守卫
   beforeResolve 解析守卫
   afterEach 路由后置守卫

# 二十五.多环境变量

一般分为开发环境和生产环境

development 开发
production 生产（上线）
怎么配置多环境变量
首先建立两个文件 在根目录
.env.dev
里面写上 NODE_ENV="development"
.env.prod
里面写上 NODE_ENV="production"

这样我们可以通过 process.env.NODE_ENV 这个变量来判断当前的环境
比如我们可以通过判断不同的环境 在 axios 请求的时候设置不同的 baseURL
在开发的时候使用测试接口
在上线的时候使用真实接口

npm run serve 开启的就是开发环境
npm run build 开启的就是生产环境

# 二十六. 怎样理解 Vue 的单向数据流?

数据总是从⽗组件传到⼦组件，⼦组件没有权利修改⽗组件传过来的数据，只能请求⽗组件对原始数据进⾏修改。这样会防⽌从
⼦组件意外改变⽗级组件的状态，从⽽导致你的应⽤的数据流向难以理解。
注意：在⼦组件直接⽤ v-model 绑定⽗组件传过来的 prop 这样是不规范的写法 开发环境会报警告
如果实在要改变⽗组件的 prop 值 可以再 data ⾥⾯定义⼀个变量 并⽤ prop 的值初始化它 之后⽤$emit 通知⽗组件去修改

# 二十七. vue 中 key 的作⽤是什么?

避免 dom 元素重复渲染. 我⻔⼀般在设置 key 的时候⾸先尽量会设置为 id,或者 index 下表.

# 二十八. vue 双向数据绑定原理?

vue.js 则是采⽤ 数据劫持 结合 发布者-订阅者 模式的⽅式，
通过 Object.defineProperty() 来劫持各个属性的 setter ， getter ，
在数据变动时发布消息给订阅者，触发相应的监听回调。
这个时候就可以实现数据的双向绑定

# 二十九. vue 常⽤的指令有哪些?

v-if
v-show
v-html
v-text
v-on
v-bind
v-model
v-for

# 三十.v-if 与 v-show 的区别?

⾯试官您好,接下来我给您介绍⼀下 v-if 和 v-show 的区别? ⾸先 v-if 和 v-show 都是控制元素的显示与隐藏, 不过 v-if 控制元素的显
示和隐藏的时候会删除对⽤的 dom 元素,当每⼀个显示的时候,都会重新创建 dom 和渲染. ⽽ v-show 则是通过 css 的 display:none
和 display:block 来控制元素的显示与隐藏. v-if ⽐较耗费性能,所以我们涉及到频繁的显示隐藏操作我们建议使⽤ v-show,如果不
是频繁操作的话,我们可以 v-if
在项⽬中我会经常使⽤ v-if 和 v-show,⽐如我们在搜索功能的时候,他有⼀个历史记录,这个时候我们根据是否有搜索的结果来判
断历史记录的显示与隐藏,这块我就可以使⽤ v-if ,当然⽤ v-show 也可以. 以上就是我对 v-if 和 v-show 的理解.

# 三十一. v-for 与 v-if 的优先级那个⾼?如果同时使⽤ v-for 和 v-if 怎么解决?

v-for 的优先级⾼. 因为 v-for 的时候我们才开始渲染 dom 元素,这个 v-if 还⽆法进⾏判断.
v-for 和 v-if 不能同时使⽤,我们可以通过标签,⽐如 div 或者 template 标签来进⾏包裹,把 v-if 写到包裹的标签上⾯(写到 v-for 外⾯)

# 三十二、Vue2 和 vue3 的区别

1. 双向数据绑定原理发生了改变，使用 proxy 替换 Object.defineProerty,使用 Proxy 的优势：
    可直接监听数组类型的数据变化
    监听的目标为对象本身，不需要像 Object.defineProperty 一样遍历每个属性，有一定的性能提升
    可直接实现对象属性的新增/删除
2. 默认使用懒加载
   在 2.x 版本里。不管数据多大，都会在一开始就为其创建观察者，在数据很大时，就会造成性能的问题。在 3.x 中，只会对渲染出来的数据创建观察者，而且 3.x 的观察者更高效。
3. 3.0 新加入了 TypeScript 以及 PWA 支持
4. 重构 Virtual DOM
    模板编译时的优化，将一些静态节点编译成常量
   Slot 优化，将 slot 编译为 lazy 函数，将 slot 的渲染的决定权交给子组织
5. 生命周期有了一定的区别
   Vue2--------------vue3
   beforeCreate -> setup() 开始创建组件之前，创建的是 data 和 method
   created -> setup()
   beforeMount -> onBeforeMount 组件挂载到节点上之前执行的函数。
   mounted -> onMounted 组件挂载完成后执行的函数
   beforeUpdate -> onBeforeUpdate 组件更新之前执行的函数。
   updated -> onUpdated 组件更新完成之后执行的函数。
   beforeDestroy -> onBeforeUnmount 组件挂载到节点上之前执行的函数。
   destroyed -> onUnmounted 组件卸载之前执行的函数。
   activated -> onActivated 组件卸载完成后执行的函数
   deactivated -> onDeactivated

# 三十三、Element-ui 和 vant-ui 按需引入

首先安装按需引入的插件，在 babel.config.js 中添加按需引入的配置，创建一个 plugin 文件夹，定义一个 js 文件用来存放按需引入的代码，之后在建好的 js 文件中首先导入 vue，再导入需要的 vant-ui 插件，通过 vue.use()全局注入。
修改样式可以用样式穿透 /deep/