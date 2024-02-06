var canvasButtons= document.getElementById('canvasButtons');
var ctxButtons= canvasButtons.getContext('2d');

canvasButtons.width = window.innerWidth;
canvasButtons.height = window.innerWidth;
// canvasButtons.width = 1000;
// canvasButtons.height = 1000;

var cloudyButton= document.createElement('button');
cloudyButton.textContent = "Cloudy"
cloudyButton.onclick = cloudImage;
document.body.appendChild(cloudyButton);

var dayButton = document.createElement('button');
dayButton.textContent = "Day"
dayButton.onclick= dayImage;
document.body.appendChild(dayButton);

var halfNightButton = document.createElement('button');
halfNightButton.textContent = "Half Night"
halfNightButton.onclick = halfNight;
document.body.appendChild(halfNightButton);

// var moreNightButton= document.createElement('button');
// moreNightButton.textContent = "Half Night"
// moreNightButton.onclick = moreNight;
// document.body.appendChild(moreNightButton);

var fullNightButton = document.createElement('button');
fullNightButton.textContent = "Full Night"
fullNightButton.onclick = fullNight;
document.body.appendChild(fullNightButton);

var noneButton= document.createElement('button');
noneButton.textContent = "No BG"
noneButton.onclick = noImage;
document.body.appendChild(noneButton);

var cycleButton= document.createElement('button');
cycleButton.textContent = "Cycle BG"
cycleButton.onclick = cycleTime;
document.body.appendChild(cycleButton);

var stopCycleButton= document.createElement('button');
stopCycleButton.textContent = "Stop Cycle"
stopCycleButton.onclick = stopCycleTime;
document.body.appendChild(stopCycleButton);


var rainButton= document.createElement('button');
rainButton.textContent = "Rain"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);

var cloudsButton = document.createElement('button');
cloudsButton.textContent = "Clouds"
cloudsButton.onclick = toggleClouds;
document.body.appendChild(cloudsButton);

var cloudsButtonDay = document.createElement('button');
cloudsButtonDay.textContent = "Clouds Day"
cloudsButtonDay.onclick = toggleCloudsDay;
document.body.appendChild(cloudsButtonDay);

var smokeButton= document.createElement('button');
smokeButton.textContent = "Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);

var starsButton= document.createElement('button');
starsButton.textContent = "Stars"
starsButton.onclick = toggleStars;
document.body.appendChild(starsButton);

var planeButton= document.createElement('button');
planeButton.textContent = "Planes"
planeButton.onclick = togglePlane;
document.body.appendChild(planeButton);

var nightPlaneButton= document.createElement('button');
nightPlaneButton.textContent = "Planes (night)"
nightPlaneButton.onclick = toggleNightPlane;
document.body.appendChild(nightPlaneButton);

var borealisButton= document.createElement('button');
borealisButton.textContent = "Northern Lights"
borealisButton.onclick = toggleBorealis;
document.body.appendChild(borealisButton);

var birdButton = document.createElement('button');
birdButton.textContent = "Bird"
birdButton.onclick = toggleBird;
document.body.appendChild(birdButton);

// var animationTestButton= document.createElement('button');
// animationTestButton.textContent = "Animation Test"
// animationTestButton.onclick = toggleAnimationTest;
// document.body.appendChild(animationTestButton);

// var idleTest= document.createElement('button');
// idleTest.textContent = "idle"
// idleTest.onclick = switchIdle;
// document.body.appendChild(idleTest);

var resetButton = document.createElement('button');
resetButton.textContent = "No effects"
resetButton.onclick = resetToggles;
document.body.appendChild(resetButton);

// var hideButton = document.createElement('button2');
var hideButton = document.createElement('button');
hideButton.textContent = "Hide Buttons"
hideButton.onclick = hideButtons;
document.body.appendChild(hideButton);

var soundButton = document.createElement('button');
soundButton.textContent = "Sound: off"
soundButton.addEventListener('click', function handleClick() {
    if (enableSound) {
        soundButton.textContent = "Sound: off"
    }
    if (!enableSound) {
        soundButton.textContent = "Sound: on"
    }
});
// soundButton.textContent = enableSound;

soundButton.onclick = toggleSound;
// soundButton.onclick = loadRainSound;
document.body.appendChild(soundButton)

var firstRow = document.createElement('div');
firstRow.id = 'firstRow';
firstRow.appendChild(cloudyButton);
firstRow.appendChild(dayButton);
firstRow.appendChild(halfNightButton);
// firstRow.appendChild(moreNightButton);
firstRow.appendChild(fullNightButton);
firstRow.appendChild(noneButton);
firstRow.appendChild(cycleButton);
firstRow.appendChild(stopCycleButton);
document.body.appendChild(firstRow);

var secondRow = document.createElement('div');
secondRow.id = 'secondRow';
secondRow.appendChild(rainButton);
secondRow.appendChild(cloudsButton);
secondRow.appendChild(cloudsButtonDay);
secondRow.appendChild(smokeButton);
secondRow.appendChild(starsButton);
secondRow.appendChild(borealisButton);
secondRow.appendChild(resetButton);
document.body.appendChild(secondRow);

var thirdRow= document.createElement('div');
thirdRow.id = 'thirdRow';
thirdRow.appendChild(planeButton);
thirdRow.appendChild(birdButton);
thirdRow.appendChild(nightPlaneButton);
// thirdRow.appendChild(animationTestButton);
// thirdRow.appendChild(idleTest);
document.body.appendChild(thirdRow);

// var cloudsButton = document.createElement('button');
// cloudsButton.textContent = "Clouds"
// cloudsButton.onclick = toggleClouds;
// document.body.appendChild(cloudsButton);

var soundButtonDiv = document.createElement('div');
soundButtonDiv.id = 'soundButtonDiv'
soundButtonDiv.appendChild(soundButton);
soundButtonDiv.appendChild(hideButton);
document.body.appendChild(soundButtonDiv)


function resetToggles() {
    if (raining) {
        console.log('rain off')
        toggleRain();
    }
    if (enablePlane) {
        console.log('plane off')
        togglePlane();
    }
    if (enableStars) {
        console.log('stars off')
        toggleStars();
    }
    if (isSmoking) {
        console.log('smoking off')
        toggleSmoking();
    }
    if (cloudsActive) {
        console.log('clouds off')
        toggleClouds();
    }
    if (borealisActive) {
        console.log('borealis off')
        toggleBorealis();
    }
    if (birdActive) {
        console.log('bird off');
        toggleBird();
    }
    // if (animationActive) {
    //     console.log('animate off')
    //     toggleAnimationTest();
    // }
  }

function hideButtons() {
    ctxButtons.clearRect(0,0,canvasButtons.width,canvasButtons.height);
    document.body.removeChild(firstRow)
    document.body.removeChild(secondRow)
    document.body.removeChild(thirdRow)
    document.body.removeChild(soundButtonDiv)
    console.log('hide');
}

//   canvasButtons.onload = (function() {
//   canvasButtons.addEventListener('click', function(event) {
//     const rectToClick = canvasButton.getBoundingClientRect();
//     const xClicked = event.clientX - rect.left;
//     const yClicked = event.clientY - rect.top;
  
//     // Log the mouse coordinates
//     console.log(xClicked, yClicked);
//   })
//   });

// function getCursorPosition(canvasButtons, event) {
//     const rect = canvasButtons.getBoundingClientRect()
//     const xClicked = event.clientX - rect.left
//     const yClicked = event.clientY - rect.top
//     console.log("x: " + x + " y: " + y)
// }

// canvasButtons.addEventListener('mousedown', function(e) {
//     getCursorPosition(canvasButtons, e)
// })