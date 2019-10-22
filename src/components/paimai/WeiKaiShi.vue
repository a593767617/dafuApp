<template>
  <div class="weikaishi">
        <div class="shouye">
        	<div class="shouye_1">
            	<div class="shouye_1_left">
                	<ul>
                		<li>
                        	<router-link to="/paimai/paimaiindex"><a href="">拍卖中</a></router-link>
                        </li>
                        <li>
                          <router-link to="/paimai/weikaishi"><a href="#" class="shouye_1_left_on">未开始 <img src="../../assets/images/shouye_1.png" alt=""/></a></router-link>

                        </li>
                        <li>
                        	<router-link to="/paimai/jieshu"><a href="">已结束</a></router-link>
                        </li>
                        <div class="clearBoth"></div>
                	</ul>
                </div>
            	<div class="shouye_1_right">
                	<!-- <img src="../../assets/images/shouye_11.png" alt=""/> -->
                </div>
            	<div class="clearBoth"></div>
            </div>
        	<!-- <div class="pmweikaishi_1">
            	<div class="wrapper wrapper01" id="retr">
                    <div class="scroller">
                        <ul class="clearfix">
                            <li><a href="#"><span>10:00</span><br>即将开场</a></li>
                            <li><a href="#"><span>10:00</span><br>艺术精品</a></li>
                            <li><a href="#"><span>10:00</span><br>艺术精品</a></li>
                            <li><a href="#"><span>10:00</span><br>艺术精品</a></li>
                            <li><a href="#"><span>10:00</span><br>艺术精品</a></li>
                        </ul>
                    </div>
                </div>
            </div> -->
        	<div class="pmweikaishi_2">
            	距离开始仅剩<span>32</span>分<span>32</span>秒
            </div>
        	<div class="pmweikaishi_3">
            	<ul>

            	      <li v-for="item in list" >
            	        <router-link :to="{ path: '/paimai/paidetail',query:{id:item.id}}">
            	      	<div class="pmweikaishi_3_img">
            	          	<img style="height: 100%;" :src="item.main_img_url"/>
            	          </div>
            	      	<div class="pmweikaishi_3_tt">
            	          	<div class="pmweikaishi_3_tt_1">
            	              	{{item.name}}
            	              </div>
            	          	<div class="pmweikaishi_3_tt_2">
            	              	当前价 <span>￥{{item.price}}</span>
            	              </div>
            	          	<div class="pmweikaishi_3_tt_3">
            	              	<a href="#">拍卖中</a>
            	              </div>
            	          </div>
            	      	<div class="clearBoth"></div>
            	        </router-link>
            	      </li>

            	</ul>
            </div>
        </div>
        <div id="bottom">
        	<div class="bottom_1">
            	<ul>
            		<li>
                     <router-link to="/index"><a href="#" ><img src="../../assets/images/bottom_1.png" alt=""/><br>直播</a></router-link>

                    </li>
                    <li>
                      <router-link to="/paimai/paimaiindex"><a href="#" class="bottom_on"><img src="../../assets/images/bottom_15.png" alt=""/><br>拍卖</a></router-link>

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
  import navbarscroll from "../../assets/js/navbarscroll.js"
import iscroll from "../../assets/js/iscroll.js"
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
$(function(){
    	$('.wrapper').navbarscroll();
    });
// history.go(0)
export default {
  name: 'weikaishi',
  data () {
    return {
        list:""
    }
  },

  created() {

    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/product/by_category?id=2"

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
