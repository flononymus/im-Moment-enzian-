var canvasTitle = document.getElementById('canvasTitle')
var ctxTitle = canvasTitle.getContext('2d')
// var titleEnabled = false;

canvasTitle.width = 1000
canvasTitle.height = 1000

document.documentElement.style.setProperty('--resized-width', `${canvasTitle.width}px`);

var titleImage = new Image()
titleImage.src = "images/title test6.png"

function drawTitle() {
    ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height); 
}


var titleOpacity= 1;

function toggleTitle() {
        if (titleOpacity > 0) {
            ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)
            ctxTitle.globalAlpha = titleOpacity
            titleOpacity-= 0.01;
            ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height);
            console.log(titleOpacity)
            requestAnimationFrame(toggleTitle)
        }

        setTimeout(function() { 
            ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height);    
            titleOpacity= 0;
        },3000)
};
