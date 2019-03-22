<template>
	<div>
		<textarea placeholder="请准确填写收货地址!" v-model="dizhi"></textarea>
		<div class="good">
			<dl>
				<dd><img :src="item.url | glq(item.url)" /></dd>
				<dt>
					<p class="name">{{item.name}}</p>
					<p class="price">￥ {{item.price}}</p>
				</dt>
			</dl>
			<div class="zhifu"><span>支付金额</span><span>￥{{item.price}}</span></div>
			<div class="btn" @click="xiadan()">确认下单</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs';
	export default{
		name:"Detail",
		data(){
			return{
				tit:"下单",
				dizhi:"",
				item:{},
				id:"",
				clas:""
				
			}
		},
		created(){
			this.id = this.$route.query.id;
			this.clas = this.$route.query.clas;
		},
		mounted(){
			this.$emit("senddata",this.tit)
			var _this = this
			axios({
				method:"post",
				headers:{'Content-Type':'application/x-www-form-urlencoded'},
				url:"http://localhost:8000/detail",
				data:Qs.stringify({id:_this.id,clas:_this.clas})
			}).then(function(data){
				if(data.data != 0){
					_this.item = data.data;
					console.log(_this.item);
				}
			})
		},
		methods: {
			xiadan() {
				var val = prompt("请输入支付密码");
			}
		}
	}
</script>

<style scoped="">
	textarea{
		width:7.3rem;
		height:2rem;
		margin:0.2rem auto;
		font-size-adjust:0.3rem;
	}
	dl{
		height:3rem;
		background:#fff;
	}
	dd img{
		height:2.5rem;
		float:left;
	}
	dt p{
		font-size:0.3rem;
	}
	.btn{
		padding:0 0.2rem;
		height:1rem;
		margin:0.28rem auto;
		font-size:0.4rem;
		color:#000;
		background:#ffd900;
		text-align:center;
		line-height:1rem;
	}
	.zhifu{
	background:#fff;color:#E30000;font-size:0.32rem;line-height:1rem;height:1rem;
	text-align:center;
	}
</style>
