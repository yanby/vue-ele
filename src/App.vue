<template>
	<div>
		<my-header :seller="seller"></my-header>
		<ul class="nav">
			<li><router-link to="/goods">商品</router-link></li>
			<li><router-link to="/evaluate">评价</router-link></li>
			<li><router-link to="/seller">商家</router-link></li>
		</ul>
		<keep-alive>
			<router-view :seller="seller"></router-view>
		</keep-alive>
		<h2>购物车</h2>
	</div>
</template>

<script>
	import Header from "./components/Header/Header.vue";
	// import data from "./data.json";
	export default{
		data(){
			return {
				seller : {}
			}
		},
		created(){
			this.fetchData();
		},
		methods: {
			fetchData(){
           		this.$http.get('src/data.json').then(function(res){
               		 this.seller = res.data.seller;
	            }.bind(this)).catch(function(err){
	                console.log("APP页面错误：",err)
	            })
        	}
		},
		components: {
			"my-header" : Header
		}
	}
</script>

<style lang="less" scoped>
	.nav{
		height: .8rem;
		line-height: .8rem;
		display: flex;
		justify-content: space-around;
		border-bottom: .01rem solid #ddd;
		a{
			flex: 1;
			font-size: .28rem;
			&.router-link-active{
				color: #f00;
			}
		}
	}
</style>