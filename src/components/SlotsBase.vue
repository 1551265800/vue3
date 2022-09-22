<template>
    <div>
        <h3>插槽基础知识</h3>
        <slot :msg="message"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "插槽消息"
        }
    },
}
</script>

<style lang="less" scoped>

</style>