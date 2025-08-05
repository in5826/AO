  document.addEventListener("DOMContentLoaded", function () {
    const modalLinks = document.querySelectorAll(".screen-work__item a");
    const modalWrapper = document.querySelector(".screen-work-modal-global-wrapper");
    const modals = document.querySelectorAll(".screen-work-modal");
    const closeButtons = document.querySelectorAll(".screen-work-modal-close-btn");

    modalLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").replace("#", "");
        const targetModal = document.getElementById(targetId);
        if (targetModal) {
          modalWrapper.style.display = "flex";
          modals.forEach(m => m.style.display = "none"); // 다른 모달 숨기기
          targetModal.style.display = "block";
          document.body.style.overflow = "hidden";
        }
      });
    });

    closeButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        modalWrapper.style.display = "none";
        modals.forEach(m => m.style.display = "none");
        document.body.style.overflow = "";
      });
    });

    // 바깥영역 클릭 시 닫기
    modalWrapper.addEventListener("click", function (e) {
      if (e.target === modalWrapper) {
        modalWrapper.style.display = "none";
        modals.forEach(m => m.style.display = "none");
        document.body.style.overflow = "";
      }
    });
  });