var canvasAnimationTest= document.getElementById('canvasAnimationTest');
var ctxAnim= canvasAnimationTest.getContext('2d')

// canvasAnimationTest.width = 128;
// canvasAnimationTest.height = 128;
canvasAnimationTest.width = window.innerWidth;
canvasAnimationTest.height = window.innerHeight;

var animationTestSprite= new Image();
// animationTestSprite.src = "images/bird5.png"
// animationTestSprite.src = "images/bird2.png"
// animationTestSprite.src = "images/birdPixel1.png"
// animationTestSprite.src = "images/birdPixel2.png"
// animationTestSprite.src = "images/birdPixelLeft.png"
// animationTestSprite.src = "images/birdRight.png"
// animationTestSprite.src = "images/birdPixelRight.png"
animationTestSprite.src = "images/birdPixelRight2.png"

var animationActive= false;
var colsTest = 10;
var rowsTest = 1;
var totalFramesTest = 10;
var currentFrameTest = 0;

var framesDrawnTest = 0;

var srcXTest = 0;
var srcYTest = 0;

var xAnimTest= window.innerWidth/2;
var yAnimTest= window.innerHeight/2;

var spriteWidthTest = animationTestSprite.width / cols;
var spriteHeightTest = animationTestSprite.height / rows;


function animateTest() {
    ctxAnim.filter = "blur(1px)"
    // ctxAnim.globalAlpha = 0.5
    if (animationActive) {
    ctxAnim.clearRect(0,0,canvasAnimationTest.width,canvasAnimationTest.height);

    requestAnimationFrame(animateTest);

    currentFrameTest = currentFrameTest % totalFramesTest;
    srcXTest = currentFrameTest * spriteWidth;
    ctxAnim.drawImage(animationTestSprite, srcXTest, srcYTest, spriteWidthTest, spriteHeightTest, xAnimTest, yAnimTest, spriteWidthTest, spriteHeightTest)

    framesDrawnTest++;
        // if (framesDrawnTest >= 5) {
            if (framesDrawnTest >= 4) {
            currentFrameTest++;
            framesDrawnTest = 0;
        }
    }

    else {
        ctxAnim.clearRect(0,0,canvasAnimationTest.width,canvasAnimationTest.height);
    }
}

function toggleAnimationTest() {
    animationActive= !animationActive
    if (animationActive) {
        console.log('animate')
        animateTest();
    }
    else {
        ctxAnim.clearRect(0,0,canvasAnimationTest.width,canvasAnimationTest.height);
        xAnimTest = canvasAnimationTest.width/2;
        yAnimTest = canvasAnimationTest.height/2;
        return;
    }
}