<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue 를 이용한 카운팅 방법 및 bind, on, model(기본)</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<body>
<!-- 
v-on:click = "data변수++ or data변수"-- 사용 시 data 함수에 대한 가상변수 값이 증가, 감소
※ 주의 : 단, data 에서 사용하는 가상변수와 methods 에서 사용하는 메소드명이 같으면 적용이 안됨
 -->

<section id="box">
	<!-- 
	<input v-bind:type="b" v-on:click="numbers++" v-model="btn1">
	<input v-bind:type="b" v-on:click="numbers--" v-model="btn2">
	 -->
	 
	<input v-bind:type="b" v-on:click="btn_numbers('+')" v-model="btn1">
	<input v-bind:type="b" v-on:click="btn_numbers('-')" v-model="btn2">
	<span>{{numbers}}EA</span>
</section>

<section id="box2">
	<select v-on:change="product" v-model="s">
		<option value="">[상품을 선택하세요]</option>
		<option value="167000">모니터 - 167,000</option>
		<option value="120000">키보드 - 120,000</option>
		<option value="100000">마우스 - 100,000</option>
	</select>
	<select v-on:change="product" v-model="ea">
		<option value="">[수량선택]</option>
		<option value="1">1ea</option>
		<option value="2">2ea</option>
		<option value="3">3ea</option>
	</select>
	<div>{{total_number}}</div>
</section>

</body>
<script src="./vue7.js?v=1"></script>
</html>