var canvasRain= document.getElementById('canvasRain');
var ctxRain= canvasRain.getContext('2d');

var canvasDetail= document.getElementById('canvasDetail');
var ctxDetail= canvasDetail.getContext('2d');

canvasRain.width = 500;
canvasRain.height = 500;

var w = canvasRain.width;
var h = canvasRain.height;
var rainInterval;

ctxRain.strokeStyle = 'rgba(50,50,50,0.15)';
ctxRain.lineWidth = 3;
ctxRain.lineCap ='square';
var init = [];
var maxParts = 1000;

var rainOpacity = 0;
var rainOpacityOut = 0.5;
var isFadingRain = true;
var isFadingOutRain = false;

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
raindropImage.src = "images/raindrop_test2.png"



function toggleRain() {
  // console.log(ctxRain.globalAlpha)
  // ctxRain.globalAlpha = 0.1
  raining = !raining
  if (raining) {
    // rainOpacity = 0;
    // ctxRain.globalAlpha = rainOpacity; 
    fadeInRain();
    rainInterval = setInterval(drawRain,30);
    console.log('rain')

    // if (currentImage === 'clouds') {
    //   console.log('currentimage detection')
    //   ctxDetail.fillStyle = 'rgba(0,0,0,0.3)'
    //   ctxDetail.fillRect(0,0,canvasDetail.width,canvasDetail.height);
    // }

  }
  else {
    // isFadingOutRain = true
    fadeOutRain();
    console.log('clear')
    setTimeout(function() {
    clearInterval(rainInterval);
    // ctxRain.clearRect(0,0,canvasRain.width,canvasRain.height);
    // ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height)
    },1000)
  }
}

function drawRain() {
  ctxRain.clearRect(0, 0, w, h);

  for(var c = 0; c < particles.length; c++) {
    var p = particles[c];
    ctxRain.beginPath();
    ctxRain.moveTo(p.x, p.y);
    ctxRain.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
    ctxRain.stroke();
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

function fadeInRain() {
  // isFadingOutRain = false;
  isFadingRain = true
  if (isFadingRain) {
    rainOpacityOut = 0.5;
      ctxRain.globalAlpha = rainOpacity;
      if (rainOpacity < 0.5) {
        isFadingRain = true;
        console.log(ctxRain.globalAlpha)
        rainOpacity += 0.005
        ctxRain.globalAlpha = rainOpacity;

    requestAnimationFrame(fadeInRain);
      }
  }
  setTimeout(function() { 
    isFadingRain= false;  
    console.log('fade in over')
  },1000)

}

function fadeOutRain() {
  isFadingOutRain = true;
  if (isFadingOutRain) {
    rainOpacity = 0;
    if (rainOpacityOut > 0) {
      ctxRain.globalAlpha = rainOpacityOut;
      console.log(ctxRain.globalAlpha)
      rainOpacityOut -= 0.005
    

      ctxRain.clearRect(0,0,canvasRain.width,canvasRain.height);
      drawRain()
    requestAnimationFrame(fadeOutRain);
    }
  }
  setTimeout(function() { 
    isFadingOutRain = false;  
    console.log('fade out over')
  },1000)
}