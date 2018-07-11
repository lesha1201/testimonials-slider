var slideIndex = 1;
var slides = $('.card');
buildBullets();
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   var bullets = $('.s-bullet');

   if (n > slides.length) {
      slideIndex = 1;
   }
   if(n < 1) {
      slideIndex = slides.length;
   }

   for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   for (var i = 0; i < bullets.length; i++) {
      bullets[i].className = bullets[i].className.replace(" b-active", "");
   }

   bullets[slideIndex - 1].className += " b-active";
   slides[slideIndex - 1].style.display = "block";
}

function buildBullets() {
   for (var i = 1; i <= slides.length; i++) {
      $('.slide-bullets').append('<div class="s-bullet" onclick="currentSlide(' + i + ')"></div>');
   }
}
