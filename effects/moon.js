var canvasMoon = document.getElementById('canvasMoon');
var ctxMoon= canvasMoon.getContext('2d');

canvasMoon.width = 1000;
canvasMoon.height = 1000;

var moonImage = new Image();
moonImage.src = "images/moonsmall.png"

ctxMoon.globalAlpha = 0.6;
var moonShown = false

function toggleMoon() {
    moonShown = !moonShown 
    if (moonShown) {
    ctxMoon.drawImage(moonImage,0,0,canvasMoon.width,canvasMoon.height)
    console.log('moon should be here')
    }
    else {
        ctxMoon.clearRect(0,0,canvasMoon.width,canvasMoon.height)
        console.log('clear')
        
    }
}
