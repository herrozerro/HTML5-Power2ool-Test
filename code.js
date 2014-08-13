	function parseText(inputData) {
		// Succeptable to HTML injection... Sanitize input first in actual code...
		// This is just a quick and dirty hack of a implementation. 
		
		//B character bolding
		var str = inputData.replace(/(\n|^)B (.+?)\n/ig, "$1<b>$2</b>\n");
		
		//Inline Bolding
		str = str.replace(/\*(.*)\*/ig, "<b>$1</b>");
		
		//Replace 'm|M|r|R ' with power fonts
		str = str.replace(/(\n|^)(_|m|r|a|c|d )(.+?)\n/ig, "$1<div class='ability-heading'><span class='powerfonts'>$2</span>$3</div>");
		
		//Bold ':' Sections
		str = str.replace(/(.*?:)/ig, "<b>$1</b>");
		
		//Replace '--' with section headers
		str = str.replace(/(\n|^)--(.+?)\n/ig, "$1<div class='heading'>$2</div>");

		
		
		
		// Replace linebreaks with <br />
		str = str.replace(/\n/ig, "<br />");
		return str;
	}

















//Old Code
function parseinput() {
	var str = document.getElementById("input").value;
	str = nl2br(str);
	var strarr = str.split("<br />")
	var arraylen = strarr.length;
	document.getElementById("output").innerHTML = nl2br(str);
	$('#arrlen').html("Array count: " + arraylen);
}

function nl2br (str) {
	return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

function formatline(str) {
	
	return str
}

function formatheader(str) {
	
	
	
	return formatstr
}