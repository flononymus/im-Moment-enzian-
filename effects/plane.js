var canvasPlane = document.getElementById('canvasPlane');
var canvasTrail = document.getElementById('canvasTrail');
var ctxPlane = canvasPlane.getContext('2d');
var ctxTrail = canvasTrail.getContext('2d');

canvasPlane.width = 1000;
canvasPlane.height = 1000;
canvasTrail.width = 1000;
canvasTrail.height = 1000;
// canvasPlane.width = 500;
// canvasPlane.height = 500;
// canvasTrail.width = 500;
// canvasTrail.height = 500;

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