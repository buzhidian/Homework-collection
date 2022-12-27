## 选项api和组合api

vue2是用的选项API语法（Options ApI）：数据和方法相分离

在vue2.x项目中使用的就是 选项API 写法（Options ApI）
代码风格：data选项写数据，methods选项写函数...，一个功能逻辑的代码分散。
优点：易于学习和使用，写代码的位置已经约定好
缺点：代码组织性差，相似的逻辑代码不便于复用，逻辑复杂代码多了不好阅读。
补充：虽然提供mixins用来封装逻辑，但是出现数据函数覆盖的概率很大，不好维护。

vue3使用的是组合式写法（Compositon API）：一个功能逻辑的代码组织在一起

在vue3.0项目中将会使用 组合API 写法
代码风格：一个功能逻辑的代码组织在一起（包含数据，函数...）
优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护。
缺点：需要有良好的代码组织能力和拆分逻辑能力。
补充：为了能让大家较好的过渡到vue3.0的版本来，也支持vue2.x选项API写法





## 常用的组合API

--->接day15笔记

### 4.Vue3.0中的响应式原理

1.vue2.x的响应式

- 实现原理
  - 对象类型：通过 0bject.defineProperty() 对属性的读取、修改进行拦截 (数据劫持)。
  - 数组类型：通过重写更新数组的一系列方法来实现拦截。 (对组的变更方法进行了包裹)
- 存在问题
  - 所增属性、删除属性，界面不会更新
  - 直接通过下标修改数组，界面不会自动更新。

2.vue3.0的响应式

- 实现原理：

  - 通过Proxy(代理)：拦截对象中任意属性的变化，包括: 属性值的读写、属性的添加、属性的删除等，
  - 通过Reflect (反射)：对源对象的属性进行操作。

  ```
  let p = new Proxy(data,{
  		//拦截读取属性值
          get(target,prop){
              return Reflect.get(target,prop)
          },
          //拦截设置属性值或添加新属性
          set(target,prop,value){
              return Reflect.set(target,prop,value)
          },
          //拦截删除属性
          deleteProperty(target,prop){
              return Reflect.deleteProperty(target,prop)
          },
      })
  ```



### 5.reactive对比ref

- 从定义数据角度对比：
  - ref用来定义: 基本类型数据。
  - reactive用来定义: 对象 (或数组) 类型据。
  - 备注: ref也可以用来定义对象 (或数组) 类型数据，它内部会自动通过 ractive 转为代理对象。
- 从原理角度对比：
  - ref通过 0bject.defineProperty() 的 get 与 set 来实现响应式 (数据劫持)。
  - reactive通过使用**Proxy**来实现响应式 (数据劫持)，并通过**Reflect**操作**源对象**内部的数据
- 从使用角度对比：
  - ref定义的数据: 操作数据需要 .value ，读取数据时模板中直接读取不需要 .value。
  - reactive定义的数据: 操作数据与读取数据: 均不需要 .value。



### 6.setup的两个注意点

- setup执行的时机

  在beforeCreate之前执行一次，this是undefined。

- setup的参数

  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。

  - context：上下文对象

    - attrs: 值为对象，包含: 组件外部传递过来，但没有在props配置中声明的属性，相当于 this.$attrs
    - slots: 收到的插槽内容，相当于 this.$slots。
    - emit: 分发自定义事件的函数，相当于 this.$emit。

  - 传递props的时候和emit的时候需要申明一下

    ```
    props:['aaa']
    emits:['方法名']
    ```

    

### 7.计算属性与监视

1. computed函数

   与Vue2.x中computed配置功能一致

   ```
   import {computed} from 'vue’
   
   setup(){
   	
   	//计算属性--简写
   	let fullName = computed()=>{
   		return person.firstName + '-' + person.lastName
   	}
   	
   	//计算属性--完整
   	let fulIName = computed({
   		get(){
   			return person.firstName + '-' + person.lastName
   		}
   		set(value){
   			const nameArr = value.split('-')
   			person.firstName = nameArr[0]
   			person.lastName = nameArr[1]
   		}
   	})
   }
   ```

2. watch函数

   - 与Vue2x中watch配置功能一致
   - 两个小”坑“：
     - 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视 (deep配置失效)
     - 监视reactive定义的响应式数据中某个属性时：deep配置有效。

3. watchEffect函数

   - watch的套路是：既要指明监视的属性，也要指明监视的回调。

   - watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性。

   - watchEffect有点像computed:

     - 但computed注重的计算出来的值 (回调函数的返回值) ，所以必须要写返回值
     - 而watchEffect更注重的是过程 (回调函数的函数体) ，所以不用写返回值

     ```
     //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
     watchEffect(()=>{
     	const x1 = sum.value
     	const x2 = person.age
     	console.log('watchEffect配置的回调执行了')
     })
     ```

### 8.生命周期

- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名:

  - beforeDestroy 改名为 beforeUnmount
  - destroyed 改名为 unmounted

- Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钓子对应关系如下

  - beforeCreate ===> setup()
  - created ===> setup()
  - beforeMount ===> onBeforeMount
  - mounted ===> onMounted
  - beforeUpdate ===> onBeforeUpdate
  - updated ===> onUpdated
  - beforeUnmount ===> onBeforeUnmount
  - unmounted ===>onUnmounted

- 总结:

  组合式生命周期要比配置项快一点

### 9.自定义hook函数

- 什么是hook? --本质是一个函数，把setup函数中使用的Composition API进行了封装
- 类似于vue2.x中的mixin.
- 自定义hook的优势：复用代码，让setup中的逻辑更清楚易懂。

在src目录下创建hooks文件夹，新建usePoint.js

```html
import {
    reactive,
    onMounted,
    onBeforeUnmount
} from "vue";

export default function usePointer() {
    let point = reactive({
        x: 0,
        y: 0,
    });
    const savePoint = (event) => {
        console.log(event);
        point.x = event.pageX;
        point.y = event.pageY;
    };
    onMounted(() => {
        window.addEventListener("click", savePoint);
    });
    onBeforeUnmount(() => {
        window.removeEventListener("click", savePoint);
    });
    return point;
}
```

引入到页面之中

```
<template>
  <div class="test">
    <h2>hook</h2>
    <h3>{{ point }}</h3>
  </div>
</template>

<script>
import usePoint from "../hooks/usePoint.js";
export default {
  setup(props, ctx) {
    const point = usePoint();
    return { point };
  },
};
</script>

<style lang='scss' scoped>
</style>

```

### 10.toRef

- 作用：创建一个 ref 对象，其value值指向另一个对象中的某个属性。
- 语法：const name = toRef(person,'name')
- 应用：要将响应式对象中的某个属性单独提供给外部使用时。
- 扩展：toRefs 与 toRef 功能一致，但可以批量创建多个ref对象，语法: toRefs(person)



## 其它 Composition API

### 1.shallowReactive与 shallowRef

- shallowReactive：只处理对象最外层属性的响应式 (浅响应式)。
- shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理。
- 什么时候使用？
  - 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> shallowReactive。
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef。

### 2.readonly 与 shallowReadonly

- readonly：让一个响应式数据变为只读的 (深只读)。
- shallowReadonly：让一个响应式数据变为只读的 (浅只读) 。
- 应用场景：不希望数据(尤其是这个数据是来自与其他组件时)被修改时。

### 3.toRaw 与 markRaw

- toRaw：
  - 作用: 将一个由 reactive 生成的响应式对象转为普通对象
  - 使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新。
- markRaw：
  - 作用：标记一个对象，使其永远不会再成为响应式对象。
  - 应用场景：
    1. 有些值不应被设置为响应式的，例如复杂的第三方类库等。
    2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。

### 4.customRef

- 作用：创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显式控制。
- 实现防抖效果。

### 5.provide 与 inject

- 作用：实现祖与后代组件间通信

- 套路：父组件有一个 provide 选项来提供数据，后代组件有一个 inject 选项来开始使用这些数据

- 具体写法:

  祖组件中:

  ```
  setup(){
  	let car = reactive({name:'奔驰',price:'40万'})
  	provide('car' ,car)
  }
  ```

  后代组件中:

  ```
  setup(props,context){
  	const car = inject('car")
  	return {car}
  }
  ```

### 6.响应式数据的判断

- isRef：检查一个值是否为一个 ref 对象
- isReactive：检查一个对象是否是由 reactive 创建的响应式代理
- isReadonly：检查一个对象是否是由 readonly 创建的只读代理
- isProxy：检查一个对象是否是由 reactive 或者 readonly 方法创建的代理

## Composition API 的优势

#### 1.Options API存在的问题

使用传统Options API中，新增或者修改一个需求，就需要分别在data，methods，computed里修改。

在vue2中，所有功能和模块的代码全部融合在一起，如果一个地方变动，就要去修改整页代码，会造成不可预估的bug，产生许多额外的工作，花费大量的时间去阅读和查阅代码。

#### 2.Composition API 的优势

我们可以更加优雅的组织我们的代码、函数，让相关功能的代码更加有序的组织在一起。

所有代码分模块存放，每个功能都放在自己的函数内部，想要修改某个功能，修改一个函数或者一个组件即可，节约成本，较少耦合。

## 新的组件

### 1.Fragment

- 在Vue2中: 组件必须有一个根标签
- 在Vue3中: 组件可以没有根标签，内部会将多个标签包含在一个Fragment虚拟元素中
- 好处: 减少标签层级，减小内存占用

### 2.Teleport

什么是Teleport? -- Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。

```
<teleport to="移动位置”>
	<div v-if="isShow" class="mask">
		<div class_"dialog">
			<h3>我是一个弹窗</h3>
			<button @click="isShow = false">关闭弹富</button>
		</div>
	</div>
</teleport>
```

### 3.Suspense

- 等待异步组件时渲染一些额外内容，让应用有更好的用户体验

- 使用步骤：

  - 异步引入组件
  - 使用 Suspense 包裹组件，并配置好 default 与 fallback

  

## 其他

### 1.全局API的转移

- Vue 2.x 有许多全局 API 和配置

  例如：注册全局组件、注册全局指令等。

- Vue3.0中对这些API做出了调整

  将全局的API，即: Vue.xxx 调整到应用实例 ( app ) 上

### 2.其他改变

- data选项应始终被声明为一个函数。
- 过度类名的更改：
- 移除keyCode作为 v-on 的修饰符，同时也不再支持 config.keyCodes
- 移除 v-on.native 修饰符
- 移除过滤器 (fiter)













