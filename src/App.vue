<template>
  <div>
    <h3>{{key}}</h3>
    <HelloWord> </HelloWord>
  </div>
</template>

<script>
  import HelloWord from './components/HelloWord.vue'
export default {
  data() {
    return {
      key: 1433223
    }
  },
  components: {
    HelloWord,
  },
}
</script>

<style lang="less" scoped>

</style>