var canvasStars= document.getElementById('canvasStars');
var ctxStars= canvasStars.getContext('2d');

canvasStars.width = window.innerWidth;
canvasStars.height = window.innerWidth;

var enableStars = false;

function randomStar(min,max) {
  return min + Math.random() * (max + 1 -min);
}

function stars() {
  const canvasSize = canvasStars.width * canvasStars.height;
  const starsFraction = canvasSize / 1500;

  for (let i = 0; i < starsFraction; i++) {
    let xPos = randomStar(2,canvasTest.width - 2);
    let yPos = randomStar(2,canvasTest.height- 2);
    let alpha = randomStar(0.5,1);
    let size = randomStar(1,2);

    ctxStars.fillStyle = '#ffffff';
    ctxStars.globalALpha = alpha;
    ctxStars.fillRect(xPos,yPos,size,size);

  }
}

function toggleStars() {
  enableStars = !enableStars
  console.log('stars', enableStars)
  if (enableStars) {
    const canvasSize = canvasStars.width * canvasStars.height;
    const starsFraction = canvasSize / 1500;
  
    for (let i = 0; i < starsFraction; i++) {
      let xPos = randomStar(2,canvasTest.width - 2);
      let yPos = randomStar(2,canvasTest.height- 2);
      let alpha = randomStar(0.5,1);
      let size = randomStar(1,2);
  
      ctxStars.fillStyle = '#ffffff';
      // ctxStars.globalAlpha = alpha;
      ctxStars.fillRect(xPos,yPos,size,size);
    }
  }
  else {
    console.log('test')
    // ctxStars.clearRect(0,0,canvasStars.width,canvasStars.height)
  }
}
