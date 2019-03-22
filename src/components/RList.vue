<template>
	
<div class="good">
	<p class="top">全部商品</p>
	<ul>
		<router-link :to="{path:'detail',query:{id:item._id,clas:2}}" v-for="(item,i) in arr" :key="item.id" tag="li">
				<div class="ers"><img :src="item.url | glq(item.url)" class="ximg"/></div>
				<p class="name">{{item.name}}</p>
				<span class="jiage">
					<strong>￥ {{item.price}}</strong>
					<span>60人付款</span>
				</span>
				<div class="ygqs"><p class="yuegong">月供：￥{{yuegong(item.price)}}</p><p class="qishu">6期</p></div>
		</router-link>
		
	</ul>
</div>
	
</template>

<script>
	
import axios from 'axios';
import Qs from 'qs';
export default{
	name:"Regist",
	data(){
		return {
			tit:"二手机精选",
			arr:[]
		}
	},
	mounted(){
		var _this = this
		this.$emit("senddata",this.tit),
		axios({
			method:"get",
			url:"http://localhost:8000/rgood",
			headers:{'Content-Type':'application/x-www-form-urlencoded'}
		}).then(function(data){
			_this.arr = data.data;
			// console.log(data.data)
		})
	},
	computed: {
		yuegong() {
			return function(a){
				var lixi = a*0.24/2;//总共的利息
				var tot = lixi+a;//本金加利息
				var yg = (tot/6).toFixed(2);//每月月供
				return yg;
			}
		}
	}
}
	
</script>

<style scoped="">
	.top{font-size:0.26rem;line-height:0.4rem;margin:0 0.2rem;}
	
	.good ul{
		display:flex;
		justify-content: space-between;
		flex-wrap:wrap;
	}
	.good li{
		width:3.3rem;
		margin-top:0.1rem;
		background:#fff;
		padding:0.25rem 0.2rem;
		padding-top:0;
		overflow:hidden;
	}
	.ers{
		display:flex;
		justify-content:center;
		align-items: center;
		height:2.6rem;
	}
	.good img{
		height:2.3rem;
	}	
	.name{
		font-size:0.26rem;
		line-height:0.34rem;
		height:0.68rem;
		overflow:hidden;
	}
	.jiage{
		display:flex;
		justify-content:space-between;
		height:0.4rem;
		font-size:0.26rem;
	}
	.jiage span{
		color:#848484;
	}
	.ygqs{
		height:0.49rem;
		font-size:0.26rem;
		position:relative;
	}
	.yuegong{
		width:2.55rem;
		height:0.44rem;
		border:0.02rem solid #e53842;
		border-radius:0.08rem;
		color:#e53842;
		text-align:center;
		line-height:0.44rem;
	}
	.qishu{
		width:0.8rem;
		height:0.49rem;
		background:#e63842;
		margin-left:-0.08rem;
		color:#fff;
		text-align:center;
		line-height:0.48rem;
		position:absolute;
		top:0;
		right:0;
	}
</style>