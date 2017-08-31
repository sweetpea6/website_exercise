/**
 * Created by Administrator on 2017-08-31.
 */

var e = document.getElementById('btn');
e.addEventListener('click', function() {
  if (this.className == 'on') this.classList.remove('on');
  else this.classList.add('on');
});