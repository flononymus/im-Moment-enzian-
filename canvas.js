// var currentOpacity = 1;
// var increment = 0.02;
var start = null;
var duration = 5000;

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

function drawImages(timestamp) {
  if (!start) start = timestamp || performance.now();;
  var progress = timestamp - start;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  // var currentOpacityThird= Math.max(progress / duration, 0);
  var currentOpacityNight = Math.min(progress / duration, 1);
  var currentOpacityThird = Math.min(progress / duration, 1);

  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.globalAlpha = 1;

  ctx.globalCompositeOperation = 'source-over'
  ctx.drawImage(imageClouds, 0, 0);

  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = currentOpacityNight;
  // ctx.drawImage(imageHalfNight, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageNight,0,0,canvas.width,canvas.height);
  
  // if (currentOpacityNight === 1) {
  //   console.log("check");
  //   ctx.globalCompositeOperation = 'source-over';
  //   ctx.globalAlpha = currentOpacityThird;
  //   ctx.drawImage(imageFullNight, 0,0);
  // }
  
  if (progress < duration) {
    window.requestAnimationFrame(drawImages);
    console.log(ctx.globalAlpha);
  }
}

  imageFullNight.onload = function() {
    var canvas = document.querySelector('canvas');
    canvas.width = this.naturalHeight
    canvas.height = this.naturalHeight; 
    window.requestAnimationFrame(drawImages);
  };
