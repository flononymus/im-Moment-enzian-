var canvasBird= document.getElementById('canvasBird');
var ctxBird = canvasBird.getContext('2d')

// canvasBird.width = 128;
// canvasBird.height = 128;
canvasBird.width = window.innerWidth;
canvasBird.height = window.innerHeight;

var animationSpriteSheet = new Image();
// animationSpriteSheet.src = "images/bird2.png"
// animationSpriteSheet.src = "images/bird3.png"
// animationSpriteSheet.src = "images/bird5.png"
animationSpriteSheet.src = "images/birdPixelLeft.png";

var birdActive = false;
// var cols = 8;
// var rows = 1
var cols = 10;
var rows = 1;
// var totalFrames = 8;
var totalFrames = 10;
var currentFrame = 0;

var framesDrawn = 0;

var srcX = 0;
var srcY = 0;

var xBird = window.innerWidth;
var yBird = window.innerHeight/2;
// var xBird = window.innerWidth/2;
// var yBird = window.innerHeight/2;
// var birdSpeed = -0.8; 
var birdSpeed = -1;
var birdHeight = -0.1;

var spriteWidth = animationSpriteSheet.width / cols;
var spriteHeight = animationSpriteSheet.height / rows;


function animate() {
    ctxBird.filter = "blur(1px)"
    // ctxBird.globalAlpha = 0.5
    // console.log(xBird,yBird)
    if (birdActive) {
    ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);

    requestAnimationFrame(animate);

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth;
    // srcY = currentFrame * spriteHeight;
    ctxBird.drawImage(animationSpriteSheet, srcX, srcY, spriteWidth, spriteHeight, xBird, yBird, spriteWidth, spriteHeight)

    xBird += birdSpeed;
    yBird += birdHeight; 

    framesDrawn++;
        // if (framesDrawn >= 10) {
        if (framesDrawn >= 4) {
        // if (framesDrawn >= 3) {
            currentFrame++;
            framesDrawn = 0;
        }
    }

    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
    }
}

// let numOfImages = 1
// function loadImages() {
//     if (--numOfImages > 0 ) return;
//     animate();
// }


function toggleBird() {
    birdActive = !birdActive   
    if (birdActive) {
        console.log('birb')
        animate();
    }
    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
        xBird = window.innerWidth;
        yBird = window.innerHeight/2;
        // xBird = window.innerWidth/2;
        // yBird = window.innerHeight/2;
        birdSpeed = -1;
        birdHeight = -0.1;
        return;
    }
}