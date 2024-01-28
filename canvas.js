var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var image = new Image();
image.src = "https://cdn.shopify.com/s/files/1/0094/1621/2537/files/Twelvesouth-Wallpaper-Neo-City-Midnight-13L.jpg?v=1651664695"
image.onload = function() {
  ctx.drawImage(image, 0, 0);
};