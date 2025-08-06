  const imagesToPreload = [
    '../images//design-notes__item_l-4.png',
    '../images/design-notes__item_l-5.png',
    '../images/design-notes__item_l-6png.png',
    '../images/design-notes__item_r-4.png',
    '../images/design-notes__item_r-5png.png',
    '../images/design-notes__item_r-6png.png'
    // 여기에 필요한 이미지들 계속 추가!
  ];

  
imagesToPreload.forEach((src) => {
  const img = new Image();
  img.onload = () => {
    console.log(`✅ Loaded: ${src}`);
  };
  img.src = src;
});