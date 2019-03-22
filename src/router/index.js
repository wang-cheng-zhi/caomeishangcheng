import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '../components/Main'
import Inde from '../components/Inde'
import Find from '../components/Find'
import Limit from '../components/Limit'
import Mine from '../components/Mine'

import Login from '../components/Login'
import LoginA from '../components/LoginA'
import LoginB from '../components/LoginB'

import Comm from '../components/Comm'
import Regist from '../components/Regist'
import RegProto from '../components/RegProto'
import FindPass from '../components/FindPass'
import Detail from '../components/Detail'
import Note from '../components/Note'
import XList from '../components/XList'
import RList from '../components/RList'
import Xiadan from '../components/Xiadan'
import Zhifu from '../components/Zhifu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/main"
    },
    {
    	path:"/main",//首页、发现、信用、我的
    	component: Main,
    	redirect:"/inde",
    	children:[
    		{path:"/inde",component:Inde},
    		{path:"/find",component:Find},
    		{path:"/limit",component:Limit},
    		{path:"/mine",component:Mine},
    	]
    },
    {
		path: '/login',//两种登录
		component:Login,
		redirect:"/loginA",
		children:[
			{path:"/loginA",component:LoginA},
			{path:"/loginB",component:LoginB},
		]
	},
     {
    	path: '/comm',//注册、找回密码、发现消息、商品列表
    	component:Comm,
		redirect:"/regist",
    	children:[
    		{path:"/regist",component:Regist},
			{path:"/regproto",component:RegProto},
    		{path:"/findpas",component:FindPass},
			{path:"/note",component:Note},
			{path:"/xlist",component:XList},
			{path:"/rlist",component:RList},
			{path:"/xiadan",component:Xiadan},
			{path:"/zhifu",component:Zhifu}
    	]
    },
	{path:"/detail",component:Detail}
  ]
})
