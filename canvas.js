var canvasBack= document.getElementById('canvasBackground');
var canvasFade = document.getElementById('canvasFade');
var ctxBack = canvasBack.getContext('2d');
var ctxFade = canvasFade.getContext('2d');

var canvasDetail= document.getElementById('canvasDetail');
var ctxDetail= canvasDetail.getContext('2d');

// canvasBack.width = window.innerWidth;
// canvasFade.width = window.innerWidth;
// canvasBack.height = window.innerHeight;
// canvasFade.height = window.innerHeight;
canvasBack.width = 1000;
canvasFade.width = 1000;
canvasBack.height = 1000;
canvasFade.height = 1000;
canvasDetail.width= 1000;
canvasDetail.height = 1000;

var currentImage = null; 
var currentOpacity = 1;
var start = null;
var duration = 2000;

var fadeSpeed = 0.01;
var fadeSpeed = 0.005;

var fps = 60;

var cyclingBG = false;
var repeatCycle= false;
var stopCycle = false;


var imageDay= new Image();
imageDay.src = "images/test_day.png"

var imageClouds= new Image();
imageClouds.onload = drawImages(),
// setTimeout(function() { 
//     toggleBird();
// },1000);
// imageClouds.onload = drawImages, toggleBird
imageClouds.src = "images/test_clouds2.png"

var imageHalfNight= new Image();
imageHalfNight.src = "images/test_night1.png"

var imageMoreNight= new Image();
imageMoreNight.src = "images/test_night5.png"

var imageFullNight= new Image();
// imageFullNight.src = "images/test_night6.png"
// imageFullNight.src = "images/night_mixed1.png"
imageFullNight.src = "images/night_mixed2.png"
imageFullNight.onload = drawImages

var imageLightsDetail = new Image();
// imageLightsDetail.src = "images/background lights1.png"
imageLightsDetail.src = "images/background lights2.png"

var imageDarkClouds = new Image();
imageDarkClouds.src = "images/test_clouds_rain.png"




document.getElementById('canvasBackground').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvasBackground').onmouswheel = function(event){
  event.preventDefault();
}

// currentImage = 'clouds'
// currentImage = 'fullNight'

if (currentImage === null) {
  currentImage = 'fullNight'
  // currentImage = 'clouds'
}

function drawImages() {
  if (currentImage === 'clouds') {

    // if (raining) {
    //   console.log('darker clouds')
    //   ctxDetail.fillStyle = 'rgba(0,0,0,0.3)'
    //   ctxDetail.fillRect(0,0,canvasDetail.width,canvasDetail.height);
    // }

    currentOpacity += 0.005;
    if (currentOpacity < 1) {
    

    setTimeout(function() {
      requestAnimationFrame(drawImages);
        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageClouds,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
    }
      else {
        ctxBack.drawImage(imageClouds,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }
  }

  else if (currentImage === 'day') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageDay,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageDay,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }
  }


  else if (currentImage === 'halfNight') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageHalfNight,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageHalfNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }
  }
  else if (currentImage === 'moreNight') {

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageMoreNight,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageMoreNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')
      }

  }
  else if (currentImage === 'fullNight') {
     resetToggles(); 

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        console.log(currentOpacity);
        ctxFade.drawImage(imageFullNight,0,0,canvasFade.width,canvasFade.height);
      }, 1000 / fps);
      }
      else {
        ctxBack.drawImage(imageFullNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched')

        setTimeout(function() { 
          // toggleBorealis();
          toggleStars();
        },1000);

      }
  }
  else if (currentImage === 'none') {
    ctxBack.clearRect(0,0,canvasBack.width,canvasBack.height);
    ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
  }
}

function cloudImage() {
  // resetToggles();
  currentImage = "clouds";
  currentOpacity = 0;
  drawImages();

  // setTimeout(function() {
  //   toggleSmoking();
  // },1000);
  // setTimeout(function() {
  //   toggleRain();
  // },1000);
}
function dayImage() {
  // resetToggles();
  currentImage = "day";
  currentOpacity = 0;
  drawImages();
  // setTimeout(function() {
  //   togglePlane();
  // },1000);
}
function halfNight() {
  currentImage = "halfNight";
  currentOpacity = 0;
  drawImages();
  // toggleStars();
}
function moreNight() {
  // resetToggles();
  currentImage = "moreNight";
  currentOpacity = 0;
  drawImages();
}
function fullNight() {
  currentImage = "fullNight";
  currentOpacity = 0;
  drawImages();
}
function noImage() {
  currentImage = "none";
  currentOpacity = 0;
  drawImages();
}

function cycleTime() {
  cyclingBG = !cyclingBG
  // repeatCycle = !repeatCycle
  // cyclingBG = true;
  if (cyclingBG) { 
    console.log('cycling background')
      setTimeout(function() { 
        if (stopCycle) {
          return;
        }
      dayImage();
      setTimeout(function() { 
        if (stopCycle) {
          return;
        }
        halfNight();
        setTimeout(function() { 
          if (stopCycle) {
            return;
          }
          fullNight();
          setTimeout(function() { 
            if (stopCycle) {
              return;
            }
            cloudImage();
            cycleTime();
          },5000)
        },5000)
      },5000)
    },5000)
  }
  // if (!cyclingBG) {
  //   repeatCycle = false; 
  //   // cyclingBG = false;
  //   console.log('not')
  //   return;
  // }
}

function stopCycleTime() {

  if (cyclingBG) {
    stopCycle = !stopCycle;

    cyclingBG = false;
    console.log('not')
    return;
  }
}

window.onload = function() {
function resizeCanvas(canvas) {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  if (windowWidth < 1000 && windowWidth > windowHeight) {
      canvas.style.width = windowWidth + 'px';
      canvas.style.height = windowWidth + 'px';
  } else {
      var canvasRatio = canvas.height / canvas.width;
      var windowRatio = windowHeight / windowWidth;
      var width;
      var height;

      if (windowRatio < canvasRatio) {
          height = windowHeight;
          width = height / canvasRatio;
      } else {
          width = windowWidth;
          height = width * canvasRatio;
      }

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
  }
}

function resizeAllCanvases() {
  var allCanvases = document.getElementsByTagName('canvas');
  for (var i = 0; i < allCanvases.length; i++) {
      resizeCanvas(allCanvases[i]);
      // console.log(allCanvases)
  }
}
window.addEventListener('resize', resizeAllCanvases, false);
resizeAllCanvases(); 
}