/**
 * Created by Administrator on 2017-08-29.
 */

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcnR3b3JrX2FydGpvYl9kZXRhaWxfcGFnZS5qcyIsIl9hcnR3b3JrX2V4aGliaXRfZGV0YWlsX3BhZ2UuanMiLCJfYXJ0d29ya19tYWluLmpzIiwiX2duYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXJ0d29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yOS5cclxuICovXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMS5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcudG9wLWJ1dHRvbi1pbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICAkKCcuc2VjdGlvbjEnKS5vZmZzZXQoKS50b3AgO1xyXG5cclxuICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcCA6IHNjcm9sbFBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2snKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrLXRleHQnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5jb250ZW50cy1saXN0LWl0ZW0tbWFzaycpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2stdGV4dCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMS5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJyNidG4nKS5kYXRhKHsnb3BlbicgOiAnZmFsc2UnfSkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgaWYgKCQodGhpcykuZGF0YSgnb3BlbicpID09ICdmYWxzZScpIHtcclxuXHJcbiAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKS5kYXRhKHsnb3Blbic6ICd0cnVlJ30pO1xyXG5cclxuICAgIH0gZWxzZXtcclxuXHJcbiAgICAgICQoJy5nbmInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnb24nKS5kYXRhKHsnb3Blbic6ICdmYWxzZSd9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
