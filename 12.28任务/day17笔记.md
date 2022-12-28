## **js创建对象的方式：**

1. 通过{}创建对象

   ```
           var o = {};
           o.name = 'jack';
           o.age = 20;
           o.sayName = function(){
               alert(this.name);
           }
           alert(o.name+'-'+o.age);
           
           o.sayName();
   ```

2. 通过 new Object() 创建对象

   ```
   		var o = new Object();
           o.name = "zhangsna";
           o.sayName = function(){
               alert(this.name);
           }
    
           o.sayName();
    
           alert('o instanceof Object  '+(o instanceof Object));//true
   
   ```

3. 使用字面量创建对象

   ```
   var person = {
        name: 'zhang', 
        age:20}
   
   ```

4. 使用工厂模式创建对象

           // 定义一个工厂方法
           function createObject(name){
               var o = new Object();
               o.name = name;
               o.sayName = function(){
                   alert(this.name);
               };
               return o;
           }
        
           var o1 = createObject('zhang');
           var o2 = createObject('li');
        
           //缺点：调用的还是不同的方法
           //优点：解决了前面的代码重复的问题
           alert(o1.sayName===o2.sayName);//false

5. 通过构造函数创建对象

           function Person(name){
               this.name = name;
               this.sayName = function(){
                   alert(this.name);
               };
           }
        
           var p1 = new Person('zhang');
           var p2 = new Person('li');
        
           p1.sayName();
           p2.sayName();
        
           alert(p1.constructor === p2.constructor);//true
           alert(p1.constructor === Person);//true
        
           alert(typeof(p1));//object
        
           alert(p1 instanceof Object); //true
           alert(p2 instanceof Object); //trueb
        
           alert(p1.sayName===p2.sayName);//false

   





# 第一章：初识 ts

## 1.什么是 ts？

ts 全称是 TypeScript
TypeScript 可以理解为是 JavaScript 的扩展，扩展了 js 的语法，因此我们可以在 ts 中继续写 js 的代码而不会报错

TypeScript 又叫做静态的 JavaScript，不能直接引入到 html 中，不能直接被浏览器识别，需要经过 ts 转换器或者是 babel 转化后才能使用

## 2.如何理解静态语言和动态语言？

类型系统按照类型检查的时机来分类，分为动态类型和静态类型，动态是在运行时候才检查数据类型，静态是在编译时候检查数据类型

1. 静态语言是在编译期间就会做数据类型的检查，也就是要在写代码的时候就声明变量的数据类型。大部分的后台语言比如 java，php 等以及我们要学的 ts 都是静态的。
2. 动态语言是指在运行期间才会去做类型检查的语言，也就是说动态语言声明的时候不需要指定数据类型。比如 javascript 和 python 都是动态的。

## 3.什么是强类型和弱类型

强类型和弱类型是类型系统按照 是否允许隐式转换 来分类 

1. 强类型的语言 指的是 强制数据类型定义的语言，也就是说如果一个变量被指定了某一个类型，如果不经过强制数据类型转换，他永远都是这个数据类型。强类型好处是 更加严谨更加安全。
2. 弱类型 是 数据类型可以被忽略的语言，与强类型相反，一个变量可以赋不同的数据类型的值。好处是 编写代码速度更快更简单。

## 4.ts的类型

ts 可以理解为就是静态的 js 语言，TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以**它们都是弱类型**。

## 5、TypeScript 开发环境搭建

1. 下载 Node.js
   - 64 位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi
   - 32 位：https://nodejs.org/dist/v14.15.1/node-v14.15.1-x86.msi
2. 安装 Node.js
3. 使用 npm 全局安装 typescript
   - 进入命令行
   - 输入：npm i -g typescript
   - 如果是 yarn 就执行 yarn add -g typescript
   - 输入 tsc -v 查看版本号 检查是否装好
4. 创建一个 ts 文件
5. 使用 tsc 对 ts 文件进行编译

   - 进入命令行

   - 进入 ts 文件所在目录

   - 执行命令：tsc xxx.ts
6. 如何自动监视 ts 文件的转化

   - 首先在放 ts 的文件夹下打开终端 执行 tsc --init 命令 会生成一个 tsconfig.json 文件
   - 点击 vscode 终端-->选择运行任务-->输入 tsc 按下回车-->选择 tsc:监视 xxxx 文件夹下的 tsconfig.json 文件
   - 之后再写的 ts 代码就会自动转化为 js
7. 在生成的 tsconfig.json 中有一个 target 配置 可以去指定由 ts 转化的 js 代码是 es6 的还是 es5 等等



# 第二章 数据类型

## 1、基本类型

- 类型声明

  - 类型声明是 TS 非常重要的一个特点

  - 通过类型声明可以指定 TS 中变量（参数、形参）的类型

  - 指定类型后，当为变量赋值时，TS 编译器会自动检查值是否符合类型声明，符合则赋值，否则报错

  - 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

  - 语法：

    - ```typescript
      let 变量: 类型;
      
      let 变量: 类型 = 值;
      
      function fn(参数: 类型, 参数: 类型): 类型{
          ...
      }
      ```

- 自动类型判断

  - TS 拥有自动的类型判断机制
  - 当对变量的声明和赋值是同时进行的，TS 编译器会自动判断变量的类型
  - 所以如果你的变量的声明和赋值时同时进行的，可以省略掉类型声明

- 类型：

  |  类型   |       例子        |              描述               |
  | :-----: | :---------------: | :-----------------------------: |
  | number  |    1, -33, 2.5    |            任意数字             |
  | string  | 'hi', "hi", `hi`  |           任意字符串            |
  | boolean |    true、false    |      布尔值 true 或 false       |
  | 字面量  |      其本身       |  限制变量的值就是该字面量的值   |
  |   any   |        \*         |            任意类型             |
  | unknown |        \*         |         类型安全的 any          |
  |  void   | 空值（undefined） |     没有值（或 undefined）      |
  |  never  |      没有值       |          不能是任何值           |
  | object  |  {name:'孙悟空'}  |         任意的 JS 对象          |
  |  array  |      [1,2,3]      |          任意 JS 数组           |
  |  tuple  |       [4,5]       | 元祖，TS 新增类型，固定长度数组 |
  |  enum   |    enum{A, B}     |       枚举，TS 中新增类型       |

- number

  - ```typescript
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;
    ```

- boolean

  - ```typescript
    let isDone: boolean = false;
    ```

- string

  - ```typescript
    let color: string = "blue";
    color = "red";
    
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `Hello, my name is ${fullName}.
    
    I'll be ${age + 1} years old next month.`;
    ```

- 字面量

  - 也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围

  - ```typescript
    let color: "red" | "blue" | "black";
    let num: 1 | 2 | 3 | 4 | 5;
    ```

- any

  - ```typescript
    let d: any = 4;
    d = "hello";
    d = true;
    ```

- unknown

  - ```typescript
    let notSure: unknown = 4;
    notSure = "hello";
    ```

- void

  - ```typescript
    let unusable: void = undefined;
    ```

- never

  - ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

- object（没啥用）

  - ```typescript
    let obj: object = {};
    ```

- array

  - ```typescript
    let list: number[] = [1, 2, 3];
    let list: Array<number> = [1, 2, 3];
    ```

- tuple （元祖）

  - ```typescript
    let x: [string, number];
    x = ["hello", 10];
    ```

- enum（枚举）

  - ```typescript
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4,
    }
    let c: Color = Color.Green;
    ```







