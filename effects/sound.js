var enableSound = true;
var enableRainSound = false;
var enableAmbulanceSound= false;
var enableCarSound= false;
var enableBirdSound= false;
var enableJazzSound= false;
var enableBellSound = false;



var rainSound = new Audio("audio/rain loop.wav")
var ambulanceSound= new Audio("audio/ambulance.wav")
var carSound = new Audio("audio/car test.wav")
var birdSound= new Audio("audio/birds test1.wav")
var jazzSound= new Audio("audio/jazz.wav")
var bellSound = new Audio("audio/bells1.wav")
var bellSound2 = new Audio("audio/bells2.wav")

rainSound.addEventListener('timeupdate', function(){
    var buffer= .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('loop')
    }
});

ambulanceSound.addEventListener('timeupdate', function(){
    var buffer = 0.5
    if(this.currentTime > this.duration - buffer){
        enableAmbulanceSound = false;
        console.log('test sound off')
    }
});

function toggleSound() {
    enableSound = !enableSound
    if (enableSound) {
        console.log('sound', enableSound)
    }
    if (!enableSound) {
        loadRainSound()
        loadAmbulanceSound()
        loadCarSound()
        loadBirdSound()
        console.log('sound', enableSound)
    }
}


function loadRainSound(){
    enableRainSound = !enableRainSound
    if (enableRainSound && enableSound) {
        rainSound.volume = 0;
        $(rainSound).animate({volume: 0.8},1000);
        rainSound.play();
        console.log('Rain sound',enableRainSound);
    }
    else if (!enableRainSound) {
        rainSound.volume = 0.8;
        $(rainSound).animate({volume: 0},1000, function(){
            rainSound.pause();
        });
        rainSound.currentTime = 0;
        console.log('Rain sound',enableRainSound);
    }
}

function loadAmbulanceSound() {
    enableAmbulanceSound = !enableAmbulanceSound
    if (enableAmbulanceSound && enableSound) {
        ambulanceSound.volume = 0;
        $(ambulanceSound).animate({volume: 0.2},1000);
        ambulanceSound.play();
        console.log('Ambulance sound',enableAmbulanceSound);
    }
    else if (!enableAmbulanceSound) {
        ambulanceSound.volume = 0.2;
        $(ambulanceSound).animate({volume: 0},1000, function(){
            ambulanceSound.pause();
        });
        ambulanceSound.currentTime = 0;
        console.log('Ambulance sound',enableAmbulanceSound);
    }
}

function loadCarSound() {
    enableCarSound= !enableCarSound
    if (enableCarSound && enableSound) {
        carSound.volume = 0;
        $(carSound).animate({volume: 0.8},1000);
        carSound.play();
        console.log('Car sound',enableCarSound);
    }
    else if (!enableCarSound) {
        carSound.volume = 0.8;
        $(carSound).animate({volume: 0},1000, function(){
            carSound.pause();
        });
        carSound.currentTime = 0;
        console.log('Car sound',enableCarSound);
    }
}

function loadBirdSound() {
    enableBirdSound= !enableBirdSound
    if (enableBirdSound&& enableSound) {
        birdSound.volume = 0;
        $(birdSound).animate({volume: 0.6},1000);
        birdSound.play();
        console.log('Bird sound',enableBirdSound);
    }
    else if (!enableBirdSound) {
        birdSound.volume = 0.6;
        $(birdSound).animate({volume: 0},1000, function(){
            birdSound.pause();
        });
        birdSound.currentTime = 0;
        console.log('Bird sound',enableBirdSound);
    }
}

function loadJazzSound() {
    enableJazzSound= !enableJazzSound
    if (enableJazzSound&& enableSound) {
        jazzSound.volume = 0;
        $(jazzSound).animate({volume: 0.1},1000);
        jazzSound.play();
        console.log('Jazz sound',enableJazzSound);
    }
    else if (!enableJazzSound) {
        jazzSound.volume = 0.1;
        $(jazzSound).animate({volume: 0},1000, function(){
            jazzSound.pause();
        });
        jazzSound.currentTime = 0;
        console.log('Jazz sound',enableJazzSound);
    }
}

function loadBellSound() {
    enableBellSound = !enableBellSound
    if (enableBellSound && enableSound) {
        bellSound.volume = 0;
        $(bellSound).animate({volume: 0.5},1000);
        bellSound.play();
        console.log('Bells',enableBellSound);

        bellSound2.volume = 0;
        $(bellSound2).animate({volume: 0.5},1000);
        bellSound2.play();
        console.log('Bells2',enableBellSound);
    }
    else if (!enableBellSound) {
        bellSound.volume = 0.5;
        $(bellSound).animate({volume: 0},1000, function(){
            bellSound.pause();
        });
        // bellSound.currentTime = 0;
        console.log('Bells',enableBellSound);

        bellSound2.volume = 0.5;
        $(bellSound2).animate({volume: 0},1000, function(){
            bellSound2.pause();
        });
        // bellSound2.currentTime = 0;
        console.log('Bells2',enableBellSound);
    }
}

