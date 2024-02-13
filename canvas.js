var canvasBack= document.getElementById('canvasBackground');
var canvasFade = document.getElementById('canvasFade');
var ctxBack = canvasBack.getContext('2d');
var ctxFade = canvasFade.getContext('2d');

var canvasDetail= document.getElementById('canvasDetail');
var ctxDetail= canvasDetail.getContext('2d');

canvasBack.width = 1000;
canvasFade.width = 1000;
canvasBack.height = 1000;
canvasFade.height = 1000;
canvasDetail.width= 1000;
canvasDetail.height = 1000;

var startingImage = true;
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
imageClouds.onload = function() {
  drawImages(); toggleTitle(); playWind();
}
imageClouds.src = "images/test_clouds2.png"

var imageHalfNight= new Image();
imageHalfNight.src = "images/test_night1.png"
imageHalfNight.onload = drawImages();

var imageFullNight= new Image();
imageFullNight.src = "images/night_mixed2.png"
imageFullNight.onload = drawImages

var imageLightsDetail = new Image();
imageLightsDetail.src = "images/background lights2.png"

// var imageDarkClouds = new Image();
// imageDarkClouds.src = "images/test_clouds_rain.png"




document.getElementById('canvasBackground').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvasBackground').onmouswheel = function(event){
  event.preventDefault();
}

if (currentImage === null) {
  startingImage = true;
  currentImage = 'clouds'
}

function drawImages() {
  if (currentImage === 'clouds') {
    $("link[rel*='icon']").attr("href", "images/test_clouds2.png");

    currentOpacity += 0.005;
    if (currentOpacity < 1) {
    

    setTimeout(function() {
      requestAnimationFrame(drawImages);
        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        // console.log(currentOpacity);
        ctxFade.drawImage(imageClouds,0,0,canvasFade.width,canvasFade.height);
      // }, 1000 / fps);
      }, 700 / fps);
    }
      else {
        ctxBack.drawImage(imageClouds,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched to', currentImage)
      }
  }

  else if (currentImage === 'day') {
    $("link[rel*='icon']").attr("href", "images/test_day.png");

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        ctxFade.drawImage(imageDay,0,0,canvasFade.width,canvasFade.height);
      }, 700 / fps);
      }
      else {
        ctxBack.drawImage(imageDay,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched to', currentImage)
      }
  }


  else if (currentImage === 'halfNight') {
    $("link[rel*='icon']").attr("href", "images/test_night1.png");
    if (currentOpacity < 1) {
    currentOpacity += fadeSpeed;
    setTimeout(function() {
      requestAnimationFrame(drawImages);
        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        ctxFade.drawImage(imageHalfNight,0,0,canvasFade.width,canvasFade.height);
      }, 700 / fps);
      }
      else {
        ctxBack.drawImage(imageHalfNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched to', currentImage)
      }
  }

  else if (currentImage === 'fullNight') {
    $("link[rel*='icon']").attr("href", "images/night_mixed2.png");

    currentOpacity += fadeSpeed;
    if (currentOpacity < 1) {

    setTimeout(function() {
      requestAnimationFrame(drawImages);

        ctxFade.globalAlpha = currentOpacity;
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        ctxFade.globalAlpha = currentOpacity;
        ctxFade.drawImage(imageFullNight,0,0,canvasFade.width,canvasFade.height);
      }, 700 / fps);
      }
      else {
        ctxBack.drawImage(imageFullNight,0,0, canvasBack.width, canvasBack.height);
        ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
        console.log('switched to', currentImage)
      }
  }
  else if (currentImage === 'none') {
    ctxBack.clearRect(0,0,canvasBack.width,canvasBack.height);
    ctxFade.clearRect(0,0,canvasFade.width,canvasFade.height);
  }
}

function cloudImage() {
  currentImage = "clouds";
  startingImage = false;
  currentOpacity = 0;
  // resetToggles(); 
  drawImages();
  // loadWindSound();
}
function dayImage() {
  currentImage = "day";
  startingImage = false;
  currentOpacity = 0;
  // resetToggles(); 
  drawImages();
  // loadBirdSound();
  // loadChatterSound();
  // loadCarSound();
}
function halfNight() {
  currentImage = "halfNight";
  startingImage = false;
  currentOpacity = 0;
  // resetToggles(); 
  drawImages(); 
  // loadBellSound();
  // loadChatterSound();
}
function fullNight() {
  currentImage = "fullNight";
  startingImage = false;
  currentOpacity = 0;
  // resetToggles(); 
  drawImages();
  // loadNightAmbienceSound();
  // loadCricketSound();
  // if (moonShown) {
  //   return;
  // }
  // else {
  //   toggleMoon();
  // }
}
function noImage() {
  currentImage = "none";
  currentOpacity = 0;
  drawImages();
}

function cycleTime() {
  cyclingBG = !cyclingBG
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
  }
}
window.addEventListener('resize', resizeAllCanvases, false);
resizeAllCanvases(); 
}

function playWind() {


// if (startingImage) {
  window.onfocus = function () {
    if (startingImage) {
      if (!enableWindySound) {
        // enableWindySound = false;
        console.log('wind sound')
        loadWindSound();
      };
    }
    else { 
       return;
    }

    window.onblur = function () {
      if (startingImage) {
        enableWindySound = true;
        loadWindSound();
        console.log('not focus')
      }
      else {
        return;
      }
    }
  }
}