

  const swiper = new Swiper( '.swiper', {
    
    direction: 'vertical',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  } );

  function mouseclick(){
      
  }

  function mouseout() {
    title.innerText = "mouseout!";
    title.style.color = "red";
  }
  function mouseresize() {
    title.innerText = "green power";
    document.body.style.backgroundColor = "green";
  }
  function mouseright() {
    title.innerText = "pink love it!";
    document.body.style.color = "pink";
  }
  
  title.addEventListener("mouseenter", mouseenter);
  title.addEventListener("mouseleave", mouseout);
  window.addEventListener("resize", mouseresize);
  window.addEventListener("contextmenu", mouseright);