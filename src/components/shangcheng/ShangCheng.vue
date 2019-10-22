<template>
  <div class="shangcheng">
     <div class="shouye">
     	<div class="shouye_1">
         	<div class="shouye_1_left">
             	<ul>
             		<li>
                     	<a href="#" class="shouye_1_left_on" style="font-weight:bold;">商城 <img src="../../assets/images/shouye_1.png" alt=""/></a>
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
     	<div class="shangcheng_1">
         	<!-- <ul>
             	<li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <li><a href=""><img src="../../assets/images/paimai_chanpin_1.gif"><br>分类名称</a></li>
                 <div class="clearBoth"></div>
             </ul> -->
         </div>
       	<div class="shangcheng_2">全部拍品<br><img src="../../assets/images/line.gif"></div>
         <!-- <div class="shangcheng_3"><img src="../../assets/images/kaixinjianlou_1.gif"></div> -->
         <div class="shangcheng_4">
         	<ul>
             	<li v-for="item in body">
                    <router-link :to="{ path: '/shangcheng/shangchengxiangqing',query:{id:item.id}}">
                      <div class="shangcheng_4_1"><img style="border-radius: 10px;" :src="item.main_img_url"></div>
                      <div class="shangcheng_4_2">{{item.name}}</div>
                      <div class="shangcheng_4_3"><span>{{item.price}}</span>积分</div>
                    </router-link>

              </li>
                 <div class="clearBoth"></div>
             </ul>
         </div>
     </div>


    <div id="bottom">
     	<div class="bottom_1">
         	<ul>
         		<li>
                  <router-link to="/index"><a href="#"><img src="../../assets/images/bottom_1.png" alt=""/><br>直播</a></router-link>

                 </li>
                 <li>
                   <router-link to="/paimai/paimaiindex"><a href="#"><img src="../../assets/images/bottom_11.png" alt=""/><br>拍卖</a></router-link>

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
                  <router-link to="/shangcheng"><a href="#" class="bottom_on"><img src="../../assets/images/bottom_16.png" alt=""/><br>商城</a></router-link>

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
  name: 'shangcheng',
  data () {
    return {
       body:""
    }
  },
  created() {
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/integral/categoryall?id=0"

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
</style>
