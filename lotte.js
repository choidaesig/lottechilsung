
        var swiper = new Swiper(".mySwiper", {
            cssMode: true,
            loop: true,
            autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
            pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          keyboard: true,
        });
        $('.start').on('click',function(){
    swiper.autoplay.start();
    return false;
   })
  $('.stop').on('click',function(){
    swiper.autoplay.stop();
    return false;
   });
   	//swiper-swl


   	//mainCon1 Motion
    $(window).scroll(function(){
		//mainCon Motion
		if($(window).scrollTop() > $(".maincon").offset().top - 500){
			TweenMax.to($(".maincon .fixArea .title"), 1, {top:0, opacity:1, ease:Power3.easeOut});
			TweenMax.to($(".maincon .fixArea .text"), 1, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
		}
		if($(window).scrollTop() > $(".maincon .fixArea").offset().top- 10 ){
			TweenMax.to($(".maincon .fixArea"), 2   , {opacity:0, ease:Power3.easeOut});
		}else{
			TweenMax.to($(".maincon .fixArea"), 2, {opacity:1, ease:Power3.easeOut});
		}
        if($(window).width() > 964){
			if($(window).scrollTop() > $(".maincon").offset().top -100){
				TweenMax.to($(".maincon .content .mainone").eq(0), 1, {top:0, opacity:1, delay:0.5, ease:Power3.easeOut});
				TweenMax.to($(".maincon .content .maintwo").eq(1), 1, {top:100, opacity:1, delay:0.8, ease:Power3.easeOut});
				TweenMax.to($(".maincon .content .mainthree").eq(2), 1, {top:40, opacity:1, delay:1.1, ease:Power3.easeOut});
				TweenMax.to($(".maincon .content .mainfour").eq(3), 1, {top:140, opacity:1, delay:1.4, ease:Power3.easeOut});
			}
		}
        
           if($(window).scrollTop() > $(".maincon").offset().top){
	    	$(".maincon .fixArea").addClass("on");
	    	}else{
			$(".maincon .fixArea").removeClass("on");
		}
      		//subcon Motion
        if($(window).scrollTop() > $(".subcon").offset().top ){
			TweenMax.to($(".subcon .fixArea .title"), 1, {top:0, opacity:1,ease:easeOut});
			TweenMax.to($(".subcon .fixArea .text"), 1, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
		}
		if($(window).scrollTop() > $(".subcon .fixArea").offset().top -10){
			TweenMax.to($(".subcon .fixArea"), 2, {opacity:0, ease:Power3.easeOut});
		}else{
			TweenMax.to($(".subcon .fixArea"), 2, {opacity:1, ease:Power3.easeOut});
		}

        if($(window).scrollTop() > $(".subcon").offset().top-200 ){
	    	$(".subcon .fixArea").addClass("on");
		}else{
			$(".subcon .fixArea").removeClass("on");
		}		
    });
    $(function () {
    let lastScrollTop = 0,
        delta = 15;
    $(window).scroll(function (event) {
        let st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $("header").css("top", "-104px");
        } else {
            $("header").css("top", "0px");
        }
        lastScrollTop = st;
    });
});
