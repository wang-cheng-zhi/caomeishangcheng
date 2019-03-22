<template>
	<div id="box">
		<header>
			<div>登录</div>
			<i class="iconfont icon-fanhui" @click="goback()"></i>
		</header>
		
		<section>
			<ul>
				<router-link to="loginA" tag="li">密码登录</router-link>
				<router-link to="loginB" tag="li">短信登录</router-link>
			</ul>
			<div class="login">
				<router-view></router-view>
			</div>
			
			
				
			<div class="rout">
				<router-link to="/findpas" tag="span">忘记密码</router-link>
				<span>|</span>
				<router-link to="/regist" tag="span">立即注册</router-link>
			</div>
		
			
		</section>
		
	</div>
	
</template>

<script>
export default{
	name:"Login",
	data(){
		return {
			
		}
	},
	methods: {
		login(){
			this.$router.push("/inde")
		},
		goback(){
			this.$router.go(-1);
		}
	}
	
}
</script>

<style scoped="">
	header i{
		position:absolute;
		left:0.45rem;
		top:0;
		font-size:0.36rem;
	}
	
	ul{
		display:flex;
		height:0.91rem;
		background:#fff;
	}
	li{
		width:50%;
		height:0.87rem;
		border-bottom:0.02rem solid #e4e4e4;
		font-size:0.3rem;
		text-align:center;
		line-height:0.86rem;
	}
	
	.rout{
		display:flex;
		justify-content:center;
		align-items:stretch;
		flex-wrap: nowrap;
	}
	.rout span{
		font-size:0.28rem;
		color:#5f5e63;
		padding:0 0.15rem;
	}
	.router-link-active{
		border-bottom:0.04rem solid #2468fb;
	}
</style>