var enableSound = true;
var enableRainSound = false;
var enableAmbulanceSound= false;
var enableCarSound= false;
var enableBirdSound= false;
var enableJazzSound= false;
var enableBellSound = false;
var enableChatterSound = false;
var enableCricketSound= false;

var enableNightAmbience= false;



var rainSound = new Audio("audio/rain loop.wav")

var ambulanceSound= new Audio("audio/ambulance.wav")

// var carSound = new Audio("audio/car test.wav")
var carSound = new Audio("audio/car test2.wav")

// var birdSound= new Audio("audio/birds test1.wav")
var birdSound= new Audio("audio/birds2.wav")

var jazzSound= new Audio("audio/jazz.wav")

// var bellSound = new Audio("audio/bells1.wav")
var bellSound = new Audio("audio/bells3.wav")
// var bellSound2 = new Audio("audio/bells2.wav")

var chatterSound = new Audio("audio/chatter.wav")

var nightAmbienceSound= new Audio("audio/night ambience.wav")

var cricketSound = new Audio("audio/cricket test.wav")


rainSound.addEventListener('timeupdate', function(){
    var buffer= .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('rain loop')
    }
});

birdSound.addEventListener('timeupdate',function() {
    var buffer = .60
    if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0
        this.play()
        console.log('bird loop')
    }
});

chatterSound.addEventListener('timeupdate', function(){
    var buffer= .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('chatter loop')
    }
});

bellSound.addEventListener('timeupdate', function(){
    var buffer= .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('bell loop')
    }
});

nightAmbienceSound.addEventListener('timeupdate', function(){
    var buffer= .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('bell loop')
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

        if (enableRainSound) {
            rainSound.play();
        }
        if (enableCarSound) {
            carSound.play();
        }
        if (enableBirdSound) {
            birdSound.play();
        }
        if (enableBellSound) {
            bellSound.play();
        }
        if (enableChatterSound) {
            chatterSound.play();
        }
        if (enableNightAmbience) {
            nightAmbienceSound.play();
        }
        if (enableCricketSound) {
            cricketSound.play();
        }
        

    }
    if (!enableSound) {
        // loadRainSound()
        // loadAmbulanceSound()
        // loadCarSound()
        // loadBirdSound()

        rainSound.pause();
        ambulanceSound.pause();
        carSound.pause();
        birdSound.pause();
        jazzSound.pause();
        bellSound.pause();
        chatterSound.pause();
        nightAmbienceSound.pause();
        cricketSound.pause();

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
        $(carSound).animate({volume: 0.2},1000);
        carSound.play();
        console.log('Car sound',enableCarSound);
    }
    else if (!enableCarSound) {
        carSound.volume = 0.2;
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
        $(birdSound).animate({volume: 0.3},1000);
        birdSound.play();
        console.log('Bird sound',enableBirdSound);
    }
    else if (!enableBirdSound) {
        birdSound.volume = 0.3;
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

        // bellSound2.volume = 0;
        // $(bellSound2).animate({volume: 0.5},1000);
        // bellSound2.play();
        // console.log('Bells2',enableBellSound);
    }
    else if (!enableBellSound) {
        bellSound.volume = 0.5;
        $(bellSound).animate({volume: 0},1000, function(){
            bellSound.pause();
        });
        console.log('Bells',enableBellSound);

        // bellSound2.volume = 0.5;
        // $(bellSound2).animate({volume: 0},1000, function(){
        //     bellSound2.pause();
        // });
        // console.log('Bells2',enableBellSound);
    }
}


function loadChatterSound() {
    enableChatterSound= !enableChatterSound
    if (enableChatterSound&& enableSound) {
        chatterSound.volume = 0;
        $(chatterSound).animate({volume: 0.4},1000);
        chatterSound.play();
        console.log('chatter sound',enableChatterSound);
    }
    else if (!enableChatterSound) {
        chatterSound.volume = 0.4;
        $(chatterSound).animate({volume: 0},1000, function(){
            chatterSound.pause();
        });
        chatterSound.currentTime = 0;
        console.log('chatter sound',enableChatterSound);
    }
}

function loadNightAmbienceSound() {
    enableNightAmbience= !enableNightAmbience
    if (enableNightAmbience&& enableSound) {
        nightAmbienceSound.volume = 0;
        $(nightAmbienceSound).animate({volume: 1},1000);
        nightAmbienceSound.play();
        console.log('night sound',enableNightAmbience);
    }
    else if (!enableNightAmbience) {
        nightAmbienceSound.volume = 1;
        $(nightAmbienceSound).animate({volume: 0},1000, function(){
            nightAmbienceSound.pause();
        });
        nightAmbienceSound.currentTime = 0;
        console.log('night sound',enableNightAmbience);
    }
}

function loadCricketSound() {
    enableCricketSound= !enableCricketSound
    if (enableCricketSound&& enableSound) {
        cricketSound.volume = 0;
        $(cricketSound).animate({volume: 0.1},1000);
        cricketSound.play();
        console.log('cricket sound',enableCricketSound);
    }
    else if (!enableCricketSound) {
        cricketSound.volume = 0.1;
        $(cricketSound).animate({volume: 0},1000, function(){
            cricketSound.pause();
        });
        cricketSound.currentTime = 0;
        console.log('cricket sound',enableCricketSound);
    }
}