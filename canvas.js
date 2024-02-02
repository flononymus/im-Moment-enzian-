var canvasBack= document.getElementById('canvasBackground');
var canvasFade = document.getElementById('canvasFade');
var ctxBack = canvasBack.getContext('2d');
var ctxFade = canvasFade.getContext('2d');

// canvasBack.width = window.innerWidth;
// canvasFade.width = window.innerWidth;
// canvasBack.height = window.innerHeight;
// canvasFade.height = window.innerHeight;
canvasBack.width = 1000;
canvasFade.width = 1000;
canvasBack.height = 1000;
canvasFade.height = 1000;

var currentImage = null; 
var currentOpacity = 1;
var start = null;
var duration = 2000;

var fadeSpeed = 0.01;
var fadeSpeed = 0.005;

var fps = 60;


var imageDay= new Image();
imageDay.src = "images/test_day.png"

var imageClouds= new Image();
imageClouds.onload = drawImages
imageClouds.src = "images/test_clouds2.png"

var imageHalfNight= new Image();
imageHalfNight.src = "images/test_night1.png"

var imageMoreNight= new Image();
imageMoreNight.src = "images/test_night5.png"

var imageFullNight= new Image();
imageFullNight.src = "images/test_night6.png"



document.getElementById('canvasBackground').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvasBackground').onmouswheel = function(event){
  event.preventDefault();
}

if (currentImage === null) {
  // currentImage = 'clouds'
  // currentImage = 'moreNight';
  currentImage = 'fullNight'
  // currentImage = 'halfNight';
};

function drawImages() {

  if (currentImage === 'clouds') {

    currentOpacity += 0.005;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageClouds,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageClouds,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }

  }

  else if (currentImage === 'day') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageDay,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageDay,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }
  }


  else if (currentImage === 'halfNight') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageHalfNight,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageHalfNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }
  }
  else if (currentImage === 'moreNight') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageMoreNight,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageMoreNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }

  }
  else if (currentImage === 'fullNight') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageFullNight,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageFullNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }
  }
  else if (currentImage === 'none') {
    ctxBack.clearRect(0,0,canvasBack.width,canvasBack.height);
    ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
  }
}

function cloudImage() {
  // resetToggles();
  currentImage = "clouds";
  currentOpacity = 0;
  drawImages();
  // setTimeout(function() {
  //   toggleSmoking();
  // },1000);
  // setTimeout(function() {
  //   toggleRain();
  // },1000);
}
function dayImage() {
  // resetToggles();
  currentImage = "day";
  currentOpacity = 0;
  drawImages();
  // setTimeout(function() {
  //   togglePlane();
  // },1000);
}
function halfNight() {
  currentImage = "halfNight";
  currentOpacity = 0;
  drawImages();
  // toggleStars();
}
function moreNight() {
  // resetToggles();
  currentImage = "moreNight";
  currentOpacity = 0;
  drawImages();
}
function fullNight() {
  currentImage = "fullNight";
  currentOpacity = 0;
  drawImages();
}
function noImage() {
  currentImage = "none";
  currentOpacity = 0;
  drawImages();
}