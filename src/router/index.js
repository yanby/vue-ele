import Vue from 'vue';
import Router from 'vue-router';
//引入组件
import Goods from '../components/Goods/Goods.vue';
import Evaluate from '../components/Evaluate/Evaluate.vue';
import Seller from '../components/Seller/Seller.vue';
//必须use一下
Vue.use(Router);

//实例化router
export default new Router({
	mode: "history", //不记录历史信息
	scrollBehavior: ()=>({y:0}), //每次跳转后滚动条回到顶部
	routes: [
		{
			path: "/",
			redirect: "/goods"
		},
		{
			path: "/goods",
			component: Goods
		},
		{
			path: "/evaluate",
			component: Evaluate
		},
		{
			path: "/seller",
			component: Seller
		}
	]
})