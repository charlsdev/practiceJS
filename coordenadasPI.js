function approx(pts) {
  let res;
  
  if (pts === null) return "Pts no puede ser nulo";
  
  pts.forEach(coord => {
    res = (coord[0] * coord[0]) + (coord[1] * coord[1]);
    console.log(res);
	});
}

var points = [];

for(var i = 0; i < 10; i++) {
    var x = Math.random();
    var y = Math.random();
    points.push([x, y]);
}

//console.log(points)

approx(points);