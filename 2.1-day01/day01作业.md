### hash和history

一. vue-router（前端路由）有两种模式，hash模式和history模式
1.hash 就是指 url 后面的 # 号以及后面的字符，history没有带#，外观上比hash 模式好看些
2.原理的区别（原理）
3.hash 能兼容到IE8， history 只能兼容到 IE10；
4.由于 hash 值变化不会导致浏览器向服务器发出请求，而且 hash 改变会触发 hashchange 事件（hashchange只能改变 # 后面的url片段）；虽然hash路径出现在URL中，但是不会出现在HTTP请求中，对后端完全没有影响，因此改变hash值不会重新加载页面，基本都是使用 hash 来实现前端路由的。

二.原理：
1.hash通过监听浏览器的onhashchange()事件变化，查找对应的路由规则
2.history原理： 利用H5的 history中新增的两个API pushState() 和 replaceState() 和一个事件onpopstate监听URL变化

   history模式URL就要和后端进行一致，所以要改为history也需要后端的配合，否则会报错。
所以hash模式在每次刷新页面时是直接更改“#”后的东西，history每次刷新会重新像后端请求整个网址，也就是重新请求服务器。如果后端没有及时响应，就会报错404！。history的好处是可以进行修改历史记录，并且不会立刻像后端发起请求。不过如果对于项目没有硬性标准要求，我们可以直接使用hash模式开发。

### sass、less和stylus

**什么是CSS预处器**

 CSS预处理器定义了一种新的语言，其基本思想是，用一种专门的编程语言，为CSS增加了一些编程的特性，将CSS作为目标生成文件，然后开发者就只需要使用这种语言进行编码工作 。使用CSS预处理器可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。 

**Less、scss、stylus的对比**

 都有变量、混入、函数、嵌套、继承、颜色函数等的概念。 

#### 一、关于声明变量

Less使用`@`变量名`：`值
Scss使用`$`变量名`：`值
Stylus使用 变量名`=`值，$可加可不加 

#### 二、关于作用域

Scss没有全局作用域的概念，在Sass样式中定义变量，调用变量是没有全局变量一个概念存在，因此在Sass中定义了相同变量名时，在调用之时千万要多加小心，不然会给你的样式带来错误。

Less和Styuls中的作用域和其他程序语言中的作用域非常的相同，他首先会查找局部定义的变量，如果没有找到，会像冒泡一样，一级一级往下查找，直到根为止。

#### 三、关于混合——Mixins

​     为公用的CSS样式定义一个Mixins，然后在你CSS需要使用这些样式的地方直接调用你定义好的Mixin。这是一个非常有用的特性，Mixins被当作一个公认的选择器，还可以在Mixins中定义变量或者默认参数。

1.  Scss的混合：

   Sass样式中声明Mixins时需要使用“@mixin”，然后后面紧跟Mixins的名，他也可以定义参数，同时可以给这个参数设置一个默认值，但参数名是使用“$”符号开始，而且和参数值之间需要使用冒号：分开。

   调用时使用“@include”，然后在其后紧跟你要调用的Mixins名。

   ```scss
   /*声明一个Mixin叫作“error”*/
   @mixin error($borderWidth:2px){	
     border:$borderWidth solid #f00;
     color: #f00;
   }
   /*调用error Mixins*/
   .generic-error {
     @include error();/*直接调用error mixins*/
   }
   .login-error {
     @include error(5px);/*调用error mixins，并将参数$borderWidth的值重定义为5px*/
   }
   ```

2. Less的混合：

   在Less中可以将Mixins看成是一个类选择器，当然Mixins也可以设置参数，并给参数设置默认值。不过设置参数的变量名是使用“@”开头，同样参数和默认参数值之间需要使用冒号：分隔开。

   调用时直接.mixinName()。

   ```less
   /*声明一个Mixin叫作“error”*/
   .error(@borderWidth:2px){
     border:@borderWidth solid #f00;
     color: #f00;
   }
   /*调用error Mixins*/
   .generic-error {
     .error();/*直接调用error mixins*/
   }
   .login-error {
     .error(5px);/*调用error mixins，并将参数@borderWidth的值重定义为5px*/
   }
   ```

3. Stylus的混合：

    可以不使用任何符号，就是直接声明Mixins名，然后在定义参数和默认值之间用等号`=`来连接。 

   ```stylus
   /*声明一个Mixin叫作“error”*/
   error(borderWidth=2px){
     border:borderWidth solid #f00;
     color: #f00;
   }
   /*调用error Mixins*/
   .generic-error {
     error();/*直接调用error mixins*/
   }
   .login-error {
     error(5px);/*调用error mixins，并将参数$borderWidth的值重定义为5px*/
   }
   
   ```

#### 四、关于嵌套

嵌套指的是在一个选择器中嵌套另一个选择器来实现继承，从而减少代码量，并且增加了代码的可读性。

使用CSS预处理器语言的嵌套特性，我们可以在父元素的大括号｛｝里写这些元素。同时可以使用“&”符号来引用父选择器。对于Scss、LESS和Stylus这三款CSS预处理器语言的嵌套选择器来说，他们都具有相同的语法：

```css
section {
  margin:10px;
  nav {
    height:25px;
    a {
      color:#0982c1;
      &:hover {
        text-decoration:underline;
      }
    }
  }
}
```

#### 五、关于继承

1. Sass和Stylus的继承

   Sass和Stylus的继承是把一个选择器的所有样式继承到另个**选择器**上。在继承另个选择器的样式时需要使用“`@extend`”开始，后面紧跟被继承的选择器：

   ```css
   .block {
     margin: 10px 5px;
     padding: 2px;
   }
   p {
     @extend .block;/*继承.block选择器下所有样式*/
     border: 1px solid #eee;
   }
   ul,ol {
     @extend .block; /*继承.block选择器下所有样式*/
     color: #333;
     text-transform: uppercase;
   }	
   ```

2. Less的继承

    LESS支持的继承和Scss与Stylus不一样，他不是在选择器上继承，而是将Mixins中的**样式**嵌套到每个选择器里面。
   这种方法的缺点就是在每个选择器中会有重复的样式产生。 

   ```css
   .block {
     margin: 10px 5px;
     padding: 2px;
   }
   p {
     .block;/*继承.block选择器下所有样式*/
     border: 1px solid #eee;
   }
   ul,ol {
     .block; /*继承.block选择器下所有样式*/
     color: #333;
     text-transform: uppercase;
   }
   ```

#### 六、关于运算符

Less可以对数值型的Value（如：数字、颜色、变量等）进行加减乘除四则运算。

Scss在数字运算上要比LESS更专业，他可以直接换算单位了。Scss可以处理无法识别的度量单位，并将其输出。

Stylus的运算是三款预处理器语言中最强大的一款，他拥有其他程序语言一样的运算功能，简单点的加减乘除，复杂的有关系运算、逻辑运算等。

#### 七、关于颜色函数

 Scss、LESS和Stylus都具有强大的颜色函数功能，功能特性上都大同小异，只是在使用方法上略有不同。而且他们都具有相同的一个目的，就是方便操作样式中的颜色值。 

#### 八、关于导入

在CSS中，并不喜欢用@import来导入样式，因为这样的做法会增加http的请求。但是在CSS预处理器中的导入(@import)规则和CSS的有所不同，它只是在语义上导入不同的文件，但最终结果是生成一个CSS文件。

但是，如果你是通过“@import ‘file.css’”导入“file.css”样式文件，那效果跟普通CSS导入样式文件一样。

注意：导入文件中定义了变量、混合等信息也将会被引入到主样式文件中，因此需要避免他们的相互冲突。

#### 九、关于判断语句 if 和 循环语句 for

 Sass和Stylus具有类似于语言处理的能力，比如说条件语句、循环语句等，而LESS需要通过When等关键词模拟这些功能，在这一方面略逊一层。 

### 为什么用sass不用less

**Sass和Less的比较**

**1、Less环境较Sass简单**

Cass的安装需要安装Ruby环境，Less基于JavaScript，是需要引入Less.js来处理代码输出css到浏览器，也可以在开发环节使用Less，然后编译成css文件，直接放在项目中，有less.app、SimpleLess、CodeKit.app这样的工具，也有在线编辑地址。


**2、Less使用较Sass简单**

LESS 并没有裁剪 CSS 原有的特性，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。只要你了解 CSS 基础就可以很容易上手。


**3、从功能出发，Sass较Less略强大一些**

①sass有变量和作用域。
\- $variable，like php；
\- #｛$variable｝like ruby；
\- 变量有全局和局部之分，并且有优先级。


②sass有函数的概念；
\- @function和@return以及函数参数（还有不定参）可以让你像js开发那样封装你想要的逻辑。
-@mixin类似function但缺少像function的编程逻辑，更多的是提高css代码段的复用性和模块化，这个用的人也是最多的。
-ruby提供了非常丰富的内置原生api。

③进程控制：
-条件：@if @else；
-循环遍历：@for @each @while
-继承：@extend
-引用：@import

④数据结构：
-$list类型=数组；
-$map类型=object；
其余的也有string、number、function等类型

**4、Less与Sass处理机制不一样**

前者是通过客户端处理的，后者是通过服务端处理，相比较之下前者解析会比后者慢一点

**5、关于变量**

在Less和Sass中的使用变量的唯一区别就是Less用@，Sass用$。

 **为什么选择使用Sass而不是Less？** 

1、Sass在市面上有一些成熟的框架，比如说Compass，而且有很多框架也在使用Sass，比如说Foundation。

2、就国外讨论的热度来说，Sass绝对优于LESS。
3、就学习教程来说，Sass的教程要优于LESS。在国内LESS集中的教程是LESS中文官网，而Sass的中文教程，慢慢在国内也较为普遍。

4、Sass也是成熟的CSS预处理器之一，而且有一个稳定，强大的团队在维护。

5、同时还有Scss对sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。

6、bootstrap（Web框架）最新推出的版本4，使用的就是Sass。

 