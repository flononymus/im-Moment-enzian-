var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

canvasDetail.width = window.innerWidth;
canvasDetail.height = window.innerHeight;

var isSmoking= false;

var smokeButton= document.createElement('button');
smokeButton.textContent = "Smoke Test"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);

function toggleSmoking() {
  isSmoking = !isSmoking;
  if (isSmoking) {
    animateSmoke();
    console.log('smoke')
  }
  else {
    ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
    console.log('not smoke');
  }
}

function animateSmoke() {
  if (isSmoking) {
    ctxDetail.clearRect(0,0,canvasDetail.width, canvasDetail.height);

    for (var i = 0; i < 50; i++) {
      var x = 100 + Math.random() * 50;
      var y = 150 + Math.random() * 100;
      ctxDetail.beginPath();
      ctxDetail.arc(x,y,Math.random()*10,0,Math.PI * 2);
      ctxDetail.fillStyle = 'rgba(200,200,200,0.5';
      ctxDetail.fill();
    }
    requestAnimationFrame(animateSmoke);
  }
}