<template>
    <p v-author>组合式api</p>
    <button @click="increment">Count is: {{ count }}</button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { countUtil } from '../utils/utilCount.js';
const count = ref(0)
function increment() {
    count.value++
}
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
})
countUtil(count);

//自定义指令
const vAuthor = {
    mounted:(el)=>{
        console.log(el);
        el.innerHTML = el.innerHTML + "-swz"
    }
}
</script>
