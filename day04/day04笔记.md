## 1.let

**特点：**

1. 变量不能重复声明（特指：当前作用域不能进行重复声明，但在下一个作用域可以）
2. 块儿级作用域
3. 不存在变量提升
4. 不影响作用域链

在点击变色案例中，for循环中的let 如果换成var变量会变成全局变量，最终的值会变化。

**作用域**

- *全局作用域*
- *函数作用域*
- *块级作用域 （let const）*

**作用域链:**

作用域是在运行时代码中的某些特定部分中变量、函数和对象的可访问性。**作用域就是一个独立的地盘，让变量不会外泄、暴露出去**。也就是说**作用域最大的用处就是隔离变量，不同作用域下同名变量不会有冲突**。

在es6之前只有全局作用域链,和函数作用域链,只有在es6才有了块级作用域

## 2.const

**特点：**

1. 声明一个常量，且不可更改
2. 一般常量用大写（潜规则）
3. 块儿级作用域
4. 声明复杂数据类型（数组和对象），值可以更改，因为复杂数据类型只修改了堆中间的内容，栈的引用（指针）并没有变。



## 3.变量的解构赋值

概念：ES6允许允许按照一定模式从数组和对象中提取值，对变量进行赋值。

解构赋值分两种：

1. 数组解构

   以下标来进行解构，有序解构，不能单独解构出一个值。

2. 对象解构

   以属性名来进行解构，可以单独解构任何一个属性



## 4.模板字符串

使用``代替"" 来拼接字符串，更加方便快捷。

```html
let str1 = `
        <ul>
            <li>今天</li>
            <li>是</li>
            <li>星期四</li>
        </ul>
    `
 console.log(str1);
 document.write(str1)
```



## 5.对象的简化写法

es6允许在大括号里面，直接写入变量和函数。作为对象的属性和方法，这样写法使书写更加简洁。

```html
    let name2 = "小新"
    let age2 = 18
    let like = function () {
        console.log("play games");
    }
    const PERSON = {
        name2,
        age2,
        like,
    }
    console.log(PERSON);
    PERSON.like()
```



## 6.箭头函数

es6允许使用 ()=>{} 定义函数

**特点**

1. this是动态的, this的值取决于函数本身如何被调用
2. 没有arguments伪数组，如果有 绝对是来自于父组件
3. 不能作为构造实例化对象
4. 可以简写
   - *1)当形参有且只有一个的时候,可以省略小括号*
   - *2)可以省略花括号,当代码体只有一条语句的时候,此时 return 必须省略*



## 课外:

### 1.DOM获取节点的方法

**一、通过 document顶层方法获取** 

1. document获取html，body标签 
   -  document.**documentElement**   *获取html标签*
   -  document.**head**   *获取head标签*
   -  document.**body**   *获取body标签*
2.  getElementBy系列获取 
   -  document.**getElementById("id名")**
   -  document.**getElementsByClassName("类名")**
   -  document.**getElementsByName("设置的属性名")**
   -  document.**getElementsByTagName("标签名")** 
3.  query系列获取 
   -  document.**querySelector(" 根据css选择器的规则选择想要获取到的元素 ")** 
   -  document.**querySelectorAll(" 根据css选择器的规则选择想要获取到的元素 ")** 

**二、 通过节点的属性获取 ** 

1.  获取父节点    **parentNode** 
2.  获取子节点 
   - 获取所有子节点  **children**
   - 获取首个子节点  **firstChild**
   - 获取最后一个子节点  **lastChild**
3.  获取兄弟节点 
   - 获取前一个兄弟元素  **previousSibling**
   - 获取后一个兄弟元素  **nextSibling**



### 2.伪数组和数组的区别

**什么是伪数组**

1. 拥有 length 属性，其它属性（索引）为非负整数(对象中的索引会被当做字符串来处理，这里你可以当做是个非负整数串来理解)
2. 不具有数组所具有的方法

常见的伪数组有：函数参数`arguments`，DOM对象列表(例如`document.querySelectorAll('div')`)，jQuery中的`$('div')` 

**和数组的区别：**

1.  **Array.prototype** 
   - 伪数组没有`Array.prototype`， 类型是 Object ，而数组类型是 Array 
   - 数组有`Array.prototype`，他是对象的同时，也是数组
2.  索引（**index**）和长度（**length**） 
   - 伪数组的索引，就是那些键值对的`key`，没有真正的顺序可言；长度是手动设置的
   - 数组的索引和长度是内置属性
3. 使用对象可以创建伪数组，伪数组可以正常使用数组的大部分方法

**将伪数组转化为数组**

```html
function makeArray(){
	console.log(arguments)
	let newArray = [...arguments]
	return newArray
}
```



### 3.arguments

 在给函数传递参数时，js把传入到这个函数的全部参数存储在一个叫做arguments 的类数组中，本质是一个对象。

 arguments是一个特殊的对象，它的属性名是按照传入参数的序列来的，第1个参数的属性名是’0’，第2个参数的属性名是’1’，以此类推 .

arguments 有length属性，存储的是当前传入函数参数的个数 .

- arguments对象的 __ proto __ 是指向object的，这也说明了他是个类数组对象，而不是一个数组。 
- callee属性，表示的是当前函数的一个引用 

## 7.函数参数的默认设置

函数参数有两种：形参和实参，ES6允许给函数参数赋值初始值

1. 形参初始值，具有默认值的参数，一般位置要靠后（潜规则）

   ```html
   	function add1(a,b,c = 10) {
           return a+b+c
       }
       let res1 = add1(3,5)
       console.log(res1);
   ```

2. 与解构赋值结合

   ```html
   function connect({host="123344",username,password,port}) {
           console.log(host);
           console.log(username);
           console.log(password);
           console.log(port);
       }
       connect({
           host:"武汉",
           username:"root",
           password:"12334",
           port:232
       })
   ```

   

## 8.reset参数

*ES6 引用 reset 参数,用于获取函数的实参,用来代替 arguments*

```html
// ES5获取实参的方式
    function date1() {
        console.log(arguments);
    }
    date1("繁荣","黄金","哲学")
    
    // rest 参数
    function date2(...args) {
        console.log(args);
    }
    date2("浮世","倒影","飘渺")

// rest 参数必须要放到参数最后
    function fn2(a,b,...args) {
        console.log(a,b);
        console.log(args);
    }
    fn2(1,2,3,4,5,6,7)
```



## 9.扩展运算符及应用

*[...] 扩展运算符能将 数组 转化伪逗号分隔的参数序列*

```html
	let arms = ["双手剑","单手剑","法器","长枪","弓箭"]
    function change() {
        console.log(arguments);
    }
    change(...arms)
```

**应用**

1. **合并数组**
2. **数组克隆**
3. **伪数组转化为数组**

```html
	// 1.合并数组
    let arr2 = [1,2,3]
    let arr3 = [3,45]
    let arr = [...arr2,...arr3]
    console.log(arr);

    // 2.数组克隆
    let arr4 = [...arr2]
    console.log(arr4);

    // 3.伪数组转化为数组
    let lis = document.querySelectorAll("li")
    let lisArr = [...lis]
    console.log(lisArr);

    function makeArray() {
        console.log(arguments)
        let newArray = [...arguments]
        return newArray
    }
    console.log(makeArray(1,2,3,4));
```



## 10.symbol

1. Symbol的值是唯一的用来解决命名冲突的问题
2. Symbol值不能和其他数据进行运算
3. Symbol定义的对象属性不能使用for...in循环遍历，但是可以使用Reflect.ownkeys来获取对象的所有键名

## 11.promise

1. **概念:** 

   promise函数是解决异步编程问题产生的。所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。**Promise 提供统一的API**，各种异步操作都可以用同样的方法进行处理。

2. **特点:**

   - 对象的状态不受外界影响，有三种状态: pending (进行中)、fulfilled(已成功)和rejected (已失败)
   - 一旦状态改变就不会再变，任何时候都可以得到这个结果。promise对象的状态改变，只有两种可能：从pending变为 fulfilled和从pending 变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 reolved (已定型)。如果改变已经发生了，你再对 Promise对象添加回调函数，也会立即得到这个结果。这与事件(Event)完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。











