<template>
    <div :class= msg>
        HelloWord
        <p :class= {msg:act}>123</p>
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
}
</script>

<style lang="less" scoped>

</style>