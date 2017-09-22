<template>
	<div class="buy">
		<!-- <span @click.stop="remove()" v-show="food.count">-</span>
		<b v-show="food.count">{{food.count}}</b>
		<span @click.stop="add()">+</span> -->
		<span @click.stop="remove()">-</span>
		<b>{{count}}</b>
		<span @click.stop="add()">+</span>
	</div>
</template>
<script>
	// export default{
	// 	props: {
	// 		food: [Object,Array]
	// 	},
	// 	methods: {
	// 		remove(){
	// 			this.food.count--;
	// 		},
	// 		add(){
	// 			if(!this.food.count){
	// 				this.$set(this.food,"count",1)
	// 			}else{
	// 				this.food.count++;
	// 			}
	// 		}
	// 	}
	// }
	// 
	import {mapGetters,mapActions} from "vuex";
	export default{
		computed: mapGetters([
			'count'
		]),
		methods: mapActions([
		 	'remove',
			'add'
		])
		
	}
</script>
<style lang="less" scoped>
	.buy{
		position: absolute;
		right: .36rem;
		bottom: .36rem;
		display: flex;
		span{
			width: .2rem;
			height: .2rem;
			background: rgb(0,160,220);
			border-radius: .1rem;
			text-align: center;
			line-height: .2rem;
			color: #fff;
		}
		b{
			width: .2rem;
			height: .2rem;
			line-height: .2rem;
			text-align: center;
		}
	}
</style>