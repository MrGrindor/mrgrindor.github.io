//new script for hexmap

function initialise() {
    /*var map = document.getElementById("map");
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
  
            map.appendChild(polygon);
        }
    }*/

    loadJSON(function(response) {
        // Do Something with the response e.g.
        //jsonresponse = JSON.parse(response);
        tiles = JSON.parse(response);
        updateMap(tiles);
    });
    console.log("called");
}

function hexPoints(x, y, radius) {
    var points = [];
    for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 3) {
      var pointX, pointY;

      pointX = x + radius * Math.sin(theta);
      pointY = y + radius * Math.cos(theta);

      points.push(pointX + ',' + pointY);
    }

    return points.join(' ');
  }