var canvasPlane = document.getElementById('canvasPlane');
var canvasTrail = document.getElementById('canvasTrail');
var ctxPlane = canvasPlane.getContext('2d');
var ctxTrail = canvasTrail.getContext('2d');

canvasPlane.width = 1000;
canvasPlane.height = 1000;
canvasTrail.width = 1000;
canvasTrail.height = 1000;

var plane = new Image;
plane.src = "images/airplane test6.png"

var plane2 = new Image;
plane2.src = "images/airplane test7.png"

var trail = new Image;
// trail.src = "images/trail test.png"
trail.src = "images/trail test2.png"
ctxTrail.filter = "blur(3px)"
// trail.blur(

let x = -10;
let y = 40;
const speed = 0.25; 
const yspeed = 0.05;

var enablePlane= false;

function togglePlane() {
  enablePlane= !enablePlane
  console.log('Plane', enablePlane)
  if (enablePlane) {
    console.log('test')
    movePlane();
  }
  else {
    console.log('not')
    x = -10;
    y = 40;
    ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
    ctxTrail.clearRect(0,0,canvasTrail.width,canvasTrail.height);
  }
}

function movePlane() {
  if (!enablePlane) return
  ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
  ctxTrail.globalAlpha = 0.8;
  ctxTrail.clearRect(x - 400, 0, 10, canvasTrail.height);

  ctxPlane.drawImage(plane2,x, y);
  ctxTrail.drawImage(trail,x,y);
  // ctxTrail.fillRect(x, y, dotSize, dotSize)
  x += speed;
  y -= yspeed;
  // ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
  if (x - 400 > canvasPlane.width) {
    // x = -plane2.width; 
    console.log('check')
    x = -25;
    y = 40;
  }
  requestAnimationFrame(movePlane);
}