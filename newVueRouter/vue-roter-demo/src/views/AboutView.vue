<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="chickHander">跳转</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter();
function chickHander() {
  router.push("/")
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
