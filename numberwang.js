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
		nowang = document.getElementById("nopewang");
		nowang.play();
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