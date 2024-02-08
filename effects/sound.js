var enableSound = true;
var enableRainSound = false;
// var rainSound = new Audio("audio/rain test.wav")
// var rainSound = new Audio("audio/rain test short.wav")
var rainSound = new Audio("audio/rain recording 1.wav")
// var rainSound = new Audio("audio/rain test.m4a")

rainSound.addEventListener('timeupdate', function(){
    var buffer = .60
    if(this.currentTime > this.duration - buffer){
        this.currentTime = 0
        this.play()
        console.log('loop')
    }
});

function toggleSound() {
    enableSound = !enableSound
    if (enableSound) {
        console.log('sound', enableSound)
    }
    if (!enableSound) {
        rainSound.pause();
        rainSound.currentTime = 0;
        console.log('sound', enableSound)
    }
}


function loadRainSound(){
    enableRainSound = !enableRainSound
    if (enableRainSound && enableSound) {
        rainSound.volume = 0;
        $(rainSound).animate({volume: 0.2},1000);
        console.log(rainSound.volume)
        rainSound.play();
        console.log('sound',enableSound);
        console.log(rainSound.loop)
    }
    else if (!enableRainSound) {
        rainSound.volume = 0.2;
        $(rainSound).animate({volume: 0},1000, function(){
            rainSound.pause();
        });
        rainSound.currentTime = 0;
        console.log('sound',enableSound);
    }
}
