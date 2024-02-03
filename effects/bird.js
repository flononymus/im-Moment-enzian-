var canvasBird= document.getElementById('canvasBird');
var ctxBird = canvasBird.getContext('2d')
// canvasBird.width = window.innerWidth;
// canvasBird.height = window.innerHeight;
// canvasBird.width = 2200;
// canvasBird.height = 2200;

// canvasBird.width = 500;
// canvasBird.height = 500;

var canvasBird2 = document.getElementById('canvasBird');
var ctxBird2 = canvasBird2.getContext('2d');
// canvasBird2.width = window.innerWidth;
// canvasBird2.height = window.innerHeight;
// canvasBird2.width = 1200;
// canvasBird2.height = 1200;

var canvasBird3 = document.getElementById('canvasBird');
var ctxBird3 = canvasBird3.getContext('2d');
// canvasBird3.width = window.innerWidth;
// canvasBird3.height = window.innerHeight;
// canvasBird3.width = 1200;
// canvasBird3.height = 1200;



var birdFlyingLeft= new Image();
birdFlyingLeft.src = "images/birdPixelLeft.png";

var birdFlyingRight = new Image();
birdFlyingRight.src = "images/birdPixelRight.png"

var birdIdle = new Image();
// birdIdle.src = "images/birdIdlePixel4.png";
birdIdle.src = "images/birdIdlePixel5.png";
// birdIdle.onload = switchIdle();

// var imageSwitch = false; 
var imageSwitch = true;


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

// var xBird = window.innerWidth + 200;
// var yBird = window.innerHeight/2;
// var xBird = canvasBird.width + 200;
// var yBird = canvasBird.height/2;
var xBird
var yBird

// var xBirdIdle = (window.innerWidth/5) * 2;
// var yBirdIdle = (window.innerHeight/7) * 5.15 ;
// var xBirdIdle = (canvasBird.width/5) * 2;
// var yBirdIdle = (canvasBird.height/7) * 5.15 ;
// var xBirdIdle = canvasBird.width/2
// var yBirdIdle = canvasBird.height/2
var xBirdIdle
var yBirdIdle

var birdSpeed = -1;
var birdHeight = -0.1;

var birdIdleSpeed = 0;
var birdIdleHeight = 0;

var spriteWidth = birdFlyingLeft.width / cols;
var spriteHeight = birdFlyingLeft.height / rows;

var spriteWidthIdle= birdIdle.width / cols;
var spriteHeightIdle= birdIdle.height / rows;

var birdOpacity = 0;



// var xBirdLanding= -1*(window.innerWidth);
// var yBirdLanding= -(window.innerHeight/7) * 5.15 ;
// var xBirdLanding = -10
var xBirdLanding
// var yBirdLanding = (window.innerHeight/3)*2
// var yBirdLanding = (canvasBird.height/3)*2
var yBirdLanding

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


canvasBird.width = 1000;
canvasBird.height = 1000;

xBird = canvasBird.width;
yBird = canvasBird.height/2;
xBirdIdle = (canvasBird.width/5) * 2;
yBirdIdle = (canvasBird.height/7) * 5.15 ;
yBirdLanding = (canvasBird.height/3)*2
// yBirdLanding = (canvasBird.height/2)
xBirdLanding = -10



function animate() {

    ctxBird.filter = "blur(1px)"
    ctxBird2.filter = "blur(1px)"
    ctxBird3.filter = "blur(1px)"
    // ctxBird.globalAlpha = 1
    // ctxBird2.globalAlpha = 0.1

    if (birdActive) {
    ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
    ctxBird2.clearRect(0,0,canvasBird.width,canvasBird.height);
    ctxBird3.clearRect(0,0,canvasBird.width,canvasBird.height);

    // console.log(xBirdIdle,yBirdIdle)

    requestAnimationFrame(animate);

    if (birdOpacity < 1) {
        ctxBird2.globalAlpha = birdOpacity;
        birdOpacity+= 0.01;
    }

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth;

    currentFrameIdle = currentFrameIdle % totalFramesIdle;
    srcXIdle = currentFrameIdle * spriteWidthIdle


    ctxBird.drawImage(birdFlyingLeft, srcX, srcY, spriteWidth, spriteHeight, xBird, yBird, spriteWidth, spriteHeight)
    // ctxBird2.drawImage(birdIdle, srcX, srcY, spriteIdleWidth, spriteIdleHeight, xBirdIdle, yBirdIdle, spriteIdleWidth, spriteIdleHeight)
    // ctxBird2.drawImage(birdIdle, srcXIdle, srcYIdle, spriteWidthIdle, spriteHeightIdle, xBirdIdle, yBirdIdle, spriteWidthIdle, spriteHeightIdle)
    ctxBird2.drawImage(birdIdle, srcXIdle, srcYIdle, spriteWidthIdle, spriteHeightIdle, xBirdIdle, yBirdIdle, spriteWidthIdle, spriteHeightIdle)

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

    // if (xBirdIdle >= window.innerWidth + 100) {
    //     yBirdIdle = 0

    //     birdIdleSpeed = 0;
    //     birdIdleHeight = 0.;
    // }
}

function toggleBird() {

    // canvasBird.width = 1000;
    // canvasBird.height = 1000;

    birdActive = !birdActive   
    // console.log(ctxBird2.canvas.width,ctxBird2.canvas.height)
    if (birdActive) {
        console.log('birb')
        animate();

        setTimeout(function() {
            switchIdle();
            console.log('switch', imageSwitch)
        },5000)

        setTimeout(function() {
            landBird();
        },9000)

    }
    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
        ctxBird2.clearRect(0,0,canvasBird.width,canvasBird.height);
        ctxBird3.clearRect(0,0,canvasBird.width,canvasBird.height);

        // xBird = window.innerWidth;
        // yBird = window.innerHeight/2;
        // xBirdIdle = (window.innerWidth/5) * 2;
        // yBirdIdle = (window.innerHeight/7) * 5.15 ;
        xBird = canvasBird.width;
        yBird = canvasBird.height/2;
        xBirdIdle = (canvasBird.width/5) * 2;
        yBirdIdle = (canvasBird.height/7) * 5.15 ;

        birdSpeed = -1;
        birdHeight = -0.1;

        birdIdleSpeed = 0;
        birdIdleHeight = 0;

        // imageSwitch = false;
        switchIdle();
        landBird();


        xBirdLanding = -10
        // yBirdLanding = (window.innerHeight/3)*2
        yBirdLanding = (canvasBird.height/3)*2



        birdIdle.src = "images/birdIdlePixel5.png"

        birdOpacity = 0;

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

        // console.log('test')
        // requestAnimationFrame(switchIdle)
    }
}

function landBird() {
    if (birdActive) {
        // ctxBird2.clearRect(0,0,canvasBird.width,canvasBird.height);
        requestAnimationFrame(landBird);
    
        currentFrameLanding = currentFrameLanding % totalFramesLanding;
    
        srcXLanding= currentFrameLanding* spriteWidthLanding
    
    
        ctxBird3.drawImage(birdFlyingRight, srcXLanding, srcYLanding, spriteWidthLanding, spriteHeightLanding, xBirdLanding, yBirdLanding, spriteWidthLanding, spriteHeightLanding)
    
        xBirdLanding += birdSpeedLanding;
        yBirdLanding += birdHeightLanding; 
    
        framesDrawnLanding++;
            if (framesDrawnLanding >= 5) {
                currentFrameLanding++;
                framesDrawnLanding = 0;
            }
        }

        if (yBirdLanding > (canvasBird.height/10)*7.8) {
            // if (yBirdLanding > (canvasBird.height/10)*7) {
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