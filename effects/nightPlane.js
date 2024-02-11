var canvasNightPlane = document.getElementById('canvasNightPlane');
var ctxNightPlane = canvasNightPlane.getContext('2d');

var nightPlane = new Image;
nightPlane.src = "images/lightstest1.png"

let xNightPlane 
let yNightPlane
// const speedNightPlane = 0.1; 
// const yspeedNightPlane = 0.1;
const speedNightPlane = -0.4; 
const yspeedNightPlane = -0.2;

var enableNightPlane= false;

var colsNightPlane = 14;
var rowsNightPlane = 1;

var totalFramesNightPlane = 14;
var currentFrameNightPlane = 0;
var framesDrawnNightPlane = 0;

var srcXNightPlane = 0;
var srcYNightPlane = 0;

var nightPlaneSpriteWidth = nightPlane.width / colsNightPlane;
var nightPlaneSpriteHeight = nightPlane.height / rowsNightPlane;

canvasNightPlane.width = 1000;
canvasNightPlane.height = 1000;

xNightPlane = canvasNightPlane.width;
yNightPlane = canvasNightPlane.height/2;

ctxNightPlane.globalAlpha = 0.1
ctxNightPlane.filter = "blur(5px)"

function toggleNightPlane() {
  enableNightPlane= !enableNightPlane
  console.log('NightPlane', enableNightPlane)
  if (enableNightPlane) {
    moveNightPlane();
  }
  else {
    xNightPlane = canvasNightPlane.width;
    yNightPlane = canvasNightPlane.height/2;
  }
}

function moveNightPlane() {
//   xNightPlane = canvasNightPlane.width/2;
//   yNightPlane = canvasNightPlane.height/2;
  if (enableNightPlane) {
    ctxNightPlane.clearRect(0,0,canvasNightPlane.width, canvasNightPlane.height);

    requestAnimationFrame(moveNightPlane)

    currentFrameNightPlane = currentFrameNightPlane % totalFramesNightPlane;
    srcXNightPlane = currentFrameNightPlane * nightPlaneSpriteWidth;

    ctxNightPlane.drawImage(nightPlane,srcXNightPlane,srcYNightPlane,nightPlaneSpriteWidth,nightPlaneSpriteHeight,xNightPlane,yNightPlane,nightPlaneSpriteWidth,nightPlaneSpriteHeight)

    xNightPlane += speedNightPlane
    yNightPlane += yspeedNightPlane

    framesDrawnNightPlane ++;
  if (framesDrawnNightPlane >= 10) {
    currentFrameNightPlane++;
    framesDrawnNightPlane = 0;  
  }
  if (xNightPlane < -10) {
    xNightPlane = canvasNightPlane.width;
    yNightPlane = canvasNightPlane.height/2;
  }
}

  else {
    ctxNightPlane.clearRect(0,0,canvasNightPlane.width,canvasNightPlane.height)
  }











//   xNightPlane += speedNightPlane;
//   yNightPlane -= yspeedNightPlane;
//   if (xNightPlane > 0) {
//     xNightPlane = -25;
//     yNightPlane = 40;
//   }
//   requestAnimationFrame(moveNightPlane);
}
