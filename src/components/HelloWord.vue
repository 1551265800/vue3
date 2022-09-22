<template>
    <div :class= msg>
        HelloWord
        <p :class= {msg:act}>123</p>
        <p>{{onFnEvent("这是子元素传来的数据")}}</p>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            msg: "active",
            act: false
        }
    },
    props: {
        onFnEvent: {
            type: Function,
        },
    },
}
</script>

<style lang="less" scoped>

</style>