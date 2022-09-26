<template>
    <div>
        <h3>姓名列表</h3>
        <ul>
            <li v-for="(item,index) of user.names" :key="index">
                <router-link :to="`/detail/${item}`">{{item}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from "vue"
const user = reactive({
    names: ["11", "22", "33"]
})
</script>

<style lang="less" scoped>

</style>