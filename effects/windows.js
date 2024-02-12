var canvasWindow1 = document.getElementById('canvasWindow1')
var canvasWindow2 = document.getElementById('canvasWindow2')
var canvasWindow3 = document.getElementById('canvasWindow3')

var ctxWindow1 = canvasWindow1.getContext('2d')
var ctxWindow2 = canvasWindow2.getContext('2d')
var ctxWindow3 = canvasWindow3.getContext('2d')

canvasWindow1.width = 1000
canvasWindow2.width = 1000
canvasWindow3.width = 1000

canvasWindow1.height = 1000
canvasWindow2.height = 1000
canvasWindow3.height = 1000

var window1 = new Image()
// window1.src = "images/window1 lit.png"
window1.src = "images/window1.png"

var window2 = new Image()
// window2.src = "images/window2 lit.png"
window2.src = "images/window2.png"

var window3 = new Image()
// window3.src = "images/window3 lit.png"
window3.src = "images/window3.png"


var windowActive = false;
var cycleComplete = false;



function toggleWindow() {
    windowActive = !windowActive

        if (windowActive) {

            setTimeout(function() { 

            setTimeout(function() {
            ctxWindow3.drawImage(window3,0,0,canvasWindow3.height,canvasWindow3.width)
            }, 2000)

            setTimeout(function() {
                ctxWindow2.drawImage(window2,0,0,canvasWindow2.height,canvasWindow2.width)
            },4000)
            setTimeout(function() {
                ctxWindow1.drawImage(window1,0,0,canvasWindow1.height,canvasWindow1.width)
            },5000)
            setTimeout(function() { 
                ctxWindow1.clearRect(0,0,canvasWindow1.width,canvasWindow1.height)
            },9000)
            setTimeout(function() { 
                // ctxWindow2.clearRect(0,0,canvasWindow2.width,canvasWindow2.height)
                ctxWindow3.clearRect(0,0,canvasWindow3.width,canvasWindow3.height)
            },10000)
            setTimeout(function() { 
                // ctxWindow3.clearRect(0,0,canvasWindow3.width,canvasWindow3.height)
                ctxWindow2.clearRect(0,0,canvasWindow2.width,canvasWindow2.height)
                cycleComplete = true;
                console.log('cyclecomplete', cycleComplete)
                repeatWindows();
            },12000)
            },1000)

            // cycleComplete = true;
            // console.log('cyclecomplete', cycleComplete)
            }
        else {
            ctxWindow1.clearRect(0,0,canvasWindow1.width,canvasWindow1.height)
            ctxWindow2.clearRect(0,0,canvasWindow2.width,canvasWindow2.height)
            ctxWindow3.clearRect(0,0,canvasWindow3.width,canvasWindow3.height)
            }
}


function repeatWindows() {
    if (cycleComplete) {
        cycleComplete = false;
        toggleWindow();
        setTimeout(() => {
            toggleWindow();
        },9000)
    }

}
