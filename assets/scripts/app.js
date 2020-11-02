window.addEventListener('scroll', () => {
  if(window.scrollY > 150) {
    document.querySelector('header').style.opacity = 0.5;
  } else {
    document.querySelector('header').style.opacity = 1;
  }
});



const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duraiton: 5000,
  reset: true
});

console.log(sr);
// Reveal Showcase Area
sr.reveal('.showcaseContent h1', {delay: 200});
sr.reveal('.showcaseContent p', {delay: 400});
sr.reveal('.showcaseContent h3', {delay: 600});

// Reveal About Area

sr.reveal('.aboutContent .top', {delay: 200});
sr.reveal('.aboutContent .bottom', {delay: 400});

// Reveal Product Area

sr.reveal('#product .intro h1', {delay: 200});
sr.reveal('.productContent .box h1', {delay:400});
sr.reveal('.productContent .box p', {delay: 600});
sr.reveal('.productContent .box img', {delay: 800});

// Reveal Contacts Area
sr.reveal('#contact .left h1', {delay: 200});
sr.reveal('#contact .left p', {delay: 400});

sr.reveal('#contact .box i', {delay: 600});
sr.reveal('#contact .box p', {delay: 800});
sr.reveal('#contact .box h1', {delay: 800});





$('#header a').on('click', function(event) {
  if(this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      1200
    );
  }
});
