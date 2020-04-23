var pos1 = [null,null];
var pos2 = [null,null];

function main(event) {
	var mapElement = document.getElementById("mapImg");
	if((pos1[0] == null) && (pos1[1] == null)){
		pos1[0] = event.clientX - mapElement.offsetLeft;
		pos1[1] = event.clientY - mapElement.offsetTop;
		document.getElementById("pos1x").innerHTML ="X: "+ pos1[0];
		document.getElementById("pos1y").innerHTML ="Y: "+ pos1[1];
		putDownMarker(pos1[0],pos1[1],event);
	} else if((pos2[0] == null) && (pos2[1] == null)){
		pos2[0] = event.clientX - mapElement.offsetLeft;
		pos2[1] = event.clientY - mapElement.offsetTop;
		document.getElementById("pos2x").innerHTML ="X: "+ pos2[0];
		document.getElementById("pos2y").innerHTML ="Y: "+ pos2[1];
		putDownMarker(pos2[0],pos2[1],event);
		document.getElementById("distance").innerHTML = getDistance();
	}
}
function getDistance(){
	return String(Math.sqrt((pos2[0]-pos1[0])*(pos2[0]-pos1[0])+(pos2[1]-pos1[1])*(pos2[1]-pos1[1])));
}

function convertIntoPolar(){

}
function putDownMarker(x,y,event){
	var marker = document.createElement("img");
	var map = document.getElementById("map");
	marker.src = "marker.png";
	marker.style.position = "absolute";
	marker.style.left = x + map.offsetLeft-140-160-30 + "px";
	marker.style.top = y + map.offsetTop - 7 -10-5+  "px";
	marker.className = "marker";
	map.appendChild(marker);
	document.getElementById("debug").innerHTML = pos1[0] + " ; " +pos1[1];
}

function reset(){
	pos1 = [null,null];
	pos2 = [null,null];

	var elements = document.getElementById("map").getElementsByClassName("marker");
	var map = document.getElementById("map");

	elements.forEach(element => {
		map.removeChild(element);
	});
	document.getElementById("pos1x").innerHTML = "X: Not set";
	document.getElementById("pos1y").innerHTML = "Y: Not set";
	document.getElementById("pos2x").innerHTML = "X: Not set";
	document.getElementById("pos2y").innerHTML = "Y: Not set";
	document.getElementById("distance").innerHTML = "0";
}