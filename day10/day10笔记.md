排期：在公司，需要我们自己统计我们开发一个东西需要多久，要求是：把我们需要做的功能一个个罗列出来，并估算出大致时间，然后总结计算完成最后的开发时间。

## 1.Vue 中el和data的使用

#### **1.初识Vue：**

1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象;
2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法;
3.root容器里的代码被称为【Vue模板】;
4.Vue实例和容器是一一对应的;
5.真实开发中只有一个Vue实例，并且会配合着组件一起使用;
6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性;
7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新;



#### **2.在html5页面中引入vue的两种方式**



**el：**用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
**data：**data中用于存储数据，数据供el所指定的容器去使用，它的值我们暂时先写成一个对象。



第一种：**el**在一进页面的时候就会挂载页面，并加载Dom

```
<script src="./js/vue.js"></script>
<div id="app">
</div>

Vue.config.productionTip = false    //阻止 vue 在启动时生成生产提示。
new Vue({
        el: '#app',
        data: {

        },
        methods: {

        }
    })
```

第二种：**$mount()**挂载页面，可以控制挂载的时间。

```
<script src="./js/vue.js"></script>
<div id="app">
</div>

Vue.config.productionTip = false    //阻止 vue 在启动时生成生产提示。
const vm = new Vue({
        data: {

        },
        methods: {

        }
    })
    vm.$mount(#app)
```

#### 3.模板语法

vue模板语法有2大类:

1. 插值语法:
   - 功能：用于解析标签体内容
   - 写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性
2. 指令语法：
   - 功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）
   - 举例：v-bind:href="xxx” 或 简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性
   - 备注：Vue中有很多的指令，且形式都是：v-xxx，此处我们只是拿v-bind举个例子

#### 4.data与el的2种写法

1. el有2种写法

   - new Vue时候配置el属性
   - 先创建Vue实例，随后再通过vm.$mount( '#root ')指定el的值

2. data有2种写法

   - 对象式。

   - 函数式。

     如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。
     因为组件最终是加载到一起的，需要闭包来保护变量不被污染。

3. —个重要的原则

   由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。



## 2.数据绑定

#### 1.Vue中有2种数据绑定的方式：

1. 单向绑定(v-bind)：数据只能从data流向页面。
2. 双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。

备注：

1. 双向绑定一般都应用在表单类元素上(如：input、select等)
2. v-model:value可以简写为v-model，因为v-model默认收集的就是value值。



#### 2.MVVM

MVVM模型：

1. M：模型(Model) : data中的数据
2. V：视图(View):模板代码
3. VM：视图模型(ViewModel)：Vue实例

观察发现：

1. data中所有的属性，最后都出现在了vm身上。
2. vm身上所有的属性及Vue原型上所有属性，在Vue模板中都可以直接使用。



## 3.数据代理

#### 1.Object.defineProperty

Object.defineProperty 是对象的一个方法，当添加或者修改属性的时候会触发，第一个参数是**目标对象**，第二个参数是**要修改的属性**，第三个参数是**配置项**，可以是 value 和 writeable 等选项，也可以是 get 和 set 函数
get 是获取值的时候触发，需要 return 一个值就是这个属性的值
set 是修改值的时候触发，有一个默认参数就是修改后的值

```
let hope = "你的梦想"
    let person = {
        name:"小明",
        age:"12",
        sex:"第三性别"
    }
    Object.defineProperty(person,"hope",{
    	// enumerable:true,		//控制属性是否可以被枚举，默认值时false
        // writable:true,		//控制属性是否可以被修改，默认值时false
        // configurable:true 	//控制属性是否可以被删除，默认值时false
        
        // 当读取person的hope属性时，调用get函数，return hope的值
        get:function(){
            console.log("读取了属性");
            return hope
        },
        // 当修改person的hope属性时，调用set函数,默认参数value 为修改后的值
        set(value){
            hope = value
            console.log("修改了属性");
        }
    })
```

**枚举**：可循环的变量或属性

#### 2.数据代理

```
// 数据代理
    let obj = {y:200}
    let obj1 = {x:200}
    Object.defineProperty(obj1,"y",{
        get:function(){
            return obj.y
        },
        set(value){
            obj.y = value
        }
    })
    console.log(obj1);
```

#### 3.vue中的数据代理（getter和setter）

1. Vue中的数据代理：

   通过vm对象来代理data对象中属性的操作(读/写)

2. Vue中数据代理的好处：

   更加方便的操作data中的数据

3. 基本原理：

   通过0bject.defineProperty()把data对象中所有属性添加到vm上。为每一个添加到vm上的属性，都指定一个getter/setter。在getter/setter内部去操作（读/写) data中对应的属性。

   

**相应式原理：**

​	当你把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，Vue 将遍历此对象所有的 property，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter 。 

​	这些 getter/setter 对用户来说是不可见的，但是在内部它们让 Vue 能够追踪依赖，在 property 被访问和修改时通知变更。 

**注意事项：**

​	由于 JavaScript 的限制，Vue **不能检测**数组和对象的变化。尽管如此我们还是有一些办法来回避这些限制并保证它们的响应性。 

​	但是可以使用 vm.$set 实例方法，该方法是全局方法  Vue.set 的一个别名： 

```
vm.$set(vm.items, indexOfItem, newValue)
```



## 4.事件的使用

#### 1.事件的基本使用:

1. 使用v-on : xxx 或 @xxx 绑定事件，其中xxx是事件名；
2. 事件的回调需要配置在methods对象中，最终会在vm上；
3. methods中配置的函数，不要用箭头函数！否则this就不是vm了；
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是 vm 或组件实例对象；
5. @click="handler" 和 @click="handler($event)” 效果一致，但后者可以传参;

#### 2.事件修饰符

**Vue中的事件修饰符:**

1. prevent：阻止默认事件(常用)

   应用：链接的跳转

2. stop：阻止事件冒泡(常用)

   应用：父子组件，给子组件绑定方法的时候用

3. once：事件只触发一次（常用)

   应用：dialog

4. capture：使用事件的捕获模式

   应用：将冒泡事件改为捕捉模式

5. self：只有event.target是当前操作的元素时才触发事件

6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕

**事件冒泡：**

​	从最具体的元素到不具体的元素（由内到外）

​	当子元素（事件源）事件触发，事件会沿着包含关系，依次往上级传递，每一级都可以感知到事件，直到触发根元素。 

**事件捕获：**

 	事件从文档根节点（Document 对象）流向目标节点，途中会经过目标节点的各个父级节点，并在这些节点上触发捕获事件，直至到达事件的目标节点 。

**事件的三阶段**

- 事件捕捉阶段(capture phrase): 先由文档的根节点document往事件触发对象，从外向内捕获事件对象
- 处于目标阶段(target phrase): 到达目标事件位置，触发事件本身的程序内容
- 事件冒 泡阶段(bubbling phrase): 从目标事件位置往文档的根节点方向回溯，从内向外冒泡事件对象



#### 3.键盘事件

1. vue中常用的按键别名：
   -  回车=>enter
   -  删除=>delete(捕获"删除"和退格"键)
   -  退出=>esc
   -  空格 =>space
   -  换行=> tab（特殊，必须配合keydown去使用) 
   -  上=>up 
   -  下=> down
   -  左=> left
   -  右=>right
2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case(短横线命名)
3. 系统修饰键(用法特殊)：ctrl、alt、shift、meta
   - 配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
   - 配合keydown使用：正常触发事件。
4. 也可以使用keyCode去指定具体的按键(不推荐)
5. Vue.config.keyCodes.自定义键名=键码，可以去定制按键别名



