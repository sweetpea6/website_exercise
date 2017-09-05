/**
 * Created by Administrator on 2017-08-31.
 */

$(function(){

    $('.down-btn').on('click', function(){

      var scrollPosition =  $('.section2').offset().top ;

      $('html, body').stop().animate({
        scrollTop : scrollPosition
      });

    });


  $('.contents-list-item-mask').on('mouseenter', function(){

    $(this).children('.contents-list-item-mask-text').addClass('on');

  });

  $('.contents-list-item-mask').on('mouseleave', function(){

    $(this).children('.contents-list-item-mask-text').removeClass('on');

  });

});