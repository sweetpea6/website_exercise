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


  window.onload = function () {
    $('.sliding').each(function () {
      $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta;
        } else if (event.detail) delta = -event.detail / 3;
        var moveTop = null;

        if (delta < 0) {
          if ($(this).next() != undefined) {
            moveTop = $(this).next().offset().top;

          }

        } else {
          if ($(this).prev() != undefined) {
            moveTop = $(this).prev().offset().top;
          }
        }

        $("html,body").stop().animate({
          scrollTop: moveTop + 'px'
        }, {
          duration: 800, complete: function () {
          }
        });
      });
    });
  };

});