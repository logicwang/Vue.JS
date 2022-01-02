<template>
    <div id="app">
        <div v-bind:class="{ active: isActive }"
            style="width: 200px;height: 200px;line-height: 200px;background-color: red;">
            hi,vue
        </div>
    </div>
</template>
<script>
export default {
    e1: "#app",
    data:()=> ({
        isActive : true,
    })
}
</script>
