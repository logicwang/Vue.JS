<template>
    <div id="app">
        <div v-bind:class="{ active: isActive , green : isGreen}"
            style="width: 200px;height: 200px;line-height: 200px;background-color: red;">
            hi,vue
        </div>


        <div :style="{color: color,fontSize:size}">
            Vue
        </div>



    </div>
</template>
<script>
export default {
    e1: "#app",
    data:()=> ({
        isActive : true,
        isGreen : true ,



        color : '#red',
        size: '50px',
    })
}
</script>


<style >
.active{background: red;}
.green{color: #00FF00;}
</style>