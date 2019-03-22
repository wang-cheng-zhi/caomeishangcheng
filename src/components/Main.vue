<template>
	
	<div id="box">
		
		<header>
			<div>{{title}}</div>
			<span>{{local}}</span>
			<i :class="cla"></i>
		</header>
		
		<section>
			
			<router-view @toparent="getdata"></router-view>
			
		</section>
		
		<footer>
			
			<router-link to="/inde" tag="div"><p></p>首页</router-link>
			<router-link to="/find" tag="div"><p></p>发现</router-link>
			<router-link to="/limit" tag="div"><p></p>额度</router-link>
			<router-link to="/mine" tag="div"><p></p>我的</router-link>
		
		</footer>
		
	</div>
	
</template>

<script>
export default{
	name:"Main",
	data(){
		return{
			title:"草莓商城",
			local:"郑州市",
			cla:""
		}
	},
	methods:{
		getdata(msg){
			this.title = msg[0];
			this.local = msg[1];
			this.cla = msg[2]
		},
		loc(data){
			this.local = data
		}
	}
}
</script>

<style scoped="">
	header span{
		position:absolute;
		left:0.32rem;
		top:0;
	}
	header i{
		position:absolute;
		right:0.3rem;
		top:0;
	}
	.icon-shuaxin{font-size:0.34rem;}
	
	footer{
		height:0.96rem;
		border:0.01rem solid #ccc;
		overflow:hidden;
		background:#fefefe;
	}
	footer div{
		width:25%;
		height:100%;
		float:left;
		text-align: center;
		font-size:0.2rem;
		font-weight:600;
		letter-spacing:0.01rem;
		line-height:0.28rem;
		color:#191919;
	}
	footer p{
		width:0.5rem;
		height:0.5rem;
		margin:0 auto;
		margin-top:0.11rem;
		margin-bottom:0.07rem;
		background:url(../assets/img/caidan.jpg) no-repeat;
		background-size:2rem;
		background-position-y:0;
	}
	footer div:first-child p{background-position-x:0;}
	footer div:nth-child(2) p{background-position-x:-0.5rem;}
	footer div:nth-child(3) p{background-position-x:-1rem;}
	footer div:last-child p{background-position-x:-1.5rem;}
	.router-link-active p{
		background-position-y:-0.5rem;
	}
	
	
	
	
</style>
