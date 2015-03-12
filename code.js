
window.onload=function() {
			var inputBox = document.getElementById("text");
			var output = document.getElementById("powers");
			
			output.innerHTML = parseinput(inputBox.value);

			inputBox.onchange = function () {
				output.innerHTML = parseinput(inputBox.value);
			};

			inputBox.onkeyup = function () {
				output.innerHTML = parseinput(inputBox.value);
			};
			
			
			//$.getJSON("./data.json", function(json) {
			//	processData(json);
			//});
			processData();
	}


//Sanitize Input
function sanitizeString(str){
    str = str.replace(/[^a-z0-9αινσϊρό :\n\.,_-]/gim,"");
    return str.trim();
}

function parseinput(inputData) {
	inputData = sanitizeString(inputData);
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
	str = "<div class='heading'>" + str.substring(2) + "</div>"
	return str;
}

function formatpowerheader(str) {
	var str2 = (str.substring(0,1) == "_" ? "  " : str.substr(0,2));
	str = "<div class='ability-heading'><span class='powerfonts'>&nbsp;" + str2 + "</span>"+ str.substr(2) +"</div>";
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

var x = {
	"Creature": {
		"id":1,
		"Pos-x":1,
		"Pos-y":1,
		"Name": "Awesome Monster",
		"Level": 1,
		"Role": "Controller",
		"Size": "Large",
		"Origin": "Natural",
		"Keywords": "Beastmode",
		"XP": 10,
		"HP": 10,
		"AC": 10,
		"Fort": 10,
		"Ref": 10,
		"Will": 10,
		"Speed": "6",
		"Initiative": 10,
		"Perception": 10,
		"Senses": "Blindsight",
		"Features": "Regeneration: 5",
		"Powers": "",
		"Skills": "",
		"Str": 10,
		"Con": 10,
		"Dex": 10,
		"Int": 10,
		"Wis": 10,
		"Cha": 10,
		"Alignment": "Unaligned",
		"Languages": "Elven",
		"Equipment": "Sword-Chuck",
		"Description": "A Bas-Ass Monster"
	}
}

function processData(){
	var c = x.Creature;
	$('#1 .name').text(c.Name);
	$('#1 .leveltype').text("Level " + c.Level + " " + c.Role);
	$('#1 .keywords').text(c.Size + " " + c.Origin + " " + c.Keywords);
	$('#1 .xp').text("XP " + c.XP);
	$('#1 .hp').html("<b>HP</b> " + c.HP + " <b>Bloodied</b> " + Math.floor(c.HP/2));
	$('#1 .defences').html("<b>AC</b> " + c.AC + "; <b>Fort</b> " + c.Fort + "; <b>Ref</b> " + c.Ref + "; <b>Will</b> " + c.Will);
	$('#1 .speed').html("<b>Speed:</b> " + c.Speed);
	$('#1 .init').html("<b>Initiative:</b> +" + c.Initiative);
	$('#1 .perception').html("<b>Perception:</b> +" + c.Perception);
	$('#1 .senses').text(c.Senses);
	//$('#1 .powers').text(c.Powers);
	$('#1 .skills').html(c.Skills != "" ? "<b>Skills:</b> "+ c.Skills : "");
	$('#1 .str').html("<b>Str</b> " + c.Str);
	$('#1 .dex').html("<b>Dex</b> " + c.Dex);
	$('#1 .con').html("<b>Con</b> " + c.Con);
	$('#1 .int').html("<b>Int</b> " + c.Int);
	$('#1 .wis').html("<b>Wis</b> " + c.Wis);
	$('#1 .cha').html("<b>Cha</b> " + c.Cha);
	$('#1 .alignment').html("<b>Alignment:</b> " + c.Alignment);
	$('#1 .languages').html("<b>Languages:</b> " + c.Languages);
	$('#1 .equipment').html(c.Equipment != "" ? "<b>Equipment:</b> " + c.Equipment : "");
	$('#1 .description').text(c.Description);
}


