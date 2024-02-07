var canvasComet = document.getElementById("canvasComet")
var ctxComet = canvasComet.getContext('2d');

canvasComet.width = 1000;
canvasComet.height = 1000;

var cometActive = false;

function toggleComet() { 
    cometActive = !cometActive
    if (cometActive) {
        console.log('comet active')
    }
    if (!cometActive) {
        console.log('comet not active')
    }
}
