<template>
  <div class="paidetail">
        <div class="pm_weikaishixx">
        	<div class="pm_weikaishixx_1">
            	<div class="pm_weikaishixx_1_01">
                	<img :src="detail.main_img_url" alt=""/>
                </div>
            	<div class="pm_weikaishixx_1_02">
                	<img src="../../assets/images/paimai_weikaishixx_1.png" alt="" @click="$router.back(-1)"/>
                </div>
            	<div class="pm_weikaishixx_1_03">
                	<!-- <img src="../../assets/images/paimai_weikaishixx_11.png" alt=""/> -->
                </div>
            </div>
        	<div class="pm_yijieshuxx_2">
            	距离开始仅剩45分46秒
            </div>
        	<div class="pm_weikaishixx_3">
            	<div class="pm_weikaishixx_3_01">
                	{{detail.name}}
                </div>
            	<div class="pm_weikaishixx_3_02">
                	<span>10元起拍</span> &nbsp; 拍卖幅度 &nbsp;  ￥200
                </div>
            	<div class="pm_weikaishixx_3_03">
                	当前价 &nbsp; ￥<span>{{detail.price}}</span>
                </div>
            </div>
<!--        	<div class="pm_weikaishixx_4">
            	<div class="pm_weikaishixx_4_up">
                	<div class="pm_weikaishixx_4_up_1">
                    	<img src="images/paimai_weikaishixx_12.gif" alt=""/>
                    </div>
                	<div class="pm_weikaishixx_4_up_2">
                    	<h2>柠檬的小店</h2>精选店铺
                    </div>
                	<div class="pm_weikaishixx_4_up_3">
                    	<a href="#">关注店铺</a>
                    </div>
                	<div class="clearBoth"></div>
                </div>
            	<div class="pm_weikaishixx_4_down">
                	<div class="pm_weikaishixx_4_down_01">
                    	拍品评分 <span>4.8</span>
                    </div>
                	<div class="pm_weikaishixx_4_down_02">
                    	店铺等级 <span>V4</span>
                    </div>
                	<div class="pm_weikaishixx_4_down_03">
                    	消息回复率 <span>4.8</span>
                    </div>
                	<div class="clearBoth"></div>
                </div>
            </div> -->
            <div class="pm_yijieshuxx_01">
            	<div class="pm_yijieshuxx_01_left">
                	围观8979次
                </div>
            	<div class="pm_yijieshuxx_01_right">
                	出价10人
                </div>
            	<div class="clearBoth"></div>
            </div>
            <div class="pm_yijieshuxx_02">
            	<div class="pm_yijieshuxx_02_1">
                	<div class="pm_yijieshuxx_02_1_left">
                    	出价18次
                    </div>

                   <router-link :to="{ path: '/paimai/paiguize'}">
                     <div class="pm_yijieshuxx_02_1_right">
                       	拍卖规则
                       </div>
                   </router-link>

                	<div class="clearBoth"></div>
                </div>
            	<div class="pm_yijieshuxx_02_2">
                	<ul>
                		<li>
                        	<div class="pm_yijieshuxx_02_2_img">
                            	<img src="../../assets/images/paimai_weikaishixx_12.gif" alt=""/>
                            </div>
                        	<div class="pm_yijieshuxx_02_2_tt1">
                            	<h2>柠檬</h2>
                                出价￥3000，成交后赚￥100
                            </div>
                        	<div class="pm_yijieshuxx_02_2_tt2">
                            	<span>领先</span><br>
                                5/21 11:49:47
                            </div>
                        	<div class="clearBoth"></div>
                        </li>
                        <li>
                        	<div class="pm_yijieshuxx_02_2_img1">
                            	<img src="../../assets/images/paimai_weikaishixx_12.gif" alt=""/>
                            </div>
                        	<div class="pm_yijieshuxx_02_2_tt11">
                            	<h2>柠檬</h2>
                                出价￥3000，成交后赚￥100
                            </div>
                        	<div class="pm_yijieshuxx_02_2_tt22">
                            	<span>出局</span><br>
                                5/21 11:49:47
                            </div>
                        	<div class="clearBoth"></div>
                        </li>
                        <li>
                        	<div class="pm_yijieshuxx_02_2_img1">
                            	<img src="../../assets/images/paimai_weikaishixx_12.gif" alt=""/>
                            </div>
                        	<div class="pm_yijieshuxx_02_2_tt11">
                            	<h2>柠檬</h2>
                                出价￥3000，成交后赚￥100
                            </div>
                        	<div class="pm_yijieshuxx_02_2_tt22">
                            	<span>出局</span><br>
                                5/21 11:49:47
                            </div>
                        	<div class="clearBoth"></div>
                        </li>
                	</ul>
                </div>
            	<div class="pm_yijieshuxx_02_3">
                <router-link :to="{ path: '/paimai/paichujia',query:{id:detail.id}}"><a href="#">查看更多 &gt;</a></router-link>

                </div>
            </div>
        	<div class="pm_weikaishixx_5">
            	<div class="pm_weikaishixx_5_up">
                	<div class="pm_weikaishixx_5_up_left">
                    	拍卖说明
                    </div>
                	<div class="pm_weikaishixx_5_up_right">
                    	<a href="#">更多说明</a>
                    </div>
                	<div class="clearBoth"></div>
                </div>
            	<div class="pm_weikaishixx_5_down">
                	<img src="../../assets/images/paimai_weikaishixx_13.gif" alt=""/>
                </div>
            </div>
        	<div class="pm_weikaishixx_6">
            	<div class="pm_weikaishixx_6_up">
                	<ul>
                		<li>
                        	<a href="#" class="pm_weikaishixx_6_up_on">详情</a>
                        </li>
                        <li>
                        	<a href="#">评价</a>
                        </li>
                        <li>
                        	<a href="#">推荐</a>
                        </li>
                        <div class="clearBoth"></div>
                	</ul>
                </div>
            	<div class="pm_weikaishixx_6_down">
                	<ul>
                		<li>
                        	<span>货号</span> 12314562
                        </li>
                        <li>
                        	<span>款式</span> 12314562
                        </li>
                        <li>
                        	<span>尺寸</span> 12314562
                        </li>
                        <li>
                        	<span>重量</span> 12314562
                        </li>
                        <li>
                        	<span>产地</span> 12314562
                        </li>
                        <li>
                        	<span>完美程度</span> 12314562
                        </li>
                        <li>
                        	<span>其他</span> 12314562
                        </li>
                	</ul>
                </div>
            </div>
        	<div class="pm_weikaishixx_7">
            	图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑<br>
                <img src="../../assets/images/paimai_weikaishixx_14.gif" alt=""/>
            </div>
        	<div class="pm_yijieshuxx_03">
            	<!-- <div class="pm_yijieshuxx_03_left">
                	<ul>
                		<li>
                        	<a href="#"><img src="../../assets/images/paimai_yijieshu_04.png" alt=""/><br>店铺</a>
                        </li>
                        <li>
                        	<a href="#"><img src="../../assets/images/paimai_yijieshu_03.png" alt=""/><br>客服</a>
                        </li>
                        <div class="clearBoth"></div>
                	</ul>
                </div>
            	<div class="pm_yijieshuxx_03_right" style="background-color:#00c17b;">
                	支付保证金￥300
                </div> -->
            	<div class="clearBoth"></div>
            </div>
        </div>
        <!--出价-弹出-->
        <div class="zhibojian_chujia_tc" style="display:none;">
        	<div class="bj">
            </div>
        	<div class="zhibojian_chujia">
            	<div class="zhibojian_chujia_1">
                	宝贝很抢手 请立即出价
                    <div class="zhibojian_chujia_1_right">
                    	<img src="../../assets/images/paimai_zhibojian_shangpinxx_1.png" alt=""/>
                    </div>
                </div>
            	<div class="zhibojian_chujia_2">
                	领先价：<span>8976</span>
                </div>
            	<div class="zhibojian_chujia_3">
                	<span>
                    	<h2>￥<b>800</b></h2>
                    	加一手
                    </span>
                </div>
            	<div class="zhibojian_chujia_4">
                	<input type="checkbox"/> 出价即代表同意<span>《大富拍卖服务协议》</span>
                </div>
            	<div class="zhibojian_chujia_5">
                	<a href="#">确认</a>
                </div>
            	<div class="zhibojian_chujia_6">
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
$(function(){
		$(".pm_yijieshuxx_03_right").click(function(){
			$(".zhibojian_chujia_tc").show();
		});
		$(".zhibojian_chujia_1_right").click(function(){
			$(".zhibojian_chujia_tc").hide();
		});
	});
export default {
  name: 'paidetail',
  data () {
    return {
        detail:""
    }
  },
  created() {
    var id=this.$route.query.id
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/product"+"/"+id

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
