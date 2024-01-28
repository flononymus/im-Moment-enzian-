var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var image1 = new Image();
image1.src = "images/test_day.png"

var image2 = new Image();
image2.src = "images/test_clouds.png"

// var currentOpacity = 1.0;
var currentOpacity = 0.5;
var increment = 0.01;

image1.onload = 
  drawImages;


image2.onload = 
  drawImages;

function drawImages() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight; 

  // ctx.globalAlpha = currentOpacity;
  ctx.globalAlpha = 0.1;

  // ctx.drawImage(image1,0,0,image1.width,image1.height);
  ctx.drawImage(image2,0,0,image2.width,image2.height);

  // ctx.clearRect(0,0,canvas.width, canvas.height);

  
  // ctx.drawImage(image1,0,0);
  // ctx.globalAlpha = 1.0 - currentOpacity;

  // ctx.drawImage(image2,0,0);
  // currentOpacity -= increment;

//   if (currentOpacity <= 0) {
//     var temp = image1;
//     image1 = image2;
//     image2 = temp;
//     currentOpacity = 1.0;
//   }
// requestAnimationFrame(drawImages);
}


// var canvas = document.querySelector('canvas');
// var ctx = canvas.getContext('2d');

// var image = new Image();
// image.src = "images/test_day.png"
// image.onload = drawImageSize;

// function drawImageSize() {
//   canvas.width = this.naturalWidth;
//   canvas.height = this.naturalHeight;

//   ctx.drawImage(this, 0, 0);
//   ctx.drawImage(this, 0, 0, this.width, this.height);
// }