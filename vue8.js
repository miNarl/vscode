// FHD(28"), UHD(28"), QHD(28"), 4K, 8K
var code = new Vue ({
	el:"#box",
	data:{
		user:a,	// js 에서 넘어오는 back-end 변수값을 vue 가상변수에 적용
		money:point,
		texts:"[45인치]UHD 모니터",
		htmls:"<ul><li>공지사항1</li><li>공지사항2</li></ul>",
		lists:""
	},
	methods:{
		ok:function(){
			var w = 0;
			while(w < 5){
				this.lists += "<li>게시물"+w+"</li>";
				w++;
			}
		}
	}
});