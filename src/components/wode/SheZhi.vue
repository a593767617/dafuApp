<template>
  <div class="shezhi">
       <div class="shouye" style="padding-bottom:0;">
       	<div class="wd_sz_1">
               <div class="wd_sz_1_1">设置</div>
               <div class="wd_sz_1_2"><img src="../../assets/images/fanhui_1.png">返回</div>
         	</div>
           <div class="wd_sz_2"><a href="">我的资料<img src="../../assets/images/icon1.png"></a></div>
           <router-link :to="{path:'/wode/dizhi'}">
             <div class="wd_sz_2"><a href="">收货地址<img src="../../assets/images/icon1.png"></a></div>
           </router-link>
           <div class="wd_sz_3">
           	<ul>
               	<li><a href="">意见反馈<img src="../../assets/images/icon1.png"></a></li>
                   <li><a href="">免责申明<img src="../../assets/images/icon1.png"></a></li>
                   <li><a href="">隐私条款<img src="../../assets/images/icon1.png"></a></li>
                   <li><a href="">清除缓存<img src="../../assets/images/icon1.png"></a></li>
               </ul>
           </div>
           <div class="wd_sz_4"><a href="">退出登录</a></div>
           <div class="wd_sz_5">
           	大富拍卖V1.0.0.1 <br>
               大富拍卖版权所有<br>
               联系电话：400-100-1010
               <br>
       	</div>
       </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
export default {
  name: 'shezhi',
  data () {
    return {
        list:""
    }
  },
  created() {

    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/product/by_category?id=3"

    this.$http.get(url1)
    .then((data)=>{
      this.list=data.body.data.data
      console.log(data.body.data.data)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/index.css");
  @import url("../../assets/css/common.css");
</style>
