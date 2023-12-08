<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue radio 활용법 및 submit 사용법</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
<!-- 
v-model 을 사용 시 checked 속성이 적용불가 => vue 에서 data 가상변수값에
value 값과 동일한 값을 적용하면, 자동으로 checked 가 설정되어짐 (checkbox 도 동일)
 -->
<section id="box">
<!-- submit 사용 시 vue 컨테이너 안에 form을 적용해야만 정상작동함 -->
<form id="f" method="get" action="./vue5.jsp" v-on:submit="abc">
	<input type="radio" name="coupon" value="신규" v-model="cp" >신규가입쿠폰<br>
	<input type="radio" name="coupon" value="10" v-model="cp">10% 할인쿠폰<br>
	<input type="radio" name="coupon" value="3000" v-model="cp">택배비 무료쿠폰<br>
	<input type="submit" value="쿠폰적용" >
</form>
</section>

<!-- 상품검색 응용편 -->
<section id="box2">
	<form id="sh" method="get" action="./vue5.jsp" v-on:submit="gopage">
		상품검색 : <input type="text" name="search" ref="search" v-model="search">
		<button>검색</button>	<!-- 기본타입 : submit -->
	</form>
</section>


</body>
<script src="./vue5.js?v=1"></script>
</html>