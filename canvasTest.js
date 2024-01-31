var canvasTest= document.getElementById('canvasTest');
var ctxTest= canvasTest.getContext('2d');

canvasTest.width = window.innerWidth;
canvasTest.height = window.innerWidth;

stars();


function randomStar(min,max) {
  return min + Math.random() * (max + 1 -min);
}

function stars() {
  const canvasSize = canvasTest.width * canvasTest.height;
  const starsFraction = canvasSize / 1000;

  for (let i = 0; i < stars; i++) {
    let xPos = random(2,canvasTest.width - 2);
    let yPos = random(2,canvasTest.height- 2);
    let alpha = random(0.5,1);
    let size = random(1,2);

    ctxTest.fillStyle = 'ffffff';
    ctxTest.globalALpha = alpha;
    ctxTest.fillRect(xPos,yPos,size,size);

  }

}