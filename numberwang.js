var nonewang = 0;

function scoffANumber()
{
	number = Number(document.getElementById("isItNumberwang").value);
	formwang = document.getElementById("isItNumberwang");
	statusDiv = document.getElementById("status");
	
	numberwang = colosson(number);
	if (numberwang >= 0)
	{
		statusDiv.innerHTML = "That's Numberwang!";
		yeswang = document.getElementById("thatsnumberwang");
		yeswang.currentTime = 0;
		yeswang.play();
		addToScoreWang(Math.floor(numberwang * 2));
		nonewang = 0;
	}
	else
	{
		statusDiv.innerHTML = "Nope.";
		nopewang = document.getElementById("nopewang");
		noneofthose = document.getElementById("noneofthose");
		
		if(nonewang>=5)
		{
			noneofthose.currentTime = 0;
			noneofthose.play();
			nonewang = 0;
		}
		else
		{
			nopewang.currentTime = 0;
			nopewang.play();
			nonewang +=1;
		}

		addToScoreWang(Math.floor(numberwang / 3));
	}
	
	
	incrementGuessWang();
	formwang.value = "";
	return false;
}

function addToScoreWang(score)
{
	scorewang = document.getElementById("scorewang");
	scorewang.innerHTML = Number(scorewang.innerHTML) + score;
}

function incrementGuessWang()
{

	guesswang = document.getElementById("guesswang");
	guesswang.innerHTML = Number(guesswang.innerHTML) + 1;
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
