// 탑 버튼
$(function () {
  // Get the button
  let mybutton = document.getElementById("myBtn");


  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 960 || document.documentElement.scrollTop > 960) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  w3.includeHTML();
})


// 스와이퍼 슬라이드
$(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    spaceBetween: 30,
    centeredSlides: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      loop: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})