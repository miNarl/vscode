var b = new Vue({
	el:"#box2",
	data:{
		search:""
	},
	methods:{
		gopage:function(k){
			k.preventDefault();
			if(this.search==""){
				alert("검색할 상품명을 입력해 주세요.");
				//sh.search.focus();	// 2.5 이상의 vue 버전에서 정상작동
				this.$refs.search.focus();	// 2.5 이하의 vue 버전에서 사용해야함
			}
			else{
				sh.submit();
			}
		}
	}
	
});


var a = new Vue ({
	el:"#box",
	data:{
		cp:""	// radio 선택값
	},
	methods:{
		abc:function(z){	// preventDefault => submit 전용
			z.preventDefault();	//return false 동일
			if(this.cp==""){
				alert("쿠폰을 선택해 주세요.");
			}
			else {
				// return false, return true (vue 에는 없음)
				
				f.submit();
			}
		}
	}
	
});