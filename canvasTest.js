var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

canvasDetail.width = window.innerWidth;
canvasDetail.height = window.innerWidth;

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
    var x = ((canvasDetail.width/5)*3)+35;
    // var y = 800  - time * 10;
    var y = ((canvasDetail.height/5)*3)+40 - time*5;
    // smokeOpacity = 1 - time/30;
    // ctxDetail.globalAlpha = smokeOpacity
    // y += 0.1;
    smokeOpacity = 1- (1 - time/20);
    ctxDetail.globalAlpha = smokeOpacity
    y += 0.1;

    ctxDetail.drawImage(smokeObj,x,y,smokeObj.width, smokeObj.height);
    // ctxDetail.drawImage(smokeObj,100,100,canvasDetail.width,canvasDetail.height);

    time += 0.1;

    if (time >= 50) {
      ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
      time = 0;
      smokeOpacity = 0;
  }

    // if (smokeOpacity <= -0.2) {
    //     ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
    //     time = 0;
    // }

    // if (y <= 0){
    //     y = 0;
    // }
    requestAnimationFrame(animateSmokeOld);
    // console.log(smokeOpacity)
  }
};
}