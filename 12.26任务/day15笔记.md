#### vite为什么是下一代的新型构建工具

- **极速的服务启动**--使用原生的ESM文件，无需打包
- **轻量快速的热重载**--无论应用程序大小如何，都始终极快的模块热重载（HMR）
- **丰富的功能对**-- TypeScript、JSX、CSS 等支持开箱即用。
- **优化的构建**--可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建
- **通用的插件**--在开发和构建之间共享 Rollup-superset 插件接口。
- **完全类型化的API**--灵活的 API 和完整的 TypeScript 类型。



**vite原理：**

- 对于不会变动的第三方依赖，采用编译速度更快的go编写的esbuild预构建
- 对于 js/jsx/css 等源码，转译为原生 ES Module(ESM)
- 利用了现代浏览器支持 ESM，会自动向依赖的 Module 发出请求的特性
- 直接启动 dev server (不需要打包)，对请求的模块按需实时编译
- 热更新时，仅让浏览器重新请求改动过的模块



 	传统的打包工具如`Webpack`是先解析依赖、打包构建再启动开发服务器，`Dev Server` 必须等待所有模块构建完成，当我们修改了 `bundle`模块中的一个子模块， 整个 `bundle` 文件都会重新打包然后输出。项目应用越大，启动时间越长。 

 	Vite 通过在一开始将应用中的模块区分为 **依赖** 和 **源码** 两类，改进了开发服务器启动时间。 

​	 Vite 以**原生 ESM**方式提供源码。这实际上是让浏览器接管了打包程序的部分工作：Vite 只需要在浏览器请求源码时进行转换并按需提供源码。根据情景动态导入代码，即只在当前屏幕上实际使用时才会被处理。 

#### vite和webpack区别

- webpack是一个JavaScript应用程序的静态模块打包工具，它会对整个应用程序进行依赖关系图构建。
- vite是构建工具的高阶封装，使用简单，快（开发的时候感觉没有编译过程），便于扩展。而他集成的esbuild(Go 编写) 预构建依赖，比node快 10-100 倍。

它们的区别：

1. **关注层级不同**

   vite关注的层级更高：vite是 high level api，关注的是如何快速方便的搭建项目，相比webpack，减少了很多配置量。

   webpack关注的层级更低：webpack是low level api，因为webpack更关注的是各种功能的实现，重点放在构建上。

2. **vite自己不包含编译能力**

   它本身并不参与编译，它的编译能力只是集成了rollup和ESbuild的功能.

3. **启动项目vite更快，可以说是超级快**

   对比webpack在dev-serve的时候，会提交所有编译的文件，而vite在dev-serve的时候利用了浏览器的native ES module功能，在浏览器请求对应的url时才提供文件，实现了根据路由的懒加载，所以启动的时候是超快的。

4. **vite的热更新更快**

   对比webpack的热更新，热更新时，把改动过模块的相关依赖模块全部编译一次。而vite热更新时，仅让浏览器重新请求改动过的模块。



​		现在公司项目从webpack过渡到vite,还在不断摸索爬坑中，虽然目前vite的生态不如webpack丰富，且实用的开发者也不及webpack。
​		但是不可否认的是，相比于webpack, vite非常适合项目的开发，webpack适合工具的开发。



#### v3的优势

1. monorepo

   源码管理方式采用monorepo的方式进行管理，monorepo 把这些模块拆分到不同的 package 中，每个 package 有各自的 API、类型定义和测试。这样使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性。

2. TypeScript

    `Vue2`时期选择的是`flow`，由于`flow`自身存在一些功能上的短板，且`TS`发展势头更好，`Vue3`选择使用`TS`编写代码，也可以更好的支持`TS`提升开发体验。 

3. 优化源码体积

   移除一些冷门API，比如 filter、inline-template 等

   API减少，必然会减少代码体积，这点非常容易理解，引入tree-shaking 减少打包体积

   tree-shaking 依赖 ES2015 模块语法的静态结构（即 import 和 export），通过编译阶段的静态分析，找到没有引入的模块并打上标记，这个技术在webpack等打包工具上已经非常普及

   在Vue3中的应用：我们大概率不会使用Vue提供的全部API，总会有一些冷门的、业务场景单一使用不到的API，那么在打包的过程中就可以将这些没有被用户使用的API移除，减少打包体积

4. Proxy

    `Vue2`之前使用`Object.defineProperty`进行数据劫持 

    **其存在一些缺陷** 

   - 必须预先知道劫持的`key`是什么，并不能很好的监听到对象属性的添加、删除
   - 初始化时递归遍历整个`data`，导致深层嵌套数据结构造成性能负担，
   - `Vue3`使用`Proxy`进行数据劫持，可以很好的规避`Object.defineProperty`带来的缺陷

   **Proxy 相对于 Object.defineProperty 的优点**

   - 代码的执行效果更快
   - Proxy 可以直接监听对象而非属性
   - Proxy 可以直接监听数组的变化
   - Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 
   - Object.defineProperty 不具备的
   - Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改
   - Proxy 不需要初始化的时候遍历所有属性，另外有多层属性嵌套的话，只有访问某个属性的时候，才会递归处理下一级的属性

   

5. Composition API

   Vue3 在语法方面进行了优化，主要是提供了 Composition API替换原本的Options API

   Options API提供了 methods、computed、data、props以及各个阶段的生命钩子选项，开发者可以在每个API中做着对应的事情，各司其职，上手和理解成本非常低，对于新手开发者非常友好。使用其开发小型项目时代码的阅读性、维护性等也是可观的，但是当遇到大型项目或者较为复杂的业务逻辑时，代码将会变得非常难以维护，常常导致修改一个功能需要在代码中跳转多个地方，一个功能的代码分散在各个地方，造成阅读和理解成本直线增加，Composition API，它有一个很好的机制去解决这样的问题，就是将某个逻辑关注点相关的代码全都放在一个函数里，这样当需要修改一个功能时，就不再需要在文件中跳来跳去。

6. 更好的 ts 支持

   vue2 不适合使用 ts，在于它的 Options API 风格。

   options 是一个简单的对象，而 ts 是一种类型系统、面向对象的语法，两个不匹配。

   vue3 新增了 defineComponent 函数，使组件在 ts 下，更好的利用参数类型推断。如：reactive 和 ref 很具有代表性。

7. 更先进的组件

   1> Fragment

   在 vue2 中，每个模板必须有一个根节点，否则就会报错。

   vue3 中可以不需要根节点，多个元素或标签可并列存在。

   2> Teleport

   传送门。可以把 teleport 中的内容添加到任意的节点内，对于嵌套较深的组件来说绝对是一个福音。

   3> Supense

   允许程序在等待异步组件渲染一些后备的内容，可以让我们创建一个平滑的用户体验。

   

#### vue3和vue2的区别

1、性能优势：

​		1、virtual DOM 完全重写，mounting & patching 提速 100%；
​		2、更多编译时 （compile-time）提醒以减少 runtime 开销；
　　3、基于 Proxy 观察者机制以满足全语言覆盖以及更好的性能；
　　4、放弃 Object.defineProperty ，使用更快的原生 Proxy；
　　5、组件实例初始化速度提高 100%;
　　6、提速一倍/内存使用降低一半；

2、生命周期对比：

        beforeCreate ===>setup()
        created =======>setup()
        beforeMount ===> onBeforeMount
        mounted=======> onMounted
        beforeUpdate ===> onBeforeUpdate
        updated =======> onUpdated
        beforeUnmount ==>onBeforeUnmount
        unmounted=====> onUnmounted

3、双向数据绑定对比：

        Object.defineProperty只能劫持对象的属性,因此我们需要对每个对象的每个属性进行遍历。Vue里，是通过递归以及遍历data对象来实现对数据的监控的，如果属性值也是对象那么需要深度遍历,显然如果能劫持一个完整的对象，不管是对操作性还是性能都会有一个很大的提升。

4、依赖注入：

        vue2.0可以说是跟props的传值差不多
    
        但是vue3.0需要在父组件中将数据用provide导出，后代组件中接收外城传递的数据，用inject接收父组件传递给后代组件接收到的数据。

这里需要注意的是，后代组件中如果需要修改数据事，那么这时需要做到谁的数据谁修改。

5、mixins语法：

        在vue2中一些可以服用的逻辑可以使用mixins封装，但是需要考虑到逻辑代码冲突的问题，vue3.0中组合API很好的解决了这个问题，就不推荐使用mixins语法了。



## 常用的组合API

### 1.setup

1. 理解: Vue3.0中一个新的配置项，值为一个函数。
2. setup是所有Composition API (组合API) 表演的舞台。
3. 组件中所用到的: 数据、方法等等，均要配置在setup中。
4. setup函数的两种返回值:
   - 若返回一个对象，则对象中的属性、方法,在模板中均可以直接使用。
   - 若返回一个渲染函数: 则可以自定义渲染内容。 
5. 注意点:
   1. 尽量不要与Vue2.x配置混用
      - Vue2.x配置 (data、methods、computed...) 中可以访问到setup中的属性、方法
      - 但在setup中不能访问到Vue2.x配置 (data、methods、computed...)，没有this
      - 如果有重名，会进行覆盖
   2. setup不能是一个async函数，因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性。(后期也可以返回一个Promise实例，但需要Suspense和异步组件的配合)

### 2.ref

1. 作用: 定义一个响应式的数据

2. 语法: const xxx = ref(initValue)

   - 创建一个包含响应式数据的<strong style="color:DD5145">引用对象 (reference对象，简称ref对象) </strong>。
   - JS中操作数据: xxx.value
   - 模板中读取数据: 不需要.value，直接: <div>[{xxx}}</div>

3. 备注:

   - 接收的数据可以是：基本类型、也可以是对象类型。
   - 基本类型的数据：响应式依然是靠 Object.defineProperty（） 的 get 与 set 完成的。
   - 对象类型的数据：内部”求助”了Vue3.0中的一个新函数-- reactive 函数。原理是es6的新方式：proxy

4. 注释理解：

   ref包裹的数据最终为对象，是refimpl，拆分开来说，即为reference(引用)、implement(实现)，简称：引用对象，引用的实现的对象(Reflmpl)

5. 注意点: 当vue3渲染的时候检测到你是用ref包裹，自动将value解析出来



### 3.reactive

1. 作用: 定义一个**对象类型**的响应式数据 (基本类型不要用它，要用 ref 函数)
2. 语法: const 代理对象 = reactive(源对象) 接收一个对象(或数组)，返回一个代理对象 (Proxy的实例对象，简称proxy对象）
3. reactive定义的响应式数据是 深层次的
4. 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。
















