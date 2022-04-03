<template id="news">
    <div>
        <h3>{{title}}</h3>
    <ul class="ulnews">
        <li v-for='(data,index) in newsList' :key="index">{{data}}</li>
    </ul>
    <div>
</template>
<script>
export default {
    name:'NewApp',
    dara(){
        return{
            title:'新闻',
            newsList:[
                '新闻111111111111',
                'fasudhaquefwe',
                'asdhewfuewfph'
            ]
        }
    }
}
</script>
<style scoped>
.ulnews li{
    display: block;
}
</style>