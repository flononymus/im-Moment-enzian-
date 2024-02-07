var canvasPlane = document.getElementById('canvasPlane');
var canvasTrail = document.getElementById('canvasTrail');
var ctxPlane = canvasPlane.getContext('2d');
var ctxTrail = canvasTrail.getContext('2d');

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
plane.src = "images/airplane Pixel2.png"

var plane2 = new Image;
plane2.src = "images/airplane Pixel3.png"

var trail2 = new Image;
trail2.src = "images/trail2.png"
ctxTrail2.filter = "blur(3.5px)"

var trail = new Image;
trail.src = "images/trail.png"
ctxTrail.filter = "blur(3.5px)"

let x = -10;
let y = 40;
const speed = 0.1; 
const yspeed = 0.02;

// let x2 = 0;
let x2 = 20;
let y2 = 20;
const speed2 = -0.1; 
const yspeed2 = 0.002;

var enablePlane= false;

function togglePlane() {
  enablePlane= !enablePlane
  console.log('Plane', enablePlane)
  if (enablePlane) {
    movePlane();
    movePlane2();
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
  }
}

function movePlane() {
  if (!enablePlane) return
  ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
  ctxTrail.globalAlpha = 0.8;
  ctxTrail.clearRect(x - 400, 0, 10, canvasTrail.height);

  ctxPlane.drawImage(plane,x, y);
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

function movePlane2() {
  if (!enablePlane) return
  ctxPlane2.clearRect(0,0,canvasPlane2.width, canvasPlane2.height);
  ctxTrail2.globalAlpha = 0.8;
  ctxTrail.clearRect(x2 + 400, 0, 10, canvasTrail.height);

  // ctxPlane2.drawImage(plane2,0,0,canvasPlane2.width,canvasPlane2.height);
  ctxPlane2.drawImage(plane2,x2,y2);
  ctxTrail2.drawImage(trail2,x2,y2);

  x2 += speed2;
  y2 -= yspeed2;
  // ctxPlane.clearRect(0,0,canvasPlane.width, canvasPlane.height);
  // if (x2 - 400 > canvasPlane.width) {
  //   // x = -plane2.width; 
  //   console.log('check')
  //   x = -25;
  //   y = 40;
  // }
  requestAnimationFrame(movePlane2);
}


// constant animation speed here:

// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.canvas.width  = 700;
// ctx.canvas.height = 300;

// var x = 0;
// const px_per_frame_at_60Hz = 6;
// const px_per_second = (px_per_frame_at_60Hz * 60);

// var update = function( elapsed_time ) {
//   const distance = elapsed_time * px_per_second;
//   x = (x + distance) % canvas.width;
// }

// var draw = function() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.fillRect(x, 10, 30, 30);
// }

// let lastRenderTime = 0
// const frameRate = 60;

// function main(currentTime) {
//   const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
//   update( secondsSinceLastRender );
//   draw();
//   lastRenderTime = currentTime;
//   // better keep it at the end in case something throws in this callback,
//   // we don't want it to throw every painting frames indefinitely  
//   window.requestAnimationFrame(main)
// }

// window.requestAnimationFrame(main)