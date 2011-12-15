function scoffANumber()
{
	number = Number(document.getElementById("isItNumberwang").value);
	statusDiv = document.getElementById("status");
	
	numberwang = colosson(number);
	if (numberwang >= 0)
	{
		statusDiv.innerHTML = "That's Numberwang!";
		yeswang = document.getElementById("thatsnumberwang");
		yeswang.play();
		addToScoreWang(Math.floor(numberwang * 2));		
	}
	else
	{
		statusDiv.innerHTML = "Nope.";
		nopewang = document.getElementById("nopewang");
		nopewang.play();
		addToScoreWang(Math.floor(numberwang / 3));
	}
	
	return false;
}

function addToScoreWang(score)
{
	scorewang = document.getElementById("scorewang");
	scorewang.innerHTML = Number(scorewang.innerHTML) + score;
}

function colosson(guesswang)
{
	if (isNaN(guesswang))
	{
		return -(Math.random()*55+45);
	}
	
	datewang = new Date();
	wangdate = datewang.getTime() % 100;
	
	randomwang = Math.random()*100;
	
	numberwang = Math.abs(wangdate + randomwang + guesswang) % 100;
	
	// console.log(wangdate, randomwang, guesswang, numberwang);
	
	if(numberwang < 44.444) // that's numberwang!
	{
		return numberwang;
	}
	else
	{
		return -numberwang;
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
