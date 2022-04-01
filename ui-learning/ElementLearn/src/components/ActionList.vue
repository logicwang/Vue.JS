<template>
 <ul class="menu-wrapper">
  <li
   class="menu-item"
   v-for="item in menu"
   :key="item"
   @click="handleClick(item)"
  >
   {{ item }}
  </li>
 </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class ActionList extends Vue {
 @Prop() menu: string[];
 handleClick(str: string) {
  this.$emit('click', str);
 }
}
</script>