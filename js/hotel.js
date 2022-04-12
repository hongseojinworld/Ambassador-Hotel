$(document).ready(function(){

       //스크롤바 내리면 .nav-menu 백그라운드가 베이지로 변경
       $(window).scroll(function(){
      
        if($(window).scrollTop() > 300){
          $('.header-area').addClass('active');
          $('.logo').addClass
        }else{
          $('.header-area').removeClass('active');
          $('.logo').removeClass('active');
        }
      });

    //   sub-menu 슬라이드 
      $('.menu li').mouseenter(function(){
        var result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');

        $('#' + result).addClass('active');

        $('.sub-menu-box').stop().slideDown().addClass('active');
        $('.menu li a').css('color','#000');
    });
      $('.sub-menu-box').mouseleave(function(){
        //서브메뉴박스에서 마우스가 리브되야 메뉴가 없어짐
        $(this).stop().slideUp().removeClass('active');
        $('.menu li a').css('color','#fff');
    });

    // swiper 슬라이드
    var swiper = new Swiper(".mySwiper", {
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
 
   
    
         //최상단 이동 버튼
         var but=$('#top-btn');
         $(window).scroll(function(){
             if($(window).scrollTop() > 300){
                 but.addClass('show');
             }else{
                 but.removeClass('show');
             }
         });
         but.on('click',function(e){
             e.preventDefault();
             $('html,body').animate({
                 scrollTop:0
             },300);
         });
});
// end
