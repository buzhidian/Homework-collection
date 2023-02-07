### 动态路由

1.定义全局路由: 例如404,login，首页等固定路由

2.创建路由：new Router，把固定的路由，赋值给 routers

3.实例化路由 router

4.在全局路由守卫，前置路由守卫中，动态请求接口，获取动态路由，如果后端返回树形结构数据，不需要进行递归处理，如果返回是一维数据，需要前端递归处理成树形结构数据。

### git分支

**1、如何使用Git 命令创建一个新分支**

1. 进入到你要进行分支创建的项目，鼠标右键点击，选择Git Bash Here,打开git 命令操作窗口

2. 使用命令**git checkout master**,切换到master分支

3. 使用命令**git pull**拉取master代码，保证本地master分支的代码是最新的

4. 使用命令**git checkout -b test**,创建**test**分支，并切换到test分支

5. 使用命令**git push origin test**,将test分支推到远程仓库

6. 将test本地分支和远程test分支进行关联：**git branch --set-upstream-to=origin/test**,如果不进行这个操作的话，git pull会出现以下

   ![](C:\Users\Lenovo\Desktop\day05\img\message.png)

7. 拉取 **git pull** ，拉取成功

**2、如何合并分支**

合并之前将自己分支的代码先提交上去，后面的步骤都是基于这一步的。

1. 进入要合并的分支（如开发分支合并到master，则进入master目录）
   **git checkout master**
   **git pull**
2. 查看所有分支是否都pull下来了
   **git branch -a**
3. 使用merge合并开发分支
   **git merge 分支名**
4. 查看合并之后的状态
   **git status**
5. 有冲突的话，通过IDE解决冲突；

6. 解决冲突之后，将冲突文件提交暂存区
   **git add 冲突文件**
7. 提交merge之后的结果
   **git commit**
8. 本地仓库代码提交远程仓库
   **git push**

git将分支合并到分支，将master合并到分支的操作步骤是一样的。