/**
 * Created by Administrator on 2017-08-29.
 */

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

var e = document.getElementById('btn');

e.addEventListener('click', function() {
  if (this.className == 'on') this.classList.remove('on');
  else this.classList.add('on');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcnR3b3JrX2FydGpvYl9kZXRhaWxfcGFnZS5qcyIsIl9hcnR3b3JrX2V4aGliaXRfZGV0YWlsX3BhZ2UuanMiLCJfYXJ0d29ya19tYWluLmpzIiwiX2duYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFydHdvcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjkuXHJcbiAqL1xyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLnRvcC1idXR0b24taW1nJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gICQoaHJlZikub2Zmc2V0KCkudG9wIDtcclxuXHJcbiAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMxLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5jb250ZW50cy1saXN0LWl0ZW0tbWFzay10ZXh0JykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcuY29udGVudHMtbGlzdC1pdGVtLW1hc2snKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLmNvbnRlbnRzLWxpc3QtaXRlbS1tYXNrLXRleHQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxudmFyIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuJyk7XHJcblxyXG5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgaWYgKHRoaXMuY2xhc3NOYW1lID09ICdvbicpIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnb24nKTtcclxuICBlbHNlIHRoaXMuY2xhc3NMaXN0LmFkZCgnb24nKTtcclxufSk7Il19
