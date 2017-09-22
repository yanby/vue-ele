<template>
	<div>
		<div class="shopping" @click="show =! show && cart.length">
			<div class="black" :class="{'che' : totalCount>0}"><span v-show="totalCount">{{totalCount}}</span></div>
			<div class="price">￥{{totalPrice}}</div>
			<div class="peisong">另需配送费￥{{fee}}元</div>
			<div class="chajia" :class="{'on':totalCount>0}">{{go}}</div>
		</div>
		<div class="card" v-show="show">
			<div class="hd">
				<span>购物车</span><b @click="clean()">清空</b>
			</div>
			<div class="bd">
				<ul>
					<li v-for="item in cart">
						<span>{{item.name}}</span>
						<b>￥{{item.price * item.count}}</b>
						<div class="wrap">
							<Buy :food="item"></Buy>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	import Buy from "../Buy/Buy.vue";
	export default{
		data(){
			return {
				show: false
			}
			
		},
		props:{
			cart : Array,
			fee:{
				type: Number,
				default: 0
			},
			start: {
				type: Number,
				default: 0
			}
		},
		computed: {
			totalPrice(){
				let sum = 0;
				this.cart.forEach((item)=>{
					sum += item.price * item.count;
				})
				return sum;
			},
			totalCount(){
				let sum = 0;
				this.cart.forEach((item)=>{
					sum += item.count;
				})
				return sum;
			},
			go(){
				if(this.totalCount == 0){
					return `￥${this.start}元起送`
				}else if(this.totalPrice < this.start){
					let num =this.start - this.totalPrice;
					return `还差￥${num}元起送`
				}else{
					return `去结算`
				}
			}
		},
		methods: {
			clean(){
				this.cart.forEach((item)=>{
					item.count = 0;
				})
				this.show = false;
			}
		},
		components: {
			"Buy" :Buy
		}
	}
</script>
<style lang="less" scoped>
	.shopping{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: .6rem;
		line-height: .6rem;
		justify-content: space-between;
		text-align: center;
		background: #000;
		display: flex;
		font-size: .24rem;
		z-index: 81;
		.black{
			width: .44rem;
			height: .44rem;
			background: #f00;
			border-radius: 50%;
			margin-left: .3rem;
			margin-top: -.1rem;
		}
		.che{
			width: .44rem;
			height: .44rem;
			background: rgb(0,160,222);
			border-radius: 50%;
			margin-left: .3rem;
			margin-top: -.1rem;
			position: relative;
			text-align: right;
			span{
				display: inline-block;
				width: .2rem;
				height: .2rem;
				line-height: .2rem;
				text-align: center;
				background: #f00;
				color: #fff;
				border-radius: 50%;
			}
		}
		.chajia{
			color: #fff;
			width: 2.1rem;
			flex: 0 0 2.1rem;
			&.on{
				background: green;
			}
		}
	}
	.card{
		position: fixed;
		bottom: .6rem;
		left: 0;	
		width: 100%;
		background: #fff;
		z-index:80;
		.hd{
			height: .4rem;
			line-height: .4rem;
			font-size: .28rem;
			display: flex;
			justify-content: space-between;
			padding: 0 .36rem;
			border-bottom: .02rem solid #ddd;
			border-top: .02rem solid #ddd;
		}
		.bd{
			ul{
				li{
					display: flex;
					justify-content: space-around;
					text-align: center;
					height: .5rem;
					line-height: .5rem;
					font-size: .24rem;
					border-bottom: .01rem solid #ddd;
					padding: 0 .36rem;
					.wrap{
						width: 1.6rem;
						position: relative;
						.buy{
							bottom: .16rem;
						}
					}
					b{
						flex-grow: 1;
						text-align: right;
						color: #f00;
					}
				}
			}
		}
	}
</style>