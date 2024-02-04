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

ctxBorealis.imageSmoothingEnabled = false;

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

        if (borealisOpacity < 0.3) {
            ctxBorealis.globalAlpha = borealisOpacity
            // borealisOpacity += 0.0005;
            borealisOpacity += 0.0005;
        }

    }


    else {
        ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height)
        ctxBorealis.drawImage(borealis,srcXB,srcYB,spriteWithBorealis,spriteHeightBorealis,xBorealis, yBorealis,spriteWithBorealis,spriteHeightBorealis);
        if (borealisFadeOut) {
            if (borealisOpacity > 0) {
                ctxBorealis.globalAlpha = borealisOpacity;
                borealisOpacity += -0.001;
            }
            requestAnimationFrame(animateBorealis);
        }
    }

}

function toggleBorealis() {
    borealisActive = !borealisActive;
        if (borealisActive) {
        borealisFadeOut= false;
        console.log('borealis on')
        animateBorealis();
        // canvasBorealis.width = 1000
        // canvasBorealis.height = 1000
        // ctxBorealis.drawImage(borealis,0,0,canvasBorealis.width, canvasBorealis.height)

        // ctxBorealis.globalAlpha = 0.3
        // ctxBorealis.globalAlpha = 1
        // setTimeout(function(){ 
        //     // ctxBorealis.filter = "blur(5px)"
        //     ctxBorealis.globalAlpha = 0.3;
        // },1000)


    } else {
        borealisFadeOut= true;
        // console.log('borealis off')
        setTimeout(function() { 
            ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);     
            console.log('test')
            borealisFadeOut = false;
        },3000)
    }
}
