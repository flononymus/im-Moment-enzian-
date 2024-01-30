var canvasDetail = document.getElementById('canvasDetail');
var ctxDetail = canvasDetail.getContext('2d');

canvasDetail.width = window.innerWidth;
canvasDetail.height = window.innerHeight;

canvasWidth = window.innerWidth;
canvasHeight = window.innerHeight;

var isSmoking= false;

var smokeButton= document.createElement('button');
smokeButton.textContent = "New Smoke"
smokeButton.onclick = toggleSmoking;
document.body.appendChild(smokeButton);


// var party = SmokeMachine(ctxDetail, [150, 150, 150])
// var party = SmokeMachine(ctxDetail, [50, 50, 50])
var party = SmokeMachine(ctxDetail, [0,0,0])

	// party.start() // start animating

	// party.addSmoke(500,500,10) // wow we made smoke

	// setTimeout(function(){

	// 	party.stop() // stop animating

	// 	party.addSmoke(600,500,100)
	// 	party.addSmoke(500,600,20)

	// 	for(var i=0;i<10;i++){
	// 		party.step(10) // pretend 10 ms pass and rerender
	// 	}

	// 	setTimeout(function(){
	// 		party.start()
	// 	},1000)

	// },1000)

function toggleSmoking() {
    isSmoking = !isSmoking;
    if (isSmoking) {
        console.log('smoke')
        party.start()
        party.addSmoke(500,500,10) // wow we made smoke
        party.addSmoke(600,500,100)
        party.addSmoke(500,600,20)
    }
    else {
        console.log('no smoke')
        party.stop() // stop animating
    }
}