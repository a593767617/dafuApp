<template>
  <div class="shangchengxiangqing">
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
        	<div class="pm_weikaishixx_3">
            	<div class="pm_weikaishixx_3_01">
                	{{detail.name}}
                </div>
            	<div class="pm_weikaishixx_3_03">
                	<span>{{detail.price}}</span>积分
                </div>
            </div>
        	<div class="pm_weikaishixx_7">
            	图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑图文自由编辑<br>
                <img :src="detail.main_img_url" alt=""/>
            </div>

        	<div class="kxjl_prodetal_3" v-on:click="greet">立即兑换</div>
        </div>
  </div>
</template>

<script>
import tools from "../../assets/js/jquery-1.11.2.min.js"
import common from "../../assets/js/common.js"
export default {
  name: 'shangchengxiangqing',
  data () {
    return {
        detail:""
    }
  },
  created() {
    var id=this.$route.query.id
    var url1="http://dfpmnews.we-fs.net/index.php/api/v1/integral/one"+"/"+id

    this.$http.get(url1)
    .then((data)=>{
      console.log(data.body);
      this.detail=data.body
    })
  },
  methods:{

    greet: function (event) {
    // var procuctInfo = [{product_id:35,count:1,address_id:3}];
    var products=[{product_id:this.detail.id,count:1,address_id:3}];
    			// for(let i=0;i<procuctInfo.length;i++){
    			// 	products.push({
    			// 		product_id:procuctInfo[i].product_id,
    			// 		count:procuctInfo[i].count,
    			// 		address_id:procuctInfo[i].address_id
    			// 	});
    			// }
    // data:{products:products}
    // console.log(products)
    // return;
		this.$http.post('http://dfpmnews.we-fs.net/index.php/api/v1/order_integral',{products:products},{emulateJSON:true}).then(function(res){
		                    console.log(res.body);                      
                        if(res.body.pass==true){
                          alert("兑换成功")
                        }
		                },function(res){
		                    console.log(res.status);
                        alert("兑换失败")
		                });
         // alert("兑换成功")
        }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
  @import url("../../assets/css/index.css");
  @import url("../../assets/css/common.css");
</style>
