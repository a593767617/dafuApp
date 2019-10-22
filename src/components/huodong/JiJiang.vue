<template>
  <div class="jijiang">
     <div class="hd_kaixinjianlou">
     	<div class="hd_kaixinjianlou_1">
         	<div class="hd_kaixinjianlou_1_left">
            <router-link :to="{path:'/huodong/huodong'}">
              <img src="../../assets/images/fanhui_1.png" alt=""/>
            </router-link>
             	 开心捡漏
             </div>
         	<div class="hd_kaixinjianlou_1_right">
             	<!-- <img src="../../assets/images/dianpu_22.png" alt=""/> -->
             </div>
         	<div class="clearBoth"></div>
         </div>
     	<div class="hd_kaixinjianlou_2">
         	<img src="../../assets/images/kaixinjianlou_1.gif" alt=""/>
             <!-- <span>中奖记录</span> -->
         </div>
     	<div class="hd_kaixinjianlou_3">
         	<ul>
         		<li>
         		  <router-link :to="{path:'/huodong/jingxing'}">
         		    <a href="#" >正在进行</a>
         		  </router-link>

         		     </li>
         		     <li>
         		       <router-link :to="{path:'/huodong/jijiang'}">
         		        <a href="#" class="hd_kaixinjianlou_3_on">即将开始</a>
         		       </router-link>

         		     </li>
                 <div class="clearBoth"></div>
         	</ul>
         </div>
     	<div class="hd_kaixinjianlou_4">
         	<ul>
         		<li v-for="item in body">
              <router-link :to="{ path: '/huodong/jijiangdetail',query:{id:item.id}}">
                 	<a href="#">
                         <div class="hd_kaixinjianlou_4_img">
                         	<img style="height:100%;" :src="item.main_img_url" alt=""/>
                         </div>
                         <div class="hd_kaixinjianlou_4_tt">
                         	<div class="hd_kaixinjianlou_4_tt_1">
                             	{{item.name}}
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_2">
                             	<div class="hd_kaixinjianlou_4_tt_21"></div>
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_3">
                             	开始时间：1时52分45秒{{item.start_time}}
                             </div>
                         	<div class="hd_kaixinjianlou_4_tt_4">
                             	<div class="hd_kaixinjianlou_4_tt_4_left">
                                 	￥{{item.price}}
                                 </div>
                             	<div class="hd_kaixinjianlou_4_tt_4_right">
                                 	<span>即将开始</span>
                                 </div>
                             	<div class="clearBoth"></div>
                             </div>
                         </div>
                         <div class="clearBoth"></div>
                     </a>
                     </router-link>
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
  name: 'jijiang',
  data () {
    return {
       body:""
    }
  },
  created() {
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/leakcollecte/categoryall?id=2"

    this.$http.get(url1)
    .then((data)=>{
      this.body=data.body.data
      console.log(this.body)

    })
  }

}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/index.css");
  @import url("../../assets/css/common.css");
  @import url("../../assets/css/huodong.css");
</style>
