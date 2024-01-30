var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

canvasDetail.width = window.innerWidth;
canvasDetail.height = window.innerHeight;

canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight;

var smokeParticles = [];
var smokeParticles2 = [];

var particleCount = 4;

var maxXVelocity = 1;
var maxYVelocity = 3;

var targetFPS = 33;

var isSmoking= false;

var smokeButton= document.createElement('button');
smokeButton.textContent = "New Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);


function toggleSmoking() {
  isSmoking = !isSmoking;
  if (isSmoking) {
    particle.setPosition(900,900);
    // generateRandom();
    smokeInterval = setInterval(function() {
      update();
      animateSmoke();
  }, 1000 / targetFPS);
  console.log('smoke');
  }
  else {
    clearInterval(smokeInterval);
    console.log('not smoke');
    ctxDetail.clearRect(0, 0, canvasWidth, canvasHeight);
  }
}
var imageObj = new Image();
imageObj.onload = function() {
    smokeParticles.forEach(function(particle) {
            particle.setImage(imageObj);
    });
};

imageObj.src = "/images/smoke_test1.png"
class Particle {
    constructor(ctxDetail) {

        this.x = 0;
        this.y = 0;

        this.xVelocity = 0;
        this.yVelocity = 0;
        this.radius = 0.1;
        this.ctxDetail= ctxDetail;

        this.animateSmoke = function () {

            if (this.image) {
                this.ctxDetail.drawImage(this.image, this.x - 128, this.y - 128);
                return;
            }
            this.ctxDetail.beginPath();
            this.ctxDetail.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            this.ctxDetail.fillStyle = "rgba(0, 255, 255, 1)";
            this.ctxDetail.fill();
            this.ctxDetail.closePath();
        };

        this.update = function () {
            this.x += this.xVelocity;
            this.y += this.yVelocity;

            if (this.x >= canvasWidth) {
                this.xVelocity = -this.xVelocity;
                this.x = canvasWidth;
            }
            else if (this.x <= 0) {
                this.xVelocity = -this.xVelocity;
                this.x = 0;
            }
            if (this.y >= canvasHeight) {
                this.yVelocity = -this.yVelocity;
                this.y = canvasHeight;
            }
            else if (this.y <= 0) {
                this.yVelocity = -this.yVelocity;
                this.y = 0;
            }
        };

        this.setPosition = function (x, y) {
            this.x = x;
            this.y = y;
        };

        this.setVelocity = function (x, y) {
            this.xVelocity = x;
            this.yVelocity = y;
        };

        this.setImage = function (image) {
            this.image = image;
        };
    }
}
function generateRandom(min, max){
  return Math.random() * (max - min) + min;
}
      for(var i=0; i < particleCount; ++i){
          var particle = new Particle(ctxDetail);
          particle.setPosition(900,900);
          particle.setVelocity(generateRandom(-maxXVelocity, maxXVelocity), (generateRandom(-1, -2)))
          smokeParticles.push(particle);            
      }

function animateSmoke() {
  ctxDetail.clearRect(0, 0, canvasWidth, canvasHeight);

  smokeParticles.forEach(function(particle) {
      particle.animateSmoke();
  });
}

function update() {
  smokeParticles.forEach(function(particle) {
      particle.update();
  });
}