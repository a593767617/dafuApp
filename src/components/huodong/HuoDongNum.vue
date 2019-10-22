<template>
  <div class="jingxing">
     <div class="hd_kaixinjianlou">
     	<div class="hd_kaixinjianlou_1">
         	<div class="hd_kaixinjianlou_1_left">
             	<img src="../../assets/images/fanhui_1.png" alt="" @click="$router.back(-1)"/> 开心捡漏
             </div>
         	<div class="hd_kaixinjianlou_1_right">
             	<img src="../../assets/images/dianpu_22.png" alt=""/>
             </div>
         	<div class="clearBoth"></div>
         </div>
     	<div class="hd_kaixinjianlou_2">
         	<img src="../../assets/images/kaixinjianlou_1.gif" alt=""/>
             <span>中奖记录</span>
         </div>
     	<div class="hd_kaixinjianlou_3">
         	<ul>
         		<li>
              <router-link :to="{path:'/huodong/jingxing'}">
                <a href="#" class="hd_kaixinjianlou_3_on">正在进行</a>
              </router-link>
                 	
                 </li>
                 <li>
                   <router-link :to="{path:'/huodong/jijiang'}">
                    <a href="#">即将开始</a>
                   </router-link>
                 	
                 </li>
                 <div class="clearBoth"></div>
         	</ul>
         </div>
     	<div class="hd_kaixinjianlou_4">
         	<ul>
         		<li>
                 	<a href="#">
                         <div class="hd_kaixinjianlou_4_img">
                         	<img src="../../assets/images/paimai_chanpin_1.gif" alt=""/>
                         </div>
                         <div class="hd_kaixinjianlou_4_tt">
                         	<div class="hd_kaixinjianlou_4_tt_1">
                             	商品标题商品标题商品标
     题商品标题
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_2">
                             	<div class="hd_kaixinjianlou_4_tt_2_left">
                                 	<span></span>
                                 </div>
                             	<div class="hd_kaixinjianlou_4_tt_2_right">
                                 	500人参与
                                 </div>
                             	<div class="clearBoth"></div>
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_3">
                             	倒计时：1时52分45秒
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_4">
                             	<div class="hd_kaixinjianlou_4_tt_4_left">
                                 	￥300
                                 </div>
                             	<div class="hd_kaixinjianlou_4_tt_4_right">
                                 	<span>立即参与</span>
                                 </div>
                             	<div class="clearBoth"></div>
                             </div>
                         </div>
                         <div class="clearBoth"></div>
                     </a>
                 </li>
                 <li>
                 	<a href="#">
                         <div class="hd_kaixinjianlou_4_img">
                         	<img src="../../assets/images/paimai_chanpin_1.gif" alt=""/>
                         </div>
                         <div class="hd_kaixinjianlou_4_tt">
                         	<div class="hd_kaixinjianlou_4_tt_1">
                             	商品标题商品标题商品标
     题商品标题
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_2">
                             	<div class="hd_kaixinjianlou_4_tt_2_left">
                                 	<span></span>
                                 </div>
                             	<div class="hd_kaixinjianlou_4_tt_2_right">
                                 	500人参与
                                 </div>
                             	<div class="clearBoth"></div>
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_3">
                             	倒计时：1时52分45秒
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_4">
                             	<div class="hd_kaixinjianlou_4_tt_4_left">
                                 	￥300
                                 </div>
                             	<div class="hd_kaixinjianlou_4_tt_4_right">
                                 	<span>立即参与</span>
                                 </div>
                             	<div class="clearBoth"></div>
                             </div>
                         </div>
                         <div class="clearBoth"></div>
                     </a>
                 </li>
         	</ul>
         </div>
     </div>
  </div>
</template>

<script>
  import tools from "../../assets/js/jquery-1.11.2.min.js"
  import common from "../../assets/js/common.js"
export default {
  name: 'jingxing',
  data () {
    return {
       body:""
    }
  },
  created() {
//     var url1="http://dfpmnews.we-fs.net/index.php/api/v1/integral/categoryall?id=0"
//
//     this.$http.get(url1)
//     .then((data)=>{
//       this.body=data.body.data
//       console.log(this.body)
//     })
  }

}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/index.css");
  @import url("../../assets/css/common.css");
  @import url("../../assets/css/huodong.css");
</style>
