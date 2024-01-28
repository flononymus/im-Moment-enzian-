var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var image = new Image();
image.src = "images/test hausaufgabe.png"
// image.onload = function() {
//   ctx.drawImage(image, 0, 0);
// };
image.onload = drawImageSize;

function drawImageSize() {
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // Will draw the image as 300x227, ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters
  // using the element's width and height properties - lets draw one
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}