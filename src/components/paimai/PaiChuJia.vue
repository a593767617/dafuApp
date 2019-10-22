<template>
  <div class="paichujia">
    <div class="pm_zhibojian_chujialiebiao">
    	<div class="pm_zhibojian_chujialiebiao_up">
        	出价7次
            <div class="pm_zhibojian_chujialiebiao_up_left">
            	<img src="../../assets/images/fanhui_1.png" alt="" @click="$router.back(-1)"/>
            </div>
        </div>
    	<div class="pm_zhibojian_chujialiebiao_down">
        	<ul>
                <li v-for="item in list">
                    <div class="pm_yijieshuxx_02_2_img1">
                        <img :src="item.avartar" alt=""/>
                    </div>
                    <div class="pm_yijieshuxx_02_2_tt11">
                        <h2>{{item.name}}</h2>
                        出价￥{{item.price}}，成交后赚￥{{item.earn}}
                    </div>
                    <div class="pm_yijieshuxx_02_2_tt22">
                        <span>出局</span><br>
                        {{item.create_time}}
                    </div>
                    <div class="clearBoth"></div>
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
  name: 'paichujia',
  data () {
    return {
        list:""
    }
  },
  created() {
    var id=this.$route.query.id
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/product/bidde"

    this.$http.get(url1,{params:{id:35}})
    .then((data)=>{
      this.list=data.body.data.data
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
