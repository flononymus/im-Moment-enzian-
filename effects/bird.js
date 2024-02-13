var canvasBird= document.getElementById('canvasBird');
var ctxBird = canvasBird.getContext('2d')

var canvasBird2 = document.getElementById('canvasBird2');
var ctxBird2 = canvasBird2.getContext('2d');

var canvasBird3 = document.getElementById('canvasBird3');
var ctxBird3 = canvasBird3.getContext('2d');

var canvasBird4 = document.getElementById('canvasBird4');
var ctxBird4 = canvasBird4.getContext('2d');


var birdFlyingLeft= new Image();
birdFlyingLeft.src = "images/birdPixelLeft.png";

var birdFlyingRight = new Image();
birdFlyingRight.src = "images/birdPixelRight.png"

var birdIdle = new Image();
birdIdle.src = "images/birdIdlePixel5.png";

var birdBackIdle= new Image();
birdBackIdle.src = "images/birdPixelRight.png";

var imageSwitch = true;
var idleLanding = false;


var birdActive = false;
var landBirdActive = false;
var birdCycleComplete = false;

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

var totalFramesIdle2 = 10;
var currentFrameIdle2 = 0;
var framesDrawnIdle2 = 0;
var srcXIdle2 = 0;
var srcYIdle2 = 0;

var xBird
var yBird
var xBirdIdle
var yBirdIdle
var xBirdIdle2
var yBirdIdle2

var birdSpeed = -1.5;
var birdHeight = -0.2;

var birdIdleSpeed = 0;
var birdIdleHeight = 0;

var spriteWidth = birdFlyingLeft.width / cols;
var spriteHeight = birdFlyingLeft.height / rows;

var spriteWidthIdle= birdIdle.width / cols;
var spriteHeightIdle= birdIdle.height / rows;

var birdOpacity = 0;



var xBirdLanding
var yBirdLanding

var birdSpeedLanding = 1.5;
var birdHeightLanding= 1;

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

canvasBird.width = 1200;
canvasBird.height = 1200;
canvasBird2.width = 1200;
canvasBird2.height = 1200;
canvasBird3.width = 1200;
canvasBird3.height = 1200;
canvasBird4.width = 1200;
canvasBird4.height = 1200;

xBird = canvasBird.width;
yBird = canvasBird.height/2;
xBirdIdle = (canvasBird.width/5) * 2;
yBirdIdle = (canvasBird.height/7) * 5.15 ;
yBirdLanding = (canvasBird.height/3) * 2
xBirdLanding = -10


// let targetXIdle = (canvasBird2.height/7) * 5.15;
// let targetYIdle = (canvasBird2.width/5)*2;

function toggleBird() {

    birdActive = !birdActive   
    if (birdActive) {
        console.log('birb')
        animateBird();
        idleBird();

        setTimeout(function() {
            switchIdle();
            console.log('switch idle', imageSwitch)
        },5000)

        setTimeout(function() {
            landBird();
        },9000)

        // setTimeout(function() {
        //     repeatBirdCycle();
        // },12000)

    }
    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
        ctxBird2.clearRect(0,0,canvasBird.width,canvasBird.height);
        ctxBird3.clearRect(0,0,canvasBird.width,canvasBird.height);

        xBird = canvasBird.width;
        yBird = canvasBird.height/2;
        xBirdIdle = (canvasBird.width/5) * 2;
        yBirdIdle = (canvasBird.height/7) * 5.15 ;

        birdSpeed = -1.5;
        birdHeight = -0.2;

        birdIdleSpeed = 0;
        birdIdleHeight = 0;

        switchIdle();
        landBird();
        // startLandBird();


        xBirdLanding = -10
        yBirdLanding = (canvasBird.height/3)*2
        birdIdle.src = "images/birdIdlePixel5.png"

        birdOpacity = 0;
    }
}


function animateBird() {

    ctxBird.filter = "blur(1px)"
    ctxBird2.filter = "blur(1px)"
    ctxBird3.filter = "blur(1px)"

    if (birdActive) {
    ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
    ctxBird2.clearRect(0,0,canvasBird.width,canvasBird.height);
    ctxBird3.clearRect(0,0,canvasBird.width,canvasBird.height);

    requestAnimationFrame(animateBird);

    currentFrame = currentFrame % totalFrames;
    srcX = currentFrame * spriteWidth;

    ctxBird.drawImage(birdFlyingLeft, srcX, srcY, spriteWidth, spriteHeight, xBird, yBird, spriteWidth, spriteHeight)

    xBird += birdSpeed;
    yBird += birdHeight; 

    if (xBird < -30) {
        setTimeout(() => {
            xBird = canvasBird.width + 30;
            yBird = canvasBird.height/2;
        },5000)
    }

    framesDrawn++;
        if (framesDrawn > 3) { 
            currentFrame++;
            framesDrawn = 0;
        }
    }

    else {
        ctxBird.clearRect(0,0,canvasBird.width,canvasBird.height);
    }
}

function idleBird() {
    if (birdActive) {

        requestAnimationFrame(idleBird)

        if (birdOpacity < 1) {
            ctxBird2.globalAlpha = birdOpacity;
            birdOpacity+= 0.01;
        }

        currentFrameIdle = currentFrameIdle % totalFramesIdle;
        srcXIdle = currentFrameIdle * spriteWidthIdle

        ctxBird2.drawImage(birdIdle, srcXIdle, srcYIdle, spriteWidthIdle, spriteHeightIdle, xBirdIdle, yBirdIdle, spriteWidthIdle, spriteHeightIdle)

        xBirdIdle += birdIdleSpeed;
        yBirdIdle += birdIdleHeight;

        framesDrawnIdle++;
        if (framesDrawnIdle >= 3) {
            currentFrameIdle++;
            framesDrawnIdle = 0;
        }

        if (xBirdIdle > canvasBird2.width + 30) {
            birdIdleSpeed = 0;
            birdIdleHeight = 0;
            // birdBackToIdle();
        }
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
        birdIdleSpeed = 1.5;
        birdIdleHeight = -0.5;
    }
}

function landBird() {
    if (birdActive) {

        // birdSpeedLanding = 1.5;
        // birdHeightLanding= 1;

        requestAnimationFrame(landBird);
        ctxBird3.clearRect(0,0,canvasBird.width,canvasBird.height);
    
        currentFrameLanding = currentFrameLanding % totalFramesLanding;
    
        srcXLanding= currentFrameLanding* spriteWidthLanding
    
        ctxBird3.drawImage(birdFlyingRight, srcXLanding, srcYLanding, spriteWidthLanding, spriteHeightLanding, xBirdLanding, yBirdLanding, spriteWidthLanding, spriteHeightLanding)
    
        xBirdLanding += birdSpeedLanding;
        yBirdLanding += birdHeightLanding; 
    
        framesDrawnLanding++;
            if (framesDrawnLanding > 3) {
                currentFrameLanding++;
                framesDrawnLanding = 0;
            }
        }

        if (yBirdLanding > (canvasBird.height/10)*7.8) {
            birdSpeedLanding = 0;
            birdHeightLanding = 0;
            birdFlyingRight.src = "images/birdIdlePixel5.png"

            birdLanded = true;
        }

        if (birdLanded) {
            setTimeout(function() {
                birdLanded=false;
                birdSpeedLanding = -1.5;
                birdHeightLanding = -1;
                birdFlyingRight.src = "images/birdPixelLeft.png"

            },6000)

        }
        
        // if (yBirdLanding < (canvasBird.height/2)) {
        //     console.log('too high')
        //     xBirdLanding = -10
        //     yBirdLanding = (canvasBird.height/3)*2
    
        //     birdSpeedLanding = 0
        //     birdHeightLanding= 0;
            
        //     // repeatBirdCycle();
        // }

}



function repeatBirdCycle() {
    if (birdActive) {
        birdLanded = false;
        console.log('cycle birb')
        xBirdLanding = -10
        yBirdLanding = (canvasBird.height/3)*2

        birdSpeedLanding = 1.5;
        birdHeightLanding= 1;
        landBird();

    }

}

function toggleBirdActive() {
    birdActive=!birdActive
    // if (birdActive) {
    //     console.log('test active')
    // }
    // else {
    //     console.log('test NOT active')
    // }
}