function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'MapData.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback


function updateMap(tilemap){
    var i = 0;
    var map = document.getElementById("map");
    radius = 10;
    for (col = 0; col < 128; col += 1) {
        for (row = 0; row < 80; row += 1) {
            var offset = (Math.sqrt(3) * radius) / 2;
            x = 40 + offset * col * 2;
            y = 40 + offset * row * Math.sqrt(3);
  
            if (row % 2 !== 0) x += offset;
            
            var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            polygon.style.stroke = 'black';
            polygon.style.strokeWidth = '0.5px';
            polygon.setAttribute('points', hexPoints(x, y, radius));
            polygon.setAttribute('class','polygon');
            if(tilemap[i].type=="ocean"){
                polygon.style.fill = 'blue';
            }
            map.appendChild(polygon);
        }
    }
}



class tile {
    constructor(x,y,owner,type,gold,food,culture,production,faith){
        this.x = x;
        this.y = y;
        this.owner = owner;
        this.type = type;
        this.gold = gold;
        this.food = food;
        this.culture = culture;
        this.production = production;
        this.faith = faith;
    }
}

