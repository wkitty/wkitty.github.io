// JavaScript Document
$(document).ready(function(){
		$(".imgbtn img").eq(0).click(function(){
			
			$(".js1,.js2,.js3,.js4").fadeOut(1000);
			$(".js1").fadeIn(1500);
		});
		$(".imgbtn img").eq(1).click(function(){
			$(".js1,.js2,.js3,.js4").fadeOut(1000);
			$(".js2").fadeIn(1500);
		});
		$(".imgbtn img").eq(2).click(function(){
			$(".js1,.js2,.js3,.js4").fadeOut(1000);
			$(".js3").fadeIn(1500);
		});
		$(".imgbtn img").eq(3).click(function(){
			$(".js1,.js2,.js3,.js4").fadeOut(1000);
			$(".js4").fadeIn(1500);
		});
});