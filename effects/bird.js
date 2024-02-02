var canvasBird= document.getElementById('canvasBird');
var ctxBird = canvasBird.getContext('2d')

canvasBird.width = window.innerWidth;
canvasBird.height = window.innerHeight;

var birdFlyingLeft= new Image();
birdFlyingLeft.src = "images/birdPixelLeft.png";

var birdFlyingRight = new Image();
birdFlyingRight.src = "images/birdPixelRight.png"

var birdIdle = new Image();
// birdIdle.src = "images/birdIdlePixel4.png";
birdIdle.src = "images/birdIdlePixel5.png";

var imageSwitch = false; 


var birdActive = false;
var cols = 10;
var rows = 1;
var totalFrames = 10;
var totalFramesIdle = 10;
var currentFrame = 0;

var framesDrawn = 0;

var srcX = 0;
var srcY = 0;

var xBird = window.innerWidth;
var yBird = window.innerHeight/2;

var xBirdIdle = window.innerWidth/2;
var yBirdIdle = window.innerHeight/2;
// var xBird = window.innerWidth/2;
// var yBird = window.innerHeight/2;
// var birdSpeed = -0.8; 
var birdSpeed = -1;
var birdHeight = -0.1;

var birdIdleSpeed = 1;
var birdIdleHeight = 0.1;

var spriteWidth = birdFlyingLeft.width / cols;
var spriteHeight = birdFlyingLeft.height / rows;

var spriteIdleWidth = birdIdle.width / cols;
var spriteIdleHeight = birdIdle.height / rows;


function animate() {
    ctxBird.filter = "blur(1px)"
    // ctxBird.globalAlpha = 0.5
    if (birdActive) {
    ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);

    requestAnimationFrame(animate);

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth;
    ctxBird.drawImage(birdFlyingLeft, srcX, srcY, spriteWidth, spriteHeight, xBird, yBird, spriteWidth, spriteHeight)
    ctxBird.drawImage(birdIdle, srcX, srcY, spriteIdleWidth, spriteIdleHeight, xBirdIdle, yBirdIdle, spriteIdleWidth, spriteIdleHeight)

    xBird += birdSpeed;
    yBird += birdHeight; 

    framesDrawn++;
        if (framesDrawn >= 4) {
            currentFrame++;
            framesDrawn = 0;
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
        // testSwitchAnimation();
    }
    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
        xBird = window.innerWidth;
        yBird = window.innerHeight/2;
        birdSpeed = -1;
        birdHeight = -0.1;
        return;
    }
}


function switchIdle() {
    imageSwitch = false;
    if (imageSwitch) {
        birdIdleImage.src = "images/birdIdlePixel5.png"
        console.log('image 1')
    }
    else {
        birdIdleImage.src = "images/birdPixelLeft.png"
        console.log('image 2')
    }
}