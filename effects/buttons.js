var canvasButtons= document.getElementById('canvasButtons');
var ctxButtons= canvasButtons.getContext('2d');

canvasButtons.width = window.innerWidth;
canvasButtons.height = window.innerWidth;
// canvasButtons.width = 1000;
// canvasButtons.height = 1000;

var cloudsButton= document.createElement('button');
cloudsButton.textContent = "Clouds"
cloudsButton.onclick = cloudImage;
document.body.appendChild(cloudsButton);

var dayButton = document.createElement('button');
dayButton.textContent = "Day"
dayButton.onclick= dayImage;
document.body.appendChild(dayButton);

var halfNightButton = document.createElement('button');
halfNightButton.textContent = "Night1"
halfNightButton.onclick = halfNight;
document.body.appendChild(halfNightButton);

var moreNightButton= document.createElement('button');
moreNightButton.textContent = "Night2"
moreNightButton.onclick = moreNight;
document.body.appendChild(moreNightButton);

var fullNightButton = document.createElement('button');
fullNightButton.textContent = "Night3"
fullNightButton.onclick = fullNight;
document.body.appendChild(fullNightButton);

var noneButton= document.createElement('button');
noneButton.textContent = "None"
noneButton.onclick = noImage;
document.body.appendChild(noneButton);


var rainButton= document.createElement('button');
rainButton.textContent = "Rain Test"
rainButton.onclick = toggleRain;
document.body.appendChild(rainButton);

var smokeButton= document.createElement('button');
smokeButton.textContent = "New Smoke"
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

var resetButton = document.createElement('button');
resetButton.textContent = "Reset effects"
resetButton.onclick = resetToggles;
document.body.appendChild(resetButton);

var firstRow = document.createElement('div');
firstRow.id = 'firstRow';
firstRow.appendChild(cloudsButton);
firstRow.appendChild(dayButton);
firstRow.appendChild(halfNightButton);
firstRow.appendChild(moreNightButton);
firstRow.appendChild(fullNightButton);
firstRow.appendChild(noneButton);
document.body.appendChild(firstRow);

var secondRow = document.createElement('div');
secondRow.id = 'secondRow';
secondRow.appendChild(rainButton);
secondRow.appendChild(smokeButton);
secondRow.appendChild(starsButton);
secondRow.appendChild(planeButton);
secondRow.appendChild(resetButton);
document.body.appendChild(secondRow);


function resetToggles() {
    if (raining) {
        console.log('rain off')
        toggleRain();
    }
    else {
        console.log('rain already off')
    }

    if (enablePlane) {
        console.log('plane off')
        togglePlane();
    }
    else {
        console.log('plane already off')
    }

    if (enableStars) {
        console.log('stars off')
        toggleStars();
    }
    else {
        console.log('already not stars')
    }


    if (isSmoking) {
        console.log('smoking off')
        toggleSmoking();
    }
    else {
        console.log('already not smoking')
    }

  }