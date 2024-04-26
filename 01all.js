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

 //scrollreveal
 ScrollReveal({
    //  reset: true,
     distance: '60%',
     duration: 1400,
     delay: 160
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container,.portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, about-img img', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p,about-content', { origin: 'right' });

 // play video when hover over them 
 function bigger(f) {
     f.volume = false;
     f.play();
 }

 function normal(ff) {
     ff.pause();
     ff.currentTime = 100;
     ff.volume = true;
 }


//  like/dislike
function lidi (inst) {
    // (A) ATTACH HTML
    inst.target.innerHTML = `<i class="up"></i><i class="down"></i>`;
    inst.target.classList.add("lidi");
    inst.up = inst.target.querySelector("i.up");
    inst.down = inst.target.querySelector("i.down");
  
    // (B) SET INITIAL LIKE/DISLIKE
    if (inst.set===true) { inst.up.classList.add("set"); }
    if (inst.set===false) { inst.down.classList.add("set"); }
  
    // (C) LISTEN TO CLICKS
    let clicked = like => {
      // (C1) CLICKED ON LIKE
      if (like) {
        if (inst.up.classList.contains("set")) {
          inst.up.classList.remove("set");
          inst.update(0);
        } else {
          inst.up.classList.add("set");
          inst.down.classList.remove("set");
          inst.update(1);
        }
      }
  
      // (C2) CLICKED ON DISLIKE
      else {
        if (inst.down.classList.contains("set")) {
          inst.down.classList.remove("set");
          inst.update(0);
        } else {
          inst.down.classList.add("set");
          inst.up.classList.remove("set");
          inst.update(-1);
        }
      }
    };
    inst.up.onclick = () => clicked(true);
    inst.down.onclick = () => clicked(false);
  }
  
  // CREATE LIKE DISLIKE BUTTON ON PAGE LOAD
  window.addEventListener("load", () => {
    lidi({
      target : document.getElementById("demo"),
      update : status => { console.log(status); },
      set : true // true for like, false for dislike.
    });
  });

  // Cookie

/*
* The JS file - shows a cookie pop up on the website in 1 sec. And then write a cookie about visiting the website.
*/
"use strict";

var btz_cookie_popup_html = `
<div id="btz-cookie-popup">
  <div class="btz-cookie-popup__c-p-card btz-cookie-popup__card">
    <div class="btz-cookie-popup__c-p-close btz-cookie-popup--close"></div>
    <div class="btz-cookie-popup__content">
      <h3>Our website only for adults!</h3>
      <p>We use cookies and similar technologies to help provide and improve content on Website. We also use them to provide a safer experience by using information.</p>
      <button class="btz-cookie-popup__c-p-button">Yes, I'm over 18</button>
    </div>
  </div>
</div>
`;

var btz_cookie_popup_css = document.createElement("style");
btz_cookie_popup_css.type = "text/css";
btz_cookie_popup_css.innerHTML = `   `;

function btzSetCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function btzGetCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function btzCheckCookie() {
    var btz_cookie_popup_visited = btzGetCookie("cookie_pop_visited");
    if (btz_cookie_popup_visited != "") {
        console.log("Cookie popup visited: " + btz_cookie_popup_visited);
    } else {
        setTimeout(function () {

            var btz_cookie_popup_span = document.createElement('span');
            btz_cookie_popup_span.innerHTML = btz_cookie_popup_html;
            document.body.appendChild(btz_cookie_popup_span);
            document.body.appendChild(btz_cookie_popup_css);

            var close = document.getElementsByClassName('btz-cookie-popup__c-p-close')[0];
            var card = document.getElementsByClassName('btz-cookie-popup__c-p-card')[0];
            var button = document.getElementsByClassName('btz-cookie-popup__c-p-button')[0];

            card.classList.add('btz-cookie-popup--opened');
            card.classList.remove('btz-cookie-popup--closed');

            card.addEventListener('click', function (e) {
                if (e.target === close | e.target === button) {
                    card.classList.remove('btz-cookie-popup--opened');
                    card.classList.add('btz-cookie-popup--closed');
                    btzSetCookie("cookie_pop_visited", true, 365);
                }
            });
        }, 1000);
    }
};

setTimeout(function () {
    btzCheckCookie();
}, 100); // .1 sec

