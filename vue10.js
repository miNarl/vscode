var html = new Vue({
	el:"#box",
	data:{
		t1:"",
		t2:"",
		total:"",
		view:"0"
	},
	
	methods:{
		abc:function(){
			this.total = (Number(this.t1) * Number(this.t2)).toLocaleString();
			if(this.total != "" || this.total > 0){
				this.view = 1;
			}
		}
	}	
});