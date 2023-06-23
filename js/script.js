$(function () {
  const $btnMenu = $('.menu_icon');
  const $menu01 = $('.menu_list');
  const $menu = $('.menu_wrap');
  var $dim = $('.dim');
  let isAct = false;

  $menu01.hide();
  $dim.hide();

  // 햄버거 버튼을 클릭했을 때
  $btnMenu.on('click', function (e) {
    e.preventDefault();
    $menu01.show();
    $dim.show();

    if (isAct === false) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  $menu01.on('click', closeMenu);

  function openMenu() {
    $btnMenu.addClass('active');
    slideMenu(0);
    isAct = true;
    $menu01.fadeIn();
    $dim.fadeIn();
  }

  function closeMenu() {
    $btnMenu.removeClass('active');
    slideMenu('-100%');
    isAct = false;
    $menu01.fadeOut();
    $dim.fadeOut();
  }

  function slideMenu(pos) {
    // alert('슬라이딩!');
    $menu.animate(
      {
        left: pos,
      },
      350
    );
  }

  // visual main 애니메이션
  gsap.from('.pic_1', {
    duration: 2,
    x: -200,
  });
  gsap.from('.pic_2', {
    duration: 2,
    y: -200,
  });
  gsap.from('.pic_3', {
    duration: 2,
    x: 800,
  });
  gsap.from('.pic_4', {
    duration: 2,
    x: 200,
    scale: 2,
  });
  gsap.from('.pic_5', {
    duration: 5,
    x: -200,
    yPercent: 20,
  });
  gsap.from('.pic_6', {
    scale: 0.1,
    duration: 2,

    x: -200,
    stagger: {
      amount: 1.5,
      grid: 'auto',
      from: 'center',
    },
  });
  gsap.from('.pic_7', {
    duration: 2,
    x: -200,
    rotation: 360,
  });
  gsap.from('.pic_8', {
    duration: 2,
    x: -200,
    scale: 0.1,
  });

  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  });

  var swiper2 = new Swiper('.workImg_list', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  var swiper3 = new Swiper('.workImg_list2', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 2500,
      reverseDirection: true,
      disableOnInteraction: false,
    },
  });

  const horizonScroll = document.querySelector('.about_ctn_sub');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec_col4',
      start: 'top top',

      end: () => '+=' + horizonScroll.offsetWidth,
      pin: true,
      scrub: true,
    },
  });

  tl.from(horizonScroll, { autoAlpha: 0, duration: 0.4 }).to(horizonScroll, {
    x: () => -(horizonScroll.offsetWidth - innerWidth),
  });

  const $window = $(window);
  const $cursor = $('.cursor');

  let mouseX = 0;
  let mouseY = 0;

  $window.on('mousemove', function (e) {
    console.log(e);

    mouseX = e.pageX;
    mouseY = e.pageY;

    $cursor.css({
      left: mouseX,
      top: mouseY,
    });
  });

  $window.on('mousedown', function () {
    $cursor.addClass('click');
  });
  $window.on('mouseup', function () {
    $cursor.removeClass('click');
  });
});