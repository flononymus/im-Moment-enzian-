// const canvasBorealis = document.getElementById("canvasBorealis");
// // const widthB = canvasBorealis.width;
// // const heightB = canvasBorealis.height;
// const widthB = 1000
// const heightB = 1000
// const ctxBorealis= canvasBorealis.getContext("2d");

// let isAnimatingBorealis = false;
// let animationId = null;

// function getNoise() {
// 	var Noise = {
// 		noise: [[], [], [], [], [], [], [], [], [], []],
// 		initialize: function() {
// 			for (var i = 0; i < this.noise.length; ++i) {
// 				this.noise[i].length = 10;
// 				for (var j = 0; j < this.noise[i].length; ++j) {
// 					this.noise[i][j] = Math.random();
// 				}
// 			}
// 		},
// 		lerp: function(a, b, t) {
// 			if (t < 0) t = 0;
// 			else if (t > 1) t = 1;
// 			return (1.0 - t) * a + b * t;
// 		},
// 		sample: function(x, y) {
// 			var dx = 9.0 * x / 1.0;
// 			var dy = 9.0 * y / 1.0;
// 			const x_index = Math.floor(Math.abs(dx - 0.0001));
// 			const y_index = Math.floor(Math.abs(dy - 0.0001));
// 			dx = Math.abs(dx - x_index);
// 			dy = Math.abs(dy - y_index);
// 			const top = this.lerp(this.noise[y_index][x_index], this.noise[y_index][x_index + 1], dx);
// 			const bot = this.lerp(this.noise[y_index + 1][x_index], this.noise[y_index + 1][x_index + 1], dx);
// 			return this.lerp(top, bot, dy);
// 		},
// 		wrapd: function(){
// 			var temp = this.noise.pop();
// 			this.noise.splice(0, 0, temp);
// 		}
// 	};
// 	Noise.initialize();
// 	return Noise;
// }

// function clear() {
//     // ctxBorealis.clearRect(0,0,widthB,heightB)
// 	ctxBorealis.fillStyle = 'black';
// 	// ctxBorealis.fillRect(0, 0, widthB, heightB);
// }

// const Noise = getNoise();
// const r_ch = getNoise();
// const g_ch = getNoise();
// const b_ch = getNoise();

// var t = 0;
// var snow = [];
// function init () {
// 	for (var i = 0; i < widthB; i += 2.5) {
// 		const alpha = Noise.sample(i/widthB, t);
// 		if (alpha > 0){
// 			const red = r_ch.sample(i/widthB, t)*255;
// 			const green = g_ch.sample(i/widthB, t)*255;
// 			const blue = b_ch.sample(i/widthB, t)*255;
// 			snow.push(
// 				{
// 					x: i,
// 					y: 0,
// 					color: "rgba("+ red.toString() + "," + green.toString() + "," + blue.toString() + ",",
// 					a: alpha
// 				});
// 		}
// 	}
// 	t += 0.002;
// 	if (t > 1) {
// 		t -= 1;
// 		Noise.wrapd();
// 		r_ch.wrapd();
// 		g_ch.wrapd();
// 		b_ch.wrapd();
// 	}
// }
// init();

// const circle = 2 * Math.PI;
// function draw_frame() {
//     if (!isAnimatingBorealis) {
//         return;
//     }
// 	clear();
// 	for (var i = 0; i < snow.length; ++i) {
// 		ctxBorealis.beginPath();
// 		ctxBorealis.arc(snow[i].x, snow[i].y, 1.5, 0, circle);
// 		ctxBorealis.fillStyle = snow[i].color + snow[i].a.toString() + ")";
// 		ctxBorealis.fill();
// 		snow[i].y += 1;
// 		snow[i].a -= 0.01;
// 		if (snow[i].y > heightB || snow[i].a < 0) {
// 			snow.splice(i, 1);
// 			i--;
// 		}
// 	}
// 	// init();
// 	window.requestAnimationFrame(draw_frame);
// }

// function toggleBorealis() {
//     isAnimatingBorealis = !isAnimatingBorealis;
//     if (isAnimatingBorealis) {
//         console.log('borealis on')
//         animationId = window.requestAnimationFrame(draw_frame);
//     } else {
//         console.log('borealis off')
//         ctxBorealis.clearRect(0,0,widthB,heightB);
//         window.cancelAnimationFrame(animationId);
//     }
// }

// window.requestAnimationFrame(draw_frame);

const canvasBorealis = document.getElementById("canvasBorealis");
// const widthB = canvasBorealis.width;
// const heightB = canvasBorealis.height;
// const widthB = 200
// const heightB = 200
const ctxBorealis= canvasBorealis.getContext("2d");

var borealisActive = false;

var borealis = new Image;
borealis.src = "images/borealis test.png"

function toggleBorealis() {
    borealisActive = !borealisActive;
        if (borealisActive) {
        console.log('borealis on')
        ctxBorealis.drawImage(borealis,0,0,canvasBorealis.width,canvasBorealis.height);
    } else {
        console.log('borealis off')
        ctxBorealis.clearRect(0,0,canvasBorealis.width,canvasBorealis.height);    
    }
}