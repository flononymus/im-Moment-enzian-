var canvasButtons= document.getElementById('canvasButtons');
var ctxButtons= canvasButtons.getContext('2d');

canvasButtons.width = window.innerWidth;
canvasButtons.height = window.innerWidth;

var buttonsHidden = true;

$(document).on('click', 'button2', function() {
    $(this).toggleClass('outlined');
});

// canvasButtons.width = 1000;
// canvasButtons.height = 1000;

// var cloudyButton= document.createElement('button');
// var cloudyButton= document.createElement('button2');
var cloudyButton= document.createElement('buttonSound');
// cloudyButton.textContent = "Cloudy"
// cloudyButton.textContent = "🌧️"
cloudyButton.textContent ="🌫️"
cloudyButton.onclick = cloudImage;
document.body.appendChild(cloudyButton);

// var dayButton = document.createElement('button');
// var dayButton = document.createElement('button2');
var dayButton= document.createElement('buttonSound');
// dayButton.textContent = "Day"
// dayButton.textContent = "️🌤️"
dayButton.textContent = "🏙️"
dayButton.onclick= dayImage;
document.body.appendChild(dayButton);

// var halfNightButton = document.createElement('button');
// var halfNightButton = document.createElement('button2');
var halfNightButton= document.createElement('buttonSound');
// halfNightButton.textContent = "Half Night"
halfNightButton.textContent = "🌆"
halfNightButton.onclick = halfNight;
document.body.appendChild(halfNightButton);

// var moreNightButton= document.createElement('button');
// moreNightButton.textContent = "Half Night"
// moreNightButton.onclick = moreNight;
// document.body.appendChild(moreNightButton);

// var fullNightButton = document.createElement('button');
// var fullNightButton = document.createElement('button2');
var fullNightButton= document.createElement('buttonSound');
// fullNightButton.textContent = "Full Night"
fullNightButton.textContent = "🌃"
fullNightButton.onclick = fullNight;
document.body.appendChild(fullNightButton);

// var noneButton= document.createElement('button');
var noneButton= document.createElement('button2');
noneButton.textContent = "No BG"
noneButton.onclick = noImage;
document.body.appendChild(noneButton);

// var cycleButton= document.createElement('button');
var cycleButton= document.createElement('button2');
cycleButton.textContent = "Cycle BG"
cycleButton.onclick = cycleTime;
document.body.appendChild(cycleButton);

var stopCycleButton= document.createElement('button');
var stopCycleButton= document.createElement('button2');
stopCycleButton.textContent = "Stop Cycle"
stopCycleButton.onclick = stopCycleTime;
document.body.appendChild(stopCycleButton);


// var rainButton= document.createElement('button');
var rainButton= document.createElement('button2');
rainButton.textContent = "Rain"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);

// var cloudsButton = document.createElement('button');
var cloudsButton = document.createElement('button2');
cloudsButton.textContent = "Clouds"
cloudsButton.onclick = toggleClouds;
document.body.appendChild(cloudsButton);

// var cloudsButtonDay = document.createElement('button');
var cloudsButtonDay = document.createElement('button2');
cloudsButtonDay.textContent = "DayClouds"
cloudsButtonDay.onclick = toggleCloudsDay;
document.body.appendChild(cloudsButtonDay);

// var smokeButton= document.createElement('button');
var smokeButton= document.createElement('button2');
smokeButton.textContent = "Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);

// var starsButton= document.createElement('button');
var starsButton= document.createElement('button2');
starsButton.textContent = "Stars"
starsButton.onclick = toggleStars;
document.body.appendChild(starsButton);

// var planeButton= document.createElement('button');
var planeButton= document.createElement('button2');
planeButton.textContent = "Planes"
planeButton.onclick = togglePlane;
document.body.appendChild(planeButton);

// var nightPlaneButton= document.createElement('button');
var nightPlaneButton= document.createElement('button2');
nightPlaneButton.textContent = "NightPlanes"
nightPlaneButton.onclick = toggleNightPlane;
document.body.appendChild(nightPlaneButton);

// var borealisButton= document.createElement('button');
var borealisButton= document.createElement('button2');
borealisButton.textContent = "Borealis"
borealisButton.onclick = toggleBorealis;
document.body.appendChild(borealisButton);

// var birdButton = document.createElement('button');
var birdButton = document.createElement('button2');
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

var resetButton = document.createElement('button2');
// var resetButton = document.createElement('button');
resetButton.textContent = "No effects"
resetButton.onclick = resetToggles;
document.body.appendChild(resetButton);

var hideButton = document.createElement('buttonSound');
// var hideButton = document.createElement('button');
hideButton.textContent = "+"
hideButton.addEventListener('click', function handleClick() {
    if (buttonsHidden) {
        // hideButton.textContent = "Hide"
        hideButton.textContent = "-"
    }
    if (!buttonsHidden) {
        // hideButton.textContent = "Debug"
        hideButton.textContent = "+"
    }
});
hideButton.onclick = hideButtons;
document.body.appendChild(hideButton);

// var soundButton = document.createElement('button2');
var soundButton = document.createElement('buttonSound');
// var soundButton = document.createElement('button');
// soundButton.textContent = "Sound: off"
// soundButton.textContent = "🔇"
soundButton.textContent = "🔊"
soundButton.addEventListener('click', function handleClick() {
    if (enableSound) {
        // soundButton.textContent = "Sound: off"
        soundButton.textContent = "🔇"
    }
    if (!enableSound) {
        // soundButton.textContent = "Sound: on"
        soundButton.textContent = "🔊"
    }
});
// soundButton.textContent = enableSound;

soundButton.onclick = toggleSound;
// soundButton.onclick = loadRainSound;
document.body.appendChild(soundButton)

var firstRow = document.createElement('div');
firstRow.id = 'firstRow';
firstRow.appendChild(soundButton);
firstRow.appendChild(cloudyButton);
firstRow.appendChild(dayButton);
firstRow.appendChild(halfNightButton);
// firstRow.appendChild(moreNightButton);
firstRow.appendChild(fullNightButton);
firstRow.appendChild(hideButton);
document.body.appendChild(firstRow);

var secondRow = document.createElement('div');
secondRow.id = 'secondRow';
secondRow.appendChild(noneButton);
secondRow.appendChild(cycleButton);
secondRow.appendChild(stopCycleButton);
// document.body.appendChild(secondRow);

var thirdRow= document.createElement('div');
thirdRow.id = 'thirdRow';
thirdRow.appendChild(rainButton);
thirdRow.appendChild(cloudsButton);
thirdRow.appendChild(cloudsButtonDay);
thirdRow.appendChild(smokeButton);
thirdRow.appendChild(starsButton);
thirdRow.appendChild(borealisButton);
thirdRow.appendChild(resetButton);
// document.body.appendChild(thirdRow);

var fourthRow = document.createElement('div');
fourthRow.id = 'fourthRow'
fourthRow.appendChild(planeButton);
fourthRow.appendChild(birdButton);
fourthRow.appendChild(nightPlaneButton);
// document.body.appendChild(fourthRow);


// var cloudsButton = document.createElement('button');
// cloudsButton.textContent = "Clouds"
// cloudsButton.onclick = toggleClouds;
// document.body.appendChild(cloudsButton);

var testButton= document.createElement('button');
testButton.textContent = "test"
testButton.onclick = console.log('test');
// document.body.appendChild(testButton);

// var soundButtonDiv = document.createElement('div');
// soundButtonDiv.id = 'soundButtonDiv'
// soundButtonDiv.appendChild(testButton);
// document.body.appendChild(soundButtonDiv)


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
    buttonsHidden = !buttonsHidden
    if (buttonsHidden) {
    ctxButtons.clearRect(0,0,canvasButtons.width,canvasButtons.height);
    // document.body.removeChild(firstRow)
    document.body.removeChild(secondRow)
    document.body.removeChild(thirdRow)
    document.body.removeChild(fourthRow)
    // document.body.removeChild(soundButtonDiv)
    }
    else {
        document.body.appendChild(secondRow)
        document.body.appendChild(thirdRow)
        document.body.appendChild(fourthRow)
        // document.body.appendChild(soundButtonDiv)
    }
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