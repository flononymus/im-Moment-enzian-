var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var currentOpacity = 0;
// var increment = 0.02;
var start = null;
var duration = 2000;

document.getElementById('canvas').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvas').onmouswheel = function(event){
  event.preventDefault();
}

var imageDay= new Image();
imageDay.src = "images/test_day.png"
var imageClouds= new Image();
imageClouds.src = "images/test_clouds.png"
var imageHalfNight= new Image();
imageHalfNight.src = "images/test_night1.png"
var imageNight= new Image();
imageNight.src = "images/test_night2.png"
var imageFullNight= new Image();
imageFullNight.src = "images/test_night3.png"

imageDay.onload = drawImages;
imageClouds.onload = drawImages;
imageHalfNight.onload = drawImages;
imageNight.onload = drawImages;
imageFullNight.onload = drawImages;


function drawImages(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;

  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight; 

  ctx.drawImage(imageClouds,0,0,imageClouds.width,imageClouds.height);
  // ctx.drawImage(imageDay,0,0,imageDay.width,imageDay.height);
  // ctx.drawImage(imageHalfNight,0,0,imageHalfNight.width, imageHalfNight.height);
  // ctx.drawImage(imageNight,0,0,imageNight.width, imageNight.height);
  ctx.globalAlpha = currentOpacity;
  ctx.drawImage(imageFullNight,0,0,imageFullNight.width, imageFullNight.height);

  // changing opacity after image
  if (currentOpacity < 0) {
  // currentOpacity -= increment;
 currentOpacity = progress/2000;
  window.requestAnimationFrame(drawImages);
  }
  console.log(currentOpacity)
  // ctx.globalAlpha = currentOpacity


// window.requestAnimationFrame(drawImages);
}









## working fade:
// var currentOpacity = 1;
// var increment = 0.02;
var start = null;
var duration = 10000;

document.getElementById('canvas').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvas').onmouswheel = function(event){
  event.preventDefault();
}

var imageDay= new Image();
imageDay.src = "images/test_day.png"
var imageClouds= new Image();
imageClouds.src = "images/test_clouds.png"
var imageHalfNight= new Image();
imageHalfNight.src = "images/test_night1.png"
var imageNight= new Image();
imageNight.src = "images/test_night2.png"
var imageFullNight= new Image();
imageFullNight.src = "images/test_night3.png"

// imageDay.onload = drawImages;
// imageClouds.onload = drawImages;
// imageHalfNight.onload = drawImages;
// imageNight.onload = drawImages;
// imageFullNight.onload = drawImages;


function drawImages(timestamp) {
  if (!start) start = timestamp || performance.now();;
  var progress = timestamp - start;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  var currentOpacityDay = Math.max(1-progress / duration, 0);
  var currentOpacityNight = Math.min(progress / duration, 1);
  var currentOpacityThird = Math.min(progress / duration, 1);


  ctx.clearRect(0,0, canvas.width, canvas.height)
  // ctx.globalAlpha = currentOpacityDay;

  // first image
  ctx.drawImage(imageClouds, 0, 0);
  ctx.globalAlpha = currentOpacityNight;

  // second image
  ctx.drawImage(imageHalfNight, 0, 0);
  console.log(currentOpacityDay, currentOpacityNight, currentOpacityThird);

  if (currentOpacityNight === 1) {
    ctx.globalAlpha = 1- currentOpacityThird;
    ctx.drawImage(imageFullNight, 0, 0);
  }

  if (progress < duration) {
    window.requestAnimationFrame(drawImages);
  }
}

  imageFullNight.onload = function() {
    var canvas = document.querySelector('canvas');
    canvas.width = this.naturalHeight
    canvas.height = this.naturalHeight; 
    window.requestAnimationFrame(drawImages);
  };
