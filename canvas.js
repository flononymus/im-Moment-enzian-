var currentImage = null; 
var start = null;
var duration = 2000;



var imageDay= new Image();
imageDay.onload = drawImages;
imageDay.src = "images/test_day.png"

var imageClouds= new Image();
imageClouds.onload = drawImages
imageClouds.src = "images/test_clouds.png"

var imageHalfNight= new Image();
imageHalfNight.onload = drawImages;
imageHalfNight.src = "images/test_night1.png"

var imageMoreNight= new Image();
imageMoreNight.onload = drawImages;
imageMoreNight.src = "images/test_night2.png"

var imageFullNight= new Image();
imageFullNight.onload = drawImages;
imageFullNight.src = "images/test_night3.png"



var cloudsButton= document.createElement('button');
cloudsButton.textContent = "Cloudy"
cloudsButton.onclick = cloudImage;
document.body.appendChild(cloudsButton);

var dayButton = document.createElement('button');
dayButton.textContent = "Day"
dayButton.onclick= dayImage;
document.body.appendChild(dayButton);

var halfNightButton = document.createElement('button');
halfNightButton.textContent = "Half night"
halfNightButton.onclick = halfNight;
document.body.appendChild(halfNightButton);

var moreNightButton= document.createElement('button');
moreNightButton.textContent = "More night"
moreNightButton.onclick = moreNight;
document.body.appendChild(moreNightButton);

var fullNightButton = document.createElement('button');
fullNightButton.textContent = "Full night"
fullNightButton.onclick = fullNight;
document.body.appendChild(fullNightButton);


document.getElementById('canvas').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvas').onmouswheel = function(event){
  event.preventDefault();
}

if (currentImage === null) {
  currentImage = 'clouds'
};

function drawImages(timestamp) {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  // var currentOpacityTest = Math.min(progress / duration, 1);
  var currentOpacityTest = 1;
  // var currentOpacityTest = 0.2;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  ctx.globalAlpha = 1;
  // ctx.save();

  if (currentImage === 'clouds') {
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(imageClouds,0,0,canvas.width,canvas.height);
  }

  else if (currentImage === 'day') {
    var currentOpacityTest = 1;
    ctx.globalAlpha = currentOpacityTest;
    // for (currentOpacityTest > 0;currentOpacityTest < 1; currentOpacityTest++)  {
      if (currentOpacityTest > 0) {
      currentOpacityTest -= 0.1;
      console.log(currentOpacityTest);
      window.requestAnimationFrame(drawImages)
    }
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(imageDay,0,0, canvas.width, canvas.height);

  }
  else if (currentImage === 'halfNight') {
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(imageHalfNight,0,0,canvas.width,canvas.height);
  }
  else if (currentImage === 'moreNight') {
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(imageMoreNight,0,0,canvas.width,canvas.height);
  }
  else if (currentImage === 'fullNight') {
    ctx.globalCompositeOperation = 'source-over';
    ctx.drawImage(imageFullNight,0,0,canvas.width,canvas.height);
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