<template>
  <div class="denglu2">
  	<div class="denglu1_1">
      	大富拍卖
          <div class="denglu1_1_left">
          	<img src="images/fanhui_1.png" alt=""/>
          </div>
      </div>
  	<div class="dl_fasongyazhengma_1">
      	<h2>请输入手机号</h2>
          验证码已发送至手机: <span>{{phone}}</span>
      </div>
      <div class="dl_fasongyazhengma_2">
      	<ul>
      		<li>
              	<input type="text" value="1"/>
              </li>
              <li>
              	<input type="text" value="2"/>
              </li>
              <li>
              	<input type="text" value="4"/>
              </li>
              <li>
              	<input type="text" value="5"/>
              </li>
              <div class="clearBoth"></div>
      	</ul>
      </div>
      <div class="dl_fasongyazhengma_3">
      	52s
      </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
// import common from "../../assets/js/common.js"
export default {
  name: 'denglu2',
  data () {
    return {
        phone:""
    }
  },
  created() {
    this.phone=this.$route.query.phone
    var _this=this
    setTimeout(function()  {
     _this.$router.push({path: '/index'});
       }, 2000)
  },

  methods:{
    a:function(){
      console.log("123")
    },

    inputFun(e){
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
