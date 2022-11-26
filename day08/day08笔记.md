## 1.Vue-渐进式JS框架

#### 1.1官网

1.英文官网: htp://vueis.org/
2.中文官网: htp://n.vueis.org/

#### 1.2介绍与描述

- Vue是一套用来动态构建用户界面的渐进式 JavaScript 框架。
  - 构建用户界面：把数据通过某种办法变成用户界面。
  - 渐进式：Vue可以自底向上逐层的应用，简单应用只需要一个轻量小巧的核心库，复杂应用可以引入各式各样的Vue插件。
- 作者：尤雨溪

#### 1.3 Vue的特点

1. 遵循MVVM模式

   MVVM是Model-View-ViewModel的简称，是目前非常流行的架构模式。

2. 编码简洁,体积小,运行效率高,适合移动/PC 端开发

3. 它本身只关注UI，也可以引入其它第三方库开发

4. 采用组件化模式，提高代码复用率，且代码更好的维护

5. 声明式编码，让编码人员无需直接操作DOM，提高效率

6. 使用虚拟DOM和Diff算法，尽量复用DOM节点

#### 1.4与其它JS框架的关联

1. 借鉴Angular的模板和数据绑定技术
2. 借鉴React的组件化和虚拟 DOM技术

#### 1.5市场上和vue并行的三大语言框架

- Vue：渐进式框架，主张就是只负责自己的事情，被设计为可以自底向上逐层应用。Vue的核心库只关心视图层，不仅易于上手，还便于与第三方库或既有项目整合，在不同层次可以使用不同的概念。

- React：它也有一定程度的主张，它的主张主要是函数式编程的理念。

- Angular：它两个版本都是强主张的，如果你用它，必须接受以下东西：

  --必须使用它的模块机制

  --必须使用它的依赖注入

  --必须使用它的特殊形式定义组件（每个视图框架都有）

#### 1.6Vue周边库

- vue-cli: vue脚手架
- vue-resource
- axios
- vue-router：路由
- vuex：状态管理
- element-ui：基于vue的U组件库(PC端)



## 2.Vue初始

#### 2.1安装环境

- 全局安装node环境，检查node版本
  - npm
  - 源：外网源，淘宝镜像源
  
- 全局安装vue-cli脚手架

  检测 node 版本号 node -v
  检测 vue 脚手架的版本号 vue -v

- 创建项目

#### 2.2创建项目

1. 创建项目命令行

   ```
   vue create demo  //demo为自定义项目名
   ```

2. 选择 Manually select features ，选择手动项目配置

   ```
   Default ([Vue 3] babel, eslint)
   Default ([Vue 2] babel, eslint)
   ❯ Manually select features
   ```

3. 选择项目配置

   ```
   ? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
   ◉ Babel 					//转换工具，将es6转换为es5
   ◯ TypeScript				//TS
   ◯ Progressive Web App (PWA) Support		//渐进式Web应用程序
   ◉ Router  								//vue-router (vue路由)
   ◉ Vuex  								//vuex (vue的状态管理模式)
   ❯◉ CSS Pre-processors  					//CSS 预处理器 (less,scss)
   ◯ Linter / Formatter				 	//代码风格检查和格式化(如:ESlint)
   ◯ Unit Testing						 	//单元测试(unit tests)
   ◯ E2E Testing							//e2e (end to end)测试
   ```

4. 选择 vue 的版本

   ```
   ? Choose a version of Vue.js that you want to start the project with
   3.x
   ❯ 2.x
   ```

5. 路由要不要使用 history 模式

   ```
   Use history mode for router? (Requires proper server setup for index fallback in produc
   tion) (Y/n) n
   ```

6. 选择一个 css 的预处理器，选择 第一个 sass

   ```
   ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by defaul
   t): (Use arrow keys)
   ❯ Sass/SCSS (with dart-sass)
   Less
   Stylus
   ```

7. 你想在哪里放配置文件，选择第二个 统一放在 package.json

   ```
   ? Where do you prefer placing config for Babel, ESLint, etc.?
   In dedicated config files
   ❯ In package.json
   ```

8. 要不要存下来，以后使用 

   ```
   Save this as a preset for future projects? (y/N) y
   ```

9. 把项目起一个名字

   ```
   Save preset as:
   ```

#### 2.3了解内容：

1. 对于pwa的解释

   ```
   一是给项目添加一些webapp支持，比如在手机端支持发送到桌面图标，根据不同平台和浏览器尝试去掉浏览器自带的地址栏、底栏实现全屏体验,这个主要是视觉上和体验上的，没有什么实际功能。
   	实现方式就是勾选pwa支持后项目会生成manifest.json,在里面配置即可。
   
   二是增加可离线支持，其实可离线也不一定非要用pwa，有不少其他手段。可离线就是比如你的项目不是一定要全程联网才能实现功能，只要用户访问过一次你的网站，下一次进入时哪怕没有网络，你的项目也不会白屏，而是照常运行或者开放部分功能，或者给个断网提示等等。对于那些功能性网站挺有用的，举例来说什么在线计算器，在线算税小工具等。
   	通过配置项目生成的registerServiceWiorker.js来注册serviceworker实现，具体操作还是很复杂的，详情百度。
   	
   	
   Progressive Web App，简称 PWA，是提升Web App的体验的一种新方法，能给用户原生应用的体验。PWA能做到原生应用的体验不是靠特指某一项技术，而是经过应用一些新技术进行改进，在安全、性能和体验三个方面都有很大提升。PWA 本质上是Web App，借助一些新技术也具备了 Native App 的一些特性，兼具Web App和 Native App的优点。
   PWA的主要特点包括下面三点:
   (1)可靠，即使在不稳定的网络环境下，也能瞬间加载井展现体验
   (2)快速响应，并且有平滑的动画响应用户的操作粘性
   (3)像设备上的原生应用，具有沉浸式的用户体验，用户可以添加到桌面。
   
   PWA本身强调渐进式，并不要求一次性达到安全、性能和体验上的所有要求，开发者可以通过 PWA Checklist查看现有的特征。
   搜索链接:https://juejin.cn/post/6844904033522548743
   ```

2. 对于单元测试的理解

   哪些需要写单元测试，哪些不需要写，取决于代码对数据的处理，当数据处理的复杂性较高的时候，需要用到单元测试，只有页面展示，并不需要单元测试。

   https://juejin.cn/post/7039108357554176037

3. E2E测试

   https://blog.csdn.net/u012961419/article/details/123821205

4. scss预处理

   https://www.jianshu.com/p/81aec65cccea





## 3.项目目录

- vue.config.js -----  配置webpack文件(包括配置跨域,请求接口,第三插件配置,rule配置)

- Package.json

  - scripts:配置启动命令,打包命令,eslint校验代码命令

  - browserslist:浏览器适配配置

  - dependencies字段指定了项目运行所依赖的模块,devDependencies指定项目开发所需要的模块。

    对应版本可以有各种限定：

    - 指定版本：安装时只安装指定版本。比如1.2.2，遵循“大版本.次要版本.小版本"的格式规定。

    - ～指定版本:不改变大版本号和次要版本号。比如~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2)，但是不安装1.3.x。

    - ^ 指定版本:不改变大版本号。比如^1.2.2，表示安装1.x.x的最新版本(不低于1.2.2)，但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。

    - latest:安装最新版本。

      

- package-lock.json

  - 约束每个node-modules版本下的其他依赖的固定版本
  - package.json可以手动编写，也可以使用npm init自动生成。其中只有name和version是必填的，其他配置都是选填

- babel.config.js:    babel插件设置

- .gitignore：  忽略文件

- Public：公共入口文件和公共配置

- src放置组件和axios配置

  - Assets  --  放置图片.img，css，js
  - components  --  放置其他组件所需要的公共组件
  - router  --  配置路由表,(动态路由,静态路由,权限路由)
  - store  --  存放vuex的仓库
  - Views  --  放置页面的地方
    - App.vue  入口的总文件
    - main.js  实例化vue挂载
  - Utils -所有封装axios，封装token，封装公共方法-------工具类文件



## 4.vue的语法

1. 插值语法 {{}}

2. 动态绑定v-bind  (：)

3. 条件渲染：v-if，v-else

   - 概念:控制dom元素的创建和销毁，实现渲染和更新页面
   - 特点:如果没有v-else的存在，会在dom元素被删除的地方，添加一个标识，在下次进行重新渲染的时候，优先寻找有标识的地方，尽量减少dom的循环和查找

4. v-show

   通过添加或者移除 display: none样式进行控制dom元素的显示与隐藏

5. v-for

   - Key的作用：为了防止dom元素的重复渲染。如果以index为key的话，会造成页面的多次渲染和渲染不同；
   - Diff算法对比节点：同级节点对比，确认和获取每个节点，通过key标识来进行对比

