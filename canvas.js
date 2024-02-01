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

var fps = 60;


var imageDay= new Image();
// imageDay.onload = drawImages;
imageDay.src = "images/test_day.png"
// imageDay.src = "images/test_clouds.png"

var imageClouds= new Image();
imageClouds.onload = drawImages
// imageClouds.onload = ctxBack.drawImage(imageClouds,0,0,canvasBack.width,canvasBack.height);
imageClouds.src = "images/test_clouds2.png"

var imageHalfNight= new Image();
// imageHalfNight.onload = drawImages;
imageHalfNight.src = "images/test_night1.png"

var imageMoreNight= new Image();
// imageMoreNight.onload = drawImages;
imageMoreNight.src = "images/test_night5.png"

var imageFullNight= new Image();
// imageFullNight.onload = drawImages;
imageFullNight.src = "images/test_night6.png"
// imageFullNight.src = "images/test_night3.png"



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

  if (currentImage === 'clouds') {

    currentOpacity += 0.01;
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


    currentOpacity += 0.01;
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

    currentOpacity += 0.01;
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
    // ctxBack.drawImage(imageMoreNight,0,0,canvasBack.width,canvasBack.height);

    currentOpacity += 0.01;
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
    // ctxBack.drawImage(imageFullNight,0,0,canvasBack.width,canvasBack.height);

    currentOpacity += 0.01;
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
  currentImage = "clouds";
  currentOpacity = 0;
  drawImages();
}
function dayImage() {
  currentImage = "day";
  currentOpacity = 0;
  drawImages();
}
function halfNight() {
  currentImage = "halfNight";
  currentOpacity = 0;
  drawImages();
}
function moreNight() {
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