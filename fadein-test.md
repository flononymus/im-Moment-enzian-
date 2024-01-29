## working crossfade

var start = null;
var duration = 5500;
var isAnimationStarted = false;

document.getElementById('canvas').onwheel = function(event){
  event.preventDefault();
}
document.getElementById('canvas').onmouswheel = function(event){
  event.preventDefault();
}

var imageDay= new Image();
imageDay.src = "images/test_day.png"
var imageClouds= new Image();
imageClouds.src = "images/test_clouds.png"
var imageHalfNight= new Image();
imageHalfNight.src = "images/test_night1.png"
var imageNight= new Image();
imageNight.src = "images/test_night2.png"
var imageFullNight= new Image();
imageFullNight.src = "images/test_night3.png"

function drawImages(timestamp) {
  if (!start) start = timestamp || performance.now();;
  var progress = timestamp - start;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');

  // var currentOpacityThird= Math.max(progress / duration, 0);
  var currentOpacityNight = Math.min(progress / duration, 1);
  var currentOpacityThird = Math.min(progress / duration, 1);

  ctx.clearRect(0,0, canvas.width, canvas.height)
  ctx.globalAlpha = 1;

  ctx.globalCompositeOperation = 'source-over'
  ctx.drawImage(imageClouds, 0, 0);

  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = currentOpacityNight;
  ctx.drawImage(imageNight,0,0,canvas.width,canvas.height);

  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = currentOpacityNight;
  
  if (currentOpacityNight >= 0.995) {
    currentOpacityNight = 1;
  }
  
  if (progress < duration) {
    window.requestAnimationFrame(drawImages);
    // console.log(currentOpacityNight);
  }
}

  imageFullNight.onload = function() {
    var canvas = document.querySelector('canvas');
    canvas.width = this.naturalHeight
    canvas.height = this.naturalHeight; 
    window.requestAnimationFrame(drawImages);
  };

  // function startAnimation () {
  //   if (!isAnimationStarted) {
  //     isAnimationStarted = true;
  //     window.requestAnimationFrame(drawImages)
  //   }
  // }

  var cloudsButton= document.createElement('button');
  cloudsButton.textContent = "Cloudy"
  cloudsButton.onclick = test;
  document.body.appendChild(cloudsButton);
  
  var dayButton = document.createElement('button');
  dayButton.textContent = "Day"
  dayButton.onclick= test;
  document.body.appendChild(dayButton);

  var halfNightButton = document.createElement('button');
  halfNightButton.textContent = "Half night"
  halfNightButton.onclick = test;
  document.body.appendChild(halfNightButton);

  var moreNightButton= document.createElement('button');
  moreNightButton.textContent = "More night"
  moreNightButton.onclick = test;
  document.body.appendChild(moreNightButton);

  var fullNightButton = document.createElement('button');
  fullNightButton.textContent = "Full night"
  fullNightButton.onclick = test;
  document.body.appendChild(fullNightButton);





  function test() {
    console.log('test');
  }