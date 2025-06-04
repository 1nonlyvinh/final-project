// script.js
let currentIndex = 0;

function showSlide(index) {
  const carouselImages = document.querySelector('.carousel-images');
  const totalImages = document.querySelectorAll('.carousel-images img').length;

  if (index >= totalImages) {
    currentIndex = 0; // Loop back to the first image
  } else if (index < 0) {
    currentIndex = totalImages - 1; // Loop back to the last image
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100; // Calculate the offset for the transform
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

window.onload = function() {
  document.getElementById("my_audio").play();
}