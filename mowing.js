// get id from html and use them
var $ = function(id)
{
	return document.getElementById(id);
}



var calculate_cost = function()
{
	// we have to parse - or change - the values to floats. Form values are strings by default.
	var fylength = parseFloat($("fylength").value);
	var fywidth = parseFloat($("fywidth").value);
	var bylength = parseFloat($("bylength").value);
	var bywidth = parseFloat($("bywidth").value);
	var lslength = parseFloat($("lslength").value);
	var lswidth = parseFloat($("lswidth").value);
	var rslength = parseFloat($("rslength").value);
	var rswidth = parseFloat($("rswidth").value);

	if(isNaN(fylength) || isNaN(fywidth) || isNaN(bylength) || isNaN(bywidth) || isNaN(lslength) || isNaN(lswidth) || isNaN(rslength) || isNaN(rswidth))
	{
		alert("You have an invalid value.")
	}
	else
	{
	var total = ((fylength + fywidth) + (bylength + bywidth) + (lslength + lswidth) + (rslength + rswidth) * .1) ;
	total = total.toFixed(2);
	$("mowingcost").value= "$ " + total;
	}
}







window.onload = function()
{
	$("submit").onclick = calculate_cost;
	
}