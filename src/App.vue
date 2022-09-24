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
  <Composition></Composition>
  <p v-author>自定义指令</p>
</template>

<script>
import HelloWord from './components/HelloWord.vue'
import SlotsBase from './components/SlotsBase.vue';
import Composition from '@/components/Composition.vue';
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
    SlotsBase,
    Composition
  },
  //自定义指令
  directives:{
    author:{
      mounted(el){
        //当前元素
        console.log(el);
        el.innerHTML = el.innerHTML + "-swz"
      }
    }
  },
  methods: {
    setmsg(data) {
      this.data = data;
    }
  }
}
</script>

<style lang="less" scoped>

</style>