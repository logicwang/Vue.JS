

<template>
  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>
</template>

<script>
// import demo2 from './components/demo2.vue';
// var vm = new Vue({
//     e1: "#app",
//     data: {
//         type: "A",
//     },
// });

export default {
    e1: "#app",
    data() {
        return {
            type: "B",
        }
    },

}
</script>