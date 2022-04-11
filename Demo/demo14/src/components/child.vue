<template>
<div class="child">
    <p>子组件: {{value}}</p>
    <a href="javascript:;" @click="returnBackFn">回应</a>
</div>
</template>
<script>
export default {
    props: {
        value: String
    },
    methods: {
        returnBackFn() {
            this.$emit('input', 'bbbbb');
        }
    }
}
</script>