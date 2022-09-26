<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
function chickHander() {
  router.push("/about")
}
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="chickHander">跳转</button>
  </main>
</template>
