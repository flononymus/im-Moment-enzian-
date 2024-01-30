var canvasFront = document.getElementById('canvasFront');
var ctxFront = canvasFront.getContext('2d');

canvasFront.width = window.innerWidth;
canvasFront.height = window.innerHeight;

var w = canvasFront.width;
var h = canvasFront.height;
var rainInterval;

ctxFront.strokeStyle = 'rgba(50,50,50,0.1)';
// ctxFront.strokeStyle = 'rgba(0,0,0,0.05)';
ctxFront.lineWidth = 4.5;
ctxFront.lineCap ='square';
// ctxFront.filter = "blur(1px)"
var init = [];
var maxParts = 800;
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

var rainButton= document.createElement('button');
rainButton.textContent = "Rain Test"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);

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
    ctxFront.beginPath();
    ctxFront.moveTo(p.x, p.y);
    ctxFront.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    ctxFront.stroke();
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