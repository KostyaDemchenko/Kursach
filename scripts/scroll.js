document.addEventListener('DOMContentLoaded', function() {
    const btnScroll = document.querySelector('.btn-scroll');
  
    btnScroll.addEventListener('click', function() {
      window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        behavior: 'smooth'
      });
    });
  });
  