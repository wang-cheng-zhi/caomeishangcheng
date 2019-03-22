<template>
	<div>
		信息详情
	</div>
</template>

<script>
export default{
	name:"Note",
	data(){
		return {
			tit:"发现频道"
		}
	},
	methods: {
		
	},
	mounted(){
		this.$emit("senddata",this.tit)
	}
	
}
</script>

<style>
</style>
