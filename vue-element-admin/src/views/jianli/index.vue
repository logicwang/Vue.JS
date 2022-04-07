<template>
  <div class="click-btn">
    <el-button v-loading="loading" onclick="openUrl();">简历</el-button>

    <el-button  type="primary"  onclick="aaaa();"> 苹果 </el-button>
  </div>
</template>
<script type="text/javascript">
openUrl = function (id) {
  var url = "https://wangyufei.fun/website/";
  window.open(url); //新窗口打开
  window.location.href = url; //当前窗口打开
},
aaaa = function (id) {
  var url = "https://www.apple.com.cn/";
  window.open(url); //新窗口打开
  window.location.href = url; //当前窗口打开
};

</script>
<style scoped>
.click-btn {
  margin: 35px;
}
</style>