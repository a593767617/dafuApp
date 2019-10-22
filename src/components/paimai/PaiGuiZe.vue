<template>
  <div class="paiguize">
    <div class="pm_zhobojian_paimaiguize">
    	<div class="pm_zhobojian_paimaiguize_up">
        	拍卖规则
            <div class="pm_zhobojian_paimaiguize_up_left">
            	<img src="../../assets/images/fanhui_1.png" alt="" @click="$router.back(-1)"/>
            </div>
        </div>
    	<div class="pm_zhobojian_paimaiguize_down">
        	图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑<br>
            <img src="../../assets/images/paimai_weikaishixx_14.gif" alt=""/>
        </div>
    </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
export default {
  name: 'paiguize',
  data () {
    return {
        detail:""
    }
  },
  created() {
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/aucterules"

    this.$http.get(url1)
    .then((data)=>{
      this.detail=data.body
      console.log(data.body)
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/index.css");
  @import url("../../assets/css/common.css");
</style>
