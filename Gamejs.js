var lost = false

alert("Welkom bij het doolhof \nDe bedoeling is om door het doolhof te komen door zelf je stappen te bepalen en te volgen(deze maze heeft 19 stappen)");

omhoog();
links();
omhoog();
rechts();
omhoog();
links();
omlaag();
links();
omlaag();
rechts();
omlaag();


function lose() {
	lost = true
	alert("Dat was geen goed keuze je wordt terug naar het begin gezet");
	window.location = window.location;
	return false; 
}

function rechts() {
	if(lost == false){
	var staprechts = prompt("Welke kant moet je op (omhoog, links, rechts of omlaag)?");
		if (staprechts.toLowerCase() == "rechts" ){
			alert("Dat was een goede keuze, kies je volgende stap");
			console.log(staprechts);
		}
		else{
			return lose();
		}
	}
}

function links() {
	if(lost == false){
	var staplinks = prompt("Welke kant moet je op (omhoog, links, rechts of omlaag)?");
		if (staplinks.toLowerCase() == "links" ){
			alert("Dat was een goede keuze, kies je volgende stap");
			console.log(staplinks);
		}
		else{
			return lose();
		}
	}
}

function omhoog() {
	if(lost == false){
	var stapomhoog = prompt("Welke kant moet je op (omhoog, links, rechts of omlaag)?");
		if (stapomhoog.toLowerCase() == "omhoog" ){
			alert("Dat was een goede keuze, kies je volgende stap");
			console.log(stapomhoog);
		}
		else{ 	
			return lose();
		}
	}
}

function omlaag() {
	if(lost == false)
	var stapomlaag = prompt("Welke kant moet je op (omhoog, links, rechts of omlaag)?");
		if (stapomlaag.toLowerCase() == "omlaag" ){
			alert("Dat was een goede keuze, kies je volgende stap");
			console.log(stapomlaag);
		}
		else{
			return lose();
		}
}