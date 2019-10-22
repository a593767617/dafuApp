<template>
  <div class="jifenlist">
        <div class="shouye" style="padding-bottom:0;">
        	<div class="pma_woguanzhulist_1">
            	积分订单
                <div class="pma_woguanzhulist_1_left">
                	<img src="../../assets/images/fanhui_1.png" alt="" @click="$router.back(-1)"/>
                </div>
            </div>
            <div class="jfdd_1">
            	<ul>
                	<li><a href="" class="on">全部</a></li>
                   <!-- <li><a href="">未完成</a></li>
                    <li><a href="">已完成</a></li> -->
                    <div class="clearBoth"></div>
                </ul>
            </div>
            <div class="jfdd_2">
            	<ul>

                	<li v-for="item in list">
                    <router-link :to="{ path: '/wode/jidetail',query:{id:item.id}}">
                    	<div class="jfdd_2_1">兑换时间：{{item.create_time}}<span>待发货</span></div>
                        <div class="jfdd_2_2">
                        	<div class="jfdd_2_2_1"><img style="height:100%;" :src="item.snap_img"><br>实付：￥{{item.total_price}}</div>
                            <div class="jfdd_2_2_2">
                            	<div class="jfdd_2_2_2_1">{{item.snap_name}}</div>
                                <div class="jfdd_2_2_2_2"><a href="" class="wuliu">查看物流</a><a href="" class="shouhuo">确认收货</a></div>
                            </div>
                            <div class="clearBoth"></div>
                        </div>
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
  name: 'jifenlist',
  data () {
    return {
        list:""
    }
  },
  created() {

    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/orderintegral/paginate?status=0"

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
