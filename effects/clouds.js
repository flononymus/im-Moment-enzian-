const canvasClouds1= document.getElementById("canvasClouds1");
const ctxClouds1= canvasClouds1.getContext("2d");

// var canvasWidth = canvasClouds1.width;
// var canvasHeight = canvasClouds1.height; 
canvasClouds1.width = 1000
canvasClouds1.height = 1000

const canvasClouds2= document.getElementById("canvasClouds2");
const ctxClouds2= canvasClouds2.getContext("2d");
canvasClouds2.width = 1000
canvasClouds2.height = 1000

const canvasClouds3= document.getElementById("canvasClouds3");
const ctxClouds3= canvasClouds3.getContext("2d");
canvasClouds3.width = 1000
canvasClouds3.height = 1000

var cloudsActive= false;
// var scrollSpeed1 = 0.025; 
// var scrollSpeed2 = 0.05;
// var scrollSpeed3 = 0.1;
var scrollSpeed1 = 0.05; 
var scrollSpeed2 = 0.1;
var scrollSpeed3 = 0.2;

var scrollVal1 = 0;
var scrollVal2 = 0;
var scrollVal3 = 0;

var clouds1= new Image;
// clouds1.src = "images/clouds3.png"
clouds1.src = "images/clouds7.png"
var clouds2= new Image;
// clouds2.src = "images/clouds2.png"
// clouds2.src = "images/clouds5.png"
clouds2.src = "images/clouds6.png"
var clouds3= new Image;
// clouds3.src = "images/clouds1.png"
clouds3.src = "images/clouds8.png"

// ctxClouds1.globalAlpha = 0.5;
// ctxClouds2.globalAlpha = 0.2;
// ctxClouds3.globalAlpha = 0.2;

function drawClouds() {
    if (cloudsActive) {
    ctxClouds1.clearRect(0, 0, canvasClouds1.width, canvasClouds1.height);
    ctxClouds2.clearRect(0, 0, canvasClouds2.width, canvasClouds2.height);
    ctxClouds3.clearRect(0, 0, canvasClouds3.width, canvasClouds3.height);

    ctxClouds1.drawImage(clouds1, canvasClouds1.width - scrollVal1, 0, scrollVal1, canvasClouds1.height, 0, 0, scrollVal1, canvasClouds1.height);
    ctxClouds1.drawImage(clouds1, 0, 0, canvasClouds1.width - scrollVal1, canvasClouds1.height, scrollVal1, 0, canvasClouds1.width - scrollVal1, canvasClouds1.height);

    ctxClouds2.drawImage(clouds2, canvasClouds2.width - scrollVal2, 0, scrollVal2, canvasClouds2.height, 0, 0, scrollVal2, canvasClouds2.height);
    ctxClouds2.drawImage(clouds2, 0, 0, canvasClouds2.width - scrollVal2, canvasClouds2.height, scrollVal2, 0, canvasClouds2.width - scrollVal2, canvasClouds2.height);

    ctxClouds3.drawImage(clouds3, canvasClouds3.width - scrollVal3, 0, scrollVal3, canvasClouds3.height, 0, 0, scrollVal3, canvasClouds3.height);
    ctxClouds3.drawImage(clouds3, 0, 0, canvasClouds3.width - scrollVal3, canvasClouds3.height, scrollVal3, 0, canvasClouds3.width - scrollVal3, canvasClouds3.height);

    scrollVal1 += scrollSpeed1;
    if (scrollVal1 >= canvasClouds1.width) {
        scrollVal1 = 0;
    }

    scrollVal2 += scrollSpeed2;
    if (scrollVal2 >= canvasClouds2.width) {
        scrollVal2 = 0;
    }

    scrollVal3 += scrollSpeed3;
    if (scrollVal3 >= canvasClouds3.width) {
        scrollVal3 = 0;
    }

    // if (cloudsActive) {
        requestAnimationFrame(drawClouds);
    // }
    }
    else {
        ctxClouds1.clearRect(0,0,canvasClouds1.width,canvasClouds1.height);    
        ctxClouds2.clearRect(0,0,canvasClouds2.width,canvasClouds2.height);    
        ctxClouds3.clearRect(0,0,canvasClouds3.width,canvasClouds3.height);    
    }
}

function toggleClouds() {
    cloudsActive = !cloudsActive;
        if (cloudsActive) {
        console.log('clouds on')
        drawClouds();
        // ctxClouds1.drawImage(clouds1,0,0,canvasWidth,canvasHeight);
        // ctxClouds1.drawImage(clouds1,0,0,canvasClouds1.width,canvasClouds1.height);
        // ctxClouds2.drawImage(clouds2,0,0,canvasClouds2.width,canvasClouds2.height);
        // ctxClouds3.drawImage(clouds3,0,0,canvasClouds3.width,canvasClouds3.height);
    } else {
        console.log('clouds off')
        // ctxClouds1.clearRect(0, 0, canvasWidth, canvasHeight);
        // ctxClouds2.clearRect(0, 0, canvasWidth, canvasHeight);
        // ctxClouds3.clearRect(0, 0, canvasWidth, canvasHeight);
        ctxClouds1.clearRect(0,0,canvasClouds1.width,canvasClouds1.height);    
        ctxClouds2.clearRect(0,0,canvasClouds2.width,canvasClouds2.height);    
        ctxClouds3.clearRect(0,0,canvasClouds3.width,canvasClouds3.height);    
    }
}