var canvasButtons= document.getElementById('canvasButtons');
var ctxButtons= canvasButtons.getContext('2d');

canvasButtons.width = window.innerWidth;
canvasButtons.height = window.innerWidth;

var buttonsHidden = true;
var showSmallButtons= false;

$(document).on('click', 'button2', function() {
    $(this).toggleClass('outlined');
});

var cloudyButton= document.createElement('buttonMain');
cloudyButton.innerHTML = "<i class='material-icons'>filter_drama</i>"
cloudyButton.onclick = function() {
    cloudImage(); 
    toggleRain(); 
    toggleClouds(); 
    toggleTitleBool();
}
document.body.appendChild(cloudyButton);

var dayButton= document.createElement('buttonMain');
dayButton.innerHTML = "<i class='material-icons'>sunny</i>"
dayButton.onclick= function() {
    dayImage(); 
    toggleBird();  
    toggleBirdFlock(); 
    togglePlane();
    // toggleCloudsDay();
    toggleTitleBool();
}
document.body.appendChild(dayButton);

var halfNightButton= document.createElement('buttonMain');
halfNightButton.innerHTML = "<i class='material-icons'>wb_twilight</i>"
halfNightButton.onclick = function() {
    halfNight(); 
    toggleSmoking();
    toggleMoon();
    toggleWindow();
    toggleTitleBool(); 
    // toggleMoon();
}
document.body.appendChild(halfNightButton);

var fullNightButton= document.createElement('buttonMain');
fullNightButton.innerHTML = "<i class='material-icons'>nights_stay</i>"
fullNightButton.onclick = function() {
    fullNight(); 
    toggleStars(); 
    toggleComet(); 
    // toggleBorealis();
    toggleTitleBool(); 
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

var birdFlockButton= document.createElement('button2');
birdFlockButton.textContent = "Flock"
birdFlockButton.onclick = toggleBirdFlock; 
document.body.appendChild(birdFlockButton);

var cometButton = document.createElement('button2');
cometButton.textContent = "Comet"
cometButton.onclick = toggleComet;
document.body.appendChild(cometButton);

var titleButton = document.createElement('button2');
titleButton.textContent = "Title"
// titleButton.onclick = toggleTitle;
titleButton.onclick = toggleTitleBool;
document.body.appendChild(titleButton);

var resetButton = document.createElement('button2');
resetButton.textContent = "No effects"
resetButton.onclick = resetToggles;
document.body.appendChild(resetButton);

var hideButton = document.createElement('buttonDebug');
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

var windowButton= document.createElement('button2');
windowButton.textContent = "Windows"
windowButton.onclick = toggleWindow;
document.body.appendChild(windowButton);

// var birdCycleButton= document.createElement('button2');
// birdCycleButton.textContent = "cycle birbs"
// birdCycleButton.onclick = repeatBirdCycle;
// document.body.appendChild(birdCycleButton);

var soundButton = document.createElement('buttonSound');
// soundButton.textContent = "🔊"
// soundButton.title = "Mute audio"
soundButton.innerHTML = "<i class='material-icons'>volume_up</i>"
soundButton.addEventListener('click', function handleClick() {
    if (enableSound) {
        // soundButton.textContent = "🔇"
        soundButton.innerHTML = "<i class='material-icons'>volume_mute</i>"
    }
    if (!enableSound) {
        // soundButton.textContent = "🔊"
        soundButton.innerHTML = "<i class='material-icons'>volume_up</i>"
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

var bellButton = document.createElement('button2')
bellButton.textContent = "Bells"
bellButton.onclick = loadBellSound
document.body.appendChild(bellButton)

var chatterButton = document.createElement('button2')
chatterButton.textContent = "Chatter"
chatterButton.onclick = loadChatterSound
document.body.appendChild(chatterButton)

var nightAmbienceButton = document.createElement('button2')
nightAmbienceButton.textContent = "Night"
nightAmbienceButton.onclick = loadNightAmbienceSound
document.body.appendChild(nightAmbienceButton)

var cricketButton = document.createElement('button2')
cricketButton.textContent = "Crickets"
cricketButton.onclick = loadCricketSound
document.body.appendChild(cricketButton)

var windyButton = document.createElement('button2')
windyButton.textContent = "Wind"
windyButton.onclick = loadWindSound
document.body.appendChild(windyButton)


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
secondRow.appendChild(titleButton);
// secondRow.appendChild(birdCycleButton);

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
thirdRow.appendChild(birdFlockButton);
thirdRow.appendChild(nightPlaneButton);
thirdRow.appendChild(cometButton);
thirdRow.appendChild(moonButton);
thirdRow.appendChild(windowButton);
thirdRow.appendChild(resetButton);

var fourthRow = document.createElement('div');
fourthRow.id = 'fourthRow'
fourthRow.appendChild(rainSoundButton);
fourthRow.appendChild(ambulanceSoundButton);
fourthRow.appendChild(carSoundButton);
fourthRow.appendChild(birdSoundButton);
fourthRow.appendChild(jazzSoundButton);
fourthRow.appendChild(bellButton);
fourthRow.appendChild(chatterButton);
fourthRow.appendChild(nightAmbienceButton);
fourthRow.appendChild(cricketButton)
fourthRow.appendChild(windyButton)

var debugRow = document.createElement('div')
debugRow.id = 'debugRow'
debugRow.appendChild(hideButton)
document.body.appendChild(debugRow);




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
    if (!cloudsDayActive) {
        console.log('day clouds off')
        toggleCloudsDay
    }
    if (borealisActive) {
        console.log('borealis off')
        toggleBorealis();
    }
    if (birdActive) {
        console.log('bird off');
        toggleBird();
    }
    if (birdFlockActive) {
        console.log('Flock off');
        toggleBirdFlock();
    }
    if (moonShown) {
        console.log('moon off')
        toggleMoon();
    }
    if (enableBellSound) {
        console.log('bell sound off')
        loadBellSound();
    }
    if (enableBirdSound) {
        console.log('bird sound off')
        loadBirdSound();
    }
    if (enableNightAmbience) {
        console.log('night chatter off')
        loadNightAmbienceSound();
    }
    if (cometActive) {
        console.log('comet off');
        toggleComet();
    }
    if (windowActive) {
        console.log('windows off')
        toggleWindow();
    }
    if (enableCricketSound) {
        console.log('cricket off')
        loadCricketSound();
    }
    if (enableCarSound) {
        console.log('car off')
        loadCarSound();
    }
    if (enableWindySound) {
        console.log('wind off')
        loadWindSound();
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

// function toggleButtonsSmall() {
//     showSmallButtons = !showSmallButtons 
//     if (showSmallButtons) {
//         console.log('check')
//         document.body.removeChild(bigButtonDiv)
//         document.body.appendChild(firstRow)
//     }
//     else {
//         document.body.appendChild(bigButtonDiv)
//         document.body.removeChild(firstRow)
//     }
// }