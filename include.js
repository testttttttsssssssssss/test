$(document).ready(function(){
	$(".close").click(function(){
		$(".text").css("opacity", "0");
		$(".img").css("opacity", "1");
		$(".text").css("z-index", "");
	});

	$("#backpack").click(function(){
		$(".text").css("opacity", "1");
		$(".text").css("z-index", "2");
		$(".content").html("小彩：「沒有…我明明記得我帶出門了！」");
		$(".img").css("opacity", "0.5");
	});

	$("#dora").click(function(){
		$(".text").css("opacity", "1");
		$(".text").css("z-index", "2");
		$(".content").html("同學：「你的隨身碟？我沒有印象耶…昨天選修課你有沒有用到？我朋友說你們昨天要存設計圖」");
		$(".img").css("opacity", "0.5");
	});
});
