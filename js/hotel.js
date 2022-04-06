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
 
    // $('.sub-menu-box').mouseleave(function(){
    //     //서브메뉴박스에서 마우스가 리브되야 메뉴가 없어짐
    //     $(this).stop().slideUp().removeClass('active');
    //     $('.menu li a').css('color','#fff');
    // });

    //   $(function(){
    //     let auto;
    //     // mask내부에서 보여지는 이미지의 가로값 가져오기
    //     const imgWidth=$('#imgWrap').children('img').width();
    //     console.log(imgWidth);

    //     //다음버튼
    //     $('#next').click(()=>{
    //         $('#imgWrap').stop().animate({
    //             left:-imgWidth
    //         },()=>{
    //             //좌측 좌표를 원점으로 설정
    //             $('#imgWrap').css({
    //                 left:0
    //                 //첫번째 img요소를 안쪽 뒤로 계속 보내기
    //             }).find('img').first().appendTo('#imgWrap');
    //         });    
    //     });
    //     //이전버튼
    //     $('#prev').click(()=>{
    //         //마지막 img요소를 앞으로 보내어 대기되어 있는 상태 만들기
    //         $('#imgWrap').css('transform',`translateX(-${imgWidth}px)`).find('img').last().prependTo('#imgWrap');
    //         $('#imgWrap').stop().animate({
    //                 left:imgWidth
    //         },()=>{
    //             $('#imgWrap').css({
    //                 left:0,
    //                 transform:'translateX(0px)'
    //             });
    //         });  
    //     });
    //     $('.but').hover(()=>{
    //         //mouseenter시 타이머함수 제거
    //         clearInterval(auto);
    //     },()=>{
    //         //mouseleave시 다시 함수 호출
    //         time();
    //     });
    //     //자동갤러리
    //     //=>1초마다 #next버튼을 클릭하도록 하기
    //     function time(){
    //         auto=setInterval(()=>{
    //             $('#next').trigger('click');
    //         },2800);
    //     }
    //     time();
    // });

    
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
