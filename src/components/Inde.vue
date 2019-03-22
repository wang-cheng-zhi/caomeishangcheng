<template>
	
	<div>
		
		<div class="xiala">
			<p>松开立即刷新</p>
		</div>
		
		<div class="banner">
			<mt-swipe :show-indicators="false">
			  <mt-swipe-item><img src="../assets/img/banner1.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/img/banner2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/img/banner3.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../assets/img/banner4.jpg" @click="shixin()"/></mt-swipe-item>
			  
			</mt-swipe>
		</div>
		<nav>
			<ul>
				<router-link to="Xlist" tag="li">
					<div></div>
					<p>新品手机</p>
				</router-link>
				<router-link to="Rlist" tag="li">
					<div></div>
					<p>二手手机</p>
				</router-link>
				<router-link to="zhuli" tag="li">
					<div>
						<p class="new">new</p>
					</div>
					<p>助力享优惠</p>
				</router-link>
				<router-link to="edu" tag="li">
					<div></div>
					<p>查询额度</p>
				</router-link>
				<router-link to="dingd" tag="li">
					<div></div>
					<p>订单管理</p>
				</router-link>
				
			</ul>
		</nav>
		
		<!--好友助力-->
		<div class="zhuli" @click="zhuli()">
			<img src="../assets/img/iphoneX.jpg"/>
			<div class="zli">
				<p class="zl1">iPhone X 银色 256GB 国行发行</p>
				<p class="zl2">原价  ￥ </p>
				<p class="zl3">每邀请一个好友直降20元</p>
				<div class="zl4">
					<div><i class="iconfont icon-icon-test"></i></div><p>最低价 ￥8399</p>
				</div>
			</div>
		</div>
		
		<!--新机上线-->
		<div class="good">
			<div class="gtop">
				<h2>新机上线首选</h2>
				<p @click="xinji()">查看更多>></p>
			</div>
			<p class="jia" v-if="!(arr1.length)">商品被抢光了！正在加急补货！</p>
			<ul>
				<router-link :to="{path:'detail',query:{id:item._id,clas:1}}" v-for="(item,i) in arr1" :key="item.id" tag="li">
					<div class="xin"><img :src="item.url | glq(item.url)" class="ximg"/></div>
					<p class="zhu">注：手机激活或拆塑封后不支持7天无理由退换货，请拆封前确认是否需要该商品</p>
					<p class="name">{{item.name}}</p>
					<span class="jiage">
						<strong>￥ {{item.price}}</strong>
						<span>60人付款</span>
					</span>
					<div class="ygqs"><p class="yuegong">月供：￥{{yuegong(item.price)}}</p><p class="qishu">6期</p></div>
				</router-link>
			</ul>
			
			
		</div>
		
		
		<div class="good">
			<div class="gtop">
				<h2>二手优品推荐</h2>
				<p @click="ershou()">查看更多>></p>
			</div>
			<p class="jia" v-if="!(arr2.length)">商品被抢光了！正在加急补货！</p>
			<ul>
				<router-link :to="{path:'detail',query:{id:item._id,clas:2}}" v-for="(item,i) in arr2" :key="item.id" tag="li">
					<div class="ers"><img :src="item.url | glq(item.url)" class="rimg"/></div>
					<p class="name">{{item.name}}</p>
					<span class="jiage">
						<strong>￥ {{item.price}}</strong>
						<span>60人付款</span>
					</span>
					<div class="ygqs"><p class="yuegong">月供：￥{{yuegong(item.price)}}</p><p class="qishu">6期</p></div>
				</router-link>
			</ul>
		</div>
		
		<div class="bott">
			<p>Copyright&nbsp;&nbsp;&copy;&nbsp;&nbsp;TongHua&nbsp;&nbsp;Micro&nbsp;&nbsp;Credit&nbsp;&nbsp;Co.,Ltd.,</p>
		</div>
		
	</div>
	
</template>

<script>
	import axios from 'axios';
export default{
	name:"Inde",
	data(){
		return{
			arr:["草莓商城","郑州市"],
			arr1:[],
			arr2:[]
		}
	},
	mounted(){
		var _this = this
		this.$emit("toparent",this.arr),
		axios({
			url:"http://localhost:8000/xgood",
			headers:{'Content-Type':'application/x-www-form-urlencoded'}
		}).then(function(data){
			_this.arr1 = data.data.splice(0,4);
		}),
		axios({
			url:"http://localhost:8000/rgood",
			headers:{'Content-Type':'application/x-www-form-urlencoded'}
		}).then(function(data){
			_this.arr2 = data.data.splice(0,4);
		})
	},
	methods:{
		
		shixin(){
			this.$router.push("/finddal")
		},
		zhuli(){
			this.$router.push("/Xlist")
		},
		xinji(){
			this.$router.push("/Xlist")
		},
		ershou(){
			this.$router.push("/Rlist")
		}
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
	.xiala{
		height:0rem;
		font-size:0.24rem;
	}
	.xiala p{
		text-align:center;
		color:#999;
		padding-top:1rem;
		line-height:0.8rem;
		height:0.8rem;
	}
	
	.banner{
		height:3.75rem;
	}
	.banner img{
		display:block;
		height:3.75rem;
	}
	nav{
		height:2rem;
		background:#fff;
	}
	nav ul{
		padding-top:0.3rem;
		height:1.4rem;
		
	}
	nav li{
		width:20%;
		float:left;
	}
	nav div{
		width:0.75rem;
		height:0.75rem;
		margin:0 auto;
		position:relative;
		background:url(../assets/img/caidan2.jpg) no-repeat;
		background-size:3.75rem;
		background-position-y:0;
	}
	nav li:first-child div{background-position-x:0;}
	nav li:nth-child(2) div{background-position-x:-0.75rem;}
	nav li:nth-child(3) div{background-position-x:-1.5rem;}
	nav li:nth-child(4) div{background-position-x:-2.25rem;}
	nav li:last-child div{background-position-x:-3rem;}
	nav p{font-size:0.24rem;text-align:center;line-height:0.7rem;}
	.new{
		width:0.54rem;
		height:0.27rem;
		border-radius:0.12rem;
		line-height: 0.26rem;
		position:absolute;
		right:-0.29rem;
		top:0.02rem;
		background:#eb6100;
		color:#fff;
		font-size:0.2rem;
	}
	/*好友助力*/
	.zhuli{
		padding:0.35rem 0;
		background:#fff;
		margin-top:0.2rem;
		display:flex;
	}
	.zhuli img{
		height:2.17rem;
		margin:0 0.73rem;
	}
	.zli{
		width:3.9rem;
	}
	.zl1{
		font-size:0.3rem;
		font-weight:600;
		font-family:"Arial Unicode MS";
		text-overflow: ellipsis;
		overflow:hidden;
		white-space: nowrap;
		margin-bottom:0.22rem;
		height:0.3rem;
		line-height:0.3rem;
	}
	.zl2{
		color:#777;
		font-size:0.22rem;
		line-height:0.24rem;
		margin-bottom:0.22rem;
	}
	.zl2:after{
		content:"8999.00";
		text-decoration: line-through;
	}
	.zl3{
		font-size:0.26rem;
		color:#ff133e;
		margin-bottom:0.3rem;
		font-weight:600;
	}
	.zl4{
		border:0.01rem solid #ff133e;
		width:2.9rem;height:0.52rem;
		border-radius:0.04rem;
	}
	.zl4 div{
		width:0.52rem;height:0.52rem;
		background:#ff133e;
		float:left;
		border-radius:0.04rem;
	}
	.icon-icon-test{
		font-size:0.4rem;
		color:#fff;
		float:left;
		margin-left:0.04rem;
		margin-top:0.04rem;
	}
	.zl4 p{
		font-size:0.26rem;
		color:#ff133e;
		float:left;
		text-align:center;
		width:2.36rem;
		line-height:0.5rem;
	}
	/*新机上线*/
	.gtop{
		height:0.9rem;
		display:flex;
		justify-content: space-between;
		padding:0 0.22rem;
	}
	.gtop h2{
		line-height: 0.9rem;
		margin-left:0.28rem;
		font-size:0.3rem;
		position:relative;
		font-weight:600;
	}
	.gtop h2:before{
		content:"";width:0.1rem;height:0.3rem;
		background:#ffd900;
		display:block;position:absolute;
		top:0.3rem;left:-0.18rem;
	}
	.gtop p{
		color:#33bae8;
		line-height:0.9rem;
		font-size:0.3rem;
	}
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
	.ers,.xin{
		display:flex;
		justify-content:center;
		align-items: center;
	}
	.xin{
		height:2.1rem;
	}
	.ers{
		height:2.5rem;
	}
	.good img{
		height:1.7rem;
	}
	.zhu{
		font-size: 0.1rem;
		line-height:0.2rem;
		color:#652e2d;
		width:2.25rem;
		margin:0 auto;
		margin-bottom:0.04rem;
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
	.jia{
		height:1.2rem;
		background:#fff;
		color:#777;
		text-align:center;
		line-height:1.2rem;
		font-size:0.26rem;
	}
	
	.bott{
		height:1rem;
		overflow:hidden;
	}
	.bott p{
		padding-top:1.9rem;
		font-size:0.2rem;
		line-height:1rem;
		color:#b3b3b3;
		text-align:center;
	}
</style>