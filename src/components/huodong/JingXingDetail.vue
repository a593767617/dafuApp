<template>
  <div class="jingxingdetail">
     <div class="pm_weikaishixx">
     	<div class="pm_weikaishixx_1">
     	   	<div class="pm_weikaishixx_1_01">
     	       	<img style="height:100%;" :src="detail.main_img_url" alt=""/>
     	       </div>
     	   	<div class="pm_weikaishixx_1_02">
     	       	<img src="../../assets/images/paimai_weikaishixx_1.png" alt="" @click="$router.back(-1)"/>
     	       </div>
     	   	<div class="pm_weikaishixx_1_03">
     	       	<img src="../../assets/images/paimai_weikaishixx_11.png" alt=""/>
     	       </div>
     	   </div>
     	<div class="kxjl_prodetal_1">
         	距离开始仅剩45分46秒
         </div>
     	<div class="pm_weikaishixx_3">
         	<div class="pm_weikaishixx_3_01">
             	{{detail.name}}
             </div>
         	<div class="kxjl_prodetal_2">
             	开奖时间：{{detail.start_time}}
             </div>
         	<div class="pm_weikaishixx_3_03">
             	￥<span>{{detail.price}}</span>
             </div>
         </div>
     <div class="kxjl_prodetal_cyrylb_1">
         	<div class="kxjl_prodetal_cyrylb_1_1">500人参与</div>
             <div class="kxjl_prodetal_cyrylb_1_2">
             	<ul>

                     <li v-for="item in list">
                     	<div class="kxjl_prodetal_cyrylb_1_2_1"><img :src="item.avartar"></div>
                         <div class="kxjl_prodetal_cyrylb_1_2_2"><h2>{{item.name}}</h2>{{item.create_time}}</div>
                         <div class="kxjl_prodetal_cyrylb_1_2_3">支付成功</div>
                         <div class="clearBoth"></div>
                     </li>
                     
                 </ul>
             </div>
             <div class="kxjl_prodetal_cyrylb_1_3"><a href="">查看更多</a></div>
         </div>
     	<div class="pm_weikaishixx_6">
         	<div class="pm_weikaishixx_6_up">
             	<ul>
             		<li>
                     	<a href="#" class="pm_weikaishixx_6_up_on">抽奖规则</a>
                     </li>
                     <li>
                     	<a href="#">奖品介绍</a>
                     </li>
                     <div class="clearBoth"></div>
             	</ul>
             </div>
         </div>
     	<div class="pm_weikaishixx_7">
         	图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑<br>
             <img src="../../assets/images/paimai_weikaishixx_14.gif" alt=""/>
         </div>
     	<div class="kxjl_prodetal_3">立即支付</div>
     </div>
  </div>
</template>

<script>
  import tools from "../../assets/js/jquery-1.11.2.min.js"
  import common from "../../assets/js/common.js"
export default {
  name: 'jingxingdetail',
  data () {
    return {
       detail:"",
       list:""
    }
  },
  created() {
    var id=this.$route.query.id
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/leakcollecte/one"+"/"+id
    var url2="http://dfpmnews.we-fs.net/index.php/api/v1/leakcollecte/namelistall"
    this.$http.get(url1)
    .then((data)=>{
      this.detail=data.body
      // console.log(data.body)
    })
    this.$http.get(url2,{params:{id:id}})
    .then((data)=>{
      this.list=data.body.data
      console.log(data.body.data)
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
