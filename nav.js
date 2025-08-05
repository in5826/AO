
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".header__menu-btn__1");
  const closeBtn = document.querySelector(".header__menu-btn__2");
  const nav = document.querySelector(".header__nav");
  const navBg = document.querySelector(".header__nav__bgbk");
  const uiLi = document.querySelectorAll(".header__nav-item"); 

  // 열기
  openBtn.addEventListener("click", function () {
    nav.classList.add("open");
  });

  openBtn.addEventListener("click", function () {
    navBg.classList.add("open");
  });

  // ⭐⭐⭐ 여기 수정! uiLi가 여러 개니까 forEach로 각각에 이벤트 리스너를 붙여줘. ⭐⭐⭐
  // ⭐⭐⭐ document.classList.add는 document.body.classList.add로 수정했어 (오류 나거든!) ⭐⭐⭐
  uiLi.forEach(item => {
    item.addEventListener("click", function () {
      document.body.classList.add("open"); // <-- 이 부분이 body에 'open' 클래스를 추가할 거야
    });
  });


  // 닫기
  closeBtn.addEventListener("click", function () {
    nav.classList.remove("open");
  });

  closeBtn.addEventListener("click", function () {
    navBg.classList.remove("open");
  });

  // ⭐⭐⭐ 여기도 수정! uiLi가 여러 개니까 forEach로 각각에 이벤트 리스너를 붙여줘. ⭐⭐⭐
  uiLi.forEach(item => {
    item.addEventListener("click", function () {
      nav.classList.remove("open");
      navBg.classList.remove("open");
      document.body.classList.remove("open"); // <-- body에서 'open' 클래스를 제거해 (위에서 추가했으니까)
    });

      // 바탕화면(navBg) 클릭 시 닫기
  navBg.addEventListener("click", function (e) {
    // nav 영역 이외의 부분만 클릭되었을 때만 닫기
    if (e.target === navBg) {
      nav.classList.remove("open");
      navBg.classList.remove("open");
      document.body.classList.remove("open");
    }
  });
  
  });
  
});