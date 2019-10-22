<template>
  <div class="home">
    {{name}}
    <user></user>
    <!-- <hello></hello> -->
    <!-- <router-link to="/test">test</router-link>
    <router-link to="/shangcheng/shopdetail">shop</router-link> -->
  </div>
</template>

<script>
//局部注册组件
import HelloWorld from "./HelloWorld.vue"
import User from "./User.vue"
export default {
  name: 'home',
  data () {
    return {
      name: '我是home'
    }
  },
  components:{
    "hello":HelloWorld,
    "user":User
  },
  created() {
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/integral/categoryall"
    var data1={
      id:1
    }
    var url2="http://dfpmnews.we-fs.net/index.php/api/v1/product/by_category"
    var data2={
      id:4
    }
    this.$http.get(url1,{params:data1})
    .then((data)=>{
      console.log(data);
    })

    this.$http.get(url2,{params:data2})
    .then((data)=>{
      console.log(data);
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
