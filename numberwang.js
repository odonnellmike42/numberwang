function scoffANumber()
{
	number = document.getElementById("isItNumberwang").value;
	statusDiv = document.getElementById("status");
	if (isItNumberwang(number))
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

function isItNumberwang(guesswang)
{
	if (guesswang % 2)
	{
		return true;
	}
	
	return false;
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
