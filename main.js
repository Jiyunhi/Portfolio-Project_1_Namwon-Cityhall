//팝업영역
	//팝업슬라이드, 페이지 슬라이드
	var n = 0;
	function pp() {
		n++;
		if (n >= 2) { n=0; };
		$(".pslide li").eq(n).addClass("top").css({"opacity":0}).animate({"opacity":1},300).siblings().removeClass("top");

		$(".page1 p").eq(n).addClass("on").siblings().removeClass("on"); 
	}

	var timer = setInterval("pp()",5000);

	//페이지 슬라이드 누르면 변경
			$(".page1 p").click(function(){
				n = $(this).index()-1;
				pp();
			});

	//마우스 올렸을때 잠시 멈춤
	$(".pslide").hover(
		function(){
			clearInterval(timer);
		},
		function(){
			timer = setInterval("pp()",5000);
		}
	);

	// 팝업 슬라이드 화살표
	$(".next").click(function(){
		pp();
	});

	$(".prev").click(function(){
		n--;
		if (n < 0) {
			n=1;	
		} 
		$(".pslide li").eq(n).addClass("top").css({"opacity":0}).animate({"opacity":1},300).siblings().removeClass("top");

		$(".page1 p").eq(n).addClass("on").siblings().removeClass("on");
	});


	// 팝업 재생, 일시멈춤
	$(".page2 .pagestop").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		clearInterval(timer);
	});
	$(".page2 .pageplay").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		setInterval(timer);
	});

	//팝업 열기/닫기
	$("header .r_comhead .popupbtn p button").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$("#popup").slideToggle(500);
	});

//l_comhead부분
	$( ".l_comhead .ul1 > li" ).on("mouseover", function(){ 
		if(bw>800){
		$(this).addClass("on").siblings("li").removeClass("on");}
	}); 
	$( ".l_comhead .ul1 > li" ).on("mouseleave", function(){
		if(bw>800){
		$(this).removeClass("on").siblings("li:first-child").addClass("on");
		}
	});

	//r_comhead의 lang부분
	$(".r_comhead ul .lang").click(function(){
		if(bw>800){
		$(this).children(".langli").slideToggle(500);}
	});

var bw = $("body").width();
console.log(bw);
$(window).resize(function(){
	bw = $("body").width();
});

//gnb부분
	$(".nav .tnav > .li").on("mouseover", function(){
		if(bw>800){
		$(this).children("a").css({"color":"#f1628e"});
		$(this).children(".s_nav").stop().slideDown(200);}
	});
	$(".nav .tnav > .li").on("mouseleave", function(){
		if(bw>800){
		$(this).children("a").css({"color":"#555"});
		$(this).children(".s_nav").stop().css({"display":"none"});}
	});

	$(".twrap > li").hover(
				function(){
				$(this).children("a").css({"color":"#f1628e"});	
				$(this).children("a").children("span").css({"background-position":"0 6px"});	
				}, function(){ 
					$(this).children("a").css({"color":"#555"});
					$(this).children("a").children("span").css({"background-position":"0 -40px"});	
			});
	$(".twrap > li > .mtli > .mtlili ").hover(
				function(){
				$(this).css({"color":"#f1628e"});
				$(this).children("a").css({"background-position":"0 12px"});	
				}, function(){ 
					$(this).css({"color":"#555"});
					$(this).children("a").css({"background-position":"0 -34px"});	
			});

	$(".twrap > .mt3_2 > .mtli > .rnw ").hover(
				function(){
				$(this).css({"color":"#009ee4"});	
				}, function(){ 
					$(this).css({"color":"#555"});
			});
	$(".twrap > .mt1_2 > .mtli > .rnw ").hover(
				function(){
				$(this).css({"color":"#f1628e"});	
				}, function(){ 
					$(this).css({"color":"#555"});
			});

//전체메뉴 아이콘
	$(".nav .tnav > .all").hover(
				function(){
				$(this).children("a").children(".burgerline").children(".burger1").css({"transform":"translateX(0px) translateY(6px) rotate(-90deg)", "width":"3px","height":"3px"});	
				$(this).children("a").children(".burgerline").children(".burger2").css({"transform":"translateX(6px)rotate(-90deg)", "width":"3px","height":"3px"});	
				$(this).children("a").children(".burgerline").children(".burger3").css({"transform":"translateX(12px) translateY(-6px) rotate(-90deg)", "width":"3px","height":"3px"});	
				}, function(){ 
					$(this).children("a").children(".burgerline").children(".burger1").css({"transform":"translateX(0px) translateY(0px) rotate(0deg)", "width":"18px","height":"2px"});	
				$(this).children("a").children(".burgerline").children(".burger2").css({"transform":"translateX(0px)rotate(0deg)", "width":"18px","height":"2px"});	
				$(this).children("a").children(".burgerline").children(".burger3").css({"transform":"translateX(0px) translateY(0px) rotate(0deg)", "width":"18px","height":"2px"});	
			});
//퀵메뉴
	$("#main .quick .q_bnt").click(function(){
		$(this).parent(".quick").toggleClass("on");
	});
    //아이콘 mouseon
    $("#main .quick .q_box .q_icon ul li").on("mouseover", function(){
        $(this).children("a").css({"background-color":"#fff"});
    });
    $("#main .quick .q_box .q_icon ul li").on("mouseleave", function(){
        $(this).children("a").css({"background-color":"#f4f4f8"});
    });

//탭: 공통메뉴

$(document).on("click",".common li:last-child",function(){
	$(".common").append($(".common li:first-child"));
	$(".common li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
	var i = $(this).attr("data-div");
	$(".tab").removeClass("on");
	$("#"+i).addClass("on");

});

$(document).on("click",".common li:first-child",function(){
	$(".common").prepend($(".common li:last-child"));
	$(".common li:nth-child(2)").addClass("on").siblings("li").removeClass("on");
	var i = $(this).attr("data-div");
	$(".tab").removeClass("on");
	$("#"+i).addClass("on");
});


// 탭 - 문화관광부분


// 탭 - 행정 소식부분

	//l_s_info 슬라이드
		var num = 1;
			function ls() {
				num++;
				if(bw>800){
				if (num >9) { num = 1 };
				$(".l_s_info .slidenav .count .p_count").text(num+" ");
				$( ".l_s_info > .slide").animate({"left":-830},1000, function(){
				$(".l_s_info >.slide").append($(".l_s_info >.slide > li:first-child")).css("left",0);
				});};
				
				if(bw<801){
				if (num >9) { num = 1 };
				$(".l_s_info .slidenav .count .p_count").text(num+" ");
				$( ".l_s_info > .slide").animate({"left":"-100%"},1000, function(){
				$(".l_s_info >.slide").append($(".l_s_info >.slide > li:first-child")).css("left",0);
				});};
			}
		var lsinfo = setInterval("ls()",4000);	

			$(".l_s_info > .slide > li").hover(function(){
				clearInterval(lsinfo);
			}, function(){
				lsinfo = setInterval("ls()",4000);
			});

		// 슬라이드 화살표 클릭시 이동
		$(".l_s_info > .slidenav .prev").click(function(){
			num--;
			if(bw>800){
			if (num < 1) { num=9};
			$(".l_s_info .slidenav .count .p_count").text(num+" ");
			$(".l_s_info > .slide").css({"left":-830}).prepend($(".l_s_info > .slide > li:last-child")).animate({"left":"0"},1000);};
			clearInterval(lsinfo);
			lsinfo = setInterval("ls()",4000);
			
			if(bw<801){
			if (num < 1) { num=9};
			$(".l_s_info .slidenav .count .p_count").text(num+" ");
			$(".l_s_info > .slide").css({"left":"-100%"}).prepend($(".l_s_info > .slide > li:last-child")).animate({"left":"0"},1000);};
			clearInterval(lsinfo);
			lsinfo = setInterval("ls()",4000);
		}); 

		$(".l_s_info > .slidenav .next").click(function(){
			ls();
			clearInterval(lsinfo);
			lsinfo = setInterval("ls()",4000);
		});

		// 슬라이드 재생, 일시멈춤
		$(".l_s_info .slidenav .stop").click(function(){
			$(this).addClass("off").siblings(".play").removeClass("off");
			clearInterval(lsinfo);
		});
		$(".l_s_info .slidenav .play").click(function(){
			$(this).addClass("off").siblings(".stop").removeClass("off");
			lsinfo = setInterval("ls()",4000);
			});

	//n_place 슬라이드
		var pnum = 1;
			function np(){
				pnum++;
                if(bw>800){
				if (pnum > 12) { pnum = 1 };
				$(".n_place .slidenav .count .p_count").text(pnum+" ");
				$( ".n_place > .n_slide").animate({"left":-326},500, function(){
				$(".n_place >.n_slide").append($(".n_place >.n_slide > li:first-child")).css("left",0);
				});};
                
                if(bw<801){
				if (pnum > 12) { pnum = 1 };
				$(".n_place .slidenav .count .p_count").text(pnum+" ");
				$( ".n_place > .n_slide").animate({"left":"-100%"},500, function(){
				$(".n_place >.n_slide").append($(".n_place >.n_slide > li:first-child")).css("left",0);
				});};
			}
		var nps = setInterval("np()",3000);	

		// 슬라이드 화살표 클릭시 이동
		$(".n_place > .slidenav .prev").click(function(){
			pnum--;
            if(bw>800){
			if (pnum < 1) { pnum=12};
			$(".n_place .slidenav .count .p_count").text(pnum+" ");
			$(".n_place > .n_slide").prepend($(".n_place > .n_slide > li:last-child")).css({"left":"-326"}).animate({"left":"0"},3000);};
            
            if(bw<801){
            if (pnum < 1) { pnum=12};
			$(".n_place .slidenav .count .p_count").text(pnum+" ");
			$(".n_place > .n_slide").prepend($(".n_place > .n_slide > li:last-child")).css({"left":"-100%"}).animate({"left":"0"},3000);};
            
			clearInterval(nps);
			nps = setInterval("np()",3000);
		});

		$(".n_place > .slidenav .next").click(function(){
			np();
			clearInterval(nps);
			nps = setInterval("np()",3000);
		});

		// 슬라이드 재생, 일시멈춤
		$(".n_place .slidenav .stop").click(function(){
			$(this).addClass("off").siblings(".play").removeClass("off");
			clearInterval(nps);
		});
		$(".n_place .slidenav .play").click(function(){
			$(this).addClass("off").siblings(".stop").removeClass("off");
			nps = setInterval("np()",3000);
			});

		$(".n_place > .slide > li").hover(function(){
			clearInterval(nps);
		}, function(){
			nps = setInterval("np()",3000);
		});

//notice 부분
	//l_notice 부분

	//탭메뉴 클릭시 탭 이동, 화살표 클릭시 탭 이동
	var bn =1;
	$(".notice .l_notice .btn .next").click(function(){
	bn++;
		if (bn>7){bn=1};
		$("#ntc"+bn).addClass("select").siblings(".ntc").removeClass("select");
		$(".nt"+bn).addClass("on").siblings(".nt").removeClass("on");
	});

	$(".notice .l_notice .btn .prev").click(function(){
	bn--;
		if (bn<1){bn=7};
		$("#ntc"+bn).addClass("select").siblings(".ntc").removeClass("select");
		$(".nt"+bn).addClass("on").siblings(".nt").removeClass("on");
	});

	$(".notice .l_notice .nt h3").click(function(){
		$(this).parent().addClass("on").siblings(".nt").removeClass("on");
		bn = $(this).parent().attr("data-nt");
		$("#ntc"+bn).addClass("select").siblings(".ntc").removeClass("select");
	});

    //l_photo 부분 
    $(".l_photo ul li a").on("mouseover", function(){
		$(this).children("p").css({"text-decoration":"underline"});
		$(this).parent().siblings("li").children("a").children("p").css({"text-decoration":"none"});
	});
	$(".l_photo ul li a").on("mouseleave", function(){
		$(this).children("p").css({"text-decoration":"none"});
		$(this).parent().siblings("li").children("a").children("p").css({"text-decoration":"none"});
	});
// 탭 - 생활 민원부분


// 푸터 배너 부분
	//배너 화살표 클릭시 이동
	$(".bnrtitle > ul > li > .prev").click(function(){
		$(".bnrli > ul").css({"left":"-190px"}).prepend($(".bnrli > ul > li:last-child")).animate({"left":"0"},300);
	}); 

	$(".bnrtitle > ul > li > .next").click(function(){
		$(".bnrli > ul").animate({"left":"-190px"},300,function(){
		$(".bnrli >ul").append($(".bnrli > ul > li:first-child")).css({"left":"0"});}
		);
	});
	// 배너 재생, 일시멈춤
		$(".bnrtitle ul .stop").click(function(){
			$(this).addClass("off").siblings(".play").removeClass("off");
			clearInterval(bnrset);
		});
		$(".bnrtitle ul .play").click(function(){
			$(this).addClass("off").siblings(".stop").removeClass("off");
			bnrset = setInterval("bs()",2000);
		});
	// 배너 무한순차
	function bs(){
		$( ".bnrli > ul").animate({"left":-190},1000, function(){
			$(".bnrli >ul").append($(".bnrli > ul > li:first-child")).css("left",0);	
		});
	}

	var bnrset = setInterval("bs()",2000);	

		$(".bnrli > ul > li").hover(function(){
			clearInterval(bnrset);
		}, function(){
			bnrset = setInterval("bs()",2000);
		});



//모바일
	//l_comhead
	$("#comhead .l_comhead .fs .ml_comhead" ).click(function(){
		if(bw<801){
		$(".l_comhead .ulwrap").toggleClass("show_l");
		$("#gnb .nav").removeClass("show_r");}
	});
	
	$(".nav .tnav > .li > a").click(function(){ 
		if(bw<801){
		$(this).parent().children(".s_nav").stop().slideToggle(200);
		$(this).parent().siblings(".li").children(".s_nav").stop().slideUp(200);
		}
	});
	$(".mgnb").click(function(){ 
		if(bw<801){
		$(this).siblings("#gnb").children(".nav").toggleClass("show_r");
		$(".l_comhead .ulwrap").addClass("show_l");}
	});

	//모바일 .lang 부분
    $(".l_comhead .ulwrap .mul2 .lang").click(function(){
		if(bw<801){
		$(this).children(".langli").slideToggle(500);}
	});

	$(".nav .s_nav  .wrap .twrap li > a").click(function(){ 
		if(bw<801){
		$(this).siblings(".mtli").stop().slideToggle(200);
		$(this).parent().siblings("li").children(".mtli").stop().slideUp(200);
		}
	});

// 탭 - 행정 소식부분
				
