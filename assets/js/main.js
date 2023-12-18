// Fullpage Scrolling
var deleteLog = false;
$(document).ready(function() {
    $('#pagepiling').pagepiling({
        direction: 'vertical', // vertical or horizontal
        // loopBottom: true, // разрешить слияние снизу ? true or false
        // loopTop: true, // разрешить слияние сверху ? true or false
        verticalCentered: true, // по вертикальному центру true or false
        anchors: ['page1','page2','page3','page4','page5','page6'], // якоря
        menu: '#navbarMenu', // разрешить меню
        scrollingSpeed: 0, // скорость прокрутки
        // sectionsColor: ['#bfda00', '#2ebe21', '#2C3E50', '#51bec4'],
        navigation: {
            bulletsColor: 'rgba(255, 255, 255, 0.4)',
        },
    });
});

// Preloader
window.onload=function(){
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function(){
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    },500);
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});