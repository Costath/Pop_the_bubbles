var interval;
var bubblesAdded = 0;
var bubblesRemoved = 0;
var gameStartTime;
var gameEndTime;
var averageTime;
var startTime;

function BuildButtons() {
	var buttonStart = document.createElement("input");
	buttonStart.type = "button";
	buttonStart.value = "Start game";
	buttonStart.id = "btnStart";
	buttonStart.onclick = function() {Start()};
	document.getElementsByTagName("article")[0].appendChild(buttonStart);

	var buttonStop = document.createElement("input");
  buttonStop.type = "button";
	buttonStop.value = "End game";
	buttonStop.id = "btnStart";
	buttonStop.onclick = function () {Stop()};
document.getElementsByTagName("article")[0].appendChild(buttonStop);
}
function Start() {
	if(!interval){
		intervalGameRunning = setInterval(AddBubble, 1000);
		intervalUpdateStatusBar = setInterval(UpdateStatusBar, 1000);
		startTime = new Date();
	}
}
function Stop() {
	clearInterval(intervalGameRunning);
	clearInterval(intervalUpdateStatusBar);
	intervalGameRunning = null;
	intervalUpdateStatusBar = null;
	bubblesAdded = 0;
	bubblesRemoved = 0;
	document.getElementById("bubblesPlace").innerHTML = "";
	console.log("Fim de jogo");
}
function AddBubble() {
	var bubble = document.createElement("div");
	var color = GenerateColor();
	// var addedAt = new Date();
	var xPos = Math.floor(Math.random() * 800);
	var yPos;

	do
	{
		yPos = Math.floor(Math.random() * 400);
	} while(yPos < 100);

	bubble.className = "bubble";
	bubble.style = "left: " + xPos +"px; top: " + yPos + "px; background-color: " + color + ";";
	bubble.onclick = function() {Pop(this)};

	document.getElementById("bubblesPlace").appendChild(bubble);
	bubblesAdded++;
	console.log("Quantity of bubbles added: " + bubblesAdded);
}
function GenerateColor() {
	var rand = 0;
	var color = "";

	for(var i = 0; i < 6 ; i++)
	{
		rand = Math.round(Math.random() * 16);
		color += rand.toString(16);
	}

	return color;
}
function Pop(bubble) {
	document.getElementById("bubblesPlace").removeChild(bubble);
	document.getElementsByTagName("strong")[2].innerText = "Bubbles poped: " + bubblesRemoved;
	/*if(document.getElementsByClassName("bubble"))
	{
		window.alert("You win!\n\nPlease, reload the page to play again.");
		clearInterval(interval);
	}*/
	bubblesRemoved++;
	console.log("Quantity of bubbles removed: " + bubblesRemoved);
}
function UpdateStatusBar() {
	document.getElementsByTagName("strong")[0].innerText = "Time Elapsed: " + (Math.round((new Date() - startTime)/60) + "s");
	document.getElementsByTagName("strong")[1].innerText = "Bubbles added: " + bubblesAdded;
}
window.addEventListener("load", BuildButtons, false);
//window.addEventListener("load", CreateEventListeners, false);
