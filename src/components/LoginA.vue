<template>
	<div>
		<div class="box">
			<label for="tex">手机号码：</label>
			<input type="text" placeholder="请输入您的手机号" id="tex" v-model="username"/>
		</div>
		<div class="box1">
			<label for="pas">登录密码：</label>
			<input :type="type" placeholder="请输入您的密码" id="pas" v-model="password" />
			<i class="iconfont icon-yanjing" @click="tap()"></i>
		</div>
		<div class="btn">
			<p @click="login()">登  录</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Qs from 'qs';
export default{
	name:"LoginA",
	data(){
		return {
			title:"登录",
			type:"password",
			username:"",
			password:""
		}
	},
	methods: {
		tap(){
			this.type="text"
		},
		login(){
			if(this.username && this.password){
				var _this = this;
				axios({
					method:"post",
					headers:{'Content-Type':'application/x-www-form-urlencoded'},
					url:"http://localhost:8000/loginA",
					data:Qs.stringify({username:_this.username,password:_this.password})
				}).then(function(data){
					if(data.data==1){
						sessionStorage.setItem("user",_this.username)
						_this.$router.push("/mine")
					}else{
						alert("用户名或密码错误！")
					}
				})
			}else{
				alert("请完整填写用户名和密码")
			}
		}
	}
	
}
</script>

<style scoped="">
	
	.box,.box1{
		width:100%;
		height:0.96rem;
		border-bottom:0.02rem solid #e6e6e6;
		display:flex;
		justify-content: space-between;
		align-items: center;
		position:relative;
		background:#fff;
	}
	.box1{
		margin-bottom:0.8rem;
	}
	.icon-yanjing{
		font-size:0.52rem;
		color:#bdbdbd;
		position:absolute;
		right:0.2rem;
		top:0.2rem;
	}
	label,input{
		font-size:0.3rem;
		line-height:0.96rem;
		margin:0;
		padding:0;
		
	}
	label{
		width:2rem;
		text-align:center;
	}
	input{
		width:5.30rem;
		height:0.96rem;
		border:0;
		outline:none;
	}
	
	.btn{
		padding:0 0.2rem;
		height:1rem;
		margin-bottom:0.5rem;
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