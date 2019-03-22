import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var state = {
	status:false
}

var getters={
	status:function(a){
		return a.status;
	}
}


var mutations={
	
	agree:function(a,b){
		a.status = b
	}
}



var actions = {
	
	agree:({commit},b)=>{
		commit("agree",b)
	}
}



export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})