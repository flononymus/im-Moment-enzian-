var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var currentOpacity = 0;
var increment = 0.02;
var start = null;

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


function drawImages() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight; 

  ctx.drawImage(imageClouds,0,0,imageClouds.width,imageClouds.height);
  // ctx.drawImage(imageDay,0,0,imageDay.width,imageDay.height);
  // ctx.drawImage(imageHalfNight,0,0,imageHalfNight.width, imageHalfNight.height);
  // ctx.drawImage(imageNight,0,0,imageNight.width, imageNight.height);
  ctx.globalAlpha = currentOpacity;
  ctx.drawImage(imageFullNight,0,0,imageFullNight.width, imageFullNight.height);

  // changing opacity after image
  // if (currentOpacity < 0) {
  currentOpacity += increment;
  // }
  console.log(currentOpacity)
  // ctx.globalAlpha = currentOpacity


// window.requestAnimationFrame(drawImages);
}