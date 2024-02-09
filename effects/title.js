var canvasTitle = document.getElementById('canvasTitle')
var ctxTitle = canvasTitle.getContext('2d')
var titleEnabled = false;

canvasTitle.width = 1000
canvasTitle.height = 1000

var titleImage = new Image()
// titleImage.src = "images/title test.png"
// titleImage.src = "images/title test2.png"
// titleImage.src = "images/title test3.png"
// titleImage.src = "images/title test4.png"
titleImage.src = "images/title test6.png"


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




var scrollSpeedTitle = 0.3; 
var scrollValTitle = 0;

var titleOpacity= 0;
var titleFadeIn= false;

function drawTitle() {
    if (titleEnabled) {

    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitle.drawImage(titleImage, 0,0,canvasTitle.width - scrollValTitle, canvasTitle.height, scrollValTitle,0, canvasTitle.width - scrollValTitle, canvasTitle.height)
    scrollValTitle += scrollSpeedTitle;
    if (scrollValTitle >= canvasTitle.width) {
        scrollSpeedTitle = 0;
    }

        if (titleOpacity< 1) {
            ctxTitle.globalAlpha = titleOpacity;
            titleOpacity+= 0.005;
        }

    requestAnimationFrame(drawTitle);

    }
    else {
    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)
    if (!titleFadeIn) {
        if (titleOpacity> 0) {
        ctxTitle.globalAlpha = titleOpacity
        titleOpacity-= 0.01;
        }
    }
    requestAnimationFrame(drawTitle);
    }
}