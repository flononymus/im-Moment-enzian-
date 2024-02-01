var canvasRain= document.getElementById('canvasRain');
var ctxRain= canvasRain.getContext('2d');

// canvasRain.width = window.innerWidth;
// canvasRain.height = window.innerHeight;
// canvasRain.width = 1000;
// canvasRain.height = 1000;
canvasRain.width = 500;
canvasRain.height = 500;

var w = canvasRain.width;
var h = canvasRain.height;
var rainInterval;

ctxRain.strokeStyle = 'rgba(50,50,50,0.15)';
// ctxFront.strokeStyle = 'rgba(0,0,0,0.05)';
// ctxFront.lineWidth = 4.5;
ctxRain.lineWidth = 3;
ctxRain.lineCap ='square';
// ctxFront.filter = "blur(1px)"
var init = [];
// var maxParts = 700;
var maxParts = 1000;
// var maxParts = 500;
// var maxParts = 100;
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

var raining = false;
var raindropImage = new Image();
// raindropImage.src = "images/raindrop_test.png"
raindropImage.src = "images/raindrop_test2.png"

// toggleRain();

function toggleRain() {
  raining = !raining
  if (raining) {
    rainInterval = setInterval(drawRain,30);
    console.log('rain')
    // ctxRain.globalAlpha = 0.1
  }
  else {
    clearInterval(rainInterval);
    ctxRain.clearRect(0,0,canvasRain.width,canvasRain.height);
    console.log('clear')
  }
}


function drawRain() {
  ctxRain.globalAlpha = 0.5;
  // ctx.drawImage(currentImage,0,0,w,h);
  ctxRain.clearRect(0, 0, w, h);

  for(var c = 0; c < particles.length; c++) {
    var p = particles[c];
    ctxRain.beginPath();
    ctxRain.moveTo(p.x, p.y);
    ctxRain.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    ctxRain.stroke();
    // ctxFront.drawImage(raindropImage, p.x, p.y, raindropImage.width/3, raindropImage.height*2);
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