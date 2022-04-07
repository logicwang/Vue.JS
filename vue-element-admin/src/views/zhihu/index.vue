<template>
  <div class="index-btn">
    <button onclick="openUrl();">Click here</button>
    <a href="https://www.zhihu.com/" target="_blank"><button>Click here</button></a>
  </div>
</template>
<script type="text/javascript">
openUrl = function (id) {
  var url = "https://www.baidu.com/";
  window.open(url); //新窗口打开
  window.location.href = url; //当前窗口打开
};
</script>
<style scoped>
button{
    margin-right:20px ;
}
.index-btn{
    margin: 35px;
}
</style>