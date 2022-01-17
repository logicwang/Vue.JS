<template>
    <div
    class="text"
      style="width: 200px; height: 200px; line-height: 200px"
      v-bind:class="{ active: isActive, green: isGreen }"
    >
      hi vue
    </div>
</template>
<script>
    export default {
      data: () => ({
        isActive: true,
        isGreen: true,
      }),
    };
</script>
<style>
      .active {
        background: red;
      }
      .green {
        color: yellow;
      }
      .text{
        font-size: 40px;
      }
</style>