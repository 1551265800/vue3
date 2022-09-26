<template>

    <div>
        <h3>详情</h3>
        {{route.params.name}}
    </div>
</template>

<script setup>
    import {useRoute} from "vue-router"
    const route = useRoute()
    console.log(route.params.name);
</script>

<style lang="less" scoped>

</style>
