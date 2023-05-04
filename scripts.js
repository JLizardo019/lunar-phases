console.log("here");

// get a reference for what you want to manipulate
let moonImage=document.getElementById("moon");

// randomly chose an image
let randomPhase = Math.floor(Math.random() * 8 )+1;
console.log(randomPhase);

// to make decisions about what image to use
if (randomPhase == 1) {
    moonImage.src = 'images/new-moon.png';
} else if (randomPhase == 2) {
    moonImage.src = 'images/waxing-crescent.png';
} else if (randomPhase == 3) {
    moonImage.src = 'images/first-quarter.png';
} else if (randomPhase == 4) {
    moonImage.src = 'images/waxing-gibbous.png';
} else if (randomPhase == 5) {
    moonImage.src = 'images/full-moon.png';
} else if (randomPhase == 6) {
    moonImage.src = 'images/waning-gibbous.png';
} else if (randomPhase == 7) {
    moonImage.src = 'images/third-quarter.png';
} else  {
    moonImage.src = 'images/waning-crescent.png';
}
