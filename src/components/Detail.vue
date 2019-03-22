<template>
	
	<div id="box">
		<div class="main">
			<div class="fanhui" @click="fan()"><i class="iconfont icon-fanhui"></i></div>
			<div class="top">
				<img :src="item.url | glq(item.url)" />
				<p v-if="clas==1" class="zhu">注：手机激活或拆塑封后不支持7天无理由退换货，请拆封前确认是否需要该商品</p>
			</div>
			<div class="good">
				<p>{{item.name}}</p>
				<span>{{item.price}}</span>
				<span>有货</span>
			</div>
			<p class="bg"></p>
			<div class="sel">
				<div>内存</div>
				<input type="button" value="64GB" checked/>
				<div>颜色</div>
				<input type="button" v-for="(it,i) in item.color" :value="it" @click="check($event)" class="che"/>
				<div>分期选择</div>
				<input type="button" :value="'月还'+qs+'期' " @click="sheet()" checked/>
				<mt-actionsheet
				  :actions="actions"
				  v-model="sheetV">
				</mt-actionsheet>
			</div>
			
			<p class="bg"></p>
			<div class="san">
				<dl>
					<dd>验</dd>
					<dt>收货请先验货</dt>
				</dl>
				<dl>
					<dd>七</dd>
					<dt>七天无理由退货</dt>
				</dl>
				<dl>
					<dd>售</dd>
					<dt>保证售后无忧</dt>
				</dl>
			</div>
			<p class="bg"></p>
			<div class="tupian">
				<p>商品参数及详情</p>
				<img src="../assets/img/det0.jpg" />
				<img src="../assets/img/det1.jpg" />
				<img src="../assets/img/det2.jpg" />
			</div>
			
			
			
			
		</div>
		
		
		
		<div class="foot">
			<span class="yug">月供<span>￥{{yueg}} </span></span>
			<router-link :to="{path:'xiadan',query:{id:item._id,clas:clas}}" class="qegm" tag="p" >全额购买</router-link>
			<router-link :to="{path:'xiadan',query:{id:item._id,clas:clas,yg:yueg,qis:qs}}" class="fqgm" tag="p" >分期购买</router-link>
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
			item:{},
			arr:[2,3,4,5,6,9],
			jiage:[],
			id:"",
			clas:"",
			sheetV:false,
			actions:[],
			qs:6,
			yueg:""
		}
	},
	created(){
		this.id = this.$route.query.id;
		this.clas = this.$route.query.clas;
		// console.log(this.id,this.clas)
	},
	mounted(){
		var _this = this
		axios({
			method:"post",
			headers:{'Content-Type':'application/x-www-form-urlencoded'},
			url:"http://localhost:8000/detail",
			data:Qs.stringify({id:_this.id,clas:_this.clas})
		}).then(function(data){
			_this.item = data.data;
			console.log(_this.item);
			
			var price = data.data.price;
			var arr1 = [];
			_this.arr.forEach(function(item){
				var qian = (price*0.24/12*item + price)/item;
				qian = qian.toFixed(2)
				arr1.push(qian);
			})
			_this.yueg = arr1[4]
			var actions = [
				{name:arr1[0]+" X "+_this.arr[0]+"期 (年利率24%)",method:function(){
					_this.qs = _this.arr[0]
					_this.yueg = arr1[0]
				}},
				{name:arr1[1]+" X "+_this.arr[1]+"期 (年利率24%)",method:function(){
					_this.qs = _this.arr[1]
					_this.yueg = arr1[1]
				}},
				{name:arr1[2]+" X "+_this.arr[2]+"期 (年利率24%)",method:function(){
					_this.qs = _this.arr[2]
					_this.yueg = arr1[2]
				}},
				{name:arr1[3]+" X "+_this.arr[3]+"期 (年利率24%)",method:function(){
					_this.qs = _this.arr[3]
					_this.yueg = arr1[3]
				}},
				{name:arr1[4]+" X "+_this.arr[4]+"期 (年利率24%)",method:function(){
					_this.qs = _this.arr[4]
					_this.yueg = arr1[4]
				}},
				{name:arr1[5]+" X "+_this.arr[5]+"期 (年利率24%)",method:function(){
					_this.qs = _this.arr[5]
					_this.yueg = arr1[5]
				}}
			]
			_this.actions = actions;
		})
		
	},
	methods:{
		sheet(){
			this.sheetV = !(this.sheetV);
		},
		check(e){
			var che = document.getElementsByClassName("che");
			// console.log(che)
			var lent = che.length;
			// console.log(lent)
			for(var i = 0;i < lent;i++){
				che[i].style = "border-color:#ddd;color:#444;"
			}
			e.target.style = "border-color:#E30000;color:#E30000;"
			
		},
		fan(){
			this.$router.go(-1)
		}
	},
	computed: {
		yuegong() {
			var _this = this;
			return function(a){
				var lixi = a*0.24/12*_this.qs;//总共的利息
				console.log(_this.qs)
				var tot = lixi+a;//本金加利息
				var yg = (tot/6).toFixed(2);//每月月供
				return yg;
			}
		}
	}
}
	
</script>

<style scoped="">
	*{margin:0;padding:0;}
	.main{
		overflow:auto;
		min-height:11.9rem;
		flex:1;
	}
	.fanhui{
		position:absolute;
		left:0.2rem;
		top:0.2rem;
		height:0.62rem;
		width:0.62rem;
		background:#dedede;
		border-radius:50%;
	}
	.icon-fanhui{
		font-size:0.58rem;
		position:absolute;
	}
	.top{
		height:7rem;
		border-bottom:0.01rem solid #cecece;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-flow:column;
	}
	.top img{
		max-height:6.5rem;
		min-height:6rem;
	}
	.zhu{
		font-size: 0.21rem;
		line-height:0.24rem;
		color:#652e2d;
		width:70%;
		margin:0 auto;
		margin-bottom:0.04rem;
	}
	.good{
		padding:0.2rem;
		height:2rem;
	}
	.good p{line-height:0.4rem;height:1.2rem;font-size:0.32rem;}
	.good span:first-of-type{color:#e30000;font-size:0.38rem;float:left;}
	.good span:last-of-type{color:#e30000;font-size:0.28rem;float:right;margin-right:0.2rem;}
	.bg{height:0.15rem;background:#f5f5fa;border:0.01rem solid #c8c7cc;}
	.sel{
		padding:0.2rem;
		overflow:hidden;
		margin-bottom:0.3rem;
	}
	.sel div{
		line-height:0.56rem;
		font-size:0.3rem;
		height:0.56rem;
		float:left;
		width:100%;
	}
	.div1{height:0.58rem;}
	.sel input{
		font-size:0.24rem;
		background:none;
		border:0.02rem solid #ddd;
		height:0.56rem;
		line-height:0.56rem;
		padding:0 0.26rem;
		border-radius:0.12rem;
		margin-right:0.3rem;
		color:#444;
		float:left;
		outline:none;
	}
	.sel input[checked]{
		border-color:#E30000;color:#E30000;
	}
	.san{
		overflow:hidden;
		padding:0.15rem 0;
	}
	.san dl{
		width:33.3%;
		float:left;
		display:flex;
		justify-content:center;
		align-items:center;
		flex-direction: column;
		font-size:0.3rem;
	}
	dd{
		width:0.6rem;height:0.6rem;border-radius:50%;
		text-align:center;
		line-height:0.6rem;
		font-weight:900;
		color:#fff;
	}
	dl:first-of-type dd{background:#ff9662;}
	dl:nth-of-type(2) dd{background:#959fed;}
	dl:last-of-type dd{background:#5ebcf3;}
	dt{text-align:center;}
	.tupian p{
		font-size:0.3rem;
		line-height:0.6rem;
		height:0.6rem;
		padding:0.2rem;
	}
	.tupian img{
		width:7.3rem;
		margin:0 auto;
	}
	
	.foot{
		height:0.98rem;
		border-top:0.02rem solid #ccc;
		font-size:0.3rem;
	}
	.foot p{
		height:0.98rem;
		width:1.6rem;
		float:right;
		text-align:center;
		line-height:0.98rem;
	}
	.foot .qegm{background:#ff8000;color:#fff;}
	.foot .fqgm{background:#ffd900;color:#000;}
	.yug{line-height:0.98rem;padding-left:0.42rem;}
	.yug span{font-size:0.4rem;color:#E30000;}
</style>