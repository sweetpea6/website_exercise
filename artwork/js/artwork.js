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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcnR3b3JrX2FydGpvYl9kZXRhaWxfcGFnZS5qcyIsIl9hcnR3b3JrX2V4aGliaXRfZGV0YWlsX3BhZ2UuanMiLCJfYXJ0d29ya19tYWluLmpzIiwiX2duYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcnR3b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI5LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuZGV0YWlsLWNvbnRlbnQnKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgYXV0b0hpZGVTY3JvbGxiYXI6dHJ1ZSxcclxuICAgICAgdGhlbWU6XCJtaW5pbWFsLWRhcmtcIlxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnRvcC1idXR0b24taW1nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAgJCgnLnNlY3Rpb24xJykub2Zmc2V0KCkudG9wIDtcclxuXHJcbiAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5jb250ZW50cy1saXN0LWl0ZW0tbWFzay10ZXh0JykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2snKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrLXRleHQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcjYnRuJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJykuZGF0YSh7J29wZW4nOiAndHJ1ZSd9KTtcclxuXHJcbiAgICB9IGVsc2V7XHJcblxyXG4gICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJykuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
