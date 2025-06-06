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

function playMusic() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
playMusic()

let startTime;

function startTimer() {
  startTime = Date.now(); // Record the initial time in milliseconds
  setInterval(updateTimer, 1000); // Update the timer every second (1000 milliseconds)
}

function updateTimer() {
  const currentTime = Date.now(); // Get the current time
  const elapsedMilliseconds = currentTime - startTime; // Calculate the difference
  const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000); // Convert to seconds

  // Format and display the time
  document.getElementById('time-elapsed').textContent = elapsedSeconds + " seconds"; //
}

// Start the timer when the page loads
window.onload = startTimer;

let currentColor = 'white';

function changeBackgroundToBlack() {
  if (currentColor === 'black') {
    document.body.style.backgroundColor = 'white'; // Change to white
    currentColor = 'white';
    myHeading.style.color = 'black'; // Or any color you prefer
    myParagraph.style.color = 'black'; // Or any color you prefer
  } else {
    document.body.style.backgroundColor = 'black'; // Change to black
    currentColor = 'black';
    myHeading.style.color = 'white'; // Or any color you prefer
    myParagraph.style.color = 'white'; // Or any color you prefer
  }
};

const myHeading = document.getElementById('pagetime');
const myParagraph = document.getElementById('time-elapsed');