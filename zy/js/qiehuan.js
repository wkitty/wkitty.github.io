// JavaScript Document
$(document).ready(

function(){
	$("#service_b1").click(
	function(){
		$("#service_b2,#service_b3,#service_b4").removeClass("clicked");
		$(this).addClass("clicked");
		$(".service1").show();
		$(".service2,.service3,.service4").hide();
		}
	);
	$("#service_b2").click(
	function(){
		$("#service_b1,#service_b3,#service_b4").removeClass("clicked");
		$(this).addClass("clicked");
		$(".service1,.service3,.service4").hide();
		$(".service2").show();
		}
	);
	$("#service_b3").click(
	function(){
		$("#service_b1,#service_b2,#service_b4").removeClass("clicked");
		$(this).addClass("clicked");
		$(".service1,.service2,.service4").hide();
		$(".service3").show();
		}
	);
	$("#service_b4").click(
	function(){
		$("#service_b1,#service_b2,#service_b3").removeClass("clicked");
		$(this).addClass("clicked");
		$(".service1,.service2,.service3").hide();
		$(".service4").show();
		}
	);
		
	
});