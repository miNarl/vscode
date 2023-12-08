let html = new Vue({	// vue 사용 이유 => 실시간 데이터 반영가능
	el:"#box",
	data:{
		t1:"",
		t2:"",
		p:"숫자를 입력하세요",
		total:""
	},
	methods:{
		abc:function(){	// vue 의 html 사용자 입력값은 기본이 문자형식임
			// this => 모든 data함수를 지칭
			this.total = Number(this.t1) + Number(this.t2);	 // 꼭 this를 사용해야함
			
		}
	}
});

let quiz = new Vue({
	el:"#box2",
	data:{
		code:"",	// 사용자 입력값
		ori:"0123456",	//발급된 보안코드
		msg : ""	// 메세지 출력 변수
		
	},
	methods:{
		ck:function(){
			if(this.code == ""){
				this.msg = "보안코드를 입력하세요.";
			}
			else{
				if(this.code == this.ori){
					this.msg = "보안코드를 확인 하였습니다.";
				}
				else{
					this.msg = "해당 보안코드가 잘못 되었습니다.";
				}
			}
		}
	}
	
});