<template>
  <div class="dizhi">
       <div class="shouye" style="padding-bottom:0;">
       	<div class="wd_sz_1" style="border-bottom:none;">
               <div class="wd_sz_1_1">收货地址</div>
               <div class="wd_sz_1_2"><img src="../../assets/images/fanhui_1.png" @click="$router.back(-1)">返回</div>
               <div class="wd_sz_1_3"><a href="">添加</a></div>
         	</div>
           <div class="shdz_1"><img src="../../assets/images/icon31.png"><br>暂无收货地址</div>
       </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
export default {
  name: 'dizhi',
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
