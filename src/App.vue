<template>
  <div>
    <h3>{{key}}</h3>
    <HelloWord :onFnEvent="setmsg"></HelloWord>
    <h3>{{data}}</h3>
    <SlotsBase>
      <h3>插槽标题</h3>
      <p>插槽内容:{{key}}</p>
    </SlotsBase>
  </div>
</template>

<script>
  import HelloWord from './components/HelloWord.vue'
  import SlotsBase from './components/SlotsBase.vue';
export default {
  data() {
    return {
      key: 1433223,
      data:""
    }
  },
  components: {
    HelloWord,
    SlotsBase
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