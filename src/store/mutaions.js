import getters from "./getters.js";

var state = {
	count : 0
}

const mutations = {
	remove(state){	
		state.count--;
	}
	add(state){
		state.count++;
	}
}


export default{
	state,
	mutations,
	getters
}