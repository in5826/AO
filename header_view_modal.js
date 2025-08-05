document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openModal");
  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close-btn");

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
