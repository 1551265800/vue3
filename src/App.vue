<template>
  <div>
    <h3>{{key}}</h3>
    <HelloWord :onFnEvent="setmsg"></HelloWord>
    <h3>{{data}}</h3>
  </div>
</template>

<script>
  import HelloWord from './components/HelloWord.vue'
export default {
  data() {
    return {
      key: 1433223,
      data:""
    }
  },
  components: {
    HelloWord,
  },
  methods: {
    setmsg(data) {
      this.data = data;
    }
  },
}
</script>

<style lang="less" scoped>

</style>