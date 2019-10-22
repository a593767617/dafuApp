<template>
  <div class="huodong">
     <div class="shouye">
     	<div class="shouye_1">
         	<div class="shouye_1_left">
             	<ul>
             		<li>
                     	<a href="#" class="shouye_1_left_on">活动 <img src="../../assets/images/shouye_1.png" alt=""/></a>
                     </li>
                     <div class="clearBoth"></div>
             	</ul>
             </div>
         	<div class="shouye_1_right">
             	<!-- <img src="../../assets/images/shouye_11.png" alt=""/> -->
             </div>
         	<div class="clearBoth"></div>
         </div>
     	<div class="shouye_3">
         	<img src="../../assets/images/shouye_12.png" alt=""/>
         </div>
     	<div class="huodong">
         	<div class="huodong_1">
             	活动专区
             </div>
         	<div class="huodong_2">
             	<ul>
             		<!-- <li>
                     	<a href="#"><img src="../../assets/images/huodong_1.gif" alt=""/></a>
                     </li>
                     <li>
                     	<a href="#"><img src="../../assets/images/huodong_11.gif" alt=""/></a>
                     </li> -->
                     <li>
                       <router-link :to="{path:'/huodong/jingxing'}">
                         <a href="#"><img src="../../assets/images/huodong_12.gif" alt=""/></a>
                       </router-link>
                     </li>
             	</ul>
             </div>
         </div>
     </div>
     <div id="bottom">
     	<div class="bottom_1">
         	<ul>
         		<li>
                  <router-link to="/index"><a href="#" ><img src="../../assets/images/bottom_1.png" alt=""/><br>直播</a></router-link>

                 </li>
                 <li>
                   <router-link to="/paimai/paimaiindex"><a href="#" ><img src="../../assets/images/bottom_12.png" alt=""/><br>拍卖</a></router-link>

                 </li>
                 <div class="clearBoth"></div>
         	</ul>
         </div>
     	<div class="bottom_2">
        		<router-link to="/huodong/huodong">
        		  <a href="#">
        		        <div class="bottom_2_img">
        		           <img src="../../assets/images/bottom_18.png" alt=""/>
        		        </div>
        		        <div class="bottom_2_tt">
        		        	活动
        		        </div>
        		    </a>
        		</router-link>
         </div>
     	<div class="bottom_1">
         	<ul>
         		<li>
                  <router-link to="/shangcheng"><img src="../../assets/images/bottom_12.png" alt=""/><br>商城</router-link>

                 </li>
                 <li>
                 	<router-link to="/wode/wode"><a href="#" ><img src="../../assets/images/bottom_13.png" alt=""/><br>我的</a></router-link>
                 </li>
                 <div class="clearBoth"></div>
         	</ul>
         </div>
         <div class="clearBoth"></div>
     </div>
  </div>
</template>

<script>
  import tools from "../../assets/js/jquery-1.11.2.min.js"
  import common from "../../assets/js/common.js"
export default {
  name: 'huodong',
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
