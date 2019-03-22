<template>
	<div>
		<div class="box">
			<label for="tex">手机号码：</label>
			<input type="text" placeholder="请输入您的手机号" id="tex" v-model="username"/>
		</div>
		<div class="box1">
			<label for="pas">短信验证：</label>
			<input type="text" placeholder="请输入短信验证码" id="pas" v-model="yzm"/>
			<input type="button" id="btn" :value="val" @click="send($event)" />
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
	name:"LoginB",
	data(){
		return {
			title:"登录",
			val:"发送验证码",
			countdown:60,
			timer : null,
			username:"",
			yzm:""
		}
	},
	methods: {
		login(){
			var _this = this
			if(this.username && this.yzm){
				axios({
					method:"post",
					headers:{'Content-Type':'application/x-www-form-urlencoded'},
					url:"http://localhost:8000/loginB",
					data:Qs.stringify({username:_this.username,yzm:_this.yzm})
				}).then(function(data){
					// console.log(data.data)
					if(data.data == 0){
						alert("该用户不存在！")
					}else if(data.data == 2){
						alert("短信验证码不正确！")
					}else if(data.data == 1){
						sessionStorage.setItem("user",_this.username)
						_this.$router.push("/mine")
					}else{
						alert("未知错误！")
					}
				})
			}
		},
		send(e) {		//发送验证码请求
			var _this = this;
			clearInterval(_this.timer);
			if(/^1(3|4|5|7|8|9)\d{9}$/.test(_this.username)){
				//验证码框的可视效果
				this.timer = setInterval(function(){
					// console.log(_this.countdown)
					if(_this.countdown <= 0){
						e.target.disabled = false
						e.target.style = "";
				        _this.val="发送验证码";
				        _this.countdown = 60;
						clearInterval(_this.timer)
					}else{
						e.target.disabled = true;
						e.target.style = "border-color:#aaa;color:#aaa;"
				        _this.val="重新发送(" + _this.countdown + ")";
				        _this.countdown--;
					}
				},1000)
				//在可点击发送时，请求后台发送短信
				if(e.target.disabled==false){
					axios({
						method:'post',
						headers:{'Content-Type':'application/x-www-form-urlencoded'},
						url:"http://localhost:8000/loginB",
						data:Qs.stringify({phonenum:_this.username,sta:1})
					}).then(function(data){
						console.log(data.data)
					})
				}
			}else{
				alert("请正确填写手机号码！")
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
		right:0.12rem;
		background:none;
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