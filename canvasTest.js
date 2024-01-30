var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

canvasDetail.width = window.innerWidth;
canvasDetail.height = window.innerHeight;

var isSmokingOld= false;

var smokeButton= document.createElement('button');
smokeButton.textContent = "Old Smoke"
smokeButton.onclick = toggleSmokingOld;
document.body.appendChild(smokeButton);

function toggleSmokingOld() {
  isSmokingOld = !isSmokingOld;
  if (isSmokingOld) {
    animateSmokeOld();
    console.log('smoke')
  }
  else {
    ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
    time = 0;
    console.log('not smoke');
  }
}

var smokeObj= new Image();
smokeObj.src = "/images/smoke_test1.png"

let time = 0;
let smokeOpacity = 1;

function animateSmokeOld() {
  if (isSmokingOld) {
    ctxDetail.clearRect(0,0,canvasDetail.width, canvasDetail.height);

    for (var i = 0; i < 1; i++) {
    //   var x = 800 + Math.random() * 50;
    //   var y = 500 + Math.random() * 350;
    var x = 800;
    // var y = 500 - 100 * Math.sin(time);  
    var y = 800  - time * 10;
    smokeOpacity = 1 - time/30;
    ctxDetail.globalAlpha = smokeOpacity
    y += 0.1;

    ctxDetail.drawImage(smokeObj,x,y,smokeObj.width, smokeObj.height);

    time += 0.1;

    if (smokeOpacity <= -0.2) {
        ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
        time = 0;
    }

    // if (y <= 0){
    //     y = 0;
    // }
    requestAnimationFrame(animateSmokeOld);
    console.log(smokeOpacity)
  }
};
}