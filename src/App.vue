<template>
  <!-- <div>
    <h3>{{key}}</h3>
    <HelloWord :onFnEvent="setmsg"></HelloWord>
    <h3>{{data}}</h3>
    <SlotsBase #="childMsg">
      <div>
        <h3>插槽标题</h3>
        <p>插槽内容:{{key}},{{childMsg.msg}}1</p>
      </div>
    </SlotsBase>
  </div> -->
  <component :is="tabConponents" :onFnEvent="setmsg"></component>
</template>

<script>
import HelloWord from './components/HelloWord.vue'
import SlotsBase from './components/SlotsBase.vue';
export default {
  data() {
    return {
      key: 1433223,
      data: "",
      tabConponents:"SlotsBase"
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