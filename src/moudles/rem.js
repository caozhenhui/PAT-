/*
	author:CaoZhenHui
	function:rem计算
	Last Update:2018-11-20
*/
document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75+"px";
window.onload = function(){
	window.onresize=function(){
		document.documentElement.style.fontSize = document.documentElement.clientWidth/3.75+"px";
	};
}