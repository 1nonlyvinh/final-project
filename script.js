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
    myHeading.style.color = 'black'; 
    myParagraph.style.color = 'black'; 
    myHeading3.style.color = 'black'; 
  } else {
    document.body.style.backgroundColor = 'black'; // Change to black
    currentColor = 'black';
    myHeading.style.color = 'white'; 
    myParagraph.style.color = 'white'; 
    myHeading3.style.color = 'white'; 
  }
};

const myHeading = document.getElementById('pagetime');
const myParagraph = document.getElementById('time-elapsed');
const myHeading3 = document.getElementById('heading3')

function shakeImage() {
      const image = document.getElementById('popcorn');
      let position = 0;
      const interval = setInterval(() => {
        const offset = (position % 2 === 0 ? 10 : -10); // Alternate left and right
        image.style.transform = `translateX(${offset}px)`;
        position++;
        if (position > 5) { // Stop after 6 shakes
          clearInterval(interval);
          image.style.transform = 'translateX(0)'; // Reset position
        }
      }, 100); // Shake every 100ms
}