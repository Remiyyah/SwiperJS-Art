/* let documentBody = document.querySelector('body')

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    sensitivity: 0.1,
    keyboard: true,
    releaseOnEdges: true,
    on: {
      reachEnd: function () {
        documentBody.setAttribute("style", "overflow: auto;");
      },
    },

  }) */

  var swiper = new Swiper('.swiper_main', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});