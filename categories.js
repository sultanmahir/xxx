// alert(document.cookie)


//menu icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//sticky sections active links
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // Sticky navbar
  let header = document.querySelector('.header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //remove menu icon navbar when click navbar link (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};


// darkmode
let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode');
}


// swiper slide
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  grapCursor: true,
  //   loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//scrollreveal Animations
ScrollReveal({
  // reset: true,
  distance: '60%',
  duration: 1400,
  delay: 150
});

ScrollReveal().reveal('.testimonial-wrapper', { origin: 'bottom' });
ScrollReveal().reveal('.services-container', { origin: 'top' });
