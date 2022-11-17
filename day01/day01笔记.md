## 1.vue渐进式框架

- Vue：渐进式框架，主张就是只负责自己的事情，被设计为可以自底向上逐层应用。Vue的核心库只关心视图层，不仅易于上手，还便于与第三方库或既有项目整合，在不同层次可以使用不同的概念。

- React：它也有一定程度的主张，它的主张主要是函数式编程的理念。

- Angular：它两个版本都是强主张的，如果你用它，必须接受以下东西：

  --必须使用它的模块机制

  --必须使用它的依赖注入

  --必须使用它的特殊形式定义组件（每个视图框架都有）

## 2.git介绍

### 2-1版本控制

版本控制（Revision control）是一种在开发的过程中用于管理我们对文件、目录或工程等内容的修改历史，方便查看更改历史记录，备份以便恢复以前的版本的软件工程技术。

- 实现跨区域多人协同开发
- 追踪和记载一个或者多个文件的历史记录
- 组织和保护你的源代码和文档
- 统计工作量
- 并行开发、提高开发效率
- 跟踪记录整个软件的开发过程
- 减轻开发人员的负担，节省时间，同时降低人为错误

简单说就是用于管理多人协同开发项目的技术。

**常见的版本控制工具**

主流的版本控制器有如下这些：

- **Git**
- **SVN**（Subversion）
- **CVS**（Concurrent Versions System）
- **VSS**（Micorosoft Visual SourceSafe）
- **TFS**（Team Foundation Server）
- Visual Studio Online

版本控制产品非常的多（Perforce、Rational ClearCase、RCS（GNU Revision Control System）、Serena Dimention、SVK、BitKeeper、Monotone、Bazaar、Mercurial、SourceGear Vault），现在影响力最大且使用最广泛的是Git与SVN

### 2-2版本控制分类

**1、本地版本控制**

记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS。

**2、集中版本控制  SVN**

所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改,集中式版本控制

**总结：**

缺点：所有的历史代码都存放在服务器中,一旦服务器崩溃,代码就会丢失,且不能找回。

优点: 个人本地占用储存空间较小,只需要保存自己修改的内容即可

**3、分布式版本控制 	Git**

所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。

优点：不会因为服务器损坏或者网络问题，造成不能工作的情况！

**Git与SVN的主要区别**

SVN是集中式版本控制系统，版本库是集中放在中央服务器的。集中式版本控制系统是必须联网才能工作，对网络带宽要求较高。

Git是分布式版本控制系统，没有中央服务器，每个人的电脑就是一个完整的版本库，工作的时候不需要联网了，因为版本都在自己电脑上。

### 2-3Git的下载和启动

**Git的历史：**

Git是免费、开源的，最初Git是为辅助 Linux 内核开发的，来替代 BitKeeper！

Linux和Git之父李纳斯·托沃兹（Linus Benedic Torvalds）1969、芬兰、

**下载Git：**

打开 [git官网] https://git-scm.com/，下载git对应操作系统的版本。

**启动Git**

安装成功后在开始菜单中会有Git项，菜单下有3个程序：任意文件夹下右键也可以看到对应的程序！

```
Git Bash ：Unix与Linux风格的命令行，使用最多，推荐最多

Git CMD：Windows风格的命令行

Git GUI：图形界面的Git，不建议初学者使用，尽量先熟悉常用命令
```

## 3.常用的Linux命令

1）cd : 进入目录。

2）cd . . 回退到上一个目录，直接cd进入默认目录

3）pwd : 显示当前所在的目录路径。

4）ls(ll):  都是列出当前目录中的所有文件，只不过ll(两个ll)列出的内容更为详细。（Mac只有ll）

5）touch : 新建一个文件 如 touch index.js 就会在当前目录下新建一个index.js文件。

6）rm:  删除一个文件, rm index.js 就会把index.js文件删除。

7）mkdir:  新建一个目录,就是新建一个文件夹。

8）rm -r :  删除一个文件夹, rm -r src 删除src目录

9）mv 移动文件, mv index.html src。 index.html 是我们要移动的文件, src 是目标文件夹,当然, 这样写,必须保证文件和目标文件夹在同一目录下。

10）reset 重新初始化终端/清屏。

11）clear 清屏。

12）history 查看命令历史。

13）help 帮助。（Mac除外）

14）exit 退出。

15）#表示注释

16) ls: 查看桌面的所有文件

## 4.Git的使用

#### **Git配置**

查看配置 git config -l

查看不同级别的配置文件：

```
#查看系统config git config --system --list　　
#查看当前用户（global）配置git config --global  --list
```

#### **Git相关的配置文件：**

1）、Git\etc\gitconfig  ：Git 安装目录下的 gitconfig   --system 系统级 

2）、C:\Users\Administrator\ .gitconfig   只适用于当前登录用户的配置  --global 全局

苹果mac系统：open ~/.gitconfig

#### **设置用户名与邮箱（用户标识，必要）**

当你安装Git后首先要做的事情是设置你的用户名称和e-mail地址。这是非常重要的，因为每次Git提交都会使用该信息。它被永远的嵌入到了你的提交中：

```
git config --global user.name "kuangshen"  #名称
git config --global user.email 24736743@qq.com   #邮箱
git config --global --list  #查询名称和邮箱
```

#### **Git的三个区域**

Git本地有三个工作区域：工作目录（Working Directory）、暂存区(Stage/Index)、资源库(Repository或Git Directory)。如果在加上远程的git仓库(Remote Directory)就可以分为四个工作区域。

- Workspace：工作区，就是你平时存放项目代码的地方
- Index / Stage：暂存区，用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息
- Repository：仓库区（或本地仓库），就是安全存放数据的位置，这里面有你提交到所有版本的数据。
- Remote：远程仓库，托管代码的服务器，可以简单的认为是你项目组中的一台电脑用于远程数据交换

#### **Git的工作流程**

git的工作流程一般是这样的：

１、在工作目录中添加、修改文件；

２、将需要进行版本管理的文件放入暂存区域；

３、将暂存区域的文件提交到git仓库。

因此，git管理的文件有三种状态：已修改（modified）,已暂存（staged）,已提交(committed)

#### **本地仓库搭建**

创建本地仓库的方法有两种：一种是创建全新的仓库，另一种是克隆远程仓库。

1、创建全新的仓库，需要用GIT管理的项目的根目录执行：

```
# 在当前目录新建一个Git代码库$ git init
```

2、执行后可以看到，仅仅在项目目录多出了一个.git目录，关于版本等的所有信息都在这个目录里面。

```
1:windows查看隐藏文件夹 在查看里面勾选
2:mac查看隐藏文件夹 
```

#### **克隆远程仓库**

$ git clone [url] 

## 5.Git文件操作

#### **文件的四种状态**

版本控制就是对文件的版本控制，要对文件进行修改、提交等操作，首先要知道文件当前在什么状态，不然可能会提交了现在还不想提交的文件，或者要提交的文件没提交上。

- Untracked: 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.
- Unmodify: 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为Modified. 如果使用git rm移出版本库, 则成为Untracked文件
- Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存staged状态, 使用git checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改 !
- Staged: 暂存状态. 执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行git reset HEAD filename取消暂存, 文件状态为Modified

#### **查看文件状态**

```
#查看指定文件状态git status [filename]
#查看所有文件状态git status
# git add .                  添加所有文件到暂存区
# git commit -m "消息内容"    提交暂存区中的内容到本地仓库 -m 提交信息
```

#### **忽略文件**

有些时候我们不想把某些文件纳入版本控制中，比如数据库文件，临时文件，设计文件等
在主目录下建立".gitignore"文件，此文件有如下规则：

1. 忽略文件中的空行或以井号（#）开始的行将会被忽略。
2. 可以使用Linux通配符。例如：星号（*）代表任意多个字符，问号（？）代表一个字符，方括号（[abc]）代表可选字符范围，大括号（{string1,string2,...}）代表可选的字符串等。
3. 如果名称的最前面有一个感叹号（!），表示例外规则，将不被忽略。
4. 如果名称的最前面是一个路径分隔符（/），表示要忽略的文件在此目录下，而子目录中的文件不忽略。
5. 如果名称的最后面是一个路径分隔符（/），表示要忽略的是此目录下该名称的子目录，而非文件（默认文件或目录都忽略）。

## 6.码云的使用

github 是有墙的，比较慢，在国内的话，我们一般使用 gitee

1、注册登录码云，完善个人信息

2、设置本机绑定SSH公钥，实现免密码登录！（免密码登录，这一步挺重要的，码云是远程仓库，我们是平时工作在本地仓库！)

```
# 进入 C:\Users\Administrator\.ssh 目录
# 生成公钥 ssh-keygen -t rsa
```

3、将公钥信息public key 添加到码云账户中即可！

4、使用码云创建一个自己的仓库！

## 7.Git的的分支

git分支中常用指令：

```
# 列出所有本地分支git branch
# 列出所有远程分支git branch -r
# 新建一个分支，但依然停留在当前分支git branch [branch-name]
# 新建一个分支，并切换到该分支git checkout -b [branch]
# 合并指定分支到当前分支$ git merge [branch]
# 删除分支$ git branch -d [branch-name]
# 删除远程分支$ git push origin --delete [branch-name]$ git branch -dr [remote/branch]
```

































