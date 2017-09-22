<template>
	<div class="header">
		<div class="title">
			<img :src="seller.avatar" alt="">
			<div class="msg">
				<h2>{{seller.name}}</h2>
				<p class="time">{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
				<p v-if="seller.supports" class="description">{{seller.supports[0].description}}</p>
			</div>
			<div class="btn" @click="show=true">5个 ></div>
		</div>
		<div class="bulletin">{{seller.bulletin}}</div>
		<transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
			<div class="alert" v-show="show">
				<div class="close" @click="show=false">&times;</div>
			</div>
		</transition>
	</div>
</template>
<script>
	export default{
		props: {
			seller: Object
		},
		data(){
			return{
				show : false
			}
		}
	}
</script>
<style lang="less" scoped>
	.header{
		width: 100%;
		background: #282828;
		.title{
			display: flex;
			padding: .48rem .24rem .36rem .48rem;
			position: relative;
			.btn{
				position:absolute;
				right: .24rem;
				bottom: .36rem;
				background: rgba(0,0,0,.5);
				width: .8rem;
				height: .36rem;
				line-height: .36rem;
				border-radius: .2rem;
				text-align: center;
				font-size: .2rem;
				color: #fff;
			}
			img{
				width: 1.28rem;
				height: 1.28rem;
			}
			.msg{
				padding-left: .36rem;
				h2{
					font-size: .32rem;
					color: #fff;
					font-weight: bold;
					line-height: .32rem;
				}
				.time{
					padding: .16rem 0 .2rem;
					font-size: .24rem;
					color: #fff;
				}
				.description{
					font-size: .2rem;
					color: #fff;
				}
			}
		}
		.bulletin{
			padding:0 .24rem;
			height: .56rem;
			background: rgba(0,0,0,.3);
			color: #fff;
			line-height: .56rem;
			font-size: .2rem;
			white-space:nowrap; 
			overflow:hidden; 
			text-overflow:ellipsis;
		}
		.alert{
			position:fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.3);
			z-index: 100;
			.close{
				width: .6rem;
				height: .4rem;
				line-height: .4rem;
				font-size: 1rem;
				color: #fff;
				position: absolute;
				left: 50%;
				margin-left: -.3rem;
				bottom: .6rem;
			}
		}
	}
</style>