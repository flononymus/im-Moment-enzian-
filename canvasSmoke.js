var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

// canvasDetail.width = window.innerWidth;
// canvasDetail.height = window.innerHeight;

// canvasWidth = window.innerWidth;
// canvasHeight = window.innerHeight;

var isSmoking= false;
var smokeInterval;
var smokeINterval2;

var smokeButton= document.createElement('button');
smokeButton.textContent = "New Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);

var party = SmokeMachine(ctxDetail, [50,50,50])

function toggleSmoking() {
    isSmoking = !isSmoking;
    if (isSmoking) {
        console.log('smoke')

        canvasDetail.width = 1500;
        canvasDetail.height = 1500;
        
        // var scaleFactorWidth = window.innerWidth / 1500;
        // var scaleFactorHeight = window.innerHeight / 1500;

        // ctxDetail.scale(scaleFactorWidth, scaleFactorHeight);


        party.start()
        smokeInterval = setInterval(function() {
            party.addSmoke(980, 1000, 0.5); 
            
        }, 80); 
        smokeInterval2 = setInterval(function() {
            // party.addSmoke(980, 960, 2.5); 

            party.addSmoke(650, 1150, 0.3); 
            party.addSmoke(150, 1200, 0.6); 
            
        }, 120); 
    // }, 70); 
    }
    else {
        party.stop() // stop animating
        console.log('no smoke')
        clearInterval(smokeInterval); 
        clearInterval(smokeInterval2);
        // ctxDetail.clearRect(0,0,canvasDetail.width,canvasDetail.height);
    }
}
