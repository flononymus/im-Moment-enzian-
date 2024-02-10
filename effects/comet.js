var canvasComet= document.getElementById("canvasComet")
// var ctxComet = canvasComet.getContext('2d');

canvasComet.width = 1000;
canvasComet.height = 1000;

var cometActive = false;

var ctxComet = canvasComet.getContext("2d");
var width = canvasComet.width;
var height = canvasComet.height;
var shootingStars = []
// starsAngle = Math.random() >= 0.5 ? 145 : 55;
starsAngle = 155
var shootingStarSpeed = {
    // min: 10,
    // max: 15
    min: 0.5,
    max: 2 
}
var shootingStarOpacityDelta = 0.01
var trailLengthDelta = 0.01
var shootingStarEmittingInterval = 5000
// var shootingStarEmittingInterval = 3000
var shootingStarLifeTime = 50
var maxTrailLength = 50
// shootingStarRadius = 3,
var shootingStarRadius = 0.1
var paused = false;

ctxComet.globalAlpha = 0.1;


function toggleComet() { 
    cometActive = !cometActive
    if (cometActive) {
        // setTimeout(start, 200);
        start();
        console.log('comet active')
        paused = false;
        shootingStarSpeed = {
            min: 0.5,
            max: 2 
        }
    }
    if (!cometActive) {
        // clearInterval(shootingStarEmittingInterval)
        console.log('comet not active')
        paused = true;
        ctxComet.clearRect(0,0,canvasComet.width,canvasComet.height)
        
    }
}



function start() {

    function lineToAngle(x1, y1, length, radians) {
        var x2 = x1 + length * Math.cos(radians),
            y2 = y1 + length * Math.sin(radians);
        return { x: x2, y: y2 };
    }

    function randomRange(min, max) {
        return min + Math.random() * (max - min);
    }

    function degreesToRads(degrees) {
        return degrees / 180 * Math.PI;
    }

    var particle = {
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        radius: 0,

        create: function(x, y, speed, direction) {
            var obj = Object.create(this);
            obj.x = x;
            obj.y = y;
            obj.vx = Math.cos(direction) * speed;
            obj.vy = Math.sin(direction) * speed;
            return obj;
        },

        getSpeed: function() {
            return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        },

        setSpeed: function(speed) {
            var heading = this.getHeading();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        },

        getHeading: function() {
            return Math.atan2(this.vy, this.vx);
        },

        setHeading: function(heading) {
            var speed = this.getSpeed();
            this.vx = Math.cos(heading) * speed;
            this.vy = Math.sin(heading) * speed;
        },

        update: function() {
            this.x += this.vx;
            this.y += this.vy;
        }
    };



    function createShootingStar() {
        var shootingStar = particle.create(randomRange(width / 2, width), randomRange(0, height / 2), 0, 0);
        shootingStar.setSpeed(randomRange(shootingStarSpeed.min, shootingStarSpeed.max));
        shootingStar.setHeading(degreesToRads(starsAngle));
        shootingStar.radius = shootingStarRadius;
        shootingStar.opacity = 0;
        shootingStar.trailLengthDelta = 0;
        shootingStar.isSpawning = true;
        shootingStar.isDying = false;
        shootingStars.push(shootingStar);
    }

    function killShootingStar(shootingStar) {
        setTimeout(function() {
            shootingStar.isDying = true;
        }, shootingStarLifeTime);
    }

    function update() {
        if (!paused) {
            ctxComet.clearRect(0, 0, width, height);

            for (i = 0; i < shootingStars.length; i += 1) {
                var shootingStar = shootingStars[i];
                if (shootingStar.isSpawning) {
                    shootingStar.opacity += shootingStarOpacityDelta;
                    if (shootingStar.opacity >= 1.0) {
                        shootingStar.isSpawning = false;
                        killShootingStar(shootingStar);
                    }
                }
                if (shootingStar.isDying) {
                    shootingStar.opacity -= shootingStarOpacityDelta;
                    if (shootingStar.opacity <= 0.0) {
                        shootingStar.isDying = false;
                        shootingStar.isDead = true;
                    }
                }
                shootingStar.trailLengthDelta += trailLengthDelta;

                shootingStar.update();
                if (shootingStar.opacity > 0.0) {
                    drawShootingStar(shootingStar);
                }
            }

            for (i = shootingStars.length -1; i >= 0 ; i--){
                if (shootingStars[i].isDead){
                    shootingStars.splice(i, 1);
                }
            }
        }
        requestAnimationFrame(update);
    }

    function drawShootingStar(p) {
        var x = p.x,
            y = p.y,
            currentTrailLength = (maxTrailLength * p.trailLengthDelta),
            pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

        ctxComet.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
        // var starLength = 5;
        var starLength = 2;
        ctxComet.beginPath();
        // ctxComet.moveTo(x - 0.5, y + 0.5);
        ctxComet.moveTo(x - 1, y + 1);

        ctxComet.lineTo(x, y + starLength);
        ctxComet.lineTo(x + 1, y + 1);
        // ctxComet.lineTo(x + 0.5, y + 0.5);

        ctxComet.lineTo(x + starLength, y);
        ctxComet.lineTo(x + 1, y - 1);
        // ctxComet.lineTo(x + 0.5, y - 0.5);

        ctxComet.lineTo(x, y + 1);
        // ctxComet.lineTo(x, y + 0.5);
        ctxComet.lineTo(x, y - starLength);

        ctxComet.lineTo(x - 1, y - 1);
        // ctxComet.lineTo(x - 0.5, y - 0.5);
        ctxComet.lineTo(x - starLength, y);

        ctxComet.lineTo(x - 1, y + 1);
        // ctxComet.lineTo(x - 0.5, y + 0.5);
        ctxComet.lineTo(x - starLength, y);

        ctxComet.closePath();
        ctxComet.fill();

        ctxComet.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
        ctxComet.beginPath();
        ctxComet.moveTo(x - 1, y - 1);
        // ctxComet.moveTo(x - 0.5, y - 0.5);
        ctxComet.lineTo(pos.x, pos.y);
        ctxComet.lineTo(x + 1, y + 1);
        // ctxComet.lineTo(x + 0.5, y + 0.5);
        ctxComet.closePath();
        ctxComet.fill();
    }

    update();

    setInterval(function() {
        if (paused) return;
        createShootingStar();
    }, shootingStarEmittingInterval);

}