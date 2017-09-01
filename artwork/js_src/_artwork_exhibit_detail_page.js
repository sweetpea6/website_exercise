/**
 * Created by Administrator on 2017-08-31.
 */
$(function(){
  $('.top-button-img').on('click', function(){

    var scrollPosition =  $('.section1').offset().top ;

    $('html, body').stop().animate({
      scrollTop : scrollPosition
    });

  });
});
