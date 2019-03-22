<template>
	
	
	
</template>

<script>
	
export default{
	name:"Limit",
	data(){
		return{
			arr:["信用额度","","iconfont icon-shuaxin"]
		}
	},
	mounted(){
		this.$emit("toparent",this.arr)
		
	},
	methods:{
	}
}

	
</script>

<style>
</style>