var canvasMoon = document.getElementById('canvasMoon');
var ctxMoon= canvasMoon.getContext('2d');

canvasMoon.width = 1000;
canvasMoon.height = 1000;

var moonImage = new Image();
moonImage.src = "images/moonsmall.png"

// ctxMoon.globalAlpha = 0.6;
var moonOpacity = 0;


var moonShown = false


function drawMoon() {
    if (moonShown) {
        if (moonOpacity < 1) {
            ctxMoon.clearRect(0,0,canvasMoon.width,canvasMoon.height)
            moonOpacity += 0.005
            ctxMoon.globalAlpha = moonOpacity;
            // requestAnimationFrame(drawMoon)
            ctxMoon.drawImage(moonImage,0,0,canvasMoon.width,canvasMoon.height)
        }
    }
    if (!moonShown) {
        if (moonOpacity > 0) {
            ctxMoon.clearRect(0,0,canvasMoon.width,canvasMoon.height)
            moonOpacity -= 0.005
            ctxMoon.globalAlpha = moonOpacity;
            // requestAnimationFrame(drawMoon)
            ctxMoon.drawImage(moonImage,0,0,canvasMoon.width,canvasMoon.height)
        }
    }
    requestAnimationFrame(drawMoon)
}

function toggleMoon() {
    moonShown = !moonShown 
    if (moonShown) {
        console.log('moonshown', moonShown)
        drawMoon();
    }
    if (!moonShown) {
        console.log('moonshown', moonShown)
        // setTimeout(function() { 
        //     ctxMoon.clearRect(0,0,canvasMoon.width,canvasMoon.height)
        //     console.log('clear')
        // }, 1000)
        
        
    }
}
