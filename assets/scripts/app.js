window.addEventListener('scroll', () => {
  if(window.scrollY > 150) {
    document.querySelector('header').style.opacity = 0.5;
  } else {
    document.querySelector('header').style.opacity = 1;
  }
});



$( '#header a').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      1200
    );
  }
});