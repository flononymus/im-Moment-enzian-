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

var xBird = window.innerWidth + 200;
var yBird = window.innerHeight/2;

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



// var xBirdLanding= -1*(window.innerWidth);
// var yBirdLanding= -(window.innerHeight/7) * 5.15 ;
var xBirdLanding = -10
var yBirdLanding = (window.innerHeight/3)*2

var birdSpeedLanding = 1;
var birdHeightLanding= 0.5;
// var birdSpeedLanding = 0;
// var birdHeightLanding= 0;

var birdLanded = false;

var spriteWidthLanding = birdFlyingRight.width / cols;
var spriteHeightLanding = birdFlyingRight.height / rows;

var spriteWidthLanding= birdFlyingRight.width / cols;
var spriteHeightLanding= birdFlyingRight.height / rows;

var totalFramesLanding= 10;
var currentFrameLanding= 0;
var framesDrawnLanding= 0;

var srcXLanding = 0;
var srcYLanding = 0;




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
        if (framesDrawn >= 5) {
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

    if (xBirdIdle >= window.innerWidth + 100) {
        yBirdIdle = 0

        birdIdleSpeed = 0;
        birdIdleHeight = 0.;
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

        setTimeout(function() {
            landBird();
        },9000)

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

        // imageSwitch = false;
        switchIdle();
        landBird();

        xBirdLanding = -10
        yBirdLanding = (window.innerHeight/3)*2



        birdIdle.src = "images/birdIdlePixel5.png"

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

function landBird() {
    if (birdActive) {
        // ctxBird2.clearRect(0,0,canvasBird.width,canvasBird.height);
        requestAnimationFrame(landBird);
    
        currentFrameLanding = currentFrameLanding % totalFramesLanding;
    
        srcXLanding= currentFrameLanding* spriteWidthLanding
    
    
        ctxBird.drawImage(birdFlyingRight, srcXLanding, srcYLanding, spriteWidthLanding, spriteHeightLanding, xBirdLanding, yBirdLanding, spriteWidthLanding, spriteHeightLanding)
    
        xBirdLanding += birdSpeedLanding;
        yBirdLanding += birdHeightLanding; 
    
        framesDrawnLanding++;
            if (framesDrawnLanding >= 5) {
                currentFrameLanding++;
                framesDrawnLanding = 0;
            }
        }

        if (yBirdLanding > (window.innerHeight/10)*7.85) {
            birdSpeedLanding = 0;
            birdHeightLanding = 0;
            birdFlyingRight.src = "images/birdIdlePixel5.png"

            birdLanded = true;
        }

        if (birdLanded) {
            setTimeout(function() {
                birdLanded=false;
                birdSpeedLanding = -1;
                birdHeightLanding = -0.5;
                birdFlyingRight.src = "images/birdPixelLeft.png"
            },9000)
        }

        // else {
        //     birdSpeedLanding = 1;
        //     birdHeightLanding= 0.5;
        //     birdFlyingRight.src = "images/birdPixelRight.png"
        // }

        // else {
        //     ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
        // }
}