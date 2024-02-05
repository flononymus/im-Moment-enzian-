const canvasClouds4= document.getElementById("canvasClouds4");
const ctxClouds4= canvasClouds4.getContext("2d");
canvasClouds4.width = 1000
canvasClouds4.height = 1000

const canvasClouds5= document.getElementById("canvasClouds5");
// const ctxClouds5= canvasClouds5.getContext("2d");
const ctxClouds5= canvasClouds5.getContext("2d");
canvasClouds5.width = 1000
canvasClouds5.height = 1000

var cloudsDayActive= false;
var scrollSpeed4 = 0.15;
var scrollSpeed5 = 0.25;

var scrollVal4 = 0;
var scrollVal5 = 0;

var clouds4= new Image;
clouds4.src = "images/clouds8.png"
var clouds5= new Image;
clouds5.src = "images/clouds9.png"

var cloudsOpacityDay = 0;
var cloudsDayFadeIn = false;

ctxClouds4.imageSmoothingEnabled = false;
ctxClouds5.imageSmoothingEnabled = false;

// ctxClouds4.filter = "blur(3px)";
// ctxClouds5.filter = "blur(3px)";


function drawCloudsDay() {
    if (cloudsDayActive) {

    ctxClouds4.clearRect(0, 0, canvasClouds4.width, canvasClouds4.height);
    ctxClouds5.clearRect(0, 0, canvasClouds5.width, canvasClouds5.height);

    ctxClouds4.drawImage(clouds4, canvasClouds4.width - scrollVal4, 0, scrollVal4, canvasClouds4.height, 0, 0, scrollVal4, canvasClouds4.height);
    ctxClouds4.drawImage(clouds4, 0, 0, canvasClouds4.width - scrollVal4, canvasClouds4.height, scrollVal4, 0, canvasClouds4.width - scrollVal4, canvasClouds4.height);
    ctxClouds5.drawImage(clouds5, canvasClouds5.width - scrollVal5, 0, scrollVal5, canvasClouds5.height, 0, 0, scrollVal5, canvasClouds5.height);
    ctxClouds5.drawImage(clouds5, 0, 0, canvasClouds5.width - scrollVal5, canvasClouds5.height, scrollVal5, 0, canvasClouds5.width - scrollVal5, canvasClouds5.height);

    scrollVal4 += scrollSpeed4;
    if (scrollVal4 >= canvasClouds4.width) {
        scrollVal4 = 0;
    }
    scrollVal5 += scrollSpeed5;
    if (scrollVal5 >= canvasClouds5.width) {
        scrollVal5 = 0;
    }


    // setTimeout(function() { 
        if (cloudsOpacityDay < 0.25) {
        ctxClouds4.globalAlpha = cloudsOpacityDay;
        ctxClouds5.globalAlpha = cloudsOpacityDay;
        cloudsOpacityDay+= 0.005;
        }
    // },1000/fps)

    requestAnimationFrame(drawCloudsDay);

    }
    else {
    ctxClouds4.clearRect(0,0,canvasClouds4.width,canvasClouds4.height);    
    ctxClouds5.clearRect(0, 0, canvasClouds5.width, canvasClouds5.height);

    ctxClouds4.drawImage(clouds4, canvasClouds4.width - scrollVal4, 0, scrollVal4, canvasClouds4.height, 0, 0, scrollVal4, canvasClouds4.height);
    ctxClouds4.drawImage(clouds4, 0, 0, canvasClouds4.width - scrollVal4, canvasClouds4.height, scrollVal4, 0, canvasClouds4.width - scrollVal4, canvasClouds4.height);
    ctxClouds5.drawImage(clouds5, canvasClouds5.width - scrollVal5, 0, scrollVal5, canvasClouds5.height, 0, 0, scrollVal5, canvasClouds5.height);
    ctxClouds5.drawImage(clouds5, 0, 0, canvasClouds5.width - scrollVal5, canvasClouds5.height, scrollVal5, 0, canvasClouds5.width - scrollVal5, canvasClouds5.height);

    scrollVal4 += scrollSpeed4;
    if (scrollVal4 >= canvasClouds4.width) {
        scrollVal4 = 0;
    }
    scrollVal5 += scrollSpeed5;
    if (scrollVal5 >= canvasClouds5.width) {
        scrollVal5 = 0;
    }


    if (!cloudsDayFadeIn) {
        if (cloudsOpacityDay > 0) {
        ctxClouds4.globalAlpha = cloudsOpacityDay;
        ctxClouds5.globalAlpha = cloudsOpacityDay;
        cloudsOpacityDay-= 0.005;

        }
    }

    requestAnimationFrame(drawCloudsDay);
    }
}

function toggleCloudsDay() {
    cloudsDayActive = !cloudsDayActive;
        if (cloudsDayActive) {
        cloudsDayFadeIn = true;
        console.log('clouds day on')
        drawCloudsDay();
    } else {
        cloudsDayFadeIn = false;
        console.log('clouds day off')
        setTimeout(function() { 
            ctxClouds4.clearRect(0,0,canvasClouds4.width,canvasClouds4.height);    
            ctxClouds5.clearRect(0, 0, canvasClouds5.width, canvasClouds5.height);
            cloudsOpacityDay = 0;
        },3000)
    }
}