<template>
  <div class="denglu1">
  	<div class="denglu1_1">
      	大富拍卖
          <div class="denglu1_1_left">
          	<img src="images/fanhui_1.png" alt=""/>
          </div>
      </div>
  	<div class="denglu1_2">
      	<h2>请输入手机号</h2>
          进入大富拍卖APP
      </div>
  	<div class="denglu1_3">
      	手机号 <input type="text" @input="inputFun"/>
      </div>
  	<div class="denglu1_4">
      	<a v-if="show" style="background-color:#00c17b;"  v-on:click="next">下一步</a>
        <a v-else>下一步</a>
      </div>

  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
// import common from "../../assets/js/common.js"
export default {
  name: 'denglu1',
  data () {
    return {
        show:false,
        phone:""
    }
  },
  created() {

  },
  methods:{
    next:function(){
      this.$router.push({path: '/denglu/denglu2', query: { phone: this.phone }});
    },

    inputFun(e){
      this.phone=e.target.value;
      if(e.target.value!=""){
        this.show=true
        console.log(this.show)
      }else{
        this.show=false
        console.log(0)
      }
      // console.log(e.target.value)
    },


  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/denglu.css");
  @import url("../../assets/css/common.css");
</style>
