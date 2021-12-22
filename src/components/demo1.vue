<template>
   <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>
</template>


<script>
        var vm = new Vue({
            el: '#example',
            data: {
                message: 'WANGYUFEI'
            },
            computed: {
                // 计算属性的 getter
                reversedMessage: function () {
                    // `this` 指向 vm 实例
                    return this.message.split('').reverse().join('')
                }
            }
        })
</script>
