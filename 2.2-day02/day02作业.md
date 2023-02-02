### 一、this的指向问题

1. 构造函数
   构造函数里的 this 指向实例化对象
2. 箭头函数
   箭头函数里没有 this，用的 this 是上层所在环境的 this
3. 函数是对象的属性
   this 指向这个对象
4. dom 节点调用一个事件 就指向这个 dom
5. 全局调用 就指向 widnow
6. 计时器里的 this 永远指向 window

### 二、主域名相同，子域名不同会不会产生跨域？

协议、端口号、域名 都相同才是同一个域
只要有一个不同就算是跨域
主域名相同，子域名不同也算跨域
email.qq.com和zone.qq.com就属于主域相同，子域不同，也算是跨域
需要注意的是：协议不同（eg:https和http）或者端口号不同造成的跨域，前端是无法解决的

### 三、数组去重的方法有哪些？

1. 双重for循环

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法1： 双重for 循环
       function newArrFn (arr) {
         // 创建一个新的空数组
         let newArr = []
         for(let i = 0;i<arr.length;i++){
           // 设置一个开关，如果是true，就存进去，不是就不存
           let  flag = true
           for(let j = 0;j<newArr.length;j++){
             // 原数组和新数组作比较，如果一致，开关变为 false
             arr[i] === newArr[j] ? flag = false : flag
           };
           flag ? newArr.push(arr[i]) : newArr
         };
         return newArr
       }
       console.log(newArrFn(arr));
   ```

2. for循环 +findIndex

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法2： for + indexof
       function newArrFn (arr) {
         let newArr = []
         for(let i = 0;i<arr.length;i++){
           newArr.indexOf(arr[i]) === -1 ? newArr.push(arr[i]) : newArr
         };
         return newArr
       }
       console.log(newArrFn(arr));
   ```

3. sort 排序

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法3： for + sort
       function newArrFn (arr) {
         arr = arr.sort()
         let newArr = []
         for(let i = 0;i<arr.length;i++){
           arr[i] === arr[i-1] ? newArr : newArr.push(arr[i])
         };
         return newArr
       }
       console.log(newArrFn(arr));
   ```

4. Set

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法4： set
       function newArrFn (arr) {
         // .new Set方法，返回是一个类数组，需要结合 ...运算符，转成真实数组
         return ([...new Set(arr)])
       }
       console.log(newArrFn(arr));
   ```

5. set + Array.from

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法5： set + Array.from
       function newArrFn (arr) {
         // .new Set方法，返回是一个类数组，需要结合 Array.from ，转成真实数组
         return (Array.from(new Set(arr)) )
       }
       console.log(newArrFn(arr));
   ```

6. filter + indexOf

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法6 ：filter + findIndex
       function newArrFn (arr) {
         // 利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，
         // 如果相等，说明数组中没有重复的
         return Array.prototype.filter.call(arr, function (item, index) { 
           return arr.indexOf(item) === index
          })
       }
       console.log(newArrFn(arr));
   ```

7. includes

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法7 ：for + includes
       function newArrFn (arr) {
         // 利用includes 检查新数组是否包含原数组的每一项
         // 如果不包含，就push进去
         let newArr = []
         for(let i = 0;i<arr.length;i++){
           newArr.includes(arr[i]) ? newArr:  newArr.push(arr[i]) 
         };
         return newArr
       }
       console.log(newArrFn(arr));
   ```

8. for + object

    利用**对象属性名不能重复**这一特点。如果对象中不存在，就可以给 push 进去 

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法8 ：for + obj
       function newArrFn (arr) {
         // 利用对象属性名不能重复这一特点
         // 如果对象中不存在，就可以给 push 进去
         let newArr = []
         let obj = {}
         for(let i = 0;i<arr.length;i++){
           if (!obj[arr[i]]) {
             newArr.push(arr[i])
             obj[arr[i]] = 1
           } else {
             obj[arr[i]] ++
           }
         };
         return newArr
       }
       console.log(newArrFn(arr));
   ```

9. for + splice

    splice --切割 

   ```js
   var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
       // 数组去重：
       // 方法8 ：for + splice
       // 利用 splice 进行切割。
       function newArrFn (arr) {
         for(let i = 0; i<arr.length; i++){
           for(let j = i + 1; j<arr.length; j++){
             if (arr[i] === arr[j]) {
               arr.splice(j,1);
               j--
             }
           };
           }
           return arr
       }
       console.log(newArrFn(arr));
   ```

10. filter + indexOf

    ```js
    var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
        // 数组去重：
        // 方法10 ：filter + indexOf
        // filter 过滤 配合 indexOf 查找元素
        function newArrFn (arr) {
          return arr.filter((item, index) => {
            return arr.indexOf(item) === index
          })
        }
        console.log(newArrFn(arr));
    ```

11. Map

    ```js
    var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
        // 数组去重：
        // 方法11 ：Map
        function newArrFn (arr) {
          let newArr = []
          let map = new Map()
          for(let i = 0;i<arr.length;i++){
            // 如果 map里面不包含，就设置进去
            if (!map.has(arr[i])) {
              map.set(arr[i], true)
              newArr.push(arr[i])
            }
          };
          return newArr
        }
        console.log(newArrFn(arr));
    ```

12. reduce

    ```js
    var arr = [1, 2, 3,4 ,5,6, 4, 3, 8, 1]
        // 数组去重：
        // 方法12 ：reduce
        function newArrFn (arr) {
          let newArr = []
          return  arr.reduce((prev, next,index, arr) => {
            // 如果包含，就返回原数据，不包含，就把新数据追加进去 
            return newArr.includes(next) ? newArr :  newArr.push(next)
          }, 0)
        }
        console.log(newArrFn(arr));
    ```











