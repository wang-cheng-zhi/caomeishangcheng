<template>
	
	<div class="mine">
		<div class="myTop">
			<div class="toux">
				<img src="../assets/img/mine2.jpg" />
			</div>
			
			<button v-if="!user" @click="denglu()">马上登录</button>
			<p v-if="user">{{user}}</p>
		</div>
		<div class="bg"></div>
		<div class="metu">
			<ul>
				<li>
					<div class="left">
						<i class="iconfont icon-qian"></i>
						<span>我要还款</span>
					</div>
					<div class="right">
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
				
				<li>
					<div class="left">
						<i class="iconfont icon-dkw_mianxiquan-"></i>
						<span>我的卡券包</span>
					</div>
					<div class="right">
						<span class="zhu">无优惠券</span>
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
				
				<li>
					<div class="left">
						<i class="iconfont icon-dingdan2"></i>
						<span>订单中心</span>
					</div>
					<div class="right">
						<span class="zhu">查看全部订单</span>
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
			</ul>
			<ul>
				<li>
					<div class="left">
						<i class="iconfont icon-liwu"></i>
						<span>推荐有奖</span>
					</div>
					<div class="right">
						<span class="hongbao">66元红包等你拿<img src="../assets/img/hongbao.jpg"/></span>
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
				
				<li>
					<div class="left">
						<i class="iconfont icon-qiandai-tianchong"></i>
						<span>我的奖励金</span>
					</div>
					<div class="right">
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
				
				<li>
					<div class="left">
						<i class="iconfont icon-huabanfuben"></i>
						<span>我的助力单</span>
					</div>
					<div class="right">
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
			</ul>
			<ul>
				<li>
					<div class="left">
						<i class="iconfont icon-yduidunpaishixin"></i>
						<span>账户管理</span>
					</div>
					<div class="right">
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
				
				<li>
					<div class="left">
						<i class="iconfont icon-qinglihuancun"></i>
						<span>清除缓存</span>
					</div>
					<div class="right">
						<span class="zhu">{{huancun}}MB</span>
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
			</ul>
			<ul>
				<li>
					<div class="left">
						<i class="iconfont icon-guanyuwomen"></i>
						<span>关于我们</span>
					</div>
					<div class="right">
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
				
				<li>
					<div class="left">
						<i class="iconfont icon-dianhua"></i>
						<span>联系我们</span>
					</div>
					<div class="right">
						<span class="number">0574-88325049</span>
						<i class="iconfont icon-xiayibujinruxuanze-"></i>
					</div>
				</li>
			</ul>
			<p v-if="user" class="tuichu" @click="tuichu()">退出登录</p>
		</div>
		
		
	</div>
	
</template>

<script>
	
export default{
	name:"Mine",
	data(){
		return{
			arr:["用户中心",""],
			huancun:"",
			user:sessionStorage.getItem("user")
		}
	},
	mounted(){
		this.$emit("toparent",this.arr)
	},
	methods:{
		denglu(){
			this.$router.push("/login");
		},
		tuichu(){
			sessionStorage.removeItem("user");
			history.go(0)
		}
	}
}

	
</script>

<style scoped="">
	
	.myTop{
		background:#ffd900;
		height:2.43rem;
		padding-top:0.4rem;
	}
	.toux{
		margin:0 auto;
		width:1.58rem;
		height:1.58rem;
		border-radius:50%;
		overflow:hidden;
		margin-bottom:0.2rem;
	}
	.toux img{
		width:1.58rem;
		height:1.58rem;
	}
	.myTop button{
		width:2.38rem;
		height:0.56rem;
		margin:0 auto;
		display:block;
		text-align:center;
		border:0.02rem solid #fff;
		border-radius:0.12rem;
		font-size:0.28rem;
		color:#fff;
		line-height:0.56rem;
		background:none;
	}
	.myTop p{
		text-align:center;
		color:#fff;
		font-size:0.3rem;
		margin:0 auto;
		line-height:0.56rem;
	}
	.bg{
		height:0.59rem;
		background:url(../assets/img/mine1.jpg) no-repeat center top;
		background-size:100%;
	}
	.metu{
		margin-bottom:0.9rem;
	}
	.metu ul{
		padding-top:0.2rem;
	}
	.metu li{
		background:#fff;
		padding:0.2rem 0.3rem;
		margin-bottom:0.04rem;
		font-size:0.28rem;
		height:0.52rem;
	}
	.left{
		float:left;
	}
	.left span{
		margin-left:0.2rem;
		line-height:0.52rem;
	}
	.right{
		float: right;
	}
	.right span{
		font-size:0.26rem;
		line-height:0.52rem;
		color:#838383;
		margin-right:0.25rem;
	}
	
	.right img{
		height:0.52rem;
		float:right;
		margin-left:0.23rem;
	}
	.hongbao{
		float:left;
	}
	.right .number{color:#0062CC;}
	.tuichu{
		width:5.6rem;
		height:0.8rem;
		margin:0 auto;
		background:#fff;
		border:0.02rem solid #ddd;
		border-radius:0.12rem;
		text-align:center;
		line-height:0.8rem;
		font-size:0.3rem;
		color:#F96A4C;
		margin-top:0.3rem;
		font-weight:600;
	}
	
	
	.iconfont{
		font-size:0.38rem;
		line-height:0.52rem;
	}
	.icon-xiayibujinruxuanze-{color:#c7c7c7;font-size:0.28rem;float:right;}
	.icon-qian{color:#ffc90d;}
	.icon-dkw_mianxiquan-{color:#ff664c;}
	.icon-dingdan2{color:#72aefe;}
	.icon-liwu{color:#ff664c;}
	.icon-qiandai-tianchong{color:#ffc90d;}
	.icon-huabanfuben{color:#ff664c;}
	.icon-yduidunpaishixin{color:#3ddda6;}
	.icon-qinglihuancun{color:#72aefe;}
	.icon-guanyuwomen{color:#f96a4c;}
	.icon-dianhua{color:#23e7a5;}
	
</style>