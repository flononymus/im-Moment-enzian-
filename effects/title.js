var canvasTitle = document.getElementById('canvasTitle')
var ctxTitle = canvasTitle.getContext('2d')

var canvasTitleFront = document.getElementById('canvasTitleFront')
var ctxTitleFront = canvasTitleFront.getContext('2d')

// var titleActive = true;
// var titleActive = false;
var titleActive= true;
var titleToggled= false;

canvasTitle.width = 1000
canvasTitle.height = 1000
canvasTitleFront.width = 1000
canvasTitleFront.height = 1000

// document.documentElement.style.setProperty('--resized-width', `${canvasTitle.width}px`);

// var titleImage = new Image()
// // titleImage.src = "images/title test6.png"
// // titleImage.src = "images/title test2.png"
// // titleImage.src =  "images/clouds6 test.png"

// var titleOpacity= 1;

// function toggleTitle() {
//         if (titleOpacity > 0) {
//             ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)
//             ctxTitle.globalAlpha = titleOpacity
//             titleOpacity-= 0.01;
//             ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height);
//             requestAnimationFrame(toggleTitle)
//         }

//         setTimeout(function() { 
//             ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height);    
//             titleOpacity= 0;
//         },3000)
// };


// function drawTitle() {
//     ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height); 
// }

var titleImage = new Image()
titleImage.src = "images/clouds6.png"
var titleImageFront = new Image()
// titleImageFront.src = "images/titleclouds.png"
// titleImageFront.src = "images/titleclouds2.png"
// titleImageFront.src = "images/titleclouds2.png"
titleImageFront.src = "images/titleclouds4.png"

console.log('toggled',titleToggled)

function toggleTitleBool() {
    if (!titleToggled) {
      titleToggled = true;
      titleActive = false;
      toggleTitle();
      console.log('toggled',titleToggled)
    }
}



function toggleTitle() {
    if (titleActive) {
        // ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height)
        titleFadeIn = true;
        drawTitle();
        console.log('title', titleActive)
    }
    else {
        // ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)
        titleFadeIn= false;
        setTimeout(function() { 
            ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height);    
            ctxTitleFront.clearRect(0,0,canvasTitle.width,canvasTitle.height);    
            titleOpacity= 0;

            // scrollSpeedTitle = 1; 
            // scrollValTitle = 0;
           // scrollSpeedTitleFront = 1.5; 
            // scrollValTitleFront = 0;
            scrollSpeedTitle = 0; 
            scrollSpeedTitleFront = 0; 
        },3000)
        console.log('title', titleActive)
    }
}

// var scrollSpeedTitle = 0.1; 
var scrollSpeedTitle = 0.5; 
var scrollValTitle = 0;

// var scrollSpeedTitleFront = 0.15; 
var scrollSpeedTitleFront = 0.9; 
var scrollValTitleFront = 0;

var titleOpacity= 0;
var titleFadeIn= false;

function drawTitle() {
    if (titleActive) {

    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitle.drawImage(titleImage, canvasTitle.width - scrollValTitle,0,scrollValTitle, canvasTitle.height,0,0,scrollValTitle, canvasTitle.height)
    ctxTitle.drawImage(titleImage, 0,0,canvasTitle.width - scrollValTitle, canvasTitle.height, scrollValTitle,0, canvasTitle.width - scrollValTitle, canvasTitle.height)

    ctxTitleFront.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitleFront.drawImage(titleImageFront, canvasTitle.width - scrollValTitleFront,0,scrollValTitleFront, canvasTitle.height,0,0,scrollValTitleFront, canvasTitle.height)
    ctxTitleFront.drawImage(titleImageFront, 0,0,canvasTitle.width - scrollValTitleFront, canvasTitle.height, scrollValTitleFront,0, canvasTitle.width - scrollValTitleFront, canvasTitle.height)

    scrollValTitle += scrollSpeedTitle;
    if (scrollValTitle >= canvasTitle.width) {
        scrollValTitle = 0;
    }

    scrollValTitleFront += scrollSpeedTitleFront;
    if (scrollValTitleFront >= canvasTitle.width) {
        scrollValTitleFront = 0;
    }

        if (titleOpacity< 1) {
            ctxTitle.globalAlpha = titleOpacity;
            ctxTitleFront.globalAlpha = titleOpacity;
            titleOpacity+= 0.005;
        }

    requestAnimationFrame(drawTitle);

    }
    else {
    ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitle.drawImage(titleImage, canvasTitle.width - scrollValTitle,0,scrollValTitle, canvasTitle.height,0,0,scrollValTitle, canvasTitle.height)
    ctxTitle.drawImage(titleImage, 0,0,canvasTitle.width - scrollValTitle, canvasTitle.height, scrollValTitle,0, canvasTitle.width - scrollValTitle, canvasTitle.height)
    scrollValTitle += scrollSpeedTitle;

    ctxTitleFront.clearRect(0,0,canvasTitle.width,canvasTitle.height)

    ctxTitleFront.drawImage(titleImageFront, canvasTitle.width - scrollValTitleFront,0,scrollValTitleFront, canvasTitle.height,0,0,scrollValTitleFront, canvasTitle.height)
    ctxTitleFront.drawImage(titleImageFront, 0,0,canvasTitle.width - scrollValTitleFront, canvasTitle.height, scrollValTitleFront,0, canvasTitle.width - scrollValTitleFront, canvasTitle.height)
    scrollValTitleFront += scrollSpeedTitleFront;


    if (scrollValTitle >= canvasTitle.width) {
        scrollValTitle = 0;
    }

    if (!titleFadeIn) {
        if (titleOpacity> 0) {
        ctxTitle.globalAlpha = titleOpacity
        ctxTitleFront.globalAlpha = titleOpacity
        titleOpacity-= 0.01;
        }
    }
    requestAnimationFrame(drawTitle);
    }
}