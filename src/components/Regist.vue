<template>
	<div>
		<div class="regist">
			<div class="box">
				<label for="tex">手机号码：</label>
				<input type="text" placeholder="请输入您的手机号" id="tex" v-model="username"/>
			</div>
			<div class="box">
				<label for="pas">验证码：</label>
				<input type="text" placeholder="验证码" id="pas" v-model="yzm"/>
				<input type="button" id="btn" :value="val" @click="send($event)"/>
			</div>
			<div class="box">
				<label for="tex1">设置密码：</label>
				<input type="text" placeholder="请设置密码,6-16位" id="tex1" v-model="password1"/>
			</div>
			<div class="box">
				<label for="tex2">确认密码：</label>
				<input type="text" placeholder="请确认密码" id="tex2" v-model="password2"/>
			</div>
		</div>
		<div class="proto">
			<input type="checkbox"  :checked="status" id="sele"/>
			<span>阅读并同意</span>
			<span class="pro" @click="xieyi()">《产品服务协议》</span>
		</div>
		<div class="btn">
			<p @click="regis()">注  册{{status}}</p>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapActions} from "vuex";
	import axios from 'axios';
	import Qs from 'qs';
export default{
	name:"Regist",
	data(){
		return {
			tit:"注册",
			countdown:60,
			val:"发送验证码",
			username:"",
			yzm:"",
			password1:"",
			password2:"",
			agree:""
		}
	},
	methods: {
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
						url:"http://localhost:8000/regist",
						data:Qs.stringify({phonenum:_this.username,sta:1})
					}).then(function(data){
						console.log(data.data)
					})
				}
			}else{
				alert("请正确填写手机号码！")
				console.log(_this.username)
			}
			
		},
		xieyi(){
			this.$router.push("/regproto")
			
		},
		//注册按钮
		regis(){
			var sele = document.getElementById("sele");
			var _this = this
			if(this.password1==this.password2 && this.password1){
				if(sele.checked){
					axios({
						method:"post",
						headers:{'Content-Type':'application/x-www-form-urlencoded'},
						url:"http://localhost:8000/regist",
						data:Qs.stringify({username:_this.username,password:_this.password1,yzm:_this.yzm})
					}).then(function(data){
						// console.log(data.data)
						if(data.data == 0){
							alert("该号码已被注册！")
						}else if(data.data == 2){
							alert("短信验证码不正确！")
						}else if(data.data == 1){
							alert("恭喜您已注册草莓商城！请登录！")
							_this.$router.push("/loginA")
						}else{
							alert("未知错误！")
						}
					})
				}else{
					alert("请阅读并同意注册协议！")
				}
			}else{
				alert("请正确填写密码！")
			}
		}
	},
	mounted(){
		this.$emit("senddata",this.tit)
	},
	computed:{
		...mapGetters(["status"])
		
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
	
	
	.proto{
		width:7rem;
		height:0.6rem;
		margin:0 auto;
		font-size:0.28rem;
		display:flex;
		align-items:center;
	}
	.proto input{
		margin-right:0.1rem;
		-webkit-appearance:none;
		width:0.31rem;
		height:0.3rem;
		background:url(../assets/img/check.jpg) no-repeat left top;
		background-size:cover;
	}
	.proto input:checked{
		background-position-x:-0.31rem;
	}
	.pro{
		color:#0069D9;
	}
</style>