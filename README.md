# 如何安装vue项目 #
<!-- more -->

## CDN ##

对于制作原型或学习，你可以这样使用最新版本：
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

对于生产环境，我们推荐链接到一个明确的版本号和构建文件，以避免新版本造成的不可预期的破坏:
```
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
```

如果你使用原生 ES Modules，这里也有一个兼容 ES Module 的构建文件：
```
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js'
</script>
```

你可以在 [cdn.jsdelivr.net/npm/vue。](https://cdn.jsdelivr.net/npm/vue/)浏览 NPM 包的源代码。

Vue 也可以在 [unpkg](https://unpkg.com/vue@2.6.14/dist/vue.js) 和 [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.14/vue.js) 上获取 (cdnjs 的版本更新可能略滞后)。



## 创建一个项目

[Vue CLI 官网](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

1. 检查 Vue 是否安装，如果输出 vue 的版本信息，说明安装了 vue

```bash
vue -V
# @vue/cli 4.5.15
```

如果不存在 vue 命令工具，[安装 vue 命令](https://cli.vuejs.org/zh/guide/installation.html)

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

2. 通过 vue 命令，创建一个 `hello-world` 项目

```bash
vue create hello-world
```

选择 Vue 版本, 通过上下键选择 `Default ([Vue 2] babel, eslint)`

```bash
# Vue CLI v4.5.15
# ? Please pick a preset: (Use arrow keys)
# ❯ Default ([Vue 2] babel, eslint)
#   Default (Vue 3) ([Vue 3] babel, eslint)
#   Manually select features
```

选择安装，如果成功输出下面内容，如果失败，查看命令行信息，重新安装

```bash
# Vue CLI v4.5.15
# ✨  Creating project in /Users/wangyufei/git-project/FD/hello-world.
# 🗃  Initializing git repository...
# ⚙️  Installing CLI plugins. This might take a while...

# added 1280 packages in 39s

# 11 packages are looking for funding
#   run `npm fund` for details
# 🚀  Invoking generators...
# 📦  Installing additional dependencies...


# added 55 packages in 5s

# 11 packages are looking for funding
#   run `npm fund` for details
# ⚓  Running completion hooks...

# 📄  Generating README.md...

# 🎉  Successfully created project hello-world.
# 👉  Get started with the following commands:

#  $ cd hello-world
#  $ npm run serve
```

3. 进入生成的 `hello-world` 目录，通过 `npm run serve` 命令运行 vue 服务

```bash
cd hello-world
npm run serve
```