<template>
	<transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
		<div class="detail" v-show="show">
			<div class="back" @click="show=false"> < </div>
			<img :src="food.image" alt="">
			<div class="msg">
				<h2>{{food.name}}</h2>
				<div class="rating">月售{{food.sellCount}}份  好评率{{food.rating}}%</div>
				<div class="price">
					<span>￥{{food.price}}</span><del v-if="food.oldPrice">￥{{food.oldPrice}}</del>
				</div>
				<div class="buy" @click="addBuy()">加入购物车</div>
			</div>
			<div class="info">
				<h2>商品介绍</h2>
				<p>{{food.info}}</p>
			</div>
			<div class="text">
				<h2>商品评价</h2>
				<ul>
					<li v-for="item in food.ratings">
						<div class="time">
							<span>{{item.rateTime | dateFormat('MM/DD/YYYY HH:mm:ss')}}</span>
							<span>{{item.username}}<img :src="item.avatar" alt=""></span>
						</div>
						<div class="txt" v-if="item.text">{{item.text}}</div>
					</li>
				</ul>
			</div>
		</div>
	</transition>
</template>
<script>
	export default{
	 	data(){
	 		return{
	 			show : false
	 		}
	 	},
	 	props: {
	 		food: [String,Object]
	 	},
	 	filters: {
	 		dateFormat(date,format){
	 			return moment(date).format(format)
	 		}
	 	},
	 	methods: {
	 		showFood(){
	 			this.show = true;
	 		},
	 		addBuy(){
				if(!this.food.count){
					this.$set(this.food,"count",1)
				}else{
					this.food.count++;
				}
	 		}
	 	}
	}
</script>
<style lang="less" scoped>
	.detail{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: .6rem;
		background: #f2f3f5;
		h2{
			font-size: .28rem;
			color: #000;
			font-weight: bold;
			padding: .36rem 0 .16rem 0;
		}
		.back{
			position: absolute;
			left: .1rem;
			top: .1rem;
			font-size: .18rem;
			width: .2rem;
			height: .2rem;
			line-height: .2rem;
			color: #fff;
			text-align: center;
			border-radius: 50%;
			background: rgba(0,0,0,.5);
			z-index: 99;
		}
		img{
			width: 100%;
			height: 3.75rem;
		}
		.msg{
			background: #fff;
			padding-left: .36rem;
			margin-bottom: .32rem;
			position: relative;
			.rating{
				color: #999;
				font-size: .2rem;
			}
			.price{
				padding: .16rem 0 .36rem;
				span{
					color: #f00;
					font-size: .28rem;
				}
				del{
					color:	#999;
					font-size: .20rem;
					margin-left: .2rem;
				}
			}
			.buy{
				position:absolute;
				bottom: .36rem;
				right: .36rem;
				width: 1.48rem;
				height: .48rem;
				border-radius: .3rem;
				text-align: center;
				font-size: .2rem;
				color: #fff;
				line-height: .48rem;
				background: rgb(0,160,220);
			}
		}
		.info{
			background: #fff;
			padding: 0 .36rem .36rem;
			margin-bottom: .32rem;
			h2{
				font-size: .24rem;
				font-weight: bold;
				font-size: .28rem;
			}
			p{
				font-size: .24rem;
				color: #999;
				line-height: .48rem;
			}
		}
		.text{
			padding: 0 .36rem .36rem;
			background: #fff;
			ul{
				li{
					padding: .36rem 0;
					border-bottom: .01rem solid #ddd;
					.time{
						display: flex;
						justify-content: space-between;
						img{
							width: .24rem;
							height: .24rem;
							border-radius: 5px;
						}
					}
				}
			}
		}
	}
</style>