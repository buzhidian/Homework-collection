## 一、JS数据类型

1. **基本数据类型**

number、string、undefined、null、boolean、symbol、bigint

2. **引用数据类型【对象类型】**

(1) 标准普通对象: object

(2) 标准特殊对象： Array、RegExp、Date、Math、Error...

(3) 非标准特殊对象：Number、String、Boolean...

(4) 可调用对象/执行对象：function

简单来说: 数据类型分为基本数据类型和复杂数据类型

## 二、JS数据类型转换

### 1.Number

Js中的数据类型转换有两种模式，**一种是隐式转换，一种是显示转换**。

**隐式转换：**浏览器默认去转换
**显示转换：**用Number()，parseInt，parseFloat

**①Number()**
转换规则：
1.字符串转换为数字：空字符串变为0，如果出现任何非有效数字字符，结果都是NaN
2.布尔值转换为数字:true–>1,false–>0
3.null–>0,undefined–>NaN
4.Symbol无法转换为数字，会报错:Uncaught TypeError: Cannot convert a Symbol value to a number
5.BigInt去除"n"
6.把对象转换为数字

- 先调用对象的Symbol.toPrimitive 这个方法
- 如果不存在这个方法，再调用valueOf获取原始值
- 如果获取的值不是原始值，再调用对象的toString把其变为字符串
- 最后再把字符串基于Number方法转换为数字

②**parseInt与parseFloat**

parseInt(val,radix)接受两个参数

- 第一个参数val必须是字符串，如果不是，要先隐式转换为字符串，调用String()

- 第二个参数radix表示进制，如果不写，或者写0，则默认是10进制

（特殊情况：如果第一个参数是以0x开始的，则此时默认是16进制）
  有效范围：2~36之间

**parseFloat的转换规则比较简单，与parseInt的一样，只是没有进制的概念，都按10进制来**

    console.log(parseFloat(10.1)); //10.1
    console.log(parseFloat('10.1')); //10.1
    console.log(parseFloat(null)); //NaN
    console.log(parseInt(10.1)); //10

### 2.String

#### String(val)或者val.toString()**

***转换规则：除对象以外，都是直接用字符串包起来***

对象转字符串的转换规则，与对象转数字的规则一样：

- 先调用对象的Symbol.toPrimitive 这个方法

- 如果不存在这个方法，再调用valueOf获取原始值
- 如果获取的值不是原始值，再调用对象的toString把其变为字符串

#### 加号+

***除了数学运算，还可能代表字符串拼接，也会发生字符串转换***

**加个+就能转成数字类型**

    let num='10'
    console.log(+num);	//10
    console.log(typeof (+num));//number

**数字加个空字符串也能转为字符串**

    let str=10
    console.log(str+'');	//'10'
    console.log(typeof (str+''));//string

### 3.Boolean

**转换规则：**
***除了“0/NaN/空字符串/null/undefined"五个值是false，其余值都是true***

### 4.==比较时的相互转换规则

**情景1：对象==字符串**
按对象转字符串规则Symbol.toPrimitive—>valueOf—>toString
将对象转成字符串，然后比较

**情景2：null==undefined**

注意，null或undefined和本身比较是相等的，和其他任何值比较都不相等

**情景3：对象==对象**
比较的是堆内存地址，地址相同则相等

**情景4：NaN**

```
	console.log(NaN==NaN);//false
	console.log(NaN===NaN);//false
```


NaN与任何值都不相等,包括NaN本身

情景5：***除了以上情景，只要两边类型不一致，剩下的都是转换数字，然后再进行比较***
"==="绝对相等,如果两边类型不同，则直接是false，不会发生数据类型转换。

## 三、检测数据类型

### **1.typeof**

**typeof** **返回对应类型的字符串**

typeof 检测基本数据类型比较准，null检测为object不代表它是引用数据类型，null为空是特殊的基本数据类型，引用数据类型都为 object，内置构造函数和函数都为 function

### 2.instanceof

 **instanceof** **检测类型返回布尔值**

instanceof 不能检测基本数据类型，判断前者的 proto 是否在后者的原型对象上

### 3.constructor

**constructor** **返回构造函数**

返回当前值的构造函数，比如向 [] 数组这种，都是通过 new Array() 这样去创建实例的，这个 Array 就是数组的构造函数

### 4.Object.prototype.toString.call()

**这个方法查的特别的准，可以检查任意类型**

### 5.Object.getPrototypeOf()

```
// 获取原型，和想要的原型做对比
console.log(Object.getPrototypeOf([]) === Array.prototype); // true
console.log(Object.getPrototypeOf({}) === Object.prototype); // true
```

### **五种方法的总结**

- ***typeof：这种方法只能检测基本数据类型，null 和对象的不准***
- ***instanceof：只要是基本数据类型检测就是false，只要是引用数据类型，并且右边是 Object 就是true，可以很好的区分是哪一大类型***
- ***constructor：可以检查基本和引用数据类型，但是可以被修改，有一定的缺陷***
- ***Object.prototype.toString.call()：这种方式是最准的，什么类型都可以检测***
- ***Object.getPrototypeOf()：这种方法获取原型***

## 四、作用域及变量

#### 1.作用域及作用域链

- 所谓作用域通俗点讲就是变量的可作用范围。
- 一般有三种作用域。全局，函数，块。
- 在作用域嵌套下，由内向外，一层一层往上的链式规则，这就是**作用域链**。

#### 2.变量提升及函数提升

##### *什么是变量提升*？

变量提升是指将变量声明提升到它所在的作用域的最开始部分

##### *什么是函数提升*

创建函数有两种形式，一种是函数声明，另外一种是函数字面量，**只有函数声明才有变量提升**。

##### 函数提升与变量提升的优先级

```
	console.log(a);   //ƒ a() {console.log(1);}
    console.log(a());	//10  undefined
    
    var a = 3;
    function a() {
        console.log(1);
    }
            
```

**函数提升要比变量提升的优先级要高一些，且不会被变量声明覆盖，但是会被变量赋值之后覆盖。**

## 五、运算符

### 1.数学运算符

数学运算符就是常见的**加(+)、减(-)、乘(*)、除(/)、等于(=)、求幂(**)、**自增(++)、自减(--)、加等于(+=)、减等于(-=)**等

### 2.比较运算符

与数学运算中的比较相同**：大于(>)、小于(<)、大于等于(>=)、小于等于(<=)、相等(==)、全等(===)、不等(!=)、不全等(!==)**等；注意: **全等不光比较两者值是否相同，还比较变量类型是否相同；不全等也是一样**；

### 3.三元表达式

### 4.短路运算符 && 与 ||

**短路运算符就是从左到右的运算中前者满足要求，就不再执行后者了。**

- &&：从左到右依次判断，如果遇到一个假值，就返回假值，以后不再执行，否则返回最后一个真值；
- || ：为取真运算，从左到右依次判断，如果遇到一个真值，就返回真值，以后不再执行，否则返回最后一个假值；

## 六、字符串

### 1.length     代表字符串长度

### 2.chanAt() 返回指定位置的字符

字符串中，字符的位置也是***从0开始，依次递增***。

```jsx
var str = '一二三四五六';
var a = str.charAt(5);
console.log(a);//   六
```

### 3.concat() 用于拼接两个或多个字符串

***不会修改原字符串，会将拼接好的字符串以返回值的方式返回出来***。

### 4.indexOf() 查找    从前往后

- 可以在字符串中查找指定的字符。
- 可以查到的的话返回值字符所在的位置。
- 查不到返回 -1。
- 如果要查找的字符在字符中存在多个，永远只找一个。

### 5.lastindexOf() 查找  从后往前

使用方法和 indexOf 一样。
但是 indexOf 是从前往后查找，lastindexOf() 是从后往前查找。

### 6.replace() 替换

有两个参数。
 第一个参数，旧的字符。
 第二个参数，新的字符。
 不会修改原数组。
 会将替换好的数组以返回值的形式返回出来。
 如果旧的字符在字符串中不止一个，则替换第一个。

### 7.split()   将字符串转化成字符串数组

不会改变原数组。
会将转化好的数组以返回值的形式返回出来 。

如果括号中什么都不写；则将整个字符串作为数组的一个元素转化成数组。
如果括号中是空字符串，则将每个字符都作为一个数组的元素转化成数组。
如果括号中写字符，则将这个字符变成逗号（，）,并以其隔开数组元素。
如果字符串中没有这个字符，效果相当于什么都不写。
如果目标字符在开头或者结尾，则转成数组后，生成一个空字符串的元素。

split 还有第二个参数：
 第二个参数代表转成数组后，所保留的元素的数量。（从以转化好的数组下标为0的元素开始）

### 8.substr()   字符串的截取

有两个参数
 第一个参数：起始的位置
 第二个参数：截取的数量
 不会改变原数组
 会将截取到的字符串以返回值的形式返回出来

### 9.substring()   字符串的指定位置的截取

有两个参数
 第一个参数：起始的位置（返回时包括位置所对应的字符）
 第二个参数：结束的位置（返回时不包括位置所对应的字符）
 不会改变原数组
 会将截取到的字符串以返回值的形式返回出来 **（包左不包右）**

```jsx
var str = '1234567';
console.log(str.substring(1,3));//   '23'
```

### 10.toLowerCase()  大写字母转小写字母

不会改变原数组
会将转换好的字符串以返回值的形式返回出来

### 11.toUpperCase() 小写字母转大写字母

不会改变原数组
会将转换好的字符串以返回值的形式返回出来











