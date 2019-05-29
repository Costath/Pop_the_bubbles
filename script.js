var interval;
function Start()
{
	interval = setInterval(AddBubble, 1000);
}
function AddBubble()
{
	var bubble = document.createElement("div");
	var color = GenerateColor();
	//console.log("-color: " + color);
	var xPos = Math.floor(Math.random() * 800);
	var yPos;
	
	do
	{
		yPos = Math.floor(Math.random() * 400);
	} while(yPos < 50);
	
	bubble.setAttribute("class", "bubble");
	bubble.setAttribute("style", "left: " + xPos +"px; top: " + yPos + "px; background-color: " + color + ";");
	bubble.setAttribute("onclick","Pop(this)");
	
	document.body.appendChild(bubble);
}
function Pop(bubble)
{
	document.body.removeChild(bubble);
	/*if(document.getElementsByClassName("bubble"))
	{
		window.alert("You win!\n\nPlease, reload the page to play again.");
		clearInterval(interval);
	}*/
}
function GenerateColor()
{
	var rand = 0;
	var color = "";
	
	for(var i = 0; i < 6 ; i++)
	{
		rand = Math.round(Math.random() * 16);
		//console.log("rand: " + rand);
		color += rand.toString(16);
	}
	
	return color;
}

document.addEventListener("onload", Start(), false);