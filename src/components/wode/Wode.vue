<template>
  <div class="wode">
        <div class="shouye">
        	<div class="wode_1">
            	<div class="wode_1_1">我的
              <router-link :to="{path:'/wode/shezhi'}"><img src="../../assets/images/icon3.png" ></router-link>
              </div>
                <div class="wode_1_2">
                  <!-- <div class="wode_1_2_1"><span>柠檬</span><br><img src="../../assets/images/icon4.png"><a href="">个人资料></a></div> -->
           	  	  <div class="wode_1_2_1"><span>柠檬</span></div>
                    <div class="wode_1_2_2"><img src="../../assets/images/paimai_weikaishixx_12.gif"></div>
                    <div class="clearBoth"></div>
            </div>
                <div class="wode_1_3">
                	<div class="wode_1_3_1"><span>20</span><br>我的积分</div>
                    <div class="wode_1_3_1"><span>20</span><br>我的余额</div>
                    <div class="wode_1_3_2" v-on:click="greet"><a>签到</a></div>
                    <div class="clearBoth"></div>
                </div>
                <!-- <div class="wode_1_4"><img src="../../assets/images/icon5.png">申请入驻商家</div> -->
            </div>
            <div class="wode_2">
            	<!-- <div class="wode_2_1">
                	<div class="wode_2_1_1"><img src="../../assets/images/icon6.png">我的订单</div>
                    <div class="wode_2_1_2"><a href="">查看所有订单></a></div>
                    <div class="clearBoth"></div>
                </div>
                <div class="wode_2_2">
                	<ul>
                    	<li><a href=""><img src="../../assets/images/icon13.png"><br>待付款</a></li>
                        <li><a href=""><img src="../../assets/images/icon14.png"><br>待发货</a></li>
                        <li><a href=""><img src="../../assets/images/icon15.png"><br>待收货</a></li>
                        <li><a href=""><img src="../../assets/images/icon16.png"><br>待评价</a></li>
                        <li><a href=""><img src="../../assets/images/icon17.png"><br>已完成</a></li>
                        <div class="clearBoth"></div>
                    </ul>
                </div> -->
            </div>
            <div class="wode_3">
            	<ul>
                	<!-- <li>
                    	<a href="">
                    	<div class="wode_3_1"><img src="../../assets/images/icon7.png">我的拍卖</div>
                        <div class="wode_3_2"><img src="../../assets/images/icon1.png"></div>
                        <div class="clearBoth"></div>
                        </a>
                    </li> -->
                    <li>
                      <router-link :to="{path:'/wode/jifenlist'}">
                        <a href="">
                        <div class="wode_3_1"><img src="../../assets/images/icon8.png">积分订单</div>
                          <div class="wode_3_2"><img src="../../assets/images/icon1.png"></div>
                          <div class="clearBoth"></div>
                          </a>
                      </router-link>

                    </li>

                    <!-- <li style="border-bottom:none; margin-bottom:0;">
                    	<a href="">
                    	<div class="wode_3_1"><img src="../../assets/images/icon9.png">我的众筹</div>
                        <div class="wode_3_2"><img src="../../assets/images/icon1.png"></div>
                        <div class="clearBoth"></div>
                        </a>
                    </li> -->
                </ul>
            </div>
           <!-- <div class="wode_3">
            	<ul>
                	<li>
                    	<a href="">
                    	<div class="wode_3_1"><img src="../../assets/images/icon10.png">我的保证金</div>
                        <div class="wode_3_2"><img src="../../assets/images/icon1.png"></div>
                        <div class="clearBoth"></div>
                        </a>
                    </li>
                    <li>
                    	<a href="">
                    	<div class="wode_3_1"><img src="../../assets/images/icon11.png">关于我们</div>
                        <div class="wode_3_2"><img src="../../assets/images/icon1.png"></div>
                        <div class="clearBoth"></div>
                        </a>
                    </li>
                    <li style="border-bottom:none; margin-bottom:0;">
                    	<a href="">
                    	<div class="wode_3_1"><img src="../../assets/images/icon12.png">系统消息</div>
                        <div class="wode_3_2"><img src="../../assets/images/icon1.png"></div>
                        <div class="clearBoth"></div>
                        </a>
                    </li>
                </ul>
            </div> -->
            <div style="background-color:#f7f8fa; height:3rem;"></div>
        </div>
        <div id="bottom">
        	<div class="bottom_1">
            	<ul>
            		<li>
                     <router-link to="/index"><a href="#" ><img src="../../assets/images/bottom_1.png" alt=""/><br>直播</a></router-link>

                    </li>
                    <li>
                      <router-link to="/paimai/paimaiindex"><a href="#" ><img src="../../assets/images/bottom_11.png" alt=""/><br>拍卖</a></router-link>

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
                      <router-link to="/wode/wode"><a href="#" class="bottom_on"><img src="../../assets/images/bottom_17.png" alt=""/><br>我的</a></router-link>
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
  name: 'wode',
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
  ,
  methods:{
	  greet:function(){
		  alert("签到成功")
	  }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/index.css");
  @import url("../../assets/css/common.css");
</style>
