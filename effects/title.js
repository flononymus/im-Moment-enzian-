var canvasTitle = document.getElementById('canvasTitle')
var ctxTitle = canvasTitle.getContext('2d')
var titleEnabled = false;

canvasTitle.width = 1000
canvasTitle.height = 1000

document.documentElement.style.setProperty('--resized-width', `${canvasTitle.width}px`);

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


var titleOpacity= 0;
var titleFadeIn= false;

function drawTitle() {
    if (titleEnabled) {

    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    // ctxTitle.drawImage(titleImage, 0,0,canvasTitle.width - scrollValTitle, canvasTitle.height, scrollValTitle,0, canvasTitle.width - scrollValTitle, canvasTitle.height)
    ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height);
        if (titleOpacity< 1) {
            ctxTitle.globalAlpha = titleOpacity;
            titleOpacity+= 0.01;
        }

    requestAnimationFrame(drawTitle);

    }
    else {
    if (!titleFadeIn) {
        if (titleOpacity> 0) {
        ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)
        ctxTitle.globalAlpha = titleOpacity
        titleOpacity-= 0.01;
        ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height);
        console.log(titleOpacity)
        }
    }
    requestAnimationFrame(drawTitle);
    }
    // requestAnimationFrame(drawTitle);
}
