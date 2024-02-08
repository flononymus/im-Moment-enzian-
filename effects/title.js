var canvasTitle = document.getElementById('canvasTitle')
var ctxTitle = canvasTitle.getContext('2d')
var titleEnabled = false;

canvasTitle.width = 1000
canvasTitle.height = 1000

var titleImage = new Image()
titleImage.src = "images/title test.png"


function toggleTitle() {
    titleEnabled = !titleEnabled
    if (titleEnabled) {
        ctxTitle.drawImage(titleImage,0,0,canvasTitle.width,canvasTitle.height)
        console.log('title', titleEnabled)
    }
    else {
        ctxTitle.clearRect(0,0,canvasTitle.width,canvasTitle.height)
        console.log('title', titleEnabled)
    }
}