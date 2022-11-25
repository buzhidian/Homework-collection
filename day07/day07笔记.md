## 1.class

1. 概念:

   ES6提供了更接近传统语言的写法，引入了 Class(类）这个概念，作为对象的模板。

2. 作用：

   通过**Class**关键词，可以定义类

3. 优点:

   新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

4. class 的 get 和 set 属性

   ```
   	class Phone1 {
           get price (){
               console.log("价格属性被读取了");
               return "价格价格"
           }
           set price(newVal){
               console.log("价格属性被修改了");
           }
       }
       let pho1 = new Phone1()
       console.log(pho1.price);
       pho1.price = "free"
   ```

5. class 的 static 方法

   - 概念：类(class)通过**static**关键字定义静态方法。
   - 特点：不能在类的实例上调用静态方法，而应该通过类本身调用。这些通常是实用程序方法，例如创建或克隆对象的功能。

6. 类的继承

   关键字：**extends**

   关键方法：**super()**

   ```
   	class Phone {
           constructor(b, p) {
               this.b = b;
               this.p = p;
           }
           call(){
               console.log("父类的打电话");
           }
       }
       class SmartPhone extends Phone{
           constructor(b,p,c,s){
               super(b,p)
               this.c = c
               this.s = s
           }
           photo(){
               console.log("拍照功能");
           }
           playGame(){
               console.log("游戏功能");
           }
           call(){
               console.log("子类的视频通话");
           }
       }
       const redmi = new SmartPhone("红米",799,'炫紫',"4.7寸")
       redmi.photo()
       redmi.playGame()
       redmi.call()
   ```



## 2.数值的扩展

1. 最小精度  Number.EPSILON 在 JavaScript 里表示最小精度

   EPSILON 属性值接近于 2.2204460492503130808472633361816E-16

   ```
   	function equal(a, b) {
           if (Math.abs(a - b) < Number.EPSILON) {
               return true
           } else {
               return false
           }
       }
       console.log((0.1 + 0.2 === 0.3));
       console.log(equal(0.1+0.2,0.3));
   ```

2. 二进制、八进制和十进制

   ```
   		let b = 0b100
           let o = 0o777
           let d = 120
           let x = 0xff
           console.log(b,o,d,x);
   ```

3. Number.isFinite 检测一个数值是否为有限数

   ```
   	console.log(Number.isFinite(100));
       console.log(Number.isFinite(100/0));
       console.log(Number.isFinite(Infinity));  //无限大
   ```

4. Number.isNaN  检测一个数值是否为 NaN （非数值）

   ```
   	console.log(Number.isNaN(123),"isNaN");
       console.log(isNaN("字符"),"isNaN");
       console.log(new Number());
   ```

5. Number.parseInt , Number.parseFloat 字符串转数字

   ```
   	console.log(Number.parseInt("12334.545love"));
       console.log(Number.parseFloat("4355.3334神奇"));
   ```

6. Number.isInteger 判断一个数是否为整数

   ```
   	console.log(Number.isInteger(5),'isInteger');
       console.log(Number.isInteger(2.5),'isInteger');
   ```

7. Math.trunc  将数字的小数部分抹掉

   ```
   console.log(Math.trunc(3.545),"trunc");
   ```

8. Math.sign  判断一个数是正数(1)、0、负数(-1)

   ```
   	console.log(Math.sign(110));
       console.log(Math.sign(0));
       console.log(Math.sign(-110));
   ```



## 3.数组的扩展

 [数组的扩展 - ECMAScript 6入门 (ruanyifeng.com)](https://es6.ruanyifeng.com/#docs/array) 

1. 扩展运算符
2. Array.from  将类数组或对象转化为数组
3. Array.of()   将一组值，转换为数组 
4. 实例方法：copyWithin()   在当前数组内部，将指定位置的成员复制到其他位置 
5. 实例方法：find()，findIndex()，findLast()，findLastIndex()
6. 实例方法：fill()   使用给定值，填充一个数组 
7. 实例方法：entries()，keys() 和 values()   用于遍历数组 
8. 实例方法：includes()  检测 某个数组是否包含给定的值 
9. 实例方法：flat()，flatMap()   变为一维的数组 
10. 实例方法：at()   接受一个整数作为参数，返回对应位置的成员，并支持负索引 
11. 实例方法：toReversed()，toSorted()，toSpliced()，with()   不改变原数组的操作 
12. 实例方法：group()，groupToMap()   根据分组函数的运行结果，将数组成员分组 
13. 数组的空位  Array(3) // [, , ,]
14. Array.prototype.sort() 的排序稳定性   排序关键字相同的项目，排序前后的顺序不变 

## 4.对象的扩展

1. 属性的简洁表示法

2. 属性名表达式

3. 方法的 name 属性        对象方法也是函数，因此也有**name**属性。 

4. 属性的可枚举性和遍历

    ES6 一共有 5 种方法可以遍历对象的属性 :

   -  **for...in** 
   -  **Object.keys(obj)** 
   -  **Object.getOwnPropertyNames(obj)** 
   -  **Object.getOwnPropertySymbols(obj)** 
   -  **Reflect.ownKeys(obj)** 

5. super 关键字      指向当前对象的原型对象 

6. 对象的扩展运算符     let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

7. AggregateError 错误对象   

8. Error 对象的 cause 属性



## 5.import和export

node编程中最重要的思想就是模块化, import和require都是被模块化所使用。在ES6当中，用export导出接口，用import引入模块。但是在node模块中，使用module.exports导出接口，使用require引入模块。

**遵循规范:**
require是AMD规范引入方式
import是 ES6的一个语法标准，如果要兼容浏览器的话必须转化成 ES5的语法

**调用时间:**
require是运行时调用，所以require理论上可以运用在代码的任何地方
import是编译时调用，所以必须放在文件开头

**本质:**
require 是赋值过程。
import是解构过程

import虽然是es6中的语法。但就目前来说，所有的引擎都还没有实现import。
**babel**可以将es6的语法转化为es5,使浏览器可以编译出来



导入模块require() 和输出接口exports
通过require引入基础数据类型时，属于赋值该变量。通过require引入复杂数据类型时，属于浅拷贝该对象。



## 6.proxy

1. 概念
   Proxy对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义〈如属性查找、赋值、枚举、函数调用等)

2. 语法
   const p = new Proxy(target , handler)

3. target
   被Proxy代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义)

   handler 
   包含捕捉器(trap)的占位符对象，可译为处理器对象。

   traps
   提供属性访问的方法。这类似于操作系统中捕获器的概念。













































