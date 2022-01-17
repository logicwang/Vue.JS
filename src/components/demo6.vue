<template>
<div>
    <div
      style="width: 200px; height: 200px; line-height: 200px "
      v-bind:class="{ active: isActive, green: isGreen }"
    >
      hi vue
    </div>
    <div style="{color : color , fontSize : size}">
      shit vue
    </div>
</div>
</template>
<script>
    export default {
      data: () => ({
        isActive: true,
        isGreen: true,
        color: '#FF0000',
        size: '60px'
      }),
    };
</script>
<style>
      .active {
        background: red;
        margin-top: 50px;
        font-size: 30px;
      }
      .green {
        color: yellow;
      }
</style>