var canvasPlane = document.getElementById('canvasPlane');
var canvasTrail = document.getElementById('canvasTrail');
var ctxPlane = canvasPlane.getContext('2d');
var ctxTrail = canvasTrail.getContext('2d');

var canvasTrailOverlay= document.getElementById('canvasTrailOverlay');
var ctxTrailOverlay = canvasTrailOverlay.getContext('2d');

canvasTrailOverlay.width = 1000;
canvasTrailOverlay.height = 1000;

var canvasTrailOverlay2= document.getElementById('canvasTrailOverlay2');
var ctxTrailOverlay2 = canvasTrailOverlay2.getContext('2d');

canvasTrailOverlay2.width = 1000;
canvasTrailOverlay2.height = 1000;

canvasPlane.width = 1000;
canvasPlane.height = 1000;
canvasTrail.width = 1000;
canvasTrail.height = 1000;

var canvasPlane2 = document.getElementById('canvasPlane2');
var canvasTrail2 = document.getElementById('canvasTrail2');
var ctxPlane2 = canvasPlane2.getContext('2d');
var ctxTrail2 = canvasTrail2.getContext('2d');

canvasPlane2.width = 1000;
canvasPlane2.height = 1000;
canvasTrail2.width = 1000;
canvasTrail2.height = 1000;

var plane = new Image;
plane.src = "images/plane test.png"

var plane2 = new Image;
plane2.src = "images/plane test reversed.png"

var trail2 = new Image;
trail2.src = "images/trail2.png"
ctxTrail2.filter = "blur(1px)"

var trail = new Image;
trail.src = "images/trail.png"
ctxTrail.filter = "blur(1px)"

var trailOverlay = new Image;
trailOverlay.src = "images/trail.png"

var trailOverlay2 = new Image;
trailOverlay2.src = "images/trail2.png"

let x = -20;
let y = 40;
const speed = 0.3; 
const yspeed = 0.04;

let x2 = 20;
let y2 = 20
const speed2 = -0.2; 
const yspeed2 = 0.02;

var enablePlane= false;
// ctxPlane2.globalAlpha = 0.4;
// ctxPlane2.filter = "blur(1px)"
// ctxPlane2.filter = "blur(1px)"
ctxTrailOverlay.filter="blur(2px)"
ctxTrailOverlay2.filter="blur(2px)"

function togglePlane() {
  enablePlane= !enablePlane
  console.log('Plane', enablePlane)
  if (enablePlane) {
    movePlane();
    // movePlane2();

    setTimeout(function() { 
        movePlane2();
      },5000)
  }
  else {
    x = -10;
    y = 40;
    x2 = 20;
    y2 = 20;
    ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
    ctxTrail.clearRect(0,0,canvasTrail.width,canvasTrail.height);
    ctxPlane2.clearRect(0,0,canvasPlane2.width, canvasPlane2.height);
    ctxTrail2.clearRect(0,0,canvasTrail2.width,canvasTrail2.height);
    ctxTrailOverlay.clearRect(0,0,canvasTrailOverlay.width,canvasTrailOverlay.height)
    ctxTrailOverlay2.clearRect(0,0,canvasTrailOverlay2.width,canvasTrailOverlay2.height)
  }
}

function movePlane() {
  if (!enablePlane) return
  ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
  ctxTrail.globalAlpha = 0.1;
  ctxTrail.clearRect(x - 700, 0, 10, canvasTrail.height);
  ctxTrailOverlay.clearRect(x-600,0,10,canvasTrailOverlay.height);
  ctxTrailOverlay.globalAlpha = 0.4;

  ctxPlane.drawImage(plane,x, y);
  ctxTrail.drawImage(trail,x,y);
  ctxTrailOverlay.drawImage(trailOverlay,x,y)

  x += speed;
  y -= yspeed;
  if (x - 700 > canvasPlane.width) {
    console.log('check')
    x = -25;
    y = 40;
  }
  requestAnimationFrame(movePlane);
}

function movePlane2() {
  if (!enablePlane) return
  ctxPlane2.clearRect(0,0,canvasPlane2.width, canvasPlane2.height);
  ctxTrail2.globalAlpha = 0.1;
  ctxTrail2.clearRect(x2 +(700 + canvasTrail2.width), 0, canvasTrail2.width, canvasTrail2.height);
  ctxTrailOverlay2.clearRect(x2 +(600 + canvasTrailOverlay2.width),0,canvasTrailOverlay2.width,canvasTrailOverlay2.height);
  ctxTrailOverlay2.globalAlpha = 0.4;

  ctxPlane2.drawImage(plane2,x2,y2);
  ctxTrail2.drawImage(trail2,x2,y2);
  ctxTrailOverlay2.drawImage(trailOverlay2,x2,y2)

  x2 += speed2;
  y2 -= yspeed2;
  if (x2 + 700 < -canvasPlane.width) {
     console.log('check')
     x2 = 20;
     y2 = 20
  }
  requestAnimationFrame(movePlane2);
}

