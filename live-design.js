let isDragging = false;
let dragStartX = 0;
let position = 0;
let animationId;
let dragMoved = false;

const track = document.getElementById("sliderTrack");
const slides = Array.from(track.children); // 원본 슬라이드 복사
const cloneBefore = slides.map(slide => slide.cloneNode(true));
const cloneAfter = slides.map(slide => slide.cloneNode(true));


// ⭐ 여기 추가! 슬라이드 속도 조절을 위한 변수 ⭐
let slideSpeed = 1; // 기본 슬라이드 속도 (데스크톱 기준)

function animate() {
  // ⭐ 여기에 속도 조절 로직 추가 ⭐
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 768) { // 768px 미만 (모바일)
    slideSpeed = 0.5 // 속도를 절반으로 줄여 (0.5픽셀/프레임)
  } else if (viewportWidth < 1024) { // 768px 이상 1024px 미만 (태블릿)
    slideSpeed = 0.7; // 속도를 약간 줄여 (0.7픽셀/프레임)
  } else { // 1024px 이상 (데스크톱)
    slideSpeed = 1; // 기본 속도 유지 (1픽셀/프레임)
  }

  position -= slideSpeed; // ⭐ position -= 1; 대신 조절된 slideSpeed 사용 ⭐
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  animationId = requestAnimationFrame(animate);
}

animate();


// 드래그 이벤트
track.addEventListener("mousedown", (e) => {
  isDragging = true;
  dragStartX = e.clientX;
  dragMoved = false;
  cancelAnimationFrame(animationId);
  track.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const dx = e.clientX - dragStartX;
  if (Math.abs(dx) > 3) dragMoved = true; // 드래그로 간주할 기준
  position += dx;
  dragStartX = e.clientX;
  track.style.transform = `translateX(${position}px)`;
});

document.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  track.style.cursor = "grab";

  // 👉 드래그가 거의 없었으면 (클릭임) 클릭 이벤트 강제로 발생
  if (!dragMoved) {
    const link = e.target.closest("a");
    if (link) {
      link.click();
    }
  }

  animate(); // 다시 자동 슬라이드
});

// 마우스 올리면 멈춤 / 벗어나면 다시 작동
track.addEventListener("mouseenter", () => cancelAnimationFrame(animationId));
track.addEventListener("mouseleave", () => animate());


// 뒤로 복제

cloneAfter.forEach(clone => track.appendChild(clone));

