const numbers = [7, 5, 9, 1, 4, -2, 2, -1];

function computeClosestToZero(ts) {
    let aux1, aux2;

    if(ts.length === 0) { 
      return 0 
    } else {
      aux1 = ts[0];
      
      for (let a = 0; a < ts.length; a++) {
        if(ts[a] < aux1) {
        	aux1 = ts[a];
        }
        //console.log(aux1)
      }
      
      return aux1;
    }
}

console.log(computeClosestToZero([]))
console.log(computeClosestToZero([7, 5, -3, 1, 4, 2, -1]))
console.log(computeClosestToZero([7, 5, 9, 1, 4, -2, 2, -1]))