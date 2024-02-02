var canvasBird= document.getElementById('canvasBird');
var ctxBird = canvasBird.getContext('2d')

var canvasBird2 = document.getElementById('canvasBird');
var ctxBird2 = canvasBird2.getContext('2d');
canvasBird2.width = window.innerWidth;
canvasBird2.height = window.innerHeight;


canvasBird.width = window.innerWidth;
canvasBird.height = window.innerHeight;

var birdFlyingLeft= new Image();
birdFlyingLeft.src = "images/birdPixelLeft.png";

var birdFlyingRight = new Image();
birdFlyingRight.src = "images/birdPixelRight.png"

var birdIdle = new Image();
// birdIdle.src = "images/birdIdlePixel4.png";
birdIdle.src = "images/birdIdlePixel5.png";
// birdIdle.onload = switchIdle();


var imageSwitch = false; 
// var imageSwitch = true;


var birdActive = false;
var cols = 10;
var rows = 1;

var totalFrames = 10;
var currentFrame = 0;
var framesDrawn = 0;

var totalFramesIdle = 10;
var currentFrameIdle = 0;
var framesDrawnIdle = 0;

var srcX = 0;
var srcY = 0;
var srcXIdle = 0;
var srcYIdle = 0;

var xBird = window.innerWidth;
var yBird = window.innerHeight/2;

// var xBirdIdle = window.innerWidth/2;
// var yBirdIdle = window.innerHeight/2;
var xBirdIdle = (window.innerWidth/5) * 2;
var yBirdIdle = (window.innerHeight/7) * 5.15 ;

var birdSpeed = -1;
var birdHeight = -0.1;

var birdIdleSpeed = 0;
var birdIdleHeight = 0;

var spriteWidth = birdFlyingLeft.width / cols;
var spriteHeight = birdFlyingLeft.height / rows;

var spriteWidthIdle= birdIdle.width / cols;
var spriteHeightIdle= birdIdle.height / rows;


function animate() {
    ctxBird.filter = "blur(1px)"
    // ctxBird.globalAlpha = 0.5
    if (birdActive) {
    ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);

    requestAnimationFrame(animate);

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth;

    currentFrameIdle = currentFrameIdle % totalFramesIdle;
    srcXIdle = currentFrameIdle * spriteWidthIdle


    ctxBird.drawImage(birdFlyingLeft, srcX, srcY, spriteWidth, spriteHeight, xBird, yBird, spriteWidth, spriteHeight)
    // ctxBird2.drawImage(birdIdle, srcX, srcY, spriteIdleWidth, spriteIdleHeight, xBirdIdle, yBirdIdle, spriteIdleWidth, spriteIdleHeight)
    ctxBird.drawImage(birdIdle, srcXIdle, srcYIdle, spriteWidthIdle, spriteHeightIdle, xBirdIdle, yBirdIdle, spriteWidthIdle, spriteHeightIdle)

    xBird += birdSpeed;
    yBird += birdHeight; 

    xBirdIdle += birdIdleSpeed;
    yBirdIdle += birdIdleHeight;

    framesDrawn++;
        if (framesDrawn >= 4) {
            currentFrame++;
            framesDrawn = 0;
        }

    framesDrawnIdle++;
        if (framesDrawnIdle >= 6) {
            currentFrameIdle++;
            framesDrawnIdle = 0;
        }
    
    }

    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
    }


}

function toggleBird() {
    birdActive = !birdActive   
    if (birdActive) {
        console.log('birb')
        animate();

        setTimeout(function() {
            switchIdle();
        },5000)

    }
    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);

        xBird = window.innerWidth;
        yBird = window.innerHeight/2;
        xBirdIdle = (window.innerWidth/5) * 2;
        yBirdIdle = (window.innerHeight/7) * 5.15 ;

        birdSpeed = -1;
        birdHeight = -0.1;

        birdIdleSpeed = 0;
        birdIdleHeight = 0;

        imageSwitch = false;

        // imageSwitch = false;
        // return;
    }
}


function switchIdle() {
    imageSwitch = !imageSwitch;
    if (imageSwitch) {

        birdIdle.src = "images/birdIdlePixel5.png"
        birdIdleSpeed = 0;
        birdIdleHeight = 0;
    }
    else {
        birdIdle.src = "images/birdPixelLeft.png"
        birdIdleSpeed = 1;
        birdIdleHeight = -0.5;
    }
}