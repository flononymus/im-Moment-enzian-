var enableSound = true;
var enableRainSound = false;
var enableAmbulanceSound= false;




var rainSound = new Audio("audio/rain loop.wav")
// var ambulanceSound= new Audio("audio/ambulance rain.wav")
var ambulanceSound= new Audio("audio/ambulance.wav")

rainSound.addEventListener('timeupdate', function(){
    var buffer = .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('loop')
    }
});

ambulanceSound.addEventListener('timeupdate', function(){
    if(this.currentTime > this.duration){
        this.currentTime = 0
        !enableAmbulanceSound
        // console.log('ambulance sound stopped')
    }
});

function toggleSound() {
    enableSound = !enableSound
    if (enableSound) {
        console.log('sound', enableSound)
    }
    if (!enableSound) {
        // rainSound.pause();
        // rainSound.currentTime = 0;
        console.log('sound', enableSound)
    }
}


function loadRainSound(){
    enableRainSound = !enableRainSound
    if (enableRainSound && enableSound) {
        rainSound.volume = 0;
        $(rainSound).animate({volume: 0.5},1000);
        rainSound.play();
        console.log('Rain sound',enableSound);
    }
    else if (!enableRainSound) {
        rainSound.volume = 0.5;
        $(rainSound).animate({volume: 0},1000, function(){
            rainSound.pause();
        });
        rainSound.currentTime = 0;
        console.log('Rain sound',enableSound);
    }
}

function loadAmbulanceSound() {
    enableAmbulanceSound = !enableAmbulanceSound
    if (enableAmbulanceSound && enableSound) {
        ambulanceSound.volume = 0;
        $(ambulanceSound).animate({volume: 0.5},1000);
        ambulanceSound.play();
        console.log('Ambulance sound',enableSound);
    }
    else if (!enableAmbulanceSound) {
        ambulanceSound.volume = 0.5;
        $(ambulanceSound).animate({volume: 0},1000, function(){
            ambulanceSound.pause();
        });
        ambulanceSound.currentTime = 0;
        console.log('Ambulance sound',enableSound);
    }
}
