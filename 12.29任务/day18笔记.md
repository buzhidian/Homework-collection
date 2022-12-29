## 1.接口

#### 1.接口的基本使用

- 什么是接口？

  接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，

  然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法

- 格式： interface interface_name {} 

  ```ts
  interface IFullName {
    firstName: string
    lastName : string
  }
  
  let goddassName: IFullName = {
    firstName: "王",
    lastName: "龙翔"
  }
  
  console.log(goddassName.firstName);
  console.log(goddassName.lastName);
  
  
  
  function say({firstName, lastName}:IFullName):void {
    console.log(`我的姓名是:${firstName}_${lastName}`);
  }
  say(goddassName);
  ```

#### 2.可选属性与只读属性

- 可选属性使用： ？

- 只读属性使用: readonly

- readonly与const的区别: 做为变量使用的话用 const，若做为属性则使用readonly

  ```
  // 可选属性   使用?来进行修饰
  interface IFullName {
    firstName: string
    lastName : string
    age?: number
  }
  
  let goddassName: IFullName = {
    firstName: "王",
    lastName: "龙翔
  }
  
  console.log(goddassName.firstName);
  console.log(goddassName.lastName);
  
  
  // 只读属性  readonly
  interface IInfo {
    readonly uname: string;
    readonly uage: number;
  }
  
  let beauty:IInfo = {
    uname: "王小华
    uage: 18
  }
  ```

#### 3.函数接口

- 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。

 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

```ts
interface ImakeMoney {
  (salary:number, reward:number):number
}


let sum:ImakeMoney = function (x:number, y:number):number {
  return x + y;
}
let res = sum(10, 20);
console.log(res);
```

#### 4.接口的继承

- 接口继承就是说接口可以通过其他接口来扩展自己。
- Typescript 允许接口继承多个接口。
- 继承使用关键字 extends。

```ts
// 单继承
interface IPerson { 
  age:number 
} 
interface IName extends IPerson { 
  name:string 
} 

let lady:IName = {
  name: "李小四",
  age: 18
}

// 多继承
interface IFatherMoney {
  m1: number
}
interface IMotherMoney {
  m2: number
}

interface ISon extends IFatherMoney, IMotherMoney {
  s: number
} 

let money:ISon = {
  m1: 100,
  m2: 100,
  s: 100
}
console.log(`儿子一共有${money.m1 + money.m2 + money.s}万元`);
```

#### 5.接口的混合类型

- 接口的混合类型就是调用接口的时候，同时包含多种不同的类型
- 应用场景: 闭包

```ts
// 在接口中有多种类型进行混合
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function() { };

  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```

#### 6.接口与类型别名的异同

1.相同点:

都可以描述属性或方法
都允许拓展
2.不同点:

type可以声明基本数据类型，联合类型，数组等; interface只能声明变量
当出现使用type和interface声明同名的数据时;type会直接报错;interface会进行组合
type不会自动合并；interface会。



## 2.函数

#### 1.函数的基本使用

介绍

函数是JavaScript应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义 行为的地方。 TypeScript为JavaScript函数添加了额外的功能，让我们可以更容易地使用

函数定义的方式：

```ts
// 匿名函数
const makeMoney = function(salary: number, reward: number): number {
  return salary + reward
}


// 有名函数 | 命名函数 | 普通函数
function writeCode(hour: number, sleep: number) {
  return hour
}
 

// 箭头函数
const seeMeiMei = (time: number):void => {
  console.log(`我每天要看${time}个小时MeiMei`);
  
}

seeMeiMei(8)


// 接口函数
type myFunc = (x: number, y: number) => number

const myfunc:myFunc = (a: number, b: number) => a + b
```

#### 2.函数参数的处理

- 可选参数:

  在 TypeScript 函数里，如果我们定义了参数，则我们必须传入这些参数，除非将这些参数设置为可选，可选参数使用问号标识 `？`

- 默认参数:

  我们也可以设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数，语法格式为 ``

- 剩余参数:

  有一种情况，我们不知道要向函数传入多少个参数，这时候我们就可以使用剩余参数来定义。

  剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。`...args:any[]`

#### 3.构造函数

TypeScript 也支持使用 JavaScript 内置的构造函数 Function() 来定义函数：

语法格式如下：

```ts
var res = new Function ([arg1[, arg2[, ...argN]],] functionBody)
```

参数说明：

- **arg1, arg2, … argN**：参数列表
- **functionBody**：一个含有包括函数定义的 JavaScript 语句的字符串。

#### 4.函数重载

重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

**参数类型不同：**

```ts
function disp(string):void; 
function disp(number):void;
```

 **参数数量不同：** 

```ts
function disp(n1:number):void; 
function disp(x:number,y:number):void;
```

 **参数类型顺序不同：** 

```ts
function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
```

如果参数类型不同，则参数类型应设置为 **any**。

参数数量不同你可以将不同的参数设置为可选。

#### 5.this的使用

JavaScript里，this的值在函数被调用的时候才会指定。 这是个既强大又灵活的特点，但是你需要花点时间弄清楚函数调用的上下文是什么。 但众所周知，这不是一件很简单的事，尤其是在返回一个函数或将函数当做参数传递的时候。
从 TypeScript 2.0 开始，在函数和方法中我们可以声明 this 的类型，实际使用起来也很简单
使用this参数，改变指向
传入this参数，禁止调用this

#### 6.特殊的函数返回值

- 如果使用类型别名，定义了一个返回值为void的类型, 我们在函数使用的时候，并非一定不能有返回值。相反，如果我们在函数中写了返回值，我们的返回值是有效的。

- 如果我们定义函数的时候明确指出，返回值为void，那么我们将除undefined 和 null 以外的值进行返回都会进行报错

## 3.类的使用

#### 1.类的基本使用

- 定义

  TypeScript 是面向对象的 JavaScript。

  类描述了所创建的对象共同的属性和方法。

  TypeScript 支持面向对象的所有特性，比如 类、接口等。

  TypeScript 类定义方式如下:

 定义类的关键字为 class，后面紧跟类名，类可以包含以下几个模块（类的数据成员）： 

- **字段** − 字段是类里面声明的变量。字段表示对象的有关数据。
- **构造函数** − 类实例化时调用，可以为类的对象分配内存。
- **方法** − 方法为对象要执行的操作。

#### 2.类的继承

TypeScript 支持继承类，即我们可以在创建类的时候继承一个已存在的类，这个已存在的类称为父类，继承它的类称为子类。

类继承使用关键字 extends，子类除了不能继承父类的私有成员(方法和属性)和构造函数，其他的都可以继承。

TypeScript 一次只能继承一个类，不支持继承多个类，但 TypeScript 支持多重继承（A 继承 B，B 继承 C）。

```ts
class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say():void{
    console.log(`我是${this.name}, 今年${this.age}岁`);
    
  }
}


class Student extends Person {
  score: string;

  constructor(name: string, age: number, score: string) {
    super(name, age);
    this.score = score;
  }

  say():void {
    // 调用父类的函数
    super.say();
    console.log(`我是重写之后的say方法, 我是学生${this.name}, 今年${this.age}岁了, 我的成绩为${this.score}`);
  }
}

let s = new Student("蒋依依", 18, "A");
s.say();
```

#### 3.static与instanceof

- static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
- instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。

```ts
// static关键字
// static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用。
class StaticTest {
  static salary: string;

  static say(): void {
    console.log("我们想要的工资是: " + StaticTest.salary);
    
  }
}

StaticTest.salary = "18k";
StaticTest.say();


// instanceof运算符
// instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true，否则返回 false。
class Person{} 
let p = new Person() 
let isPerson = p instanceof Person; 
console.log("p 对象是 Person 类实例化来的吗？ " + isPerson); // true

class Student extends Person {}
let s = new Person() 
let isPerson2 = s instanceof Person; 
console.log("s 对象是 Person 类实例化来的吗？ " + isPerson2); // true
```

#### 4.类中的修饰符

- **public(默认)**：公有，可以在任何地方被访问
- **protected**: 受保护，可以被其自身以及其子类访问
- **private:** 私有，只能被其定义所在的类访问。
- **readonly**: 可以使用 `readonly`关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

#### 5.抽象类

- 定义

  抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化

  抽象类是专门用于定义哪些不希望被外界直接创建的类的

  抽象类和接口一样用于约束子类

- 抽象类和接口区别

  抽象方法必须包含 abstract关键字并且可以包含访问修饰符

  接口中只能定义约束, 不能定义具体实现。而抽象类中既可以定义约束, 又可以定义具体实现

```ts
abstract class Person {
  abstract name: string;
  abstract show(): string;

  showName() {
    console.log(this.show());
  }
}


class Student extends Person {
  name: string = "孟子义";
  show():string {
    return "陈情令"
  }
}


// let p = new Person();
let s = new Student();
let res =  s.show();
console.log(res);
```

## 4.混入Mixins

- 介绍: 除了传统的面向对象继承方式，还流行一种通过可重用组件创建类的方式，就是联合另一个简单类的代码。 你可能在Scala等语言里对mixins及其特性已经很熟悉了，但它在JavaScript中也是很流行的。


- 作用: 解决TS中继承一次只能继承一个类的问题


- 注意点: 类的混入不能混入属性名

```ts
// 类混入
class Name {
  name: string = "毛晓彤";
  getName():void {
    console.log("我是毛晓彤");
  }
}

class Age {
  age: number = 18;
  getAge(): void {
    console.log("我今年18岁");
  }
}

// class Person extends Name, Age {}

class Person implements Name, Age {
  age: number;
  name: string;
  getAge: () => void;
  getName: () => void;
}

function Mixins(target: any, from: any[]) {
  // console.log(target);
  // console.log(from);
  from.forEach(item => {
    // console.log(item);
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      target.prototype[name] = item.prototype[name];
    })
  })
}
Mixins(Person, [Name, Age])

let p = new Person();
p.getAge();
p.getName();
// console.log(p.name);
// console.log(p.age);
```

## 5.模块与命名空间

#### 1.TS中的模块

TypeScript 模块的设计理念是可以更换的组织代码。

两个模块之间的关系是通过在文件级别上使用 import 和 export 建立的

模块使用模块加载器去导入其它的模块。 在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块的所有依赖。 大家最熟知的JavaScript模块加载器是服务于 Node.js 的 CommonJS 和服务于 Web 应用的 Require.js。

模块导出使用关键字 export 关键字，语法格式如下：

```
// 文件名 : SomeInterface.ts
export interface SomeInterface {
// 代码部分
}
```

 要在另外一个文件使用该模块就需要使用 **import** 关键字来导入: 

```
import someInterfaceRef = require(“./SomeInterface”);
```

#### 2.TS中的命名空间

项目开发过程中，我们会发现我们的命名是有严格规范的，我们不能随意的去起名字，但若是都采用尽量标准化的方式去命名，我们又无法避免的会造成污染，TypeScript提供了namespace 避免这个问题出现

- 在TS1.5之前被叫做内部模块，主要用于组织代码，避免命名冲突
- 本质就是定义一个大对象, 把变量/方法/类/接口…的都放里面
- 通过 export 导出
- 通过 namespace 定义

```ts
namespace A {
  export const a = 100;
}

console.log(A.a);

// 嵌套命名空间
namespace B {
  export const b = 200;
  export namespace C {
    // export const b = 300;
    export const c = 300;
  }
}

console.log(B.b);
// console.log(B.C.b);
console.log(B.C.c);

// 简化命名空间
import c = B.C.c
console.log(c);


// namespaceTest.ts内容
export namespace D {
    export const d = 1000;
}    
// 主文件
// 从其他文件引入命名空间
import { D } from "./namespaceTest";
console.log(D.d);  
```

#### 3.声明合并

- 接口的合并

  注意点: 

  1. 如果名字一样会进行合并
  2. 如果里面出现了同名函数，则会转化为函数重载

- 命名空间合并

  注意点: 

  1. 与接口一样,若名称相同则会进行合并
  2. 同名的命名空间中不能出现同名的变量,方法等
  3. 命名空间还可以和同名的类/函数/枚举合并:
     - 命名空间与类合并: 1.say会被放在 prototype上 2.类必须定义在命名空间的前面
     - 命名空间和函数合并: 函数必须定义在命名空间的前面
     - 命名空间和枚举合并：没有先后顺序的要求

## 6.ts.tsconfig

```
{
  "include": [           
    "./src/**/*.ts"   //编译scr下的ts文件都为js 文件
  ],
  "exclude": [
    "./src/lib/**/*.ts" //忽略某个文件 不编译
  ],
  "compileOnSave":true, //在我们编辑了项目中文件保存的时候，编辑器会根据 sconfig,json 的配置重新生成文件，不过这个要编辑器支持
  "compilerOptions":{
    "target":"ES3",  //指定ts 编译成js的版本
    "module":"es2015", //指定要是用的模块化的规范
    "lib":["dom"],  //lib用来指定项目中要是用的库 一般不改 默认是浏览器的配置 ,
    "outDir":"./dist", //统一存放编译后js文件的 位置
    "outFile":"./dist/app.js",  //将代码合并为一个文件 一般结合打包工具用 
    "allowJs":false,     //是否对js文件进行编译 默认是false
    "checkJs":false，      //是否检查js代码是否符合语法规范 默认是false 
    "removeComments":false,     //是否移除注释
    "noEmit":false, //不生成编译后的文件 默认为false
    "noEmitOnError":true,  //当有错误不生成编译后的文件
    "alwaysStrict":false ,//编译后的js文件是否使用严格模式默认是false
    "noImpliciAny":false, //不允许隐式的any类型 默认是false
    "noImplicitThis": false,     //不允许明确类型的this
    "noImplicitThis": true,//不允许不明确类型的this 
    "strictNullChecks": false,//是否允许严格模式下的null和undefined  是否为空值
  }
}
```

















