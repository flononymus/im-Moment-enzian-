const canvasBorealis = document.getElementById("canvasBorealis");
const ctxBorealis= canvasBorealis.getContext("2d");

var borealis = new Image();
borealis.src = "images/borealis test hd6.png"
borealis.onload = ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height), ctxBorealis.drawImage(borealis,srcXB,srcYB,spriteWithBorealis,spriteHeightBorealis,xBorealis, yBorealis,spriteWithBorealis,spriteHeightBorealis) ;

var borealisActive = false;

var colsBorealis = 23;

var rowsBorealis = 1;

var totalFramesB = 23;

var currentFrameB = 0;
var framesDrawnB = 0;
var srcXB = 0;
var srcYB = 0;
var spriteWithBorealis = borealis.width/colsBorealis;
var spriteHeightBorealis = borealis.height/rowsBorealis;
var xBorealis = 0
var yBorealis = 0

var borealisOpacity= 0;
var borealisFadeOut= false;

// ctxBorealis.imageSmoothingEnabled = false;

canvasBorealis.width = 1000;
canvasBorealis.height = 1000;

function animateBorealis() {
    if (borealisActive) {
        ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);
        requestAnimationFrame(animateBorealis);

        currentFrameB = currentFrameB % totalFramesB;
        srcXB = currentFrameB * spriteWithBorealis

        ctxBorealis.drawImage(borealis,srcXB,srcYB,spriteWithBorealis,spriteHeightBorealis,xBorealis, yBorealis,spriteWithBorealis,spriteHeightBorealis);
        framesDrawnB++
        if (framesDrawnB >= 15) {
            currentFrameB++;
            framesDrawnB = 0;
        }

        if (borealisOpacity < 0.2) {
            ctxBorealis.globalAlpha = borealisOpacity
            // borealisOpacity += 0.0005;
            borealisOpacity += 0.0004;
        }

    }


    else {
        ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height)
        ctxBorealis.drawImage(borealis,srcXB,srcYB,spriteWithBorealis,spriteHeightBorealis,xBorealis, yBorealis,spriteWithBorealis,spriteHeightBorealis);
        if (borealisFadeOut) {
            if (borealisOpacity > 0) {
                ctxBorealis.globalAlpha = borealisOpacity;
                borealisOpacity += -0.0005;
            }
            requestAnimationFrame(animateBorealis);
        }
    }

}

function toggleBorealis() {
    borealisActive = !borealisActive;
        if (borealisActive) {
        borealisFadeOut= false;
        setTimeout(function() { 
            animateBorealis();
            setTimeout(function() {
                toggleBorealis();
            }, 20000)
            // }, 2000)
        },15000)
        // },1000)

    } else {
        borealisFadeOut= true;
        console.log('borealis off')
        setTimeout(function() { 
            ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);     
            borealisFadeOut = false;
        },9000)
        // if (borealisOpacity < 0.1) {
        //     ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);     
        //     borealisFadeOut = false;
        // }
    }
}
