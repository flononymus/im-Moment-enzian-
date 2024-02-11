var canvasBirdFlock= document.getElementById('canvasBirdFlock');
var ctxBirdFlock= canvasBirdFlock.getContext('2d')
var canvasBirdFlockReversed= document.getElementById('canvasBirdFlock2');
var ctxBirdFlockReversed= canvasBirdFlockReversed.getContext('2d')

canvasBirdFlock.width = 2000
canvasBirdFlock.height = 2000

canvasBirdFlockReversed.width = 3000
canvasBirdFlockReversed.height = 3000

var birdFlock= new Image();
birdFlock.src = "images/birdflock test2.png";

var birdFlockReversed= new Image();
// birdFlockReversed.src = "images/birdflock reversed.png";
birdFlockReversed.src = "images/birdflock reversed2.png";

var birdFlockActive = false
var birdFlockActiveReversed = false
// var birdFlockActiveReversed

var birdFlockReverseInterval

var colsTest = 10;
var rowsTest = 1;

var colsReversed= 10;
var rowsReversed= 1;

var totalFramesTest = 10;
var currentFrameTest = 0;
var framesDrawnTest = 0;

var totalFramesReversed= 10;
var currentFrameReversed= 0;
var framesDrawnReversed= 0;

var srcXTest = 0;
var srcYTest = 0;
var srcXReversed= 0;
var srcYReversed= 0;

var xBirdTest 
var yBirdTest
var xBirdReversed
var yBirdReversed

// var birdSpeedTest
var birdSpeedReversed

var spriteWidthTest = birdFlock.width/colsTest
var spriteHeightTest = birdFlock.height/rowsTest
var spriteWidthReversed= birdFlockReversed.width/colsReversed
var spriteHeightReversed= birdFlockReversed.height/rowsReversed

xBirdTest = canvasBirdFlock.width - 30
yBirdTest = canvasBirdFlock.height/4

xBirdReversed= - 120
yBirdReversed= canvasBirdFlock.height/4.5

birdSpeedTest= -1.2;
birdSpeedReversed= 1;
// birdSpeedReversed= 4;

ctxBirdFlock.globalAlpha = 0.4;
ctxBirdFlockReversed.globalAlpha = 0.3;



function toggleBirdFlock() {
  birdFlockActive = !birdFlockActive
  birdFlockActiveReversed = !birdFlockActiveReversed

  if (birdFlockActive) {
    animateBirdFlock();
  }

  if (birdFlockActiveReversed) {
    setTimeout(function() { 
      animateBirdFlockReverse();
    },5000)
  }

  else {
    clearInterval(birdFlockReverseInterval)
  }
}

function animateBirdFlock() {
  if (birdFlockActive) {
    ctxBirdFlock.clearRect(0,0,canvasBirdFlock.width,canvasBirdFlock.height)

    currentFrameTest = currentFrameTest % totalFramesTest;
    srcXTest = currentFrameTest * spriteWidthTest;

    ctxBirdFlock.drawImage(birdFlock, srcXTest, srcYTest, spriteWidthTest, spriteHeightTest, xBirdTest, yBirdTest, spriteWidthTest, spriteHeightTest)

    xBirdTest += birdSpeedTest;

    if (xBirdTest < -60) {
      setTimeout(function() { 
      xBirdTest =  canvasBirdFlock.width + 120
      },5000)
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


function animateBirdFlockReverse() {
  // if (birdFlockActiveReversed) {
  if (birdFlockActiveReversed) {
    ctxBirdFlockReversed.clearRect(0,0,canvasBirdFlockReversed.width,canvasBirdFlockReversed.height)

    currentFrameReversed= currentFrameReversed% totalFramesReversed;
    srcXReversed= currentFrameReversed* spriteWidthReversed;

    ctxBirdFlockReversed.drawImage(birdFlockReversed, srcXReversed, srcYReversed, spriteWidthReversed, spriteHeightReversed, xBirdReversed, yBirdReversed, spriteWidthReversed, spriteHeightReversed)

    xBirdReversed += birdSpeedReversed;

    if (xBirdReversed > canvasBirdFlockReversed.width + 60) {
      setTimeout(function() { 
        xBirdReversed = -120
      }, 8000)
    }

    framesDrawnReversed++;
      if (framesDrawnReversed> 5) { 
          currentFrameReversed++;
          framesDrawnReversed= 0;
      }

    requestAnimationFrame(animateBirdFlockReverse)
  }
  else {
    ctxBirdFlockReversed.clearRect(0,0,canvasBirdFlockReversed.width,canvasBirdFlockReversed.height);
  }
}
