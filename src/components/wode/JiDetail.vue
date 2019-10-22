<template>
  <div class="jidetail">
        <div class="shouye" style="padding-bottom:0;">
        	<div class="pma_woguanzhulist_1">
            	订单详情
                <div class="pma_woguanzhulist_1_left">
                	<img src="../../assets/images/fanhui_1.png" alt="" @click="$router.back(-1)"/>
                </div>
            </div>
            <div class="wode_wuliulist_1">
            	<div class="wode_ddxx_1_1"><img src="../../assets/images/icon24.png"></div>
                <div class="wode_ddxx_1_2">
                	<div class="wode_ddxx_1_2_1"><span>{{detail.snap_address.name}}</span>    {{detail.snap_address.mobile}}</div>
                    <div class="wode_ddxx_1_2_2">{{detail.snap_address.province}}{{detail.snap_address.city}}{{detail.snap_address.country}}{{detail.snap_address.detail}}</div>
            	</div>
                <div class="clearBoth"></div>
          	</div>
            <div class="wode_wuliulist_1">
            	<div class="wode_ddxx_2_1">
                	<div class="wode_ddxx_2_1_1">柠檬的小店 ></div>
                    <div class="wode_ddxx_2_1_2">已发货</div>
                    <div class="clearBoth"></div>
                </div>
                <div class="wode_ddxx_2_2">
                	<div class="wode_ddxx_2_2_1"><img :src="detail.snap_img"></div>
                    <div class="wode_ddxx_2_2_2">
                    	<div class="wode_ddxx_2_2_2_1">{{detail.snap_name}}</div>
                        <div class="wode_ddxx_2_2_2_2">
                        	<div class="wode_ddxx_2_2_2_2_1">实付<span>￥{{detail.total_price}}</span></div>
                            <div class="clearBoth"></div>
                        </div>
                    </div>
                    <div class="clearBoth"></div>
                </div>
            </div>
            <div class="wode_wuliulist_1">
                <div class="wode_ddxx_3" style="border-bottom:none; margin-bottom:0; padding-bottom:0;">
                	<div class="wode_ddxx_3_1">运费</div>
                    <div class="wode_ddxx_3_2">免运费</div>
                    <div class="clearBoth"></div>
                </div>
            </div>
            <div class="wode_ddxx_4">
            	<div class="wode_ddxx_4_1">订单信息</div>
                <div class="wode_ddxx_4_2">
                	<ul>
                    	<li>
                        	<div class="wode_ddxx_4_2_1">订单编号：</div>
                            <div class="wode_ddxx_4_2_2">{{detail.order_no}}<span>复制</span></div>
                            <div class="clearBoth"></div>
                        </li>
                        <li>
                        	<div class="wode_ddxx_4_2_1">支付宝交易号：</div>
                            <div class="wode_ddxx_4_2_2">1225455414555252222222</div>
                            <div class="clearBoth"></div>
                        </li>
                        <li>
                        	<div class="wode_ddxx_4_2_1">创建时间：</div>
                            <div class="wode_ddxx_4_2_2">{{detail.create_time}}</div>
                            <div class="clearBoth"></div>
                        </li>
                        <li>
                        	<div class="wode_ddxx_4_2_1">付款时间：</div>
                            <div class="wode_ddxx_4_2_2">2019-4-8 11:59:45</div>
                            <div class="clearBoth"></div>
                        </li>
                        <li>
                        	<div class="wode_ddxx_4_2_1">发货时间：</div>
                            <div class="wode_ddxx_4_2_2">{{detail.update_time}}</div>
                            <div class="clearBoth"></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="wode_ddxx_5">
            	<a href="" class="wode_ddxx_5_1">查看物流</a>
                <a href="" class="wode_ddxx_5_2">确认收货</a>
            </div>
        </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
export default {
  name: 'jidetail',
  data () {
    return {
        detail:""
    }
  },
  created() {

    var id=this.$route.query.id
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/orderintegral"+"/"+id

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
