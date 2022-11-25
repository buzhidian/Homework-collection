## 1.promise



1. **Promise出现的原因**

   - 为了解决异步回调问题
   - 为了解决信任问题
   - 为了解决捕捉错位的能力（400，500）
   - 为了解决回调执行顺序问题

2. **概念:** 

   Promise函数是解决异步编程问题产生的。

   所谓promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

   从语法上说，promise是一个对象，从它可以获取异步操作的消息。**Promise 提供统一的API**，各种异步操作都可以用同样的方法进行处理。

3. **特点:**

   - 对象的状态不受外界影响，有三种状态: pending (进行中)、fulfilled(已成功)和rejected (已失败)
   - 状态的变化：
     - 从等待中到已成功（pedding ==> fulfilled）
     - 从等待中到已失败（pedding ==> rejected）
   - 一旦状态确定，便不再更改，状态凝固  ===>resolved
   - Promise 的返回值无论是不是promise函数，最终都会被封装Promise函数进行返回

4. **和事件循环的区别**

   - 事件循环一旦错过，不会再被监听到
   - Promise状态凝固，永远都可以被监听到

5. **Promise的回调函数**

   - resolve  ==> 成功的回调
   - reject  ==> 失败的回调

6. **Promise链式调用**

   形式：promise().then().then().then().catch，可以一直then下去，每一个then不会相互阻碍。

   特点：在上一个then里面，return 一个返回值，在下一个then里面可以获取到返回值。

7. **catch方法**

   在链式调用中，catch只能捕捉第一个then返回的错误信息；

   想要单独的捕捉每个then的错误信息，需要每个then 后面去跟随catch来进行捕获

8. **all方法**

   形式：Promise.all([p1,p2,p3]),then(res=> console.log(res))

   特点：

   - 接收的参数为数组[]
   - 返回值为一个数组，进行获取最终结果
   - 必须等待全部函数返回成功后，才会执行，不能单独获取任何一个函数的值

   缺点 ：

   - 任何一个函数崩掉都不能执行

9. **race方法**

   多个promise同时请求的时候，以第一个请求完成的promise状态作为整个promise的状态
   谁先执行完，返回谁，状态就是谁

10. **finally方法**

    finally()方法返回一个 Promise 。在promise结束时，无论结果是fulfilled 或者是rejected，都会执行指定的回调函数。这为在Promise是否成功完成后都需要执行的代码提供了一种方式，这避免了同样的语句需要在then()和catch()中各写一次的情况。



## 2.async和await

##### 1.概念

async：快速创建一个异步函数，且是基于promise函数封装。
在一个函数的开头添加 async，就可以使其成为一个异步函数。在异步函数中，你可以在调用一个返回Promise 的函数之前使用await关键字。
在js中，可以通过async关键字来快速创建异步函数。**异步函数也就意味着该函数的执行不会阻塞后面代码的执行**。async函数也是函数，平时我们怎么使用函数就怎么使用它，直接加括号调用就可以了。async函数返回的是一个promise对象，如果要获取到promise返回值，我们应该用then方法。

##### 2.特点

优点：

它是把异步请求变成同步执行的.async放在最近函数外调用，返回的是promise对象。

1. 方便级联调用：即调用依次发生的场景;
2. 同步代码编写方式：Promise使用then函数进行链式调用，是一种从左向右的横向写法，async、await从上到下，顺序执行，就像写同步代码一样，更符合代码编写习惯；

缺点：
没有catch错误处理，需要用js原生的try.catch进行错误处理。

##### 3.调用

调用异步函数的时候，可以直接在函数前使用await关健字来对其进行调用。

调用await的时候，他会等待Promise执行出结果后将结果返回，可以通过变量进行接收结果。
**注意**：await并不是将异步函数变成同步函数，只是改变了异步函数的调用方式。

## 3.Map对象

##### 1.概念和出现的原因：

JavaScript的对象(Object)，本质上是键值对的集合(Hash结构)，但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。为了解决这个问题，ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是"键"的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了""字符串一值""的对应，Map结构提供了"值-值"的对应，是一种更完善的Hash结构实现。如果你需要"键值对”的数据结构，Map 比 Object 更合适。

##### 2.map的方法使用

1. 使用new Map
2.  判断长度: map.size
3.  添加元素: map.set
4.  获取键值: map.get
5.  判断当前对象存不存在该属性: map.has
6.  删除当前对象中的属性: map.delete
7. 清空该方法的所有成员: map.clear

## 4.Set数组

1. 概念: ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，漫有重复的值。
2. 本质:是一个构造函数。
3. set的实例遍历操作
   - Set.prototype. keys:返回键名的遍历器
   - Set.prototype.values:返回键值的遍历器
   - Set.prototype.entries():返回键值对的追历器
   - Set.prototype. forEach():使用回调函数遍历每个成员
4. 方法总结
   - 获取元素的个数: array.size
   - 添加元素: array.add()
   - 删除元素: array.delete()
   - 检测是否存在这个值: array.has
   - 清空: array.clear



Set结构的实例有四个遍历方法，可以用于遍历成员。

- keys()：返回键名的遍历器
- values()：返回键值的遍历器
- entries()：返回键值对的遍历器
- forEach()：使用回调函数遍历每个成员

1. keys和values

    Set 对象 **没有键名，只有键值（或者说键名和键值是同一个值）**，所以 keys 方法和 values 方法的行为完全一致。 

   ```html
   let set = new Set(['星期一', '星期二', '星期三']);
   
   for (let key of set.keys()) {
     console.log(key);
   }
   for (let key of set.values()) {
     console.log(key);
   }
   ```

2. entries()

    entries 方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等 。

   ```
   let set = new Set(['星期一', '星期二', '星期三']);
   
   for (let key of set.entries()) {
     console.log(key);
   }
   
   ```

3. forEach

    Set 结构的实例与数组一样，也拥有 forEach 方法，用于对每个成员执行某种操作，没有返回值。 

   ```
   let set = new Set([1, 4, 9]);
   set.forEach((value, key) => console.log(key + ' : ' + value))
   
   ```

   

