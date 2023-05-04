console.log("here");

let moonImage=document.getElementById("moon");

// randomly chose an image
let randomPhase = Math.floor(Math.random() * 8 )+1;
console.log(randomPhase);

// to make decisions about what image to use
if (randomPhase == 1){
    moonImage.src="images/waxing-crescent.png";
}
else if (randomPhase == 2){
    moonImage.src="images/first-quarter.png";
}
else{
    moonImage.src="images/waning-gibbous.png";
}
