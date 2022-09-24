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
  <Transition1></Transition1>
  <div>
    {{info}}
    <!-- <div v-for="(item,index) of info" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
    </div> -->
  </div>
</template>

<script>
import HelloWord from './components/HelloWord.vue'
import SlotsBase from './components/SlotsBase.vue';
import Composition from '@/components/Composition.vue';
import Transition1 from './components/Transition1.vue';
import qs from "querystring"
export default {
  data() {
    return {
      key: 1433223,
      data: "",
      tabConponents: "SlotsBase",
      info: []
    }
  },
  components: {
    HelloWord,
    SlotsBase,
    Composition,
    Transition1
  },
  //自定义指令
  directives: {
    author: {
      mounted(el) {
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
  },
  mounted() {
    /* axios.post("http://iwenwiki.com/api/blueberrypai/login.php", {data:{
      user_id: "iwen@qq.com",
      password: "iwen123",
      verification_code: "crfvw"
    }}).then(res => {
      this.info = res.data
    }).catch(err => {
      console.log(err);
    }) */
    this.axios({
      method: "POST",
      url: "http://iwenwiki.com/api/blueberrypai/login.php",
      data: qs.stringify({
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
      })
    }).then(res => {
      this.info = res.data
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style lang="less" scoped>

</style>