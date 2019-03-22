<template>
	
	<div class="find">
		<dl>
			<dd>
				<h2>借钱总是不下款？查查自己有多黑</h2>
				<div class="adv">
					<p>广告</p>
					<span>2018-08-23</span>
				</div>
			</dd>
			<dt><img src="../assets/img/note1.jpg"></dt>
		</dl>
		<dl>
			<dd>
				<h2>草莓商城失信人员曝光台</h2>
				<div class="zuozhe">
					<span>草莓部落</span>
					<span>2018-08-23</span>
				</div>
			</dd>
			<dt><img src="../assets/img/note1.jpg"></dt>
		</dl>
		<dl>
			<dd>
				<h2>关于草莓商城，你想了解的问题都在这里</h2>
				<div class="zuozhe">
					<span>草莓部落</span>
					<span>2018-08-23</span>
				</div>
			</dd>
			<dt><img src="../assets/img/note1.jpg"></dt>
		</dl>
		<dl>
			<dd>
				<h2>关于草莓商城，你想了解的问题都在这里</h2>
				<div class="zuozhe">
					<span>草莓部落</span>
					<span>2018-08-23</span>
				</div>
			</dd>
			<dt><img src="../assets/img/note1.jpg"></dt>
		</dl>
	</div>
	
</template>

<script>
	
export default{
	name:"Find",
	data(){
		return{
			arr:["发现频道",""]
		}
	},
	mounted(){
		this.$emit("toparent",this.arr)
	},
	methods:{
	}
}

	
</script>

<style scoped="">
	.find{
		padding:0 0.2rem;
		background:#fff;
		height:100%;
	}
	dl{
		display:flex;
		justify-content: space-between;
		border-bottom:0.02rem solid #f3f3f3;
		padding:0.15rem 0;
	}
	dd{
		width:4.95rem;
		padding:0.13rem 0;
	}
	dd h2{
		font-size:0.3rem;
		line-height:0.48rem;
		height:0.96rem;
		overflow:hidden;
	}
	.adv{
		font-size:0.24rem;
		padding-top:0.06rem;
		height:0.4rem;
	}
	.adv p{
		float:left;
		width:0.75rem;
		height:0.4rem;
		border:0.02rem solid #ff8259;
		border-radius:0.06rem;
		text-align:center;
		line-height:0.4rem;
		color:#ff8259;
		margin-right:0.3rem;
	}
	.adv span{
		line-height:0.44rem;
		color:#888;
	}
	.zuozhe{
		font-size:0.24rem;
		display:flex;
		justify-content:space-between;
		color:#888;
	}
	.zuozhe span{
		line-height:0.6rem;
	}
	dt{
		height:1.8rem;
		width:1.8rem;
		display:flex;
		justify-content:center;
		align-items: center;
	}
	dt img{
		max-height:1.8rem;
	}
	
</style>