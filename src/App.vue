<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
	
export default {
  name: 'App'
}
//@import "./assets/style/iconfont.css"
window.onload = function(){
/*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
   为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
   getRem(750,100)
   };
   window.onresize = function(){
   getRem(750,100)
   };
   function getRem(pwidth,prem){
   var html = document.getElementsByTagName("html")[0];
   var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
	}

</script>

<style>

/*引入图标文字*/


html,body,div,header,footer,section,article,ul,li,h1,h2,h3,h4,h5,h6,dl,dd,dt,p,span,button,input,label{
	margin:0;
	padding:0;
}
li{list-style:none;}
a{text-decoration:none;}
img{display:block;}
#box{
	height:100vh;
	display:flex;
	flex-direction: column;
}
header{
	height:0.88rem;
	background:#ffd900;
	font-size:0.32rem;
	text-align: center;
	line-height:0.88rem;
	font-weight:800;
	letter-spacing:0.03rem;
	position:relative;
}

section{
	flex:1;
	overflow:auto;
	background:#f6f5fa;
	border-bottom:0.01rem solid rgba(85,85,85,0.5);
	border-top:0.01rem solid rgba(85,85,85,0.5);
	
}


</style>
