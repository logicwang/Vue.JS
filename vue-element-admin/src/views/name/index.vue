<template>
  <div class="app-container">
    <a class="document-btn" target="_blank" href="https://www.apple.com/">国内文档</a>
    <dropdown-menu class="document-btn1" :items="articleList" title="系列文章" />
      <div class="errPage-container">
    <ErrorA />
    <ErrorB />
    <h3>请点击右上角bug小图标</h3>
    <aside>
      现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/guide/advanced/error.html">
        文档介绍
      </a>
    </aside>
  </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/Share/DropdownMenu'

export default {
  name: 'Documentation',
  components: { DropdownMenu },
  data() {
    return {
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .document-btn1 {
    flex-shrink: 0;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    padding: 0 16px;
    margin: 16px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
.document-btn {
    color: #FFFFFF;
    background-color: #1890ff;
    border-color: #1890ff;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    padding: 30px;
    /* background: #FFFFFF; */
    border: 1px solid #DCDFE6;
    border-radius: 21px;
}
</style>
