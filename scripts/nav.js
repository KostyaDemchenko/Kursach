$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.containers').addClass('affix');
        console.log("OK");
    } else {
        $('.containers').removeClass('affix');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navTrigger = document.querySelector('.navTrigger');
    const btn = document.querySelector('.btn-box')
  
    navTrigger.addEventListener('click', function() {
      this.classList.toggle('active');
      console.log('Clicked menu');
      mainListDiv.classList.toggle('show_list');
      mainListDiv.style.display = 'block';
      if (btn.style.display === 'none') {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    });
  });
  