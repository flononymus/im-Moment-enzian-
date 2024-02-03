const canvasBorealis = document.getElementById("canvasBorealis");
const ctxBorealis= canvasBorealis.getContext("2d");

var borealis = new Image();
// borealis.src = "images/borealis test.png"
borealis.src = "images/borealis test4.png"
// borealis.src = "images/borealis test2.png"

var borealisActive = false;

var colsBorealis = 10;
var rowsBorealis = 1;
var totalFramesB = 10;
var currentFrameB = 0;
var framesDrawnB = 0;
var srcXB = 0;
var srcYB = 0;
var spriteWithBorealis = borealis.width/colsBorealis;
var spriteHeightBorealis = borealis.height/rowsBorealis;
var xBorealis = 0
var yBorealis = 0

ctxBorealis.globalAlpha = 0.1;
// ctxBorealis.globalAlpha = 1

function animateBorealis() {
    canvasBorealis.width = 100;
    canvasBorealis.height = 100;
    if (borealisActive) {
        ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);
        requestAnimationFrame(animateBorealis);

        currentFrameB = currentFrameB % totalFramesB;
        srcXB = currentFrameB * spriteWithBorealis

        ctxBorealis.drawImage(borealis,srcXB,srcYB,spriteWithBorealis,spriteHeightBorealis,xBorealis, yBorealis,spriteWithBorealis,spriteHeightBorealis);
        framesDrawnB++
        if (framesDrawnB >= 5) {
            currentFrameB++;
            framesDrawnB = 0;
        }
    }
}

function toggleBorealis() {
    borealisActive = !borealisActive;
        if (borealisActive) {
        console.log('borealis on')
        // animateBorealis();
        canvasBorealis.width = 1000
        canvasBorealis.height = 1000
        ctxBorealis.drawImage(borealis,0,0,canvasBorealis.width, canvasBorealis.height)
    } else {
        console.log('borealis off')
        ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);    
    }
}
