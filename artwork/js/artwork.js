/**
 * Created by Administrator on 2017-08-29.
 */

$(function(){
  $(window).on("load",function(){

    $('.detail-content').mCustomScrollbar({
      autoHideScrollbar:true,
      theme:"minimal-dark"
    });

  });
});
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
/**
 * Created by Administrator on 2017-08-31.
 */

$(function(){

  $('#btn').data({'open' : 'false'}).on('click', function() {

    if ($(this).data('open') == 'false') {

      $('.gnb').addClass('on');
      $(this).addClass('on').data({'open': 'true'});

    } else{

      $('.gnb').removeClass('on');
      $(this).removeClass('on').data({'open': 'false'});

    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcnR3b3JrX2FydGpvYl9kZXRhaWxfcGFnZS5qcyIsIl9hcnR3b3JrX2V4aGliaXRfZGV0YWlsX3BhZ2UuanMiLCJfYXJ0d29ya19tYWluLmpzIiwiX2duYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXJ0d29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yOS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmRldGFpbC1jb250ZW50JykubUN1c3RvbVNjcm9sbGJhcih7XHJcbiAgICAgIGF1dG9IaWRlU2Nyb2xsYmFyOnRydWUsXHJcbiAgICAgIHRoZW1lOlwibWluaW1hbC1kYXJrXCJcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMxLlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy50b3AtYnV0dG9uLWltZycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gICQoJy5zZWN0aW9uMScpLm9mZnNldCgpLnRvcCA7XHJcblxyXG4gICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wIDogc2Nyb2xsUG9zaXRpb25cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxufSk7XHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmRvd24tYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICAkKCcuc2VjdGlvbjInKS5vZmZzZXQoKS50b3AgO1xyXG5cclxuICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICQoJy5jb250ZW50cy1saXN0LWl0ZW0tbWFzaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2stdGV4dCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5jb250ZW50cy1saXN0LWl0ZW0tbWFzay10ZXh0JykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnI2J0bicpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5kYXRhKCdvcGVuJykgPT0gJ2ZhbHNlJykge1xyXG5cclxuICAgICAgJCgnLmduYicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpLmRhdGEoeydvcGVuJzogJ3RydWUnfSk7XHJcblxyXG4gICAgfSBlbHNle1xyXG5cclxuICAgICAgJCgnLmduYicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdvbicpLmRhdGEoeydvcGVuJzogJ2ZhbHNlJ30pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiXX0=
