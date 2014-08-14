function parseinput(inputData) {
	var strarr = inputData.split('\n')
	var arraylen = strarr.length;
	var output = "";
	for (index = 0; index < strarr.length; ++index) {
		output += formatline(strarr[index]);
	}
	
	//alert(output);
	output = replaceasterisk(output);
	console.log(output);
	return output;
}

function nl2br (str) {
	return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

function formatline(str) {
	//alert(str.substr(0,2));
	var isbody = false;
	if (str.substr(0,2) == '--'){
		str = formatheader(str);
	}else if (/^(_|m|r|a|c|d) /i.test(str)){
		str = formatpowerheader(str);
	}else{
		str = formatbody(str);
	}
	return str;
}

function formatheader(str) {
	str = "<div class='heading'>" + str + "</div>"
	return str;
}

function formatpowerheader(str) {
	str = "<div class='ability-heading'><span class='powerfonts'>&nbsp;" + str.substr(0,2) + "</span>"+ str.substr(2) +"</div>";
	str = formatpowerkeywords(str);
	return str;
}

function formatbody(str) {
	str = formatbold(str);
	str = "<div class='powerbody'>" + str + "</div>";
	return str;
}

function formatbold(str) {
	// (^.{0,20}?:)
	str = str.replace(/(^.{0,20}?:)/i, "<b>$1</b>");
	return str;
}

function formatpowerkeywords(str) {
	str = str.replace(/(\(.+\))/, "<span class='powerkeywords'>$1</span>");
	return str;
}

function replaceasterisk(str) {
	return str.replace(/(\*)/g,"&bull;");
}




//old code.
function parseText(inputData) {
	// Succeptable to HTML injection... Sanitize input first in actual code...
	// This is just a quick and dirty hack of a implementation. 

	//B character bolding
	var str = inputData.replace(/(\n|^)B (.+?)\n/ig, "$1<b>$2</b>\n");
	
	//Inline Bolding
	str = str.replace(/\*(.*)\*/ig, "<b>$1</b>");
	
	//Replace 'm|M|r|R ' with power fonts
	str = str.replace(/(\n|^)(_|m|r|a|c|d )(.+?)\n/ig, "$1<div class='ability-heading'><span class='powerfonts'>$2</span>$3</div>");

	//Replace '--' with section headers
	str = str.replace(/(\n|^)--(.+?)\n/ig, "$1<div class='heading'>$2</div>");

	//Bold ':' Sections
	str = str.replace(/(\w*:)/igm, "<b>$1</b>");

	// Replace linebreaks with <br />
	str = str.replace(/\n/ig, "<br />");
	return str;
}

