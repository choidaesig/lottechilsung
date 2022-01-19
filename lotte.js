	//mainCon1 Motion
  if($(window).scrollTop() > $(".maintext").offset().top - 500){
    TweenMax.to($(".maintext .bigtext"), 1, {top:0, opacity:1, ease:Power3.easeOut});
    TweenMax.to($(".maintext .smalltext"), 1, {top:0, opacity:1, delay:0.3, ease:Power3.easeOut});
  }
  if($(window).scrollTop() > $(".maintext").offset().top + 300){
    TweenMax.to($(".maintext"), 1, {opacity:0, ease:Power3.easeOut});
  }else{
    TweenMax.to($(".maintext"), 1, {opacity:1, ease:Power3.easeOut});
  }
  if($(window).scrollTop() > $(".maintext").offset().top){
    $(".maintext").addClass("on");
  }else{
    $(".maintext").removeClass("on");
  }