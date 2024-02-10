var canvasBirdFlock= document.getElementById('canvasBirdFlock');
var ctxBirdFlock= canvasBirdFlock.getContext('2d')

canvasBirdFlock.width = 2000
canvasBirdFlock.height = 2000

var birdFlock= new Image();
birdFlock.src = "images/birdflock test2.png";

var birdFlockActive 

var colsTest = 10;
var rowsTest = 1;

var totalFramesTest = 10;
var currentFrameTest = 0;
var framesDrawnTest = 0;

var srcXTest = 0;
var srcYTest = 0;

var xBirdTest 
var yBirdTest

var spriteWidthTest = birdFlock.width/colsTest
var spriteHeightTest = birdFlock.height/rowsTest

xBirdTest = canvasBirdFlock.width - 30
yBirdTest = canvasBirdFlock.height/4

birdSpeedTest= -1.2;

ctxBirdFlock.globalAlpha = 0.4;



function toggleBirdFlock() {
  birdFlockActive = !birdFlockActive
  if (birdFlockActive) {
    animateBirdFlock();
    console.log('test active')
  }
  else {
    console.log('test off')
  }
}

function animateBirdFlock() {
  if (birdFlockActive) {
    ctxBirdFlock.clearRect(0,0,canvasBirdFlock.width,canvasBirdFlock.height)

    currentFrameTest = currentFrameTest % totalFramesTest;
    srcXTest = currentFrameTest * spriteWidthTest;

    ctxBirdFlock.drawImage(birdFlock, srcXTest, srcYTest, spriteWidthTest, spriteHeightTest, xBirdTest, yBirdTest, spriteWidthTest, spriteHeightTest)

    xBirdTest += birdSpeedTest;

    if (xBirdTest < -30) {
      // console.log('test');
      xBirdTest =  canvasBirdFlock.width - 30
    }

    framesDrawnTest++;
        if (framesDrawnTest > 5) { 
            currentFrameTest++;
            framesDrawnTest = 0;
        }
    requestAnimationFrame(animateBirdFlock)
  }
  else {
    ctxBirdFlock.clearRect(0,0,canvasBirdFlock.width,canvasBirdFlock.height);
  }
}


