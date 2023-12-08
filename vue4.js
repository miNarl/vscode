let html = new Vue ({
	el:"#box",
	data:{
		search:"",
		subject:[] // v-model 이 같은 이름일 경우 배열기호로 받으면 배열값으로 저장됨
	},
	methods:{
		
	}
	
});

let html2 = new Vue ({
	el:"#box2",
	data:{
		agree:"",
		
	},
	methods:{
		aaa:function(){
			if(this.agree==""){
				alert("동의함에 체크 하셔야 합니다.");
				f.submit();
			}
			else{
				// this.agree = "Y";
				f.submit();
				alert("동의 완료 되었습니다.");
			}
		}
	}
	
});