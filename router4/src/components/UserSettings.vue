<template>
  <div class="us">
    <h2>User Settings</h2>
    <router-view class="us__content" />
    <router-view name="helper" class="us__content us__content--helper" />
  </div>
</template>
<script>
export default {
  name: "UserSeting",
};
</script>