/**
 * Created by F1231657 on 2018/1/4.
 */
// 1.引入vue和vue-router并赋值给相应的Vue和Router
import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from "./components/HelloWorld"
import Home from "./components/Home"
import ShangCheng from "./components/shangcheng/ShangCheng"
import Index from "./components/index"
import ShangChengXiangQing from "./components/shangcheng/ShangChengXiangQing"
import PaiMaiIndex from "./components/paimai/paimaiindex"
import PaiDtail from "./components/paimai/paidetail"
import WeiKaiShi from "./components/paimai/weikaishi"
import JieShu from "./components/paimai/jieshu"
import PaiGuiZe from "./components/paimai/paiguize"
import PaiChuJia from "./components/paimai/paichujia"
import HuoDong from "./components/huodong/huodong"
import JingXing from "./components/huodong/jingxing"
import JiJiang from "./components/huodong/jijiang"
import JiJiangDetail from "./components/huodong/jijiangdetail"
import JingXingDetail from "./components/huodong/jingxingdetail"
import HuoDongNum from "./components/huodong/huodongnum"
import Wode from "./components/wode/wode"
import JiFenList from "./components/wode/jifenlist"
import JiDetail from "./components/wode/jidetail"
import SheZhi from "./components/wode/shezhi"
import DiZhi from "./components/wode/dizhi"
import DengLu1 from "./components/denglu/denglu1"
import DengLu2 from "./components/denglu/denglu2"
// 2.通过Vue的use方法注入Router
Vue.use(Router)
// 3.创建 router 实例，然后传 `routes` 配置
const router = new Router({
    // 指定路由选中时的样式类名
    // linkActiveClass: 'active',
    // hashbang: true, // 将路径格式化为#!开头
    // history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
    /**
     * 4.@desc 路由配置配置具体的路径
     */
    //配置路由
    routes: [
        {
			// path: '/',
			// component: Index
            path: '/',
            component: DengLu1
        },
        
        {
        path: '/index',
        component: Index
        },
        {
            path: '/helloworld',
            component: HelloWorld
        },
        {
            path: '/shangcheng',
            component: ShangCheng
        },
        {
            path: '/shangcheng/shangchengxiangqing',
            component: ShangChengXiangQing
        },
        {
            path: '/paimai/paimaiindex',
            component: PaiMaiIndex
        },
        {
            path: '/paimai/paidetail',
            component: PaiDtail
        },
        {
            path: '/paimai/weikaishi',
            component: WeiKaiShi
        },
        {
            path: '/paimai/jieshu',
            component: JieShu
        },
        {
            path: '/paimai/paiguize',
            component: PaiGuiZe
        },
        {
            path: '/paimai/paichujia',
            component: PaiChuJia
        },
        {
            path: '/huodong/huodong',
            component: HuoDong
        },
        {
            path: '/huodong/jingxing',
            component: JingXing
        },
        {
            path: '/huodong/jijiang',
            component: JiJiang
        },
        {
            path: '/huodong/jijiangdetail',
            component: JiJiangDetail
        },
        {
            path: '/huodong/jingxingdetail',
            component: JingXingDetail
        },
        {
            path: '/huodong/huodongnum',
            component: HuoDongNum
        },
        {
            path: '/wode/wode',
            component: Wode
        },
        {
            path: '/wode/jidetail',
            component: JiDetail
        },
        {
            path: '/wode/jifenlist',
            component: JiFenList
        },
        {
            path: '/wode/shezhi',
            component: SheZhi
        },
        {
            path: '/wode/dizhi',
            component: DiZhi
        },
        {
            path: '/denglu/denglu1',
            component: DengLu1
        },
        {
            path: '/denglu/denglu2',
            component: DengLu2
        },

    ],
    mode:"hash",


})
/**
 * @desc 全局监听路由变化
 */
// router.beforeEach((to, from, next) => {
//     store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//     next()
// })
// 5.导出路由
export default router
