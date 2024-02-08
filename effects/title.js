var canvasTitle = document.getElementById('canvasTitle')
var ctxTitle = canvasTitle.getContext('2d')
var titleEnabled = false;

canvasTitle.width = 1000
canvasTitle.height = 1000

var titleImage = new Image()
// titleImage.src = "images/title test.png"
// titleImage.src = "images/title test2.png"
titleImage.src = "images/title test3.png"


function toggleTitle() {
    titleEnabled = !titleEnabled
    if (titleEnabled) {
        titleFadeIn = true;
        drawTitle();
        console.log('title', titleEnabled)
    }
    else {
        titleFadeIn= false;
        setTimeout(function() { 
            ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height);    
            titleOpacity= 0;
        },3000)
        console.log('title', titleEnabled)
    }
}




var scrollSpeedTitle = 0.05; 
var scrollValTitle = 0;

var titleOpacity= 0;
var titleFadeIn= false;

function drawTitle() {
    if (titleEnabled) {

    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitle.drawImage(titleImage, canvasTitle.width - scrollValTitle,0,scrollValTitle, canvasTitle.height,0,0,scrollValTitle, canvasTitle.height)
    ctxTitle.drawImage(titleImage, 0,0,canvasTitle.width - scrollValTitle, canvasTitle.height, scrollValTitle,0, canvasTitle.width - scrollValTitle, canvasTitle.height)
    // ctxClouds1.drawImage(clouds1, canvasClouds1.width - scrollVal1, 0, scrollVal1, canvasClouds1.height, 0, 0, scrollVal1, canvasClouds1.height);
    // ctxClouds1.drawImage(clouds1, 0, 0, canvasClouds1.width - scrollVal1, canvasClouds1.height, scrollVal1, 0, canvasClouds1.width - scrollVal1, canvasClouds1.height);

    scrollValTitle += scrollSpeedTitle;
    if (scrollValTitle >= canvasTitle.width) {
        scrollValTitle = 0;
    }

        if (titleOpacity< 1) {
            ctxTitle.globalAlpha = titleOpacity;
            titleOpacity+= 0.005;
        }

    requestAnimationFrame(drawTitle);

    }
    else {
    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitle.drawImage(titleImage, canvasTitle.width - scrollValTitle,0,scrollValTitle, canvasTitle.height,0,0,scrollValTitle, canvasTitle.height)
    ctxTitle.drawImage(titleImage, 0,0,canvasTitle.width - scrollValTitle, canvasTitle.height, scrollValTitle,0, canvasTitle.width - scrollValTitle, canvasTitle.height)
    scrollVal1 += scrollSpeed1;

    if (scrollValTitle >= canvasTitle.width) {
        scrollValTitle = 0;
    }

    if (!titleFadeIn) {
        if (titleOpacity> 0) {
        ctxTitle.globalAlpha = titleOpacity
        titleOpacity-= 0.01;
        }
    }
    requestAnimationFrame(drawTitle);
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