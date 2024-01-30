var canvasBack= document.getElementById('canvasBackground');
var canvasFade = document.getElementById('canvasFade');
var ctxBack = canvasBack.getContext('2d');
var ctxFade = canvasFade.getContext('2d');

canvasBack.width = window.innerWidth;
canvasFade.width = window.innerWidth;
canvasBack.height = window.innerHeight;
canvasFade.height = window.innerHeight;

var currentImage = null; 
var currentOpacity = 0;
var start = null;
var duration = 2000;

var imageDay= new Image();
imageDay.onload = drawImages;
imageDay.src = "images/test_day.png"
// imageDay.src = "images/test_clouds.png"

var imageClouds= new Image();
imageClouds.onload = drawImages
imageClouds.src = "images/test_clouds2.png"

var imageHalfNight= new Image();
imageHalfNight.onload = drawImages;
imageHalfNight.src = "images/test_night1.png"

var imageMoreNight= new Image();
imageMoreNight.onload = drawImages;
imageMoreNight.src = "images/test_night5.png"

var imageFullNight= new Image();
imageFullNight.onload = drawImages;
imageFullNight.src = "images/test_night6.png"
// imageFullNight.src = "images/test_night3.png"

var cloudsButton= document.createElement('button');
cloudsButton.textContent = "Clouds"
cloudsButton.onclick = cloudImage;
document.body.appendChild(cloudsButton);

var dayButton = document.createElement('button');
dayButton.textContent = "Day"
dayButton.onclick= dayImage;
document.body.appendChild(dayButton);

var halfNightButton = document.createElement('button');
halfNightButton.textContent = "Night1"
halfNightButton.onclick = halfNight;
document.body.appendChild(halfNightButton);

var moreNightButton= document.createElement('button');
moreNightButton.textContent = "Night2"
moreNightButton.onclick = moreNight;
document.body.appendChild(moreNightButton);

var fullNightButton = document.createElement('button');
fullNightButton.textContent = "Night3"
fullNightButton.onclick = fullNight;
document.body.appendChild(fullNightButton);

// var noneButton= document.createElement('button');
// noneButton.textContent = "None"
// noneButton.onclick = noImage;
// document.body.appendChild(noneButton);


document.getElementById('canvasBackground').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvasBackground').onmouswheel = function(event){
  event.preventDefault();
}

if (currentImage === null) {
  currentImage = 'clouds'
  // currentImage = 'moreNight';
  // currentImage = 'fullNight'
  // currentImage = 'halfNight';
};

function drawImages() {
  window.requestAnimationFrame(drawImages);

  if (currentImage === 'clouds') {
    ctxBack.drawImage(imageClouds,0,0,canvasBack.width,canvasBack.height);
  }

  else if (currentImage === 'day') {
    ctxBack.drawImage(imageDay,0,0, canvasBack.width, canvasBack.height);
  }


  else if (currentImage === 'halfNight') {
    ctxBack.drawImage(imageHalfNight,0,0,canvasBack.width,canvasBack.height);
  }
  else if (currentImage === 'moreNight') {
    ctxBack.drawImage(imageMoreNight,0,0,canvasBack.width,canvasBack.height);
  }
  else if (currentImage === 'fullNight') {
    ctxBack.drawImage(imageFullNight,0,0,canvasBack.width,canvasBack.height);
  }
  else if (currentImage === 'none') {
    ctxBack.clearRect(0,0,canvasBack.width,canvasBack.height);
    ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
  }
}

function cloudImage() {
  currentImage = "clouds";
  drawImages();
}
function dayImage() {
  currentImage = "day";
  drawImages();
}
function halfNight() {
  currentImage = "halfNight";
  drawImages();
}
function moreNight() {
  currentImage = "moreNight";
  drawImages();
}
function fullNight() {
  currentImage = "fullNight";
  drawImages();
}
function noImage() {
  currentImage = "none";
  drawImages();
}