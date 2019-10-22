<template>

  <div class="index">

     <div class="shouye">
     	<div class="shouye_1">
         	<div class="shouye_1_left">
             	<ul>
             		<li>
                     	<a href="#" class="shouye_1_left_on">直播 <img src="../assets/images/shouye_1.png" alt=""/></a>
                     </li>
                     <!-- <li>
                     	<a href="#">关注</a>
                     </li> -->
                     <div class="clearBoth"></div>
             	</ul>
             </div>
         	<div class="shouye_1_right">
             	<!-- <img src="../assets/images/shouye_11.png" alt=""/> -->
             </div>
         	<div class="clearBoth"></div>
         </div>
     	<div class="shouye_2">
         	<ul>
             <li>
              <a href="#" class="shouye_2_on">热播</a>
             </li>
             <!-- <li>
              <a href="#">翡翠</a>
             </li>
             <li>
              <a href="#">玛瑙</a>
             </li>
             <li>
              <a href="#">其他</a>
             </li> -->
             <div class="clearBoth"></div>
         	</ul>
         </div>
     	<div class="shouye_3">
         	<!-- <img src="../assets/images/shouye_12.png" alt=""/> -->
          <div class="swiper-container" style="">
               <div class="swiper-wrapper">
                 <div class="swiper-slide">
                   <img src="http://dfpmnews.we-fs.net/uploads/images/20190828/639e88ac591ffc9c87e93287b2b8c68b.jpg" alt="" width="100%">
                 </div>
                 <div class="swiper-slide">
                   <img src="http://dfpmnews.we-fs.net/uploads/images/20190828/7f5ec9c3261cd280f5e41f9c0d3b46d0.jpg" alt="" width="100%">
                 </div>
                <!-- <div v-for="(item, index) in body" :key="index" class="swiper-slide">
                   <img :src="item.img_id" alt="" width="100%">
                 </div> -->
               </div>
               <div class="swiper-pagination"></div>
             </div>
      </div>
     	<div class="shouye_4">
         	<ul>

                 <li>
                 	<a href="#">
                     	<div class="shouye_4_img">
                        <img src="../assets/images/shouye_13.png" alt=""/>
                      </div>
                     	<!-- <div class="shouye_4_tt1">
                         	<div class="shouye_4_tt1_left">
                             	直播中
                             </div>
                         	<div class="shouye_4_tt1_right">
                             	1123人观看
                             </div>
                         	<div class="clearBoth"></div>
                         </div>
                     	<div class="shouye_4_tt2">
                         	直播标题阿拉善玛瑙
                         </div>
                     	<div class="shouye_4_tt3">
                         	<div class="shouye_4_tt3_left">
                             	<img src="../assets/images/shouye_14.png" alt=""/>
                             </div>
                         	<div class="shouye_4_tt3_right">
                             	昵称昵称<br>
                                 <span>广东 佛山</span>
                             </div>
                         	<div class="clearBoth"></div>
                         </div> -->
                     </a>
                 </li>
         	</ul>
         </div>
     </div>
     <div id="bottom">
     	<div class="bottom_1">
         	<ul>
         		<li>
                  <router-link to="/index"><a href="#" class="bottom_on"><img src="../assets/images/bottom_14.png" alt=""/><br>直播</a></router-link>

                 </li>
                 <li>
                   <router-link to="/paimai/paimaiindex"><a href="#"><img src="../assets/images/bottom_11.png" alt=""/><br>拍卖</a></router-link>

                 </li>
                 <div class="clearBoth"></div>
         	</ul>
         </div>
     	<div class="bottom_2">
        		<router-link to="/huodong/huodong">
        		  <a href="#">
        		        <div class="bottom_2_img">
        		           <img src="../assets/images/bottom_18.png" alt=""/>
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
                  <router-link to="/shangcheng"><img src="../assets/images/bottom_12.png" alt=""/><br>商城</router-link>

                 </li>
                 <li>
                 	<router-link to="/wode/wode"><a href="#" ><img src="../assets/images/bottom_13.png" alt=""/><br>我的</a></router-link>
                 </li>
                 <div class="clearBoth"></div>
         	</ul>
         </div>
         <div class="clearBoth"></div>
     </div>
  </div>
</template>

<script>
  import tools from "../assets/js/jquery-1.11.2.min.js"
  import common from "../assets/js/common.js"

  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'index',
  data () {
    return {
       body:""
    }
  },
  created() {
    // axios.get("http://dfpmnews.we-fs.net/index.php/api/v1/banner/1").then((response)=>{
    //                 console.log(response.data)
    //             }).catch((response)=>{
    //                 console.log(response)
    //             })
      // this.$http.post('http://dfpmnews.we-fs.net/index.php/api/v1/token/sendsms',{phone:18631640995},{emulateJSON:true}).then(function(res){
      //                     document.write(res.body);    
      //                 },function(res){
      //                     console.log(res.status);
      //                 });          

    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/banner/1"

    this.$http.get(url1)
    .then((data)=>{
      this.body=data.body.items
      console.log(this.body)
    })
  },

  mounted(){
          var mySwiper = new Swiper('.swiper-container', {
            autoplay:3000,
            speed:300,
            loop:true,
            pagination : '.swiper-pagination',
            onClick: function(swiper){
              alert('你点了Swiper');
              alert(mySwiper.realIndex);     //当前索引
            }
          })
  }


}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../assets/css/index.css");
  @import url("../assets/css/common.css");
</style>
