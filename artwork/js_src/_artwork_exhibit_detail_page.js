/**
 * Created by Administrator on 2017-08-31.
 */
$(function(){
  $('.top-button-img').on('click', function(e){

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition =  $(href).offset().top ;

    $('html, body').stop().animate({
      scrollTop : scrollPosition
    });

  });
});
