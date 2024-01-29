var currentImage = null; 
var start = null;
var duration = 2000;
var w = canvas.width;
var h = canvas.height;


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

  ctx.strokeStyle = 'rgba(174,194,224,0.5)';
  ctx.lineWidth = 1;
  ctx.lineCap = 'round';

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
  else if (currentImage === 'none') {
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0,0,canvas.width,canvas.height);
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


function rainOverlay() {
var init = [];
var maxParts = 1000;
for(var a = 0; a < maxParts; a++) {
  init.push({
    x: Math.random() * w,
    y: Math.random() * h,
    l: Math.random() * 1,
    xs: -4 + Math.random() * 4 + 2,
    ys: Math.random() * 10 + 10
  })
}

var particles = [];
for(var b = 0; b < maxParts; b++) {
  particles[b] = init[b];
}

function draw() {
  ctx.clearRect(0, 0, w, h);
  for(var c = 0; c < particles.length; c++) {
    var p = particles[c];
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    ctx.stroke();
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

setInterval(draw, 30);
}
;



  // var currentOpacityTest = Math.min(progress / duration, 1);

    // for (currentOpacityTest > 0;currentOpacityTest < 1; currentOpacityTest++)  {
    //   if (currentOpacityTest > 0) {
    //   currentOpacityTest -= 0.1;
    //   console.log(currentOpacityTest);
    //   window.requestAnimationFrame(drawImages)
    // }