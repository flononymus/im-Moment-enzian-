var canvasBack= document.getElementById('canvasBackground');
var canvasFront = document.getElementById('canvasFront');
var ctxBack = canvasBack.getContext('2d');
var ctxFront = canvasFront.getContext('2d');

canvasBack.width = window.innerWidth;
canvasBack.height = window.innerHeight;
canvasFront.width = window.innerWidth;
canvasFront.height = window.innerHeight;

var w = canvasFront.width;
var h = canvasFront.height;
var rainInterval;
ctxFront.strokeStyle = 'rgba(50,50,50,0.5)';
ctxFront.lineWidth = 10;
ctxFront.lineCap = 'round';
var init = [];
var maxParts = 1000;
for(var a = 0; a < maxParts; a++) {
  init.push({
    x: Math.random() * w,
    y: Math.random() * h,
    l: Math.random() * 1,
    xs: -4 + Math.random() * 4 + 2,
    ys: Math.random() * 50 + 50
  })
}

var particles = [];
for(var b = 0; b < maxParts; b++) {
  particles[b] = init[b];
}

var currentImage = null; 
var start = null;
var duration = 2000;
var raining = false;

var raindropImage = new Image();
// raindropImage.src = "images/raindrop_test.png"
raindropImage.src = "images/raindrop_test2.png"

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

var noneButton= document.createElement('button');
noneButton.textContent = "None"
noneButton.onclick = noImage;
document.body.appendChild(noneButton);

var rainButton= document.createElement('button');
rainButton.textContent = "Rain Test"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);


document.getElementById('canvasBackground').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvasBackground').onmouswheel = function(event){
  event.preventDefault();
}

if (currentImage === null) {
  currentImage = 'clouds'
};

function drawImages(timestamp) {
  // var currentOpacityTest = Math.min(progress / duration, 1);
  var currentOpacityTest = 1;
  // var currentOpacityTest = 0.2;
  ctxBack.clearRect(0,0,canvasBack.width,canvasBack.height);
  ctxBack.globalAlpha = 1;
  // ctx.save();

  if (currentImage === 'clouds') {
    ctxBack.globalCompositeOperation = 'source-over';
    ctxBack.drawImage(imageClouds,0,0,canvasBack.width,canvasBack.height);
  }

  else if (currentImage === 'day') {
    var currentOpacityTest = 1;
    ctxBack.globalAlpha = currentOpacityTest;
    // for (currentOpacityTest > 0;currentOpacityTest < 1; currentOpacityTest++)  {
    //   if (currentOpacityTest > 0) {
    //   currentOpacityTest -= 0.1;
    //   console.log(currentOpacityTest);
    //   window.requestAnimationFrame(drawImages)
    // }
    ctxBack.globalCompositeOperation = 'source-over';
    ctxBack.drawImage(imageDay,0,0, canvasBack.width, canvasBack.height);

  }
  else if (currentImage === 'halfNight') {
    ctxBack.globalCompositeOperation = 'source-over';
    ctxBack.drawImage(imageHalfNight,0,0,canvasBack.width,canvasBack.height);
  }
  else if (currentImage === 'moreNight') {
    ctxBack.globalCompositeOperation = 'source-over';
    ctxBack.drawImage(imageMoreNight,0,0,canvasBack.width,canvasBack.height);
  }
  else if (currentImage === 'fullNight') {
    ctxBack.globalCompositeOperation = 'source-over';
    ctxBack.drawImage(imageFullNight,0,0,canvasBack.width,canvasBack.height);
  }
  else if (currentImage === 'none') {
    ctxBack.globalCompositeOperation = 'source-over';
    ctxBack.clearRect(0,0,canvasBack.width,canvasBack.height);
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

function toggleRain() {
  raining = !raining
  if (raining) {
    rainInterval = setInterval(drawRain,30);
    console.log('rain')
  }
  else {
    clearInterval(rainInterval);
    ctxFront.clearRect(0,0,canvasFront.width,canvasFront.height);
    console.log('clear')
  }
}


function drawRain() {
  ctxFront.globalAlpha = 0.5;
  // ctx.drawImage(currentImage,0,0,w,h);
  ctxFront.clearRect(0, 0, w, h);

  for(var c = 0; c < particles.length; c++) {
    var p = particles[c];
    // ctxFront.beginPath();
    // ctxFront.moveTo(p.x, p.y);
    // ctxFront.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    // ctxFront.stroke();
    ctxFront.drawImage(raindropImage, p.x, p.y, raindropImage.width/3, raindropImage.height*2);
  }
  move();
}

function move() {
  for(var b = 0; b < particles.length; b++) {
    var p = particles[b];
    p.x += p.xs;
    p.y += p.ys;
    if(p.x > w || p.y > h) {
      p.x = Math.random() * w;
      p.y = -20;
    }
  }
}