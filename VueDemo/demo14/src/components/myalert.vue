<template>
    <div class="cont" v-show="visible">
        <h2>这是一个对话框</h2>
        <button @click="closeAlert">关闭</button>
    </div>
</template>

<script>
    export default {
        name: "myalert",
        props:{
            visible:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            closeAlert(){
                this.$emit('close',false)
            }
        }
    }
</script>

<style scoped>
.cont{
    width:500px;
    height:200px;
    border:1px solid #ccc;
    margin:50px auto;
    text-align: center;
}
</style>
