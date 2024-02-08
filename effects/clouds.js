const canvasClouds1= document.getElementById("canvasClouds1");
const ctxClouds1= canvasClouds1.getContext("2d");

canvasClouds1.width = 1000
canvasClouds1.height = 1000

const canvasClouds2= document.getElementById("canvasClouds2");
const ctxClouds2= canvasClouds2.getContext("2d");
canvasClouds2.width = 1000
canvasClouds2.height = 10003

const canvasClouds3= document.getElementById("canvasClouds3");
const ctxClouds3= canvasClouds3.getContext("2d");
canvasClouds3.width = 1000
canvasClouds3.height = 1000

var cloudsActive= false;
var scrollSpeed1 = 0.05; 
var scrollSpeed2 = 0.1;
var scrollSpeed3 = 0.2;

var scrollVal1 = 0;
var scrollVal2 = 0;
var scrollVal3 = 0;

var clouds1= new Image;
clouds1.src = "images/clouds7.png"
var clouds2= new Image;
// clouds2.src = "images/clouds6.png"
clouds2.src = "images/clouds6 test.png"
var clouds3= new Image;
// clouds3.src = "images/clouds8.png"
clouds3.src = "images/clouds8 test.png"

var cloudsOpacity = 0;
var cloudFadeIn = false;

ctxClouds1.imageSmoothingEnabled = false;
ctxClouds2.imageSmoothingEnabled = false;
ctxClouds3.imageSmoothingEnabled = false;

ctxClouds1.filter = "blur(3px)";
ctxClouds2.filter = "blur(3px)";
ctxClouds3.filter = "blur(3px)";

// ctxClouds2.globalAlpha = 0;
// ctxClouds3.globalAlpha = 0;

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


    // setTimeout(function() { 
        if (cloudsOpacity < 1) {
        // console.log(ctxClouds1.globalAlpha);
        ctxClouds1.globalAlpha = cloudsOpacity;
        ctxClouds2.globalAlpha = cloudsOpacity;
        ctxClouds3.globalAlpha = cloudsOpacity;
        cloudsOpacity+= 0.005;
        }
    // },1000/fps)

    requestAnimationFrame(drawClouds);

    }
    else {
    ctxClouds1.clearRect(0,0,canvasClouds1.width,canvasClouds1.height);    
    ctxClouds2.clearRect(0,0,canvasClouds2.width,canvasClouds2.height);    
    ctxClouds3.clearRect(0,0,canvasClouds3.width,canvasClouds3.height);    

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


    if (!cloudFadeIn) {
        if (cloudsOpacity > 0) {
        // console.log(ctxClouds1.globalAlpha);
        ctxClouds1.globalAlpha = cloudsOpacity;
        ctxClouds2.globalAlpha = cloudsOpacity;
        ctxClouds3.globalAlpha = cloudsOpacity;
        cloudsOpacity-= 0.005;

        }
    }

    requestAnimationFrame(drawClouds);
    }
}

function toggleClouds() {
    cloudsActive = !cloudsActive;
        if (cloudsActive) {
        cloudFadeIn = true;
        console.log('clouds on')
        drawClouds();
    } else {
        cloudFadeIn = false;
        // cloudsOpacity = 0;
        console.log('clouds off')
        setTimeout(function() { 
            ctxClouds1.clearRect(0,0,canvasClouds1.width,canvasClouds1.height);    
            ctxClouds2.clearRect(0,0,canvasClouds2.width,canvasClouds2.height);    
            ctxClouds3.clearRect(0,0,canvasClouds3.width,canvasClouds3.height);    
            cloudsOpacity = 0;
        },3000)
    // },2000)
    }
}