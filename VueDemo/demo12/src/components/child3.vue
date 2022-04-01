<template>
    <div>我是子组件</div>
</template>
<script>
export default {
    mounted() {
        this.$nextTick(function() {
            this.$on('childmethods', function() {
                console.log('我是子组件方法');
            });
        });
     },
};
</script>