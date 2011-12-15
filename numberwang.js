function scoffANumber()
{
	number = Number(document.getElementById("isItNumberwang").value);
	statusDiv = document.getElementById("status");
	if (colosson(number))
	{
		statusDiv.innerHTML = "That's Numberwang!";
		yeswang = document.getElementById("thatsnumberwang");
		yeswang.play();
	}
	else
	{
		statusDiv.innerHTML = "Nope.";
		nopewang = document.getElementById("nopewang");
		nopewang.play();
	}
}

function colosson(guesswang)
{
	datewang = new Date();
	wangdate = datewang.getTime() % 100;
	
	randomwang = Math.random()*100;
	
	numberwang = Math.abs(wangdate + randomwang + guesswang) % 100;
	
	// console.log(wangdate, randomwang, guesswang, numberwang);
	
	if(numberwang < 42.865) // that's numberwang!
	{
		return true;
	}
	else
	{
		return false;
	}
}

function onPageLoadWang()
{
	/* Determines whether or not we need to use event listeners for broken web browsers (cough firefox cough) */
	loopwang = document.getElementById("thememusic");
	if ((typeof loopwang.loop) != "boolean")
	{
		loopwang.addEventListener("ended", function () { loopwang.play(); }, false);
	}
}
