<template>
	<div>
		<div class="goods">
			<div class="menu" id="menu">
				<div>
					<ul>
						<li v-for="(good,index) in goods" :class="{'on' : index==cur}" @click="change(index)">{{good.name}}</li>
					</ul>
				</div>
			</div>
			<div class="list" id="list" ref="list">
				<div id="dls">
					<dl v-for="good in goods">
						<dt >{{good.name}}</dt>
						<dd v-for="food in good.foods" @click.stop="showDetail(food)">
							<img :src="food.icon" alt="">
							<div class="msg">
								<h2>{{food.name}}</h2>
								<p class="description">{{food.description}}</p>
								<p class="sellCount">月售{{food.sellCount}}份 好评率{{food.rating}}%</p>
								<p class="price"><span><b>￥</b>{{food.price}}</span><del v-if="food.oldPrice">￥{{food.oldPrice}}</del></p>
							</div>
							<Buy :food="food"></Buy>
						</dd>
					</dl>
				</div>
			</div>
		</div>
		<Detail ref="food" :food="curfood"></Detail>
		<Shopping :cart="cart" :fee="seller.deliveryPrice" :start="seller.minPrice"></Shopping>
	</div>
</template>
<script>
   	import Detail from "../Detail/Detail.vue";
   	import Buy from "../Buy/Buy.vue";
   	import Shopping from "../Shopping/Shopping.vue";
	export default{
		props:{
			seller: Object
		},
		data(){
			return {
				goods: [],
				cur : 0,
				curfood: ""
			}
		},
		computed: {
			cart(){
				let arr = [];
				this.goods.forEach((item1)=>{
					item1.foods.forEach((item2)=>{
						if(item2.count){
							arr.push(item2)
						}
					})
				})
				return arr;
			}
		},
		created(){
			this.fetchData();
		},
		mounted(){
			this.scrollFood = new IScroll("#list",{ mouseWheel: true, click: true,probeType: 2});
			new IScroll("#menu",{ mouseWheel: true, click: true,probeType: 2});
			let lists = this.$refs.list.getElementsByTagName("dl");
			var arr = [];
			for(var i=0; i<lists.length; i++){
				arr.push(lists[i].offsetTop);
			}
			//注册滚动事件
			this.scrollFood.on("scrollEnd",function(){
				console.log(this.y)
			})
		},
		methods: {
			fetchData(){
           		this.$http.get('src/data.json').then(function(res){
                this.goods = res.data.goods;
	            }.bind(this)).catch(function(err){
	                console.log("goods页面错误：",err)
	            })
        	},
        	change(index){
        		let list = thisthis.$refs.list;
        		let dls = this.$refs.list.getElementsByTagName("dl");
        		this.scrollFood.scrollToElement(dls[index]);
        		this.cur = index;
        	},
        	showDetail(food){
        		this.$refs.food.showFood();
        		this.curfood = food;
        	}
		},
		components: {
			"Detail" : Detail,
			"Buy": Buy,
			"Shopping": Shopping
		}
	}
</script>
<style lang="less" scoped>
	.goods{
		display: flex;
		position: absolute;
		left: 0;
		top: 3.5rem;
		bottom: .6rem;
		right: 0;
		overflow: hidden;
		.menu{
			width: 1.6rem;
			flex: 0 0 1.6rem;
			ul{
				li{
					width: 01.12rem;
					background: #f3f5f7;
					font-size: .24rem;
					color: #333;
					line-height: .28rem;
					text-align: center;
					padding: .2rem .24rem;
					border-bottom: .01rem solid #ddd;
					&.on{
						background: #fff;
					}
				}
			}
		}
		.list{
			flex: 1;
			dl{
				dt{
					height: .52rem;
					background: #f3f5f7;
					border-left: .04rem solid #ddd;
					font-size: .24rem;
					color: #999;
					line-height: .52rem;
					padding-left: .28rem;
				}
				dd{
					position: relative;
					display: flex;
					padding: .36rem;
					border-bottom: .01rem solid #ddd;
					.msg{
						padding: .04rem 0 0 .2rem;
						h2{
							font-size: .28rem;
							color: #333;
							font-weight: bold;
						}
						.description{
							font-size: .2rem;
							color: #999;
							padding: .16rem 0;
						}
						.sellCount{
							font-size: .2rem;
							color: #999;
						}
						.price{
							padding-top: .16rem;
							span{
								color: #f00;
								font-size: .28rem;
								font-weight: bold;
								padding-right: .24rem;
							}
							del{
								font-size: .2rem;
								color: #999;
								font-weight: bold;
							}
							b{
								color: #f00;
								font-size: .1rem;
							}
						}
					}
				}
			}
		}
	}
</style>