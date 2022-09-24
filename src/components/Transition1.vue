<template>
    <div>
        <p>这是Transaction，过渡效果</p>
        <button @click="show =! show">切换</button>
        <Transition>
            <div v-if="show">
                <p>全民制作人大家好，我是坤坤</p>
                <div class="box">
                    我喜欢唱、跳、RAP、篮球
                </div>
            </div>
        </Transition>
        
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const show = ref(false);
onMounted(() => {
    console.log("这是Transaction");
})
</script>

<style lang="less" scoped>
.box {
    height: 300px;
    width: 300px;
    background-color: aqua;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.v-enter-to,
.v-leave-from {
    opacity: 1;
}
</style>