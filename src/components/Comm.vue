<template>
	<div id="box">
		<header>
			<div>{{tit}}</div>
			<i class="iconfont icon-fanhui" @click="goback()"></i>
		</header>
		<section>
			<router-view @senddata="gettit"></router-view>
		</section>
	</div>
</template>

<script>
export default{
	name:"Comm",
	data(){
		return {
			tit:"注册"
		}
	},
	methods: {
		goback(){
			this.$router.go(-1);
		},
		gettit(msg){
			this.tit = msg;
		},
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
</style>