<template>
	<div>
		<div class="regist">
			<div class="box">
				<label for="tex">手机号码：</label>
				<input type="text" placeholder="请输入您的注册手机号" id="tex" />
			</div>
			<div class="box">
				<label for="pas">验证码：</label>
				<input type="text" placeholder="验证码" id="pas" />
				<input type="button" id="btn" :value="val" @click="send($event)" />
			</div>
			<div class="box">
				<label for="tex1">新密码：</label>
				<input type="text" placeholder="请输入新密码" id="tex1" />
			</div>
			<div class="box">
				<label for="tex2">确认密码：</label>
				<input type="text" placeholder="请确认新密码" id="tex2" />
			</div>
		</div>
		
		<div class="btn">
			<p @click="login()">确  定</p>
		</div>
	</div>
</template>

<script>
export default{
	name:"FindPass",
	data(){
		return {
			tit:"找回密码",
			countdown:60,
			val:"发送验证码"
		}
	},
	methods: {
		
	},
	mounted(){
		this.$emit("senddata",this.tit)
	}
	
}
</script>

<style scoped="">
	.regist{
		width:7.06rem;
		margin:0.28rem auto;
		border:0.02rem solid #e4e3e8;
		border-radius:0.16rem;
		background:#fff;
		overflow:hidden;
	}
	
	.box{
		width:100%;
		height:0.96rem;
		border-bottom:0.02rem solid #e6e6e6;
		display:flex;
		justify-content: space-between;
		align-items: center;
		position:relative;
	}
	.box:last-child{
		border-bottom:0;
	}
	#btn{
		display:block;
		height:0.56rem;
		min-width:1.56rem;
		max-width:1.8rem;
		font-size:0.26rem;
		text-align:center;
		line-height:0.56rem;
		border:0.02rem solid #185ef2;
		border-radius:0.12rem;
		color:#185ef2;
		position:absolute;
		right:0.16rem;
		background:none;
	}
	label,input{
		font-size:0.3rem;
		line-height:0.96rem;
		margin:0;
		padding:0;
		
	}
	label{
		width:1.9rem;
		text-align:right;
	}
	input{
		width:4.88rem;
		height:0.96rem;
		border:0;
		outline:none;
		padding-left:0.1rem;
	}
	
	.btn{
		padding:0 0.2rem;
		height:1rem;
		margin:0.28rem auto;
	}
	p{
		width:7.05rem;
		height:1rem;
		background:#feda02;
		color:#fff;
		text-align:center;
		line-height:1rem;
		font-size:0.3rem;
		border:0;
		border-radius:0.12rem;
	}
	
</style>