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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcnR3b3JrX2FydGpvYl9kZXRhaWxfcGFnZS5qcyIsIl9hcnR3b3JrX2V4aGliaXRfZGV0YWlsX3BhZ2UuanMiLCJfYXJ0d29ya19tYWluLmpzIiwiX2duYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFydHdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjkuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQod2luZG93KS5vbihcImxvYWRcIixmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5kZXRhaWwtY29udGVudCcpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICBhdXRvSGlkZVNjcm9sbGJhcjp0cnVlLFxyXG4gICAgICB0aGVtZTpcIm1pbmltYWwtZGFya1wiXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMS5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcudG9wLWJ1dHRvbi1pbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICAkKCcuc2VjdGlvbjEnKS5vZmZzZXQoKS50b3AgO1xyXG5cclxuICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcCA6IHNjcm9sbFBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5kb3duLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAgJCgnLnNlY3Rpb24yJykub2Zmc2V0KCkudG9wIDtcclxuXHJcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wIDogc2Nyb2xsUG9zaXRpb25cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAkKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2snKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrLXRleHQnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb250ZW50cy1saXN0LWl0ZW0tbWFzaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2stdGV4dCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4gIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcuc2xpZGluZycpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLm9uKFwibW91c2V3aGVlbCBET01Nb3VzZVNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgZGVsdGEgPSAwO1xyXG4gICAgICAgIGlmICghZXZlbnQpIGV2ZW50ID0gd2luZG93LmV2ZW50O1xyXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XHJcbiAgICAgICAgICBkZWx0YSA9IGV2ZW50LndoZWVsRGVsdGEgLyAxMjA7XHJcbiAgICAgICAgICBpZiAod2luZG93Lm9wZXJhKSBkZWx0YSA9IC1kZWx0YTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbCkgZGVsdGEgPSAtZXZlbnQuZGV0YWlsIC8gMztcclxuICAgICAgICB2YXIgbW92ZVRvcCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgIGlmICgkKHRoaXMpLm5leHQoKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgbW92ZVRvcCA9ICQodGhpcykubmV4dCgpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoJCh0aGlzKS5wcmV2KCkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG1vdmVUb3AgPSAkKHRoaXMpLnByZXYoKS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiaHRtbCxib2R5XCIpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgIHNjcm9sbFRvcDogbW92ZVRvcCArICdweCdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBkdXJhdGlvbjogODAwLCBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcjYnRuJykuZGF0YSh7J29wZW4nIDogJ2ZhbHNlJ30pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGlmICgkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnKSB7XHJcblxyXG4gICAgICAkKCcuZ25iJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJykuZGF0YSh7J29wZW4nOiAndHJ1ZSd9KTtcclxuXHJcbiAgICB9IGVsc2V7XHJcblxyXG4gICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ29uJykuZGF0YSh7J29wZW4nOiAnZmFsc2UnfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
