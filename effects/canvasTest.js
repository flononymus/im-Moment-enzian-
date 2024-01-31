var canvasTest= document.getElementById('canvasTest');
var ctxTest= canvasTest.getContext('2d');

canvasTest.width = window.innerWidth;
canvasTest.height = window.innerWidth;

var plane = new Image;
plane.src = "images/airplane test.png"
// ctxTest.drawImage(plane,0,0,canvasTest.width, canvasTest.height);


var enableTest= false;

function toggleTest() {
  enableTest= !enableTest
  console.log('Test', enableTest)
  if (enableTest) {
    console.log('test')
    ctxTest.drawImage(plane,0,0,canvasTest.width, canvasTest.height);
  }
  else {
    console.log('not')
  }
}
