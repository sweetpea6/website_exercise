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