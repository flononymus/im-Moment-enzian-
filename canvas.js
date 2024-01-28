var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var imageDay= new Image();
imageDay.src = "images/test_day.png"

var imageClouds= new Image();
imageClouds.src = "images/test_clouds.png"

// var currentOpacity = 1.0;
// var currentOpacity = 0.5;
var currentOpacity = 0;
var increment = 0.1;

imageDay.onload = 
  drawImages;

imageClouds.onload = 
  drawImages;

function drawImages() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight; 

  ctx.drawImage(imageDay,0,0,imageDay.width,imageDay.height);
  // changing opacity after imageday
  ctx.globalAlpha = currentOpacity;
  ctx.drawImage(imageClouds,0,0,imageClouds.width,imageClouds.height);
  currentOpacity += increment;
  ctx.globalAlpha = currentOpacity


window.requestAnimationFrame(drawImages);
}