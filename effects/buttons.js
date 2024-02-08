var canvasButtons= document.getElementById('canvasButtons');
var ctxButtons= canvasButtons.getContext('2d');

canvasButtons.width = window.innerWidth;
canvasButtons.height = window.innerWidth;

var buttonsHidden = true;

$(document).on('click', 'button2', function() {
    $(this).toggleClass('outlined');
});

var cloudyButton= document.createElement('buttonSound');
cloudyButton.textContent ="🌫️"
// cloudyButton.onclick = cloudImage;
cloudyButton.onclick = function() {
    cloudImage(); toggleRain(); toggleClouds();
}
document.body.appendChild(cloudyButton);

var dayButton= document.createElement('buttonSound');
dayButton.textContent = "🏙️"
// dayButton.onclick= dayImage;
dayButton.onclick= function() {
    dayImage(); toggleBird();
}
document.body.appendChild(dayButton);

var halfNightButton= document.createElement('buttonSound');
halfNightButton.textContent = "🌆"
// halfNightButton.onclick = halfNight;
halfNightButton.onclick = function() {
    halfNight(); toggleMoon();
}
document.body.appendChild(halfNightButton);

var fullNightButton= document.createElement('buttonSound');
fullNightButton.textContent = "🌃"
fullNightButton.onclick = function() {
    fullNight();toggleStars();
}
document.body.appendChild(fullNightButton);

var noneButton= document.createElement('button2');
noneButton.textContent = "No BG"
noneButton.onclick = noImage;
document.body.appendChild(noneButton);

var cycleButton= document.createElement('button2');
cycleButton.textContent = "Cycle BG"
cycleButton.onclick = cycleTime;
document.body.appendChild(cycleButton);

var stopCycleButton= document.createElement('button');
var stopCycleButton= document.createElement('button2');
stopCycleButton.textContent = "Stop Cycle"
stopCycleButton.onclick = stopCycleTime;
document.body.appendChild(stopCycleButton);

var rainButton= document.createElement('button2');
rainButton.textContent = "Rain"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);

var cloudsButton = document.createElement('button2');
cloudsButton.textContent = "Clouds"
cloudsButton.onclick = toggleClouds;
document.body.appendChild(cloudsButton);

var cloudsButtonDay = document.createElement('button2');
cloudsButtonDay.textContent = "DayClouds"
cloudsButtonDay.onclick = toggleCloudsDay;
document.body.appendChild(cloudsButtonDay);

var smokeButton= document.createElement('button2');
smokeButton.textContent = "Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);

var starsButton= document.createElement('button2');
starsButton.textContent = "Stars"
starsButton.onclick = toggleStars; 
document.body.appendChild(starsButton);

var moonButton= document.createElement('button2');
moonButton.textContent = "Moon"
moonButton.onclick = toggleMoon;
document.body.appendChild(moonButton);

var planeButton= document.createElement('button2');
planeButton.textContent = "Planes"
planeButton.onclick = togglePlane;
document.body.appendChild(planeButton);

var nightPlaneButton= document.createElement('button2');
nightPlaneButton.textContent = "NightPlanes"
nightPlaneButton.onclick = toggleNightPlane;
document.body.appendChild(nightPlaneButton);

var borealisButton= document.createElement('button2');
borealisButton.textContent = "Borealis"
borealisButton.onclick = toggleBorealis;
document.body.appendChild(borealisButton);

var birdButton = document.createElement('button2');
birdButton.textContent = "Bird"
birdButton.onclick = toggleBird;
document.body.appendChild(birdButton);

var cometButton= document.createElement('button2');
cometButton.textContent = "Comet"
cometButton.onclick = toggleComet;
document.body.appendChild(cometButton);

var resetButton = document.createElement('button2');
resetButton.textContent = "No effects"
resetButton.onclick = resetToggles;
document.body.appendChild(resetButton);

var hideButton = document.createElement('buttonSound');
hideButton.textContent = "+"
hideButton.addEventListener('click', function handleClick() {
    if (buttonsHidden) {
        hideButton.textContent = "-"
    }
    if (!buttonsHidden) {
        hideButton.textContent = "+"
    }
});
hideButton.onclick = hideButtons;
document.body.appendChild(hideButton);

var soundButton = document.createElement('buttonSound');
soundButton.textContent = "🔊"
soundButton.addEventListener('click', function handleClick() {
    if (enableSound) {
        soundButton.textContent = "🔇"
    }
    if (!enableSound) {
        soundButton.textContent = "🔊"
    }
});
soundButton.onclick = toggleSound;
document.body.appendChild(soundButton)

var rainSoundButton = document.createElement('button2');
rainSoundButton.textContent = "Rain sound"
rainSoundButton.onclick = loadRainSound 
document.body.appendChild(rainSoundButton)

var ambulanceSoundButton = document.createElement('button2')
ambulanceSoundButton.textContent = "Ambulance"
ambulanceSoundButton.onclick=loadAmbulanceSound
document.body.appendChild(ambulanceSoundButton);

var carSoundButton = document.createElement('button2')
carSoundButton.textContent = "Car test"
carSoundButton.onclick = loadCarSound
document.body.appendChild(carSoundButton)

var birdSoundButton = document.createElement('button2')
birdSoundButton.textContent = "Birds"
birdSoundButton.onclick = loadBirdSound
document.body.appendChild(birdSoundButton)

var jazzSoundButton= document.createElement('button2')
jazzSoundButton.textContent = "Jazz"
jazzSoundButton.onclick = loadJazzSound
document.body.appendChild(jazzSoundButton)


var firstRow = document.createElement('div');
firstRow.id = 'firstRow';
firstRow.appendChild(soundButton);
firstRow.appendChild(cloudyButton);
firstRow.appendChild(dayButton);
firstRow.appendChild(halfNightButton);
firstRow.appendChild(fullNightButton);
firstRow.appendChild(hideButton);
document.body.appendChild(firstRow);

var secondRow = document.createElement('div');
secondRow.id = 'secondRow';
secondRow.appendChild(noneButton);
secondRow.appendChild(cycleButton);
secondRow.appendChild(stopCycleButton);

var thirdRow= document.createElement('div');
thirdRow.id = 'thirdRow';
thirdRow.appendChild(rainButton);
thirdRow.appendChild(cloudsButton);
thirdRow.appendChild(cloudsButtonDay);
thirdRow.appendChild(smokeButton);
thirdRow.appendChild(starsButton);
thirdRow.appendChild(borealisButton);
thirdRow.appendChild(planeButton);
thirdRow.appendChild(birdButton);
thirdRow.appendChild(nightPlaneButton);
thirdRow.appendChild(cometButton);
thirdRow.appendChild(moonButton);
thirdRow.appendChild(resetButton);

var fourthRow = document.createElement('div');
fourthRow.id = 'fourthRow'
fourthRow.appendChild(rainSoundButton);
fourthRow.appendChild(ambulanceSoundButton);
fourthRow.appendChild(carSoundButton);
fourthRow.appendChild(birdSoundButton);
fourthRow.appendChild(jazzSoundButton);


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
  }

function hideButtons() {
    buttonsHidden = !buttonsHidden
    if (buttonsHidden) {
    ctxButtons.clearRect(0,0,canvasButtons.width,canvasButtons.height);
    document.body.removeChild(secondRow)
    document.body.removeChild(thirdRow)
    document.body.removeChild(fourthRow)
    }
    else {
        document.body.appendChild(secondRow)
        document.body.appendChild(thirdRow)
        document.body.appendChild(fourthRow)
    }
}
