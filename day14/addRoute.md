**vue-router的addRoute方法实现权限控制**

在项目实践中，往往需要用户登录后由后端返回用户的权限，来动态配置路由,vue-router提供了两个方法router.addRoutes(),router.addRoute()可以进行动态路由配置，这里需要注意的是vue-router的options属性存放的是路由配置的信息，并不是响应式的，在动态添加路由规则后，router.options.routes属性不会改变，如果需要更新router.options.routes，则需要手动更改。



**router.addRoutes 和router.addRoute 新路由规则**

1.  router.addRoutes 添加多条新路由规则 

   ```
   router.addRoutes(routes: Array<RouteConfig>)
   ```

    动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组。

2.  router.addRoute 添加一条新路由规则 

    如果该路由规则有 name，并且已经存在一个与之相同的名字，则会覆盖它。 

   ```
   addRoute(route: RouteConfig): () => void
   ```

    addRoute方法可用于为现有路由添加子路由规则 

   ```
   addRoute(parentName: string, route: RouteConfig): () => void
   ```



