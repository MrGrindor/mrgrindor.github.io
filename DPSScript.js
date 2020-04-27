var pos1 = [null,null];
var pos2 = [null,null];

function main(event) {
    var mapElement = document.getElementById("mapImg");
    var mapdiv = document.getElementById("map");
    var body = document.body;
    var test = document.getElementById("sidenav");
	if((pos1[0] == null) && (pos1[1] == null)){
		pos1[0] = event.clientX - mapdiv.offsetLeft - body.scrollTop;
        pos1[1] = event.clientY - mapdiv.offsetTop - body.scrollLeft;
        //adjust position to different coords
		document.getElementById("pos1x").innerHTML ="X: "+ pos1[0];
		document.getElementById("pos1y").innerHTML ="Y: "+ pos1[1];
		putDownMarker(pos1[0],pos1[1],event);
	} else if((pos2[0] == null) && (pos2[1] == null)){
		pos2[0] = event.clientX - mapdiv.offsetLeft;
        pos2[1] = event.clientY - mapdiv.offsetTop; 
		document.getElementById("pos2x").innerHTML ="X: "+ pos2[0];
		document.getElementById("pos2y").innerHTML ="Y: "+ pos2[1];
		putDownMarker(pos2[0],pos2[1],event);
		document.getElementById("distance").innerHTML = getDistance();
	}
}
function getDistance(){
	return String(Math.sqrt((pos2[0]-pos1[0])*(pos2[0]-pos1[0])+(pos2[1]-pos1[1])*(pos2[1]-pos1[1])));
}

function convertIntoPolar(coord1,coord2){
    var map = document.getElementById("mapimg");
    var r = (1/2)*map.offsetHeight;
    var lattitude1 =  Math.asin(coord1[1]/r);
    var phi2 = Math.asin(coord2[1]/r);
    var alpha = phi1-phi2;
    return ((Math.PI*r)/180)*alpha;
}
function putDownMarker(x,y,event){
	var marker = document.createElement("img");
	var map = document.getElementById("map");
	marker.src = "marker.png";
	marker.style.position = "absolute";
	marker.style.left = x - 5 +  "px";
	marker.style.top = y - 5 +  "px";
	marker.className = "marker";
	map.appendChild(marker);
    document.getElementById("debug").innerHTML = pos1[0] + " ; " +pos1[1];
    document.getElementById("debug2").innerHTML = event.clientX + " ; " +event.clientY;
}

function reset(){
	pos1 = [null,null];
	pos2 = [null,null];

	var elements = Array.from(document.getElementById("map").getElementsByClassName("marker"));
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