<template>
  <div>
    <ul>
      <router-link to="/home" tag="li" active-class="active">
      <a href="javascript:;">首页</a>
      </router-link>
    </ul>
  <div>
    <transiition enter-active-class="animated zoomInLeft"
    leave-active-class="animated zoomOutRight">
    <router-view/>
    </transiition>
    </div>
  </div>
</template>
<script>
export default {
  name:'AppLogin'
}
</script>